"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 🚫 Disable Lenis on touch devices (prevents lag)
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.7, // Fast & responsive
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      wheelMultiplier: 1.25, // Natural scroll distance
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
