"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, Award, Star } from "lucide-react";

const achievements = [
  {
    id: "01",
    category: "Award",
    title: "Gujarat State Annual Solar Award",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop",
    description: "Awarded by EQ Magazine for outstanding contributions to Gujarat's renewable energy sector and engineering precision.",
  },
  {
    id: "02",
    category: "Recognition",
    title: "Global Clean-Tech Leadership",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
    description: "Recognized internationally for engineering excellence in utility-scale solar asset optimization and performance.",
  },
  {
    id: "03",
    category: "Milestone",
    title: "Technical Excellence Milestone",
    year: "2022",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop",
    description: "Successfully delivered over 500MW of bankable solar designs with 100% technical and regulatory compliance.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                CARD COMPONENT                              */
/* -------------------------------------------------------------------------- */

interface CardProps {
  item: typeof achievements[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  itemStackDistance: number;
}

const AchievementCard = ({ 
  item, 
  index, 
  progress, 
  range, 
  targetScale, 
  itemStackDistance 
}: CardProps) => {
  
  // Scale down and move up as user scrolls through the specific range
  const scale = useTransform(progress, range, [1, targetScale]);
  const yOffset = useTransform(progress, range, [0, -index * itemStackDistance]);

  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-[10vh]">
      <motion.div
        style={{ scale, y: yOffset }}
        className="relative w-full max-w-4xl bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,61,43,0.15)] min-h-[350px] flex flex-col md:flex-row"
      >
        <div className="relative w-full md:w-[40%] h-56 md:h-auto overflow-hidden">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          <div className="absolute top-4 left-4 bg-[#003d2b] text-white px-3 py-1 rounded-full z-20">
            <span className="text-[8px] font-black uppercase tracking-widest">{item.category}</span>
          </div>
        </div>

        <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4 text-[#003d2b]/40 text-[9px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Star size={12} className="text-[#8dc63f]" /> Year {item.year}</span>
            <span className="flex items-center gap-1.5"><Award size={12} className="text-[#8dc63f]" /> Excellence</span>
          </div>
          <h3 className="text-xl md:text-3xl font-black text-[#003d2b] mb-4 uppercase tracking-tighter leading-tight">{item.title}</h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 font-medium line-clamp-3">{item.description}</p>
          <div className="mt-auto flex items-center gap-3 text-[#003d2b] text-[10px] font-black uppercase tracking-[0.25em] hover:text-[#8dc63f] transition-all cursor-pointer">
            Case Details <ArrowRight size={16} className="text-[#8dc63f]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function Achievements() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // FIX 1: Increased height from 100vh per item to 120vh to provide "exit space"
    <section 
      ref={containerRef} 
      className="relative bg-white flex flex-col items-center z-20"
      style={{ height: `${achievements.length * 120}vh` }} 
    >
      
      {/* ARCHITECTURAL GRID */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{ backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`, backgroundSize: "45px 45px" }}
      />

      <div className="w-full max-w-6xl px-6 relative z-10 h-full">
        
        {/* HEADER */}
        <div className="pt-24 mb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#8dc63f]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#8dc63f] uppercase">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#003d2b] tracking-tighter leading-[0.9]">
            ENGINEERING <span className="italic font-light text-[#8dc63f]">MILESTONES.</span>
          </h2>
        </div>

        {/* CARDS LIST */}
        <div className="relative">
          {achievements.map((item, index) => {
            // FIX 2: Refined range calculation so the stack "finishes" before the section ends
            const start = index / achievements.length;
            const end = 1; 
            
            return (
              <AchievementCard 
                key={item.id}
                item={item}
                index={index}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={1 - ((achievements.length - index) * 0.05)}
                itemStackDistance={30}
              />
            );
          })}
        </div>
      </div>
      
      {/* FIX 3: Spacer at the very bottom of the sticky container to prevent section collision */}
      <div className="h-[20vh] w-full" />
    </section>
  );
}