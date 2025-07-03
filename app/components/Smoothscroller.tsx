"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

function SmoothScrolling({ children }: React.PropsWithChildren) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}

export default SmoothScrolling;