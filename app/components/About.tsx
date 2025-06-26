import React from 'react'
import FlipLink from './Fliptext'

const About = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center py-8 px-6 gap-6'>
        <FlipLink>ABOUT ME</FlipLink>
        <div className='flex w-full justify-end'>
        <h1 className='font-mont text-2xl w-2/3 text-end'>I design and build thoughtful, modern web experiences.
Clean code, elegant interfaces, and seamless functionality that’s my approach.
From intuitive frontends to cloud-powered backends, every detail matters.
I believe great digital products feel effortless and reliable.
Let’s craft something exceptional, together.</h1>
        </div>
    </div>
  )
}

export default About