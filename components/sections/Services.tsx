"use client";
import React, { useRef, useEffect } from "react";
import { 
  Zap, 
  Ruler, 
  FileText, 
  ArrowUpRight, 
  Layout, 
  ClipboardCheck, 
  Calculator, 
  Activity 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollBadge from "../ui/ScrollBadge"; 

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { 
    id: "01", 
    title: "Solar Plant Layout & Design", 
    desc: "Optimized plant layouts and high-precision system engineering for maximum space utilization.", 
    Icon: Layout 
  },
  { 
    id: "02", 
    title: "PVsyst Simulation & Analysis", 
    desc: "Advanced generation reports and energy yield analysis to ensure long-term project bankability.", 
    Icon: Activity 
  },
  { 
    id: "03", 
    title: "Electrical SLD & String Design", 
    desc: "Detailed Single Line Diagrams (SLD) and optimized stringing for technical compliance.", 
    Icon: Zap 
  },
  { 
    id: "04", 
    title: "Approval Drawings (Net/CEIG)", 
    desc: "Technical documentation and drawings specifically for regulatory and government approvals.", 
    Icon: FileText 
  },
  { 
    id: "05", 
    title: "Technical Documentation", 
    desc: "Comprehensive engineering support throughout the project lifecycle from planning to commissioning.", 
    Icon: ClipboardCheck 
  },
  { 
    id: "06", 
    title: "BOQ & Cost Optimization", 
    desc: "Optimized Bill of Quantities to reduce project expenditure while maintaining performance.", 
    Icon: Calculator 
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Math: Subtract the container width from the tray width to find scroll distance
      gsap.to(trayRef.current, {
        x: () => -(trayRef.current!.scrollWidth - containerRef.current!.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.to(instructionRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden select-none"
    >
      {/* 1. ARCHITECTURAL GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="h-screen flex flex-col justify-center relative z-10">
        
        {/* 2. CENTRALIZED CONTENT WRAPPER - Uniform max-w-6xl */}
        <div ref={containerRef} className="w-full max-w-6xl mx-auto px-6 flex flex-col">
          
          {/* SCROLL BADGE - Centered Before Title */}
          <div className="flex justify-center mb-6 md:mb-10 scale-75 md:scale-90 transition-transform">
            <ScrollBadge />
          </div>

          {/* HEADER - Centralized Alignment */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center justify-center gap-3 mb-4 mx-auto">
                <div className="w-8 h-[2px] bg-[#8dc63f]" />
                <span className="text-[10px] font-black tracking-[0.4em] text-[#8dc63f] uppercase">
                Engineering Expertise
                </span>
                <div className="w-8 h-[2px] bg-[#8dc63f]" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[#003d2b] tracking-tighter leading-[0.85] uppercase">
              OUR <span className="italic font-light text-[#8dc63f]">SERVICES.</span>
            </h2>
          </div>

          {/* 3. SERVICES TRAY - Limited to the max-w-6xl boundary */}
          <div className="w-full overflow-hidden relative">
            <div
                ref={trayRef}
                className="flex items-stretch gap-0"
                style={{ width: "max-content" }}
            >
                {services.map((service, index) => (
                <div
                    key={index}
                    className="w-[280px] md:w-[400px] pr-10 md:pr-16 group flex flex-col justify-between"
                >
                    {/* Visual Separator */}
                    <div className="flex items-start justify-between border-t border-[#003d2b]/10 pt-8 mb-8 transition-colors group-hover:border-[#8dc63f]/30">
                    <span className="text-4xl md:text-5xl font-black text-[#003d2b]/10 group-hover:text-[#8dc63f]/20 transition-colors duration-500 italic">
                        {service.id}
                    </span>
                    <div className="text-[#003d2b]/20 group-hover:text-[#8dc63f] group-hover:-translate-y-2 transition-all duration-500">
                        <service.Icon size={36} strokeWidth={1.5} />
                    </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-black text-[#003d2b] mb-4 tracking-tight uppercase leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {service.desc}
                    </p>
                    </div>

                    {/* Interaction Link */}
                    <div className="mt-8 md:mt-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8dc63f] cursor-pointer group/link">
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                        Technical Details
                    </span>
                    <ArrowUpRight size={14} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                </div>
                ))}
            </div>
          </div>

          {/* 4. INSTRUCTION - Unified Bottom Detail */}
          <div ref={instructionRef} className="mt-16 flex items-center justify-center gap-6">
                <div className="w-12 h-[1px] bg-slate-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#8dc63f] translate-x-[-100%] animate-shimmer" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400">
                Swipe left to view more
                </span>
                <div className="w-12 h-[1px] bg-slate-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#8dc63f] translate-x-[-100%] animate-shimmer" />
                </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}