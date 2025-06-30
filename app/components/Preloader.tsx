'use client';

import React, { useState, useEffect, useRef } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
  greetings?: string[];
  duration?: number;
}

const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  greetings = ['Hello', 'Hola', 'வணக்கம்', 'नमस्ते'],
  duration = 1000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showDots, setShowDots] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);

  // Disable/enable scrolling with body overflow and pointer events
  useEffect(() => {
    if (isVisible) {
      // Disable scrolling and interactions
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Enable scrolling and interactions
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVisible]);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setFadeOut(false);
        }, 400);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      // Show loading dots
      setShowDots(true);
      
      // Start slide up animation after showing dots
      const slideTimer = setTimeout(() => {
        setSlideUp(true);
        
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 800);
      }, 2000);

      return () => clearTimeout(slideTimer);
    }
  }, [currentIndex, greetings.length, duration, onComplete]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }

        .greeting-enter {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .greeting-exit {
          animation: fadeOutDown 0.8s ease-out forwards;
        }

        .dots-enter {
          animation: fadeIn 1s ease-out forwards;
        }

        .dot-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }

        .dot-pulse:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot-pulse:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      <div 
        ref={preloaderRef}
        className={`
          fixed inset-0 w-screen h-screen bg-[#070707]
          flex items-center justify-center z-50
          transform transition-transform duration-700 ease-out
          ${slideUp ? '-translate-y-full' : 'translate-y-0'}
        `}
        style={{
          touchAction: 'none', // Prevent touch scrolling on mobile
          userSelect: 'none',   // Prevent text selection
        }}
      >
        <div className="text-center relative">
          <div 
            className={`
              text-4xl md:text-6xl font-benzin text-blue-700
              opacity-0 transform translate-y-5
              min-h-20 md:min-h-24
              flex items-center justify-center
              tracking-wider
              drop-shadow-2xl
              ${fadeOut ? 'greeting-exit' : 'greeting-enter'}
            `}
            key={currentIndex}
          >
            {currentIndex < greetings.length ? greetings[currentIndex] : ''}
          </div>
          
          {/* {showDots && (
            <div className="flex justify-center gap-2 mt-10 opacity-0 dots-enter">
              <div className="w-3 h-3 bg-white/80 rounded-full dot-pulse"></div>
              <div className="w-3 h-3 bg-white/80 rounded-full dot-pulse"></div>
              <div className="w-3 h-3 bg-white/80 rounded-full dot-pulse"></div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Preloader;