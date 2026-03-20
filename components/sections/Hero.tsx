"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const text = new SplitType(titleRef.current, { types: "chars,words", tagName: "span" });
    gsap.from(text.chars, { 
      y: 40, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.02, 
      ease: "power3.out", 
      delay: 0.5 
    });
    return () => text.revert();
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans z-0 bg-black">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-30">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/panelvideo2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. CINEMATIC OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-black/50 backdrop-blur-[1px]" />

      {/* 3. TECHNICAL GRID */}
      <div className="absolute inset-0 -z-10 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#8dc63f 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />

      {/* 4. CENTRALIZED UNIFORM CONTAINER */}
      {/* ADJUSTED: Reduced pt-44 to pt-32 and pb-20 to pb-10 to save vertical space */}
      <div className="w-full max-w-6xl px-6 relative z-10 text-center flex flex-col items-center pt-32 pb-10">
        
        <div className="flex flex-col items-center">
            
            {/* Branded Eyebrow - ADJUSTED: Reduced mb-14 to mb-8 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 whitespace-nowrap"
            >
              <Zap size={14} className="text-[#8dc63f] fill-[#8dc63f] shrink-0" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                  Solar Design & Engineering Experts
              </span>
            </motion.div>

            {/* Main Headline - ADJUSTED: Reduced mb-10 to mb-6 */}
            <h1 ref={titleRef} className="text-[2.5rem] leading-[1] sm:text-6xl md:text-8xl lg:text-[6rem] font-black text-white tracking-tighter mb-6 uppercase">
              PROSPEROUS<br />
              <span className="text-[#8dc63f] italic font-light">CONSULTANCY</span>
            </h1>

            {/* Description - ADJUSTED: Reduced mb-14 to mb-8 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium mb-8"
            >
              Empowering EPC partners with <span className="text-white font-bold">high-precision engineering</span> and cost-optimized infrastructure solutions globally.
            </motion.p>

            {/* Feature Tags - ADJUSTED: Reduced mb-14 to mb-10 */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-wrap justify-center gap-8 md:gap-14 text-white/40 mb-10"
            >
                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest uppercase">
                    <ShieldCheck size={16} className="text-[#8dc63f]" /> Precision
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest uppercase">
                    <BarChart3 size={16} className="text-[#8dc63f]" /> Performance
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest uppercase">
                    <Zap size={16} className="text-[#8dc63f]" /> Optimization
                </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center w-full sm:w-auto"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-[#8dc63f] text-[#001a12] px-10 py-4 md:py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white active:scale-95 shadow-xl shadow-[#8dc63f]/10"
              >
                  <span className="flex items-center justify-center gap-3">
                    Consult Engineers 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
              </button>
              {/* <button 
                onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 md:py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur-sm hover:bg-white hover:text-[#001a12] transition-all active:scale-95"
              >
                  Technical Portfolio
              </button> */}
            </motion.div>
        </div>
      </div>

      {/* 5. DECORATIVE BRAND WAVE */}
      <div className="absolute bottom-0 left-0 w-full rotate-180 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 fill-[#8dc63f]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}
















// "use client";
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react";
// import gsap from "gsap";
// import SplitType from "split-type";

// export default function Hero() {
//   const titleRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     if (!titleRef.current) return;
//     const text = new SplitType(titleRef.current, { types: "chars,words", tagName: "span" });
//     gsap.from(text.chars, { 
//       y: 50, 
//       opacity: 0, 
//       duration: 1, 
//       stagger: 0.03, 
//       ease: "power4.out", 
//       delay: 0.5 
//     });
//     return () => text.revert();
//   }, []);
  
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans z-0 bg-black">
      
//       {/* 1. BACKGROUND VIDEO */}
//       <div className="absolute inset-0 -z-30">
//         <video autoPlay muted loop playsInline className="w-full h-full object-cover">
//           <source src="/panelvideo2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* 2. CINEMATIC BRAND OVERLAY - Deep Forest Green Tint */}
//       {/* <div className="absolute inset-0 -z-20 bg-[#003d2b]/80 backdrop-blur-[2px]" /> */}
//       <div className="absolute inset-0 -z-10 bg-[#0A192F]/80 backdrop-blur-[2px]" />

//       {/* 3. TECHNICAL GRID */}
//       <div className="absolute inset-0 -z-10 opacity-20" 
//            style={{ backgroundImage: `radial-gradient(#8dc63f 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />

//       {/* 4. CENTRALIZED UNIFORM CONTAINER */}
//       <div className="w-full max-w-6xl px-4 md:px-6 relative z-10 text-center pt-20">
        
//         <div className="flex flex-col items-center">
            
//             {/* Optimized Branded Eyebrow (Pill) */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-[#8dc63f]/20 border border-[#8dc63f]/30 backdrop-blur-md mb-8 whitespace-nowrap"
//             >
//               <Zap size={14} className="text-[#8dc63f] fill-[#8dc63f] shrink-0" />
//               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[#8dc63f]">
//                   Solar Design & Engineering Experts
//               </span>
//             </motion.div>

//             {/* Main Headline - Responsive Scaling */}
//             <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter mb-8">
//               PROSPEROUS<br />
//               <span className="text-[#8dc63f] italic font-light">CONSULTANCY</span>
//             </h1>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium"
//             >
//               Empowering EPC companies with <span className="text-white font-bold underline decoration-[#8dc63f] underline-offset-4 decoration-2">high-precision engineering</span> and cost-optimized solar solutions.
//             </motion.p>

//             {/* Value Tags */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.5 }}
//                 className="flex flex-wrap justify-center gap-4 md:gap-10 mt-12 text-white/60"
//             >
//                 <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase">
//                     <ShieldCheck size={16} className="text-[#8dc63f] shrink-0" /> Precision
//                 </div>
//                 <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase">
//                     <BarChart3 size={16} className="text-[#8dc63f] shrink-0" /> Performance
//                 </div>
//                 <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase">
//                     <Zap size={16} className="text-[#8dc63f] shrink-0" /> Optimization
//                 </div>
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.8 }}
//               className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-14 justify-center w-full sm:w-auto"
//             >
//               <button className="group relative bg-[#8dc63f] text-[#003d2b] px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-xl shadow-[#8dc63f]/20">
//                   <span className="flex items-center justify-center gap-3">
//                     Consult Our Engineers 
//                     <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
//                   </span>
//               </button>
//               <button className="px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-[#003d2b] transition-all active:scale-95">
//                   Technical Portfolio
//               </button>
//             </motion.div>
//         </div>
//       </div>

//       {/* 5. DECORATIVE BRAND WAVE */}
//       <div className="absolute bottom-0 left-0 w-full rotate-180 opacity-20 pointer-events-none">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32 fill-[#8dc63f]">
//           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
//         </svg>
//       </div>
//     </section>
//   );
// }



