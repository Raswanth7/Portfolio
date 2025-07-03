'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const hero = [
  {
    name: 'Cloud Engineer',
    icon: '/assets/3dcloud.png'
  },
  {
    name: 'Full Stack Development',
    icon: '/assets/3dweb.png'
  },
  {
    name: 'Chennai, India',
    icon: '/assets/location.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
      stiffness: 80,
      damping: 18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      stiffness: 120,
      damping: 14,
    },
  },
  hover: {
    scale: 1.18,
    rotate: 8,
    transition: { stiffness: 300, damping: 18 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 120, damping: 18, delay: 0.1 },
  },
};

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full h-full pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8'>
      <div className='flex flex-col justify-center items-center w-full h-full gap-8 sm:gap-12 md:gap-12 lg:gap-12'>
        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-benzin cursor-none text-center leading-tight'
          variants={titleVariants}
          initial='hidden'
          animate='visible'
        >
          RASWANTH
        </motion.h1>
        
        {/* All Screen Sizes: Horizontal Layout */}
        <motion.div
          className='flex justify-between items-start w-full px-2 sm:px-8 md:px-16 lg:px-24 xl:px-36'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {hero.map((her, index) => (
            <div
              className='flex flex-col justify-center items-center cursor-none flex-1 max-w-[120px] sm:max-w-none'
              key={index}
            >
              <motion.div
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                className='mb-1 sm:mb-2 md:mb-3'
              >
                <Image
                  src={her.icon}
                  alt={her.name}
                  width={1920}
                  height={1080}
                  className='w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12'
                />
              </motion.div>
              <h1 className='text-xs sm:text-base md:text-lg lg:text-xl font-mont font-light hover:text-blue-700 transition duration-300 text-center leading-tight px-1 sm:px-2'>
                {her.name}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero