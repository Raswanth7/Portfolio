'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

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
    <div className='flex justify-center items-center w-full h-full pt-48 pb-20'>
      <div className='flex flex-col justify-center items-center w-full h-full gap-20'>
        <motion.h1
          className='text-9xl font-benzin cursor-default'
          variants={titleVariants}
          initial='hidden'
          animate='visible'
        >
          RASWANTH
        </motion.h1>
        <motion.div
          className='flex justify-between items-center w-full px-36'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {hero.map((her, index) => (
            <div
              className='flex flex-col justify-center items-center cursor-default'
              key={index}
            >
              <motion.div
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
              >
                <Image
                  src={her.icon}
                  alt={her.name}
                  width={1920}
                  height={1080}
                  className='w-10 h-10'
                />
              </motion.div>
              <h1 className='text-xl font-mont font-light hover:text-blue-700 transition duration-300'>{her.name}</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero