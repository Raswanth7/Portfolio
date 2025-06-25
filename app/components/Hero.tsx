import { div } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react'

const Hero = () => {

  const hero = [{
    name:'Cloud Engineer',
    icon:'/assets/3dcloud.png'
  },
  {
    name:'Full Stack Development',
    icon:'/assets/3dweb.png'
  },
  {
    name:'Chennai, India',
    icon:'/assets/location.png'
  }];
  return (
    <div className='flex justify-center items-center w-full h-full pt-56 pb-20'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-20'>
        <h1 className='text-9xl font-bold font-mont'>RASWANTH</h1>
        <div className='flex justify-between items-center w-full px-36'>
        {hero.map((her,index)=>{
          return(
            <div className='flex flex-col justify-center items-center' key={index}>
              <Image
               src={her.icon}
               alt='cloud'
               width={1920}
               height={1080}
               className='w-10 h-10'
               />
            <h1 className='text-xl font-mont font-light'>{her.name}</h1>
            </div>
          )
        })}
        </div>
        </div>
    </div>
  )
}

export default Hero