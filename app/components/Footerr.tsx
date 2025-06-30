import React from 'react'
import { Marquee } from '@/components/magicui/marquee'
import { Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <div 
    className="relative h-[600px]"
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
  >
    <div className="fixed bottom-0 w-full h-[600px]">
      <div className="bg-blue-700 h-full w-full flex flex-col justify-between items-center pt-4">
        <div className='flex flex-row w-full px-8 pt-8'>
        <div className='flex flex-col w-full'>
          <h1 className='text-8xl font-mont font-bold text-black'>Let's Make It</h1>
           <h1 className='text-8xl font-mont font-bold text-black'>Happen Together</h1>
        </div>
        <div className='justify-end flex flex-col gap-8 pt-8'>
          <p className='font-mont text-xl text-black'>Let's turn your ideas into smart, functional digital experiences.</p>
          <div className='bg-black w-fit rounded-4xl'>
            <h1 className='text-[#ECECEC] font-mont font-semibold text-2xl p-4'>START A CONVERSATION</h1>
          </div>
          <div className='flex flex-row gap-8 px-4'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black transition">
            <Instagram size={32} strokeWidth={1.5} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black transition">
            <Github size={32} strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black transition">
            <Linkedin size={32} strokeWidth={1.5} />
          </a>
          </div>
        </div>
        </div>
          <Marquee repeat={5} className='border-t-1 border-black'>
          <h1 className="text-9xl font-benzin font-bold text-black stroke-white px-3">RASWANTH</h1>
          </Marquee>
      </div>
    </div>
  </div>
  )
}