"use client";
import React, { useRef, useEffect } from "react";
import { Zap, Ruler, FileText, Settings, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollBadge from "../ui/ScrollBadge"; 

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { id: "01", title: "Solar Design Engineering", desc: "Detailed PV layouts and shading analysis for maximum efficiency.", Icon: Zap },
  { id: "02", title: "Electrical & Structural", desc: "SLDs, StaadPro reports, and detailed GA drawings.", Icon: Ruler },
  { id: "03", title: "Feasibility & Pre-Sales", desc: "Comprehensive generation reports (PVsyst) and site analysis.", Icon: FileText },
  { id: "04", title: "Post-Sales Support", desc: "Precision as-built drawings and O&M documentation.", Icon: Settings },
  { id: "05", title: "Performance Analytics", desc: "Energy yield monitoring, loss analysis, and bankability reports.", Icon: FileText },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trayRef.current, {
        x: () => -(trayRef.current!.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.to(instructionRef.current, {
        opacity: 0,
        y: 40,
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
      {/* ARCHITECTURAL GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(#1F1F1F 1px, transparent 1px),
            linear-gradient(90deg, #1F1F1F 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        {/* SCROLL BADGE */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
          <ScrollBadge />
        </div>

        <div className="h-screen flex flex-col justify-center relative">
          {/* HEADER */}
          <div className="container mx-auto px-10 mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] text-[#E2957A] uppercase mb-4 block">
              Core Expertise
            </span>
            <h2 className="text-2xl md:text-5xl font-bold text-[#1F1F1F] tracking-tighter leading-[0.9]">
              Our <span className="italic font-light">Services.</span>
            </h2>
          </div>

          {/* SERVICES TRAY */}
          <div
            ref={trayRef}
            className="flex items-stretch gap-0 pl-10 md:pl-20"
            style={{ width: "max-content" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[450px] pr-20 group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between border-t border-slate-100 pt-8 mb-12">
                  <span className="text-5xl font-light text-slate-200 group-hover:text-[#E2957A] transition-colors duration-500">
                    {service.id}
                  </span>
                  <div className="text-slate-300 group-hover:text-[#1F1F1F] group-hover:rotate-12 transition-all duration-500">
                    <service.Icon size={32} strokeWidth={1} />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed font-medium max-w-[320px]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2957A] cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    View Project Specs
                  </span>
                  <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}

            <div className="w-[30vw]" />
          </div>

          {/* INSTRUCTION */}
          <div ref={instructionRef} className="absolute bottom-12 left-10 flex items-center gap-6">
            <div className="w-12 h-[1px] bg-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#E2957A] translate-x-[-100%] animate-shimmer" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400">
              Scroll to discover
            </span>
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
