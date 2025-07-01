import React, { useRef } from 'react'
import FlipLink from './Fliptext'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const h1Ref = useRef(null);
  const isInView = useInView(h1Ref, { amount: 0.7, once: true });
  
  return (
    <div className='w-full h-full flex flex-col justify-center py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-8 lg:px-8 xl:px-8 gap-4 sm:gap-6 md:gap-8'>
        <FlipLink>ABOUT ME</FlipLink>
      <div className='flex w-full justify-center sm:justify-end'>
        <motion.h1
          ref={h1Ref}
          className='font-mont text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed 
                     w-full text-center sm:w-5/6 sm:text-end md:w-4/5 lg:w-3/4 xl:w-2/3 
                     max-w-none sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          I design and build thoughtful, modern web experiences.
          Clean code, elegant interfaces, and seamless functionality that's my approach.
          From intuitive frontends to cloud-powered backends, every detail matters.
          I believe great digital products feel effortless and reliable.
          Let's craft something exceptional, together.
        </motion.h1>
      </div>
    </div>
  )
}

export default About