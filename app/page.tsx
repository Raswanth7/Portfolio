'use client'
import React from 'react'
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
const page = () => {
  return (
    <>
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Myimage/>
      <About/>
      <ProjectsDisplay/>
      <Services/>
      <Hackathon/>
      <Footerr/>
    </div>
    <div className='fixed z-10 bottom-4 right-2'>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
        <FaArrowCircleUp className='w-10 h-10 opacity-75'/>
      </button>
    </div>
    </>
  )
}

export default page