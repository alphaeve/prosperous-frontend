"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Leaf, Cpu, ShieldCheck } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", desc: "Every design we produce is a technical commitment to a carbon-neutral future and sustainable ROI." },
  { icon: Cpu, title: "Innovation", desc: "We leverage industry-leading computation and data-driven insights to optimize every single watt." },
  { icon: ShieldCheck, title: "Precision", desc: "Engineering is about detail. We ensure 100% technical compliance and zero-error tolerances in all assets." },
];

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO — Standard Branded Hero */}
      <section className="pt-48 pb-24 px-6 bg-[#003d2b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#8dc63f]/20 border border-[#8dc63f]/30 px-4 py-1.5 rounded-full mb-8">
            <span className="text-[#8dc63f] font-black text-[10px] uppercase tracking-[0.4em]">Our Core DNA</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            Engineering With <br /> <span className="italic font-light text-[#8dc63f]">Purpose.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 mt-8 max-w-2xl text-lg font-medium leading-relaxed">
            Our culture is defined by technical rigor and a shared vision to modernize the global energy grid through intelligent, compliant design.
          </motion.p>
        </div>
      </section>

      {/* VALUES GRID — Centralized Bento Cards */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="group bg-white p-10 rounded-[3rem] border border-[#003d2b]/5 shadow-sm hover:shadow-xl hover:border-[#8dc63f]/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#003d2b] rounded-2xl flex items-center justify-center text-[#8dc63f] mb-8 group-hover:bg-[#8dc63f] group-hover:text-[#003d2b] transition-all">
                  <v.icon size={26} />
                </div>
                <h3 className="text-2xl font-black text-[#003d2b] mb-4 uppercase tracking-tight">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM INFO — Uniform Background */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 md:p-20 rounded-[3rem] bg-slate-50 border border-[#003d2b]/5 text-center relative overflow-hidden">
            <h2 className="text-3xl font-black text-[#003d2b] mb-6 uppercase tracking-tighter">The <span className="italic font-light text-[#8dc63f]">Human Element.</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-relaxed">
              Beyond calculations and CAD drawings, we are a community of solar design specialists dedicated to technical mentorship and engineering excellence in every project we touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}