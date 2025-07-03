'use client'
import { useRef } from 'react'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import FlipLink from './Fliptext';
const Hackathon = () => {
  return (
    <div className='py-8 px-8'>
        <div className='flex flex-col gap-1'>
            <FlipLink>JOURNEY</FlipLink>
        </div>
        <section className="py-8">
      <div className="mx-auto max-w-7xl">
        <Link
          heading="Spectrum 25"
          subheading="VIT Hackathon"
          imgSrc="assets/journey/portfolio1.JPG"
        />
        <Link
          heading="HackVerse 25"
          subheading="Texus25 Hackathon"
          imgSrc="assets/journey/portfolio2.jpg"
        />
        <Link
          heading="Texus 25"
          subheading="Website and Non Technical Team Head"
          imgSrc="assets/journey/portfolio3.jpg"
        />
        <Link
          heading="ETH INDIA 2024"
          subheading="Held at Bangalore"
          imgSrc="assets/journey/image.png"
        />
        <Link
          heading="UNFOLD 24"
          subheading="Held at Bangalore"
          imgSrc="assets/journey/portfolio4.png"
        />
      </div>
    </section>
    </div>
  )
}

export default Hackathon;

const Link = ({ heading, imgSrc, subheading }: { heading: string; imgSrc: string; subheading: string }) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const rect = ref.current!.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
  
      x.set(xPct);
      y.set(yPct);
    };
  
    return (
      <motion.a
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
          >
            {heading.split("").map((l: string, i: number) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block font-mont font-semibold"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block font-mont text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
            {subheading}
          </span>
        </div>
  
        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-24 w-36 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />
  
      </motion.a>
    );
  };