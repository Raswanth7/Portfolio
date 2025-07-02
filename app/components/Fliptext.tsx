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
  
  // Split at the first space
  const [first, ...rest] = children.split(" ");
  const second = rest.join(" ");
  
  return (
    <motion.a
      ref={ref}
      className="relative block overflow-hidden whitespace-normal md:whitespace-nowrap text-3xl sm:text-xl md:text-5xl lg:text-[5vw] text-center md:text-start font-benzin text-transparent"
      style={{
        lineHeight: 1.1,
      }}
    >
      <div>
        {[...first].map((char, i) => (
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
        {/* Mobile-only line break */}
        <span className="hidden md:inline">&nbsp;</span>
        <br className="block md:hidden" />
        {[...second].map((char, i) => (
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
              delay: STAGGER * (i + first.length),
            }}
            className="inline-block"
            key={i + first.length}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {[...first].map((char, i) => (
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
        <span className="hidden md:inline">&nbsp;</span>
        <br className="block md:hidden" />
        {[...second].map((char, i) => (
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
              delay: STAGGER * (i + first.length),
            }}
            className="inline-block text-blue-700 font-benzin"
            key={i + first.length}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}