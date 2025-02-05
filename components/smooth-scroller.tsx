"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";

interface SmoothScrollerProps {
  children: React.ReactNode;
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }
    frame.update(update, true);

    return () => {
      cancelFrame(update);
    };
  }, []);

  return (
    <ReactLenis
      options={{
        autoRaf: false,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
      ref={lenisRef}
      root
    >
      {children}
    </ReactLenis>
  );
}
