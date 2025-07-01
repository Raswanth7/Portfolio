'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  const [showText, setShowText] = useState(false);

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
        <Drawer>
          <DrawerTrigger> 
            <Image src="/assets/R7.png" alt="menu" width={1920} height={1080} className='w-10 h-10 cursor-pointer'/>
          </DrawerTrigger>
          <DrawerContent className='flex flex-col w-full justify-center items-center gap-4'>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'>ABOUT US</h1>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'>SELECTED WORKS</h1>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'>SERVICES</h1>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin transition duration-300'>JOURNEY</h1>
            <DrawerFooter>
              <DrawerClose>
                <IoCloseOutline className='w-10 h-10 text-white/50 cursor-pointer hover:text-blue-700 transition duration-300'/>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Right: Resume */}
      <div className='flex justify-end flex-1'>
        <h1 className='font-mont text-center cursor-pointer'>Resume</h1>
      </div>
    </div>
  )
}

export default Navbar