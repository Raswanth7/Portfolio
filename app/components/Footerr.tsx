import React from 'react'
import { Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { Marquee } from '@/components/magicui/marquee'; 

export default function Footer() {
  return (
    <div 
      className="relative h-[400px] sm:h-[500px] md:h-[600px]"
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className="fixed bottom-0 w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <div className="bg-blue-700 h-full w-full flex flex-col justify-between items-center pt-2 sm:pt-4">
          
          {/* Main Content */}
          <div className='flex flex-col lg:flex-row w-full px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 gap-6 lg:gap-0'>
            
            {/* Left Section - Heading */}
            <div className='flex flex-col w-full lg:w-2/3 xl:w-3/4'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mont font-bold text-black leading-tight'>
                Let's Make It
              </h1>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mont font-bold text-black leading-tight'>
                Happen Together
              </h1>
            </div>
            
            {/* Right Section - CTA and Social */}
            <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:pt-8 lg:justify-end lg:w-1/3 xl:w-1/4'>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl text-black font-mont leading-relaxed'>
                Let's turn your ideas into smart, functional digital experiences.
              </p>
              
              {/* CTA Button */}
              <div className='bg-black w-fit rounded-full lg:rounded-4xl self-start lg:self-auto'>
                <h1 className='text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 py-2 sm:px-6 sm:py-3 md:p-4 whitespace-nowrap'>
                  START A CONVERSATION
                </h1>
              </div>
              
              {/* Social Links */}
              <div className='flex flex-row gap-4 sm:gap-6 md:gap-8 lg:px-4'>
                <Link 
                  href="https://www.instagram.com/rasz7_/" 
                  target="_blank"  
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  <Instagram size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </Link>
                <Link 
                  href="https://github.com/Raswanth7" 
                  target="_blank"  
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  <Github size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/raswanth-m-k-705639224/" 
                  target="_blank"  
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  <Linkedin size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Marquee Section */}
          <div className="w-full mt-auto">
            <Marquee repeat={5} className='border-t border-black'>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-benzin font-bold text-black px-2 sm:px-3">
                RASWANTH
              </h1>
            </Marquee>
          </div>
        </div>
      </div>
      
      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}