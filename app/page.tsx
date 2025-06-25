import React from 'react'
import Hero from './components/Hero'
import Myimage from './components/Myimage'
import About from './components/About'
import ProjectsDisplay from './components/Projects'
import { Services } from './components/Services'
import Hackathon from './components/Hackathon'
import PreviewStickyFooter from './components/Footer'
import Footerr from './components/Footerr'
const page = () => {
  return (
    <div>
      <Hero/>
      <Myimage/>
      <About/>
      <ProjectsDisplay/>
      <Services/>
      <Hackathon/>
      <Footerr/>
    </div>
  )
}

export default page