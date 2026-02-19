"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Modern "Up-Right" arrow

export default function ScrollBadge() {
  const { scrollYProgress } = useScroll();

  // Create a smooth, weighted spring for the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // TEXT ROTATION: 0 to 360 degrees
  const textRotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  // ARROW ROTATION: Rotating slightly faster (0 to 720) for a "dynamic" engineering look
  // Or set to [0, 360] to keep them perfectly in sync
  const arrowRotation = useTransform(smoothProgress, [0, 1], [0, 360]);

  return (
    <div className="relative w-44 h-44 flex items-center justify-center pointer-events-none">
      
      {/* OUTER TEXT RING */}
      <motion.div
        style={{ rotate: textRotation }}
        className="absolute w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="badgePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="text-[8.5px] font-black tracking-[0.22em] fill-slate-900 uppercase">
            <textPath xlinkHref="#badgePath">
              PHOSPHORUS SOLAR • ENGINEERING • DESIGN •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* INNER ROTATING ARROW CIRCLE */}
      <motion.div 
        style={{ rotate: arrowRotation }}
        className="relative w-16 h-16 bg-[#e3896b] rounded-full flex items-center justify-center shadow-xl shadow-rose-200 border-4 border-white"
      >
        {/* The Arrow itself */}
        <ArrowUpRight size={28} className="text-white stroke-[3px]" />
      </motion.div>

      {/* Optional: Subtle pulse effect for the center */}
      <div className="absolute w-16 h-16 rounded-full bg-rose-500/20 animate-ping -z-10" />
    </div>
  );
}