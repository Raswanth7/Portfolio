'use client'
import React, { useState } from 'react'
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

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };
  return (
    <>
    <Preloader 
         onComplete={handlePreloaderComplete}
         greetings={['வணக்கம்','Hello', 'Hola', 'नमस्ते', 'Bonjour', 'Ciao']}
         duration={1000}
      />
    <div className={`transition-opacity duration-700 ${showPreloader===false ? 'opacity-100' : 'opacity-0'} relative`}>
      <Navbar/>
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
      <div id="journey">
        <Hackathon/>
      </div>
      <Footerr/>
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