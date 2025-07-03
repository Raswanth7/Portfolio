import React from 'react'
import { WobbleCard } from '@/components/ui/wobble-card'
import FlipLink from './Fliptext'

export const Services = () => {
  return (
    <div className='px-8 py-10 pb-20'>
        <div className='pb-12'>
            <FlipLink>SERVICES</FlipLink>
        </div>
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto w-full">
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-20 bg-blue-700 min-h-[250px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs h-20 md:h-36 lg:h-36 xl:h-36">
        <h2 className="text-left font-mont text-3xl w-10 md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Mobile Development
        </h2>
      </div>
      {/* <img
        src="/assets/Mobileframe.png"
        width={200}
        height={200}
        alt="linear demo image"
        className="absolute -right-20 -bottom-50 md:-right-25 md:-bottom-55 grayscale filter object-contain rounded-2xl"
      /> */}
    </WobbleCard>
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-20 bg-blue-700 min-h-[250px] lg:min-h-[300px]"
      className=""
    >
     <div className="max-w-xs h-20 md:h-36 lg:h-36 xl:h-36">
        <h2 className="text-left font-mont text-3xl w-10 md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Web Development
        </h2>
    </div>
      {/* <img
        src="/assets/laptop.png"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -bottom-5 -right-30 md:-right-64 md:-bottom-7 grayscale filter object-contain rounded-2xl"
      /> */}
    </WobbleCard>
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-20 bg-blue-700 min-h-[250px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs h-20 md:h-36 lg:h-36 xl:h-36">
        <h2 className="text-left font-mont text-3xl w-10 md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
          Cloud Integrations
        </h2>
      </div>
      {/* <img
        src="/assets/cloudd.png"
        width={550}
        height={550}
        alt="linear demo image"
        className="absolute -bottom-5 -right-30 md:-right-64 md:-bottom-7 grayscale filter object-contain rounded-2xl"
      /> */}
    </WobbleCard>
  </div>
  {/* <div className="space-y-4 mt-10">
    <Marquee className="rounded-lg py-2">
      {[
        "react.png", "nextjs.png", "js.png", "Ts.png", "html.png", "css3.png", "tailwind.png", "node.png", "express.png"
      ].map((logo, idx) => (
        <Image
          key={logo}
          src={`/assets/logos/${logo}`}
          alt={logo.replace(/\..+$/, "").toUpperCase()}
          width={1920}
          height={1080}
          className="mx-6 w-40 h-40 grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition duration-300"
        />
      ))}
    </Marquee>
    <Marquee className="rounded-lg py-2">
      {[
        "supabase.png", "aws.png", "mongodb.png", "sql.png", "vercel1.png", "git.png", "Gitlogo.png", "figmaa.png", "putty.png"
      ].map((logo, idx) => (
        <Image
          key={logo}
          src={`/assets/logos/${logo}`}
          alt={logo.replace(/\..+$/, "").toUpperCase()}
          width={1920}
          height={1080}
          className="mx-6 w-40 h-40 grayscale hover:grayscale-0 transition duration-300"
        />
      ))}
    </Marquee>
  </div> */}
  </div>
  )
}
