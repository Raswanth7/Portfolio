'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import Hero from './components/Hero'
import Myimage from './components/Myimage'
import About from './components/About'
import ProjectsDisplay from './components/Projects'
import { Services } from './components/Services'
import Hackathon from './components/Hackathon'
import PreviewStickyFooter from './components/Footer'
import Footerr from './components/Footerr'
import Navbar from './components/Navbar'
import { FaArrowCircleUp } from "react-icons/fa";
import Preloader from './components/Preloader'
const page = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isDrawerScrolling, setIsDrawerScrolling] = useState(false);
  const blurTimeout = useRef<NodeJS.Timeout | null>(null);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  // Function to trigger blur when scrolling via drawer
  const triggerDrawerScroll = useCallback((sectionId: string) => {
    setIsDrawerScrolling(true);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (blurTimeout.current) clearTimeout(blurTimeout.current);
    blurTimeout.current = setTimeout(() => {
      setIsDrawerScrolling(false);
    }, 700); // Adjust duration to match scroll duration
  }, []);

  useEffect(() => {
    return () => {
      if (blurTimeout.current) clearTimeout(blurTimeout.current);
    };
  }, []);

  return (
    <>
    <Preloader 
         onComplete={handlePreloaderComplete}
         greetings={['வணக்கம்','Hello', 'Hola', 'नमस्ते', 'Bonjour', 'Ciao']}
         duration={1000}
      />
    <div className={`transition-opacity duration-700 ${showPreloader===false ? 'opacity-100' : 'opacity-0'} relative${isDrawerScrolling ? ' blur-scroll' : ''}`}>
      <Navbar triggerDrawerScroll={triggerDrawerScroll}/>
      <Hero/>
      <Myimage/>
      <div id="about">
        <About/>
      </div>
      <div id="projects">
        <ProjectsDisplay/>
      </div>
      <div id="services">
        <Services/>
      </div>
      {/* <Hero/>
      <Myimage/>
      <div id="about">
        <About/>
      </div>
      <div id="projects">
        <ProjectsDisplay/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="journey">
        <Hackathon/>
      </div>
      <Footerr/> */}
    </div>
    <div className={`fixed transition-opacity duration-700 ${showPreloader===false ? 'opacity-100' : 'opacity-0'} z-10 bottom-4 right-2`}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
        <FaArrowCircleUp className='w-10 h-10 opacity-75'/>
      </button>
    </div>
    </>
  )
}

export default page