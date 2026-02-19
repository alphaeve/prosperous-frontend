"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Replace these placeholders with your actual logo paths from the public folder
const row1 = [
  { name: "Ofsol", src: "/logos/ofsol.png" },
  { name: "Kalpa Power", src: "/logos/kalpa.png" },
  { name: "Ksquare", src: "/logos/ksquare.png" },
  { name: "Rayzon Solar", src: "/logos/rayzon.png" },
  { name: "Mahindra Solarize", src: "/logos/mahindra.png" },
  { name: "Bhageria", src: "/logos/bhageria.png" },
];

const row2 = [
  { name: "Bondada", src: "/logos/bondada.png" },
  { name: "Prosumers", src: "/logos/prosumers.png" },
  { name: "Say Solar", src: "/logos/say.png" },
  { name: "Flame Solren", src: "/logos/flame.png" },
  { name: "Greenpill", src: "/logos/greenpill.png" },
  { name: "Enert", src: "/logos/enert.png" },
];

export default function ClientMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Infinite Loop Animation for Row 1 (Leftwards)
    const setupMarquee = (el: HTMLDivElement, direction: number) => {
      const items = el.querySelectorAll(".logo-card");
      const totalWidth = el.scrollWidth / 2;

      const animation = gsap.to(el, {
        x: direction * totalWidth,
        duration: 30, // Adjust speed here
        ease: "none",
        repeat: -1,
      });

      // 2. Scroll Interaction: Speed up on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        onUpdate: (self) => {
            // Speed factor based on scroll velocity
            const playhead = animation.timeScale();
            gsap.to(animation, {
              timeScale: 1 + Math.abs(self.getVelocity() / 500),
              duration: 0.5,
            });
            // Gradually return to normal speed
            gsap.to(animation, { timeScale: 1, duration: 2, delay: 0.5 });
        }
      });
    };

    if (row1Ref.current) setupMarquee(row1Ref.current, -1);
    if (row2Ref.current) setupMarquee(row2Ref.current, 1);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#bbade0]" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#bbade0]">
            Trusted Partner
          </span>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] tracking-tight">
          Our Valuable Clients
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 - Moving Left */}
        <div className="relative flex">
          <div ref={row1Ref} className="flex gap-6 whitespace-nowrap">
            {[...row1, ...row1].map((logo, idx) => (
              <LogoCard key={idx} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="relative flex">
          {/* We use ml-auto or negative start to differentiate the start position */}
          <div ref={row2Ref} className="flex gap-6 whitespace-nowrap" style={{ transform: 'translateX(-50%)' }}>
            {[...row2, ...row2].map((logo, idx) => (
              <LogoCard key={idx} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div className="logo-card group w-[220px] h-[100px] flex items-center justify-center bg-white border border-slate-100 rounded-xl px-8 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-[#bbade0]/30">
      <img
        src={logo.src}
        alt={logo.name}
        className="max-w-full max-h-[50px] object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}