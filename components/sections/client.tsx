"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- DUMMY LOGO DATA -------------------- */

const row1 = [
  { name: "Solarix", variant: "sun" },
  { name: "GreenVolt", variant: "bolt" },
  { name: "HelioTech", variant: "hex" },
  { name: "EcoGrid", variant: "grid" },
  { name: "SunPeak", variant: "triangle" },
  { name: "PowerLeaf", variant: "leaf" },
];

const row2 = [
  { name: "BrightRay", variant: "ray" },
  { name: "Voltura", variant: "circle" },
  { name: "RenewSys", variant: "ring" },
  { name: "FluxEnergy", variant: "wave" },
  { name: "GridOne", variant: "square" },
  { name: "NovaSolar", variant: "star" },
];

/* -------------------- COMPONENT -------------------- */

export default function ClientMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupMarquee = (el: HTMLDivElement, direction: number) => {
      const totalWidth = el.scrollWidth / 2;

      const anim = gsap.to(el, {
        x: direction * totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        onUpdate: (self) => {
          gsap.to(anim, {
            timeScale: 1 + Math.abs(self.getVelocity() / 600),
            duration: 0.4,
          });
          gsap.to(anim, { timeScale: 1, duration: 1.5, delay: 0.3 });
        },
      });
    };

    if (row1Ref.current) setupMarquee(row1Ref.current, -1);
    if (row2Ref.current) setupMarquee(row2Ref.current, 1);

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#bbade0]">
          Trusted Partners
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mt-4">
          Brands That Trust Us
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <div className="relative flex">
          <div ref={row1Ref} className="flex gap-6 whitespace-nowrap">
            {[...row1, ...row1].map((logo, i) => (
              <LogoCard key={i} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative flex">
          <div
            ref={row2Ref}
            className="flex gap-6 whitespace-nowrap"
            style={{ transform: "translateX(-50%)" }}
          >
            {[...row2, ...row2].map((logo, i) => (
              <LogoCard key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- LOGO CARD -------------------- */

function LogoCard({ logo }: { logo: { name: string; variant: string } }) {
  return (
    <div className="logo-card w-[220px] h-[100px] flex items-center justify-center bg-white border border-slate-100 rounded-xl px-6 transition-all duration-500 hover:shadow-lg hover:border-[#bbade0]/30">
      <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all">
        <LogoSVG variant={logo.variant} />
        <span className="text-sm font-semibold tracking-wide text-slate-500">
          {logo.name}
        </span>
      </div>
    </div>
  );
}

/* -------------------- SVG VARIANTS -------------------- */

function LogoSVG({ variant }: { variant: string }) {
  const common = "stroke-slate-400 fill-none";

  switch (variant) {
    case "sun":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <circle cx="18" cy="18" r="6" strokeWidth="2" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="18"
              y1="2"
              x2="18"
              y2="8"
              transform={`rotate(${i * 45} 18 18)`}
              strokeWidth="2"
            />
          ))}
        </svg>
      );

    case "bolt":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <polygon points="18,2 10,20 18,20 14,34 26,14 18,14" strokeWidth="2" />
        </svg>
      );

    case "hex":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" strokeWidth="2" />
        </svg>
      );

    case "grid":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          {[12, 18, 24].map((v) => (
            <line key={v} x1={v} y1="8" x2={v} y2="28" strokeWidth="2" />
          ))}
        </svg>
      );

    case "triangle":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <polygon points="18,4 32,30 4,30" strokeWidth="2" />
        </svg>
      );

    case "leaf":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <path d="M6 30C30 28 30 6 30 6S8 6 6 30Z" strokeWidth="2" />
        </svg>
      );

    case "ring":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <circle cx="18" cy="18" r="12" strokeWidth="2" />
        </svg>
      );

    case "wave":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <path d="M2 18c6-6 10 6 16 0s10 6 16 0" strokeWidth="2" />
        </svg>
      );

    case "square":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <rect x="6" y="6" width="24" height="24" strokeWidth="2" />
        </svg>
      );

    case "star":
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" className={common}>
          <polygon points="18,4 22,14 34,14 24,20 28,32 18,25 8,32 12,20 2,14 14,14" strokeWidth="2" />
        </svg>
      );

    default:
      return null;
  }
}
