"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Myimage = () => {

  const backgroundRef = useRef(null)
  const containerRef = useRef(null)
  
  useEffect(() => {

    gsap.fromTo(
      backgroundRef.current,
      {
        scale: 1.2, 
      },
      {
        scale: 1, 
        duration: 5,
        ease: "power2.out",
      }
    )
  }, [])
  

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.to(backgroundRef.current, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })

    })


    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden rounded-2xl px-4">
      <div ref={backgroundRef} className="absolute inset-0 z-0 origin-center my-2">
        <Image
          src="/assets/Mypic.jpeg"
          alt="Background"
          fill
          className="object-cover rounded-2xl px-1"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  )
}

export default Myimage