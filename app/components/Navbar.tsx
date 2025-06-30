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
        <div className='bg-green-400 w-2 h-2 rounded-full'/>
        <h1 className='text-sm font-mont text-center'>Open to work</h1>
        </div>
      </div>

      {/* Center: Menu Icon */}
      <div className='flex justify-center flex-none'>
        <Drawer>
          <DrawerTrigger>
            <HiMenuAlt2 className='w-8 h-8 cursor-pointer'/>
          </DrawerTrigger>
          <DrawerContent className='flex flex-col w-full justify-center items-center gap-4'>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin'>ABOUT US</h1>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin'>SELECTED WORKS</h1>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin'>SERVICES</h1>
            <h1 className='text-7xl text-white/50 hover:text-blue-700 font-benzin'>JOURNEY</h1>
            <DrawerFooter>
              <DrawerClose>
                <IoCloseOutline className='w-10 h-10 text-white/50 cursor-pointer hover:text-blue-700'/>
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