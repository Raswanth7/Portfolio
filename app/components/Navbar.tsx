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
    <div className='flex flex-row items-center w-full py-4 px-5'>
      {/* Left: Open to work */}
      <div className='flex flex-row items-center gap-2 py-1 rounded-2xl flex-1'>
        <div className='border-1 border-white/30 flex flex-row items-center px-3 py-1 gap-2 rounded-full'>
        <div className='bg-green-400 w-2 h-2 rounded-full animate-pulse'/>
        <h1 className='text-sm font-mont text-center'>Open to work</h1>
        </div>
      </div>

      {/* Center: Menu Icon */}
      <div className='flex justify-center flex-none items-center'>
        <CustomDrawer
          trigger={<Image src="/assets/R7.png" alt="menu" width={1920} height={1080} className='w-10 h-10 cursor-pointer' />} 
          direction="right"
          className='flex flex-col w-full justify-center items-center gap-4'
        >
          {(closeDrawer: () => void, open: boolean) => (
            <CustomDrawerContent open={open} direction="bottom" className='flex flex-col w-full justify-center items-center gap-4'>
              {open && (
                <>
                  <CustomDrawerHeader>
                    <CustomDrawerTitle>
                      <div className='w-36 rounded-4xl h-2 bg-white/20'/>
                    </CustomDrawerTitle>
                  </CustomDrawerHeader>
                  <button
                    className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('about'); }}
                  >
                    ABOUT US
                  </button>
                  <button
                    className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('projects'); }}
                  >
                    SELECTED WORKS
                  </button>
                  <button
                    className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('services'); }}
                  >
                    SERVICES
                  </button>
                  <button
                    className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'
                    onClick={() => { closeDrawer(); triggerDrawerScroll('journey'); }}
                  >
                    JOURNEY
                  </button>
                  <CustomDrawerFooter>
                    <button onClick={closeDrawer}>
                      <IoCloseOutline className='w-10 h-10 text-white/50 cursor-pointer hover:text-blue-700 transition duration-300'/>
                    </button>
                  </CustomDrawerFooter>
                </>
              )}
            </CustomDrawerContent>
          )}
        </CustomDrawer>
      </div>


      <div className='flex justify-end flex-1'>
        <Link href={'/docs/Resume.pdf'} target='_blank'>
        <h1 className='font-mont text-center cursor-pointer'>Resume</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar