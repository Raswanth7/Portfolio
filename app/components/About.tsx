import React, { useRef } from 'react'
import FlipLink from './Fliptext'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const h1Ref = useRef(null);
  const isInView = useInView(h1Ref, { amount: 0.7, once: true });
  return (
    <div className='w-full h-full flex flex-col justify-center py-8 px-8 gap-6'>
        <FlipLink>ABOUT ME</FlipLink>
        <div className='flex w-full justify-end'>
        <motion.h1
          ref={h1Ref}
          className='font-mont text-2xl w-2/3 text-end'
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          I design and build thoughtful, modern web experiences.
Clean code, elegant interfaces, and seamless functionality that’s my approach.
From intuitive frontends to cloud-powered backends, every detail matters.
I believe great digital products feel effortless and reliable.
Let’s craft something exceptional, together.
        </motion.h1>
        </div>
    </div>
  )
}

export default About