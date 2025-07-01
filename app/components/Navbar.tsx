'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import {
  CustomDrawer,
  CustomDrawerContent,
  CustomDrawerHeader,
  CustomDrawerFooter,
  CustomDrawerTitle,
} from './CustomDrawer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface NavbarProps {
  triggerDrawerScroll: (sectionId: string) => void;
}

const Navbar = ({ triggerDrawerScroll }: NavbarProps) => {
  const [showText, setShowText] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row items-center w-full py-2 sm:py-4 px-3 sm:px-5'>
      {/* Left: Open to work */}
      <div className='flex flex-row items-center gap-2 py-1 rounded-2xl flex-1 justify-start'>
        <div className='border-1 border-white/30 flex flex-row items-center px-2 sm:px-3 py-1 gap-1 sm:gap-2 rounded-full'>
          <div className='bg-green-400 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse'/>
          <h1 className='text-xs sm:text-sm font-mont text-center whitespace-nowrap'>Open to work</h1>
        </div>
      </div>

      {/* Center: Menu Icon - Absolute positioning for perfect centering */}
      <div className='absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
        <CustomDrawer
          trigger={
            <Image 
              src="/assets/R7.png" 
              alt="menu" 
              width={1920} 
              height={1080} 
              className='w-8 h-8 sm:w-10 sm:h-10 cursor-pointer' 
            />
          } 
          direction="right"
          className='flex flex-col w-full justify-center items-center gap-4'
        >
          {(closeDrawer: () => void, open: boolean) => (
            <CustomDrawerContent open={open} direction="bottom" className='flex flex-col w-full justify-center items-center gap-2 sm:gap-4'>
              {open && (
                <>
                  <CustomDrawerHeader>
                    <CustomDrawerTitle>
                      <div className='w-24 sm:w-36 rounded-4xl h-1.5 sm:h-2 bg-white/20'/>
                    </CustomDrawerTitle>
                  </CustomDrawerHeader>
                  <button
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300 text-center px-2'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('about'); }}
                  >
                    ABOUT US
                  </button>
                  <button
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300 text-center px-2'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('projects'); }}
                  >
                    SELECTED WORKS
                  </button>
                  <button
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300 text-center px-2'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('services'); }}
                  >
                    SERVICES
                  </button>
                  <button
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300 text-center px-2'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('journey'); }}
                  >
                    JOURNEY
                  </button>
                  <CustomDrawerFooter>
                    <button onClick={closeDrawer}>
                      <IoCloseOutline className='w-8 h-8 sm:w-10 sm:h-10 text-white/50 cursor-pointer hover:text-blue-700 transition duration-300'/>
                    </button>
                  </CustomDrawerFooter>
                </>
              )}
            </CustomDrawerContent>
          )}
        </CustomDrawer>
      </div>

      {/* Right: Resume */}
      <div className='flex justify-end flex-1'>
        <Link href={'/docs/Resume.pdf'} target='_blank'>
          <h1 className='text-xs sm:text-sm lg:text-base font-mont text-center cursor-pointer hover:text-blue-400 transition duration-300'>
            Resume
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar