"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* 1. HERO — Branded Deep Green & Clear Video/Grid Overlay */}
      <section className="pt-48 pb-24 px-6 bg-[#003d2b] relative overflow-hidden">
        {/* Architectural Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#8dc63f]/20 border border-[#8dc63f]/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="text-[#8dc63f] font-black text-[10px] uppercase tracking-[0.4em]">
              Solar Design Experts
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase"
          >
            Engineering the <br /> <span className="italic font-light text-[#8dc63f]">Future of Energy.</span>
          </motion.h1>

          {/* MAIN ABOUT CONTENT (From Brochure) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 mt-10 max-w-2xl text-lg md:text-xl leading-relaxed font-medium"
          >
            Prosperous Consultancy is a solar design and engineering firm providing 
            <span className="text-white font-bold"> optimized, reliable, and cost-effective </span> 
            solutions for rooftop, ground mounted, and utility scale solar projects.
          </motion.p>
        </div>

        {/* Decorative Wave at Bottom */}
        <div className="absolute bottom-0 left-0 w-full rotate-180 opacity-20">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 fill-[#8dc63f]">
             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
           </svg>
        </div>
      </section>

      {/* 2. SUPPORT & EXECUTION — Uniform Width & Clean Text */}
      <section className="py-24 px-6 relative">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#8dc63f]" />
                <span className="text-[#8dc63f] font-black text-[10px] uppercase tracking-[0.3em]">
                  Operational Support
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#003d2b] tracking-tighter uppercase leading-[0.9]">
                Precision Design. <br /> <span className="italic font-light text-[#8dc63f]">Smooth Execution.</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* CONTENT (From Brochure) */}
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                We support EPC companies and developers with accurate technical design, 
                documentation, and engineering support to ensure smooth execution and 
                high system performance.
              </p>
              <p className="text-slate-500 leading-relaxed text-base">
                Our approach combines industry-standard computation with real-world site 
                analysis, providing a comprehensive engineering foundation for 
                sustainable ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION — Minimal Grid Design (From Brochure) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission (Exact Brochure Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-slate-200"
            >
              <div className="w-14 h-14 bg-[#003d2b] rounded-2xl flex items-center justify-center mb-8">
                 <Target className="text-[#8dc63f]" size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#003d2b] mb-4 uppercase tracking-tight">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                To deliver accurate, optimized, and cost-effective solar engineering 
                solutions that improve project performance and profitability for our clients.
              </p>
            </motion.div>

            {/* Vision (Exact Brochure Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-slate-200"
            >
              <div className="w-14 h-14 bg-[#8dc63f] rounded-2xl flex items-center justify-center mb-8 text-[#003d2b]">
                 <Eye size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#003d2b] mb-4 uppercase tracking-tight">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                To become a trusted solar design partner in India and global markets 
                by providing high quality and performance driven engineering services.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA — Unified Brand Design */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#003d2b] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                Accelerate Your <span className="text-[#8dc63f]">Solar Growth.</span>
              </h3>
              <p className="text-white/50 max-w-lg mx-auto mb-10 text-base font-medium">
                Ready to optimize your next utility-scale or rooftop project? 
                Consult with our engineering team today.
              </p>
              <button className="bg-[#8dc63f] px-10 py-4 rounded-full font-black uppercase text-[11px] tracking-widest text-[#003d2b] hover:bg-white transition-all shadow-xl shadow-[#8dc63f]/20">
                Contact Our Engineers
              </button>
            </div>
            {/* Subtle Brand Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8dc63f]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8dc63f]/5 rounded-full blur-[100px] -ml-32 -mb-32" />
          </div>
        </div>
      </section>
    </main>
  );
}