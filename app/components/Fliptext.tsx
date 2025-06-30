'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
}

export default function FlipLink({ children }: FlipLinkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 1, once:true });
  
  // Create an array of characters, preserving spaces
  const characters = [...children];
  
  return (
    <motion.a
      ref={ref}
      className="relative block overflow-hidden whitespace-nowrap text-[5vw] font-mont text-transparent"
      style={{
        lineHeight: 1.1,
      }}
    >
      <div>
        {characters.map((char, i) => (
          <motion.span
            variants={{
              hidden: {
                y: 0,
              },
              visible: {
                y: "-100%",
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {characters.map((char, i) => (
          <motion.span
            variants={{
              hidden: {
                y: "100%",
              },
              visible: {
                y: 0,
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-blue-700 font-benzin"
            key={i}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}