'use client'
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';
import Button from './MouseButton';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface Project {
  id: number;
  no: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  images: string[];
  link: string;
  technologies: string[];
}

export default function ProjectsDisplay() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      no: '01',
      title: 'Bartr.',
      subtitle: 'Do What You Love. Get What You Need',
      description: 'In todays gig economy...',
      logo: '/assets/projects/bartr/Bartr.png',
      images: ['/assets/projects/bartr/bartr-1.png', '/assets/projects/bartr/bartr-2.png', '/assets/projects/bartr/bartr-3.png', '/assets/projects/bartr/bartr-4.png'],
      link: 'https://example.com/bartr',
      technologies: ["Next.js", "Gemini AI", "Supabase", "Stripe"]
    },
    {
      id: 2,
      no: '02',
      title: 'StreamBase',
      subtitle: 'Level up your Live Stream',
      description: 'StreamBase is a decentralized...',
      logo: '/assets/projects/streambase/Streambaselogo.png',
      images: ['/assets/projects/streambase/streambase-1.png', '/assets/projects/streambase/streambase-2.png', '/assets/projects/streambase/streambase-3.png', '/assets/projects/streambase/streambase-4.png'],
      link: 'https://example.com/streambase',
      technologies: ["Blockchain", "Smart Contracts", "AI Chatbots", "Next.js"]
    },
    {
      id: 3,
      no: '03',
      title: 'Texus 25',
      subtitle: 'SRM RMP Technical Fest',
      description: 'Texus is the official website...',
      logo: '/assets/projects/Texus/Texus25.png',
      images: ['/assets/projects/Texus/Texus-1.png', '/assets/projects/Texus/Texus-2.png', '/assets/projects/Texus/Texus-3.png', '/assets/projects/Texus/Texus-4.png'],
      link: 'https://example.com/texus',
      technologies: ["Next.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      id: 4,
      no: '04',
      title: 'RC BOT',
      subtitle: 'Personalised Health Bot',
      description: 'This project develops an AI platform...',
      logo: '/assets/projects/rcbot/rcbott.png',
      images: ['/assets/projects/rcbot/rcbot-1.png', '/assets/projects/rcbot/rcbot-2.png'],
      link: 'https://example.com/rcbot',
      technologies: ["Gemini AI", "Next.js", "Tailwind CSS"]
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    // Only kill ScrollTriggers created by this component
    scrollTriggersRef.current.forEach(trigger => trigger.kill());
    scrollTriggersRef.current = [];
  
    const cards = document.querySelectorAll('.project-card');
    const hasAnimated = { current: false };
  
    const pinAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 500}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        fastScrollEnd: true,
        onEnter: () => {
          if (!hasAnimated.current) {
            animateProjectsTitleOnce();
            hasAnimated.current = true;
          } else {
            // If already animated, ensure it's red and full opacity
            gsap.set(projectsTitleRef.current, {
              color: '#CA2000',
              opacity: 1,
            });
          }
        }
      }
    });

    // Store the ScrollTrigger instance
    if (pinAnimation.scrollTrigger) {
      scrollTriggersRef.current.push(pinAnimation.scrollTrigger);
    }
  
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: '100vh',
        opacity: 0
      });
  
      pinAnimation.to(card, {
        y: `${index * 20}px`,
        opacity: 1,
        duration: 1.5,
        ease: "power1.out"
      }, index * 0.8 + 1.5);
    });
  
    const animateProjectsTitleOnce = () => {
      if (!projectsTitleRef.current) return;
  
      gsap.set(projectsTitleRef.current, {
        color: 'white',
        opacity: 0.15
      });
  
      gsap.to(projectsTitleRef.current, {
        color: '#db2205',
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      });
    };
  
    return () => {
      // Only clean up ScrollTriggers created by this component
      scrollTriggersRef.current.forEach(trigger => trigger.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen relative overflow-hidden z-0">
      {/* Background 'PROJECTS' text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none select-none py-8 px-6">
        <div className='w-full flex flex-col'>
          <h1 
            className="font-mont text-7xl font-bold tracking-tight leading-none text-white"
          >
            SELECTED WORKS
          </h1>
        </div>
        <div className='h-full justify-center items-center flex'>
          <Button/>
        </div>
      </div>

      {/* Card Container */}
      <div ref={cardsContainerRef} className="w-full h-full absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full max-w-5xl" style={{ height: '450px' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card absolute w-full rounded-3xl shadow-xl overflow-hidden border-1 border-black`}
              style={{
                height: '450px',
                top: '0px',
                left: '0px',
                zIndex: index + 1,
                opacity: 0,
                transform: 'translateY(100vh)',
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} background`}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                />
                {/* Enhanced dark overlay for better text readability */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
                <div className="absolute inset-0 w-full h-full bg-black/30"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex w-full justify-between items-center mb-4">
                  <div className='flex flex-row'>
                    <div className="px-4 flex items-center justify-center overflow-hidden">
                      <h1 className='text-5xl bg-clip-text text-transparent font-montserrat [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] bg-white font-bold text-shadow-lg'>{project.no}</h1>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-bold font-mont text-white text-shadow-lg">{project.title}</h2>
                      <p className="text-slate-100 font-mont text-opacity-95 text-sm text-shadow-md">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-full p-2 border border-white/20">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      className='w-10 h-10 rounded-full'
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-black/40 backdrop-blur-sm text-white px-3 font-mont py-1.5 rounded-full text-xs font-medium border border-white/20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Image Gallery Preview */}
                <div className="flex-1 flex items-end">
                  <div className="flex gap-3 w-full">
                    {project.images.slice(1, 4).map((img, i) => (
                      <div
                        key={i}
                        className="w-24 h-16 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm border border-white/20 flex-shrink-0"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} preview ${i + 2}`}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                    {project.images.length > 4 && (
                      <div className="w-24 h-16 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-white text-xs font-medium">+{project.images.length - 4}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 flex justify-end">
                  <button className="[background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] bg-white bg-clip-text font-mont font-semibold text-transparent px-6 py-2 rounded-full font-montserrat text-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-screen" />
    </div>
  );
}