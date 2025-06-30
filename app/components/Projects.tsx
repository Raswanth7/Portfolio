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
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none select-none py-8 px-8">
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
        <div className="relative w-full max-w-5xl" style={{ height: '450px' }}>
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="block">
              <div
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
                <div className="absolute inset-0 z-0 bg-blue-700">
                  {/* <Image
                    src={project.images[0]}
                    alt={`${project.title} background`}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                  /> */}
                  {/* Enhanced dark overlay for better text readability */}
                  <div className="absolute inset-0 w-full h-full "></div>
                  <div className="absolute inset-0 w-full h-full bg-black/5"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex w-full justify-between items-center mb-4">
                    <div className='flex flex-row'>
                      <div className="px-4 flex items-center justify-center overflow-hidden">
                        <h1 className='text-5xl font-benzin text-black'>{project.no}</h1>
                      </div>
                      <div className="ml-4">
                        <h2 className="text-2xl font-bold font-benzin text-black">{project.title}</h2>
                        <p className="text-black font-mont text-opacity-95 text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="backdrop-blur-sm rounded-full border border-black/20">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className='w-12 h-12 rounded-full'
                      />
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-black/70 backdrop-blur-sm text-white px-3 font-mont py-1.5 rounded-full text-xs font-medium border border-white/20">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bento Grid Image Gallery */}
                  <div className="bento-grid grid grid-cols-2 gap-2 h-72">
                    {project.images.slice(0, Math.min(3, project.images.length)).map((img, i) => {
                      let gridClass = "";
                      if (i === 0) gridClass = "col-span-1 row-span-2";
                      else gridClass = "col-span-1 row-span-1";

                      return (
                        <div
                          key={i}
                          className={`bento-item ${gridClass} rounded-lg overflow-hidden bg-gray-800 relative`}
                        >
                          <div className="w-full h-full border-1 border-black/10">
                            <Image
                              src={img}
                              alt={`${project.title} preview ${i + 1}`}
                              width={1920}
                              height={1080}
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
      <div className="h-screen" />
    </div>
  );
}