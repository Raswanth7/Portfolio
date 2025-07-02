'use client'
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';
import Button from './MouseButton';
import FlipLink from './Fliptext';
import { projects, Project } from './projectsData';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function ProjectsDisplay() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

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
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none select-none py-6 px-2 sm:py-8 sm:px-8">
        <div className='w-full flex flex-col'>
          <FlipLink>
            SELECTED WORKS
          </FlipLink>
        </div>
        <div className='h-full justify-center items-center flex'>
          <Button/>
        </div>
      </div>

      {/* Card Container */}
      <div ref={cardsContainerRef} className="w-full h-full absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full max-w-5xl mx-auto h-[350px] md:h-[450px]">
          {projects.map((project, index) => (
            <Link key={project.id} target='_blank' href={`/projects/${project.id}`} className="block">
              <div
                className={`project-card absolute w-full rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-black`}
                style={{
                  height: undefined,
                  minHeight: '320px',
                  maxHeight: '90vh',
                  top: '0px',
                  left: '0px',
                  zIndex: index + 1,
                  opacity: 0,
                  transform: 'translateY(100vh)',
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-blue-700">
                  {/* <Image
                    src={project.images[0]}
                    alt={`${project.title} background`}
                    fill
                    className="object-cover w-full h-full"
                  /> */}
                  {/* Enhanced dark overlay for better text readability */}
                  <div className="absolute inset-0 w-full h-full "></div>
                  <div className="absolute inset-0 w-full h-full bg-black/5"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-3 sm:p-6 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center mb-2 sm:mb-4 gap-2 sm:gap-0">
                    <div className='flex flex-row'>
                      <div className="px-2 sm:px-4 flex items-center justify-center overflow-hidden">
                        <h1 className='text-3xl sm:text-5xl font-benzin text-black'>{project.no}</h1>
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h2 className="text-lg sm:text-2xl font-bold font-benzin text-black">{project.title}</h2>
                        <p className="text-black font-mont text-opacity-95 text-xs sm:text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="backdrop-blur-sm rounded-full border-2 sm:border-4 border-blue-900 mt-2 sm:mt-0">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={96}
                        height={96}
                        className='w-8 h-8 sm:w-12 sm:h-12 rounded-full'
                      />
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 font-mont py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border border-white/20">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-black/40 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bento Grid Image Gallery */}
                  <div className="bento-grid grid grid-cols-2 gap-1 sm:gap-2 h-40 sm:h-72">
                    {project.images.slice(0, Math.min(3, project.images.length)).map((img, i) => {
                      let gridClass = "";
                      if (i === 0) gridClass = "col-span-1 row-span-2";
                      else gridClass = "col-span-1 row-span-1";

                      return (
                        <div
                          key={i}
                          className={`bento-item ${gridClass} rounded-md sm:rounded-lg overflow-hidden bg-gray-800 relative`}
                        >
                          <div className="w-full h-full border border-black/10">
                            <Image
                              src={img}
                              alt={`${project.title} preview ${i + 1}`}
                              width={600}
                              height={400}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-32 sm:h-screen" />
    </div>
  );
}