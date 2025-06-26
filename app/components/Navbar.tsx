'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row justify-between items-center w-full py-4 px-5'>
        <div className=''>
            <HiMenuAlt2 className='w-8 h-8 cursor-pointer' />
        </div>
        <div className='cursor-pointer'>
          <AnimatePresence mode="wait" initial={false}>
            {showText ? (
              <motion.h1
                key="resume"
                className="font-mont text-center"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                Resume
              </motion.h1>
            ) : (
              <motion.div
                key="icon"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="flex items-center justify-center"
              >
                <HiDownload className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </div>
  )
}

export default Navbar