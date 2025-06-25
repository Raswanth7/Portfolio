import React from 'react'
import { WobbleCard } from '@/components/ui/wobble-card'
import { div } from 'framer-motion/client'

export const Services = () => {
  return (
    <div className='px-6 py-10 pb-20'>
        <div className='pb-12'>
            <h1 className='text-7xl font-mont font-bold'>SERVICES</h1>
        </div>
    <div className="flex flex-row gap-4 max-w-7xl mx-auto w-full">
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs h-36">
        <h2 className="text-left font-mont text-balance w-10 md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Mobile Development
        </h2>
      </div>
      <img
        src="/assets/Mobileframe.png"
        width={200}
        height={200}
        alt="linear demo image"
        className="absolute -right-20 -bottom-50 grayscale filter object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
     <div className="max-w-xs h-36">
        <h2 className="text-left font-mont text-balance w-10 md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Web Development
        </h2>
    </div>
      <img
        src="/assets/Macbook.png"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -right-62 -bottom-7 grayscale filter object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs h-36">
        <h2 className="text-left font-mont text-balance w-10 md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Cloud Integrations
        </h2>
      </div>
      <img
        src="/assets/Mobileframe.png"
        width={200}
        height={200}
        alt="linear demo image"
        className="absolute -right-20 -bottom-50 grayscale filter object-contain rounded-2xl"
      />
    </WobbleCard>
  </div>
  </div>
  )
}
