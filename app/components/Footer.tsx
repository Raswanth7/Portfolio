'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// import { Instagram } from 'lucide-react'
// import { Linkedin } from 'lucide-react'
// import { GithubIcon } from 'lucide-react'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  

    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const timeString = now.toTimeString().split(' ')[0] + ' ' + 
                           now.toTimeString().split(' ')[1] || 'GMT-5';
        setCurrentTime(timeString);
      };
      
      updateTime();
      const timer = setInterval(updateTime, 1000);
      
      return () => clearInterval(timer);
    }, []);
  return (
    <div 
    className="relative h-[550px]"
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
  >
    <div className="fixed bottom-0 w-full h-[550px]">
      <div className="bg-blue-900 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] h-full w-full flex flex-col gap-20 sm:gap-16 md:gap-16 lg:gap-20 items-center pt-20">
        <div className='flex flex-col gap-0 sm:gap-4 md:gap-6 lg:gap-8'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mont font-semibold text-black text-center '>Let&apos;s Create</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mont font-semibold text-black text-center'>Great Things Together</h1>
        </div>
        {/* <div className='border-1 border-white rounded-full p-4'>
            <h1 className='montserrat-font text-xl text-white'>diksha2k3@gmail.com</h1>
        </div> */}
        <div className="flex flex-row sm:flex-row w-full items-center justify-between p-8 gap-4 sm:gap-0">
          <div className="flex items-center">
            <div className="text-2xl">
              <Image
                src={'/assets/flower.png'}
                alt='flower'
                width={1920}
                height={1080}
                className='w-8 h-8 hover:animate-pulse'
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-16">
            <div className="flex items-center justify-center">
              <span className="text-sm text-white font-semibold montserrat-font text-center">CHENNAI</span>
            </div>
            <div className="text-sm text-white font-semibold montserrat-font text-center">{currentTime}</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-16">
            <Link target='_blank' href="https://www.linkedin.com/in/diksha-m-39552326b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-sm text-white font-semibold montserrat-font hover:underline">LINKEDIN</Link>
            <Link target='_blank' href="https://github.com/diksha2708" className="text-sm text-white font-semibold montserrat-font hover:underline">GITHUB</Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}