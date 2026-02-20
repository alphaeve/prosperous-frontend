"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Leaf, Cpu, ShieldCheck } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", desc: "Every design we produce is a commitment to a carbon-neutral future." },
  { icon: Cpu, title: "Innovation", desc: "We leverage AI and data-driven insights to optimize every watt of energy." },
  { icon: ShieldCheck, title: "Precision", desc: "Engineering is about detail. We ensure 100% technical compliance in all assets." },
];

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* HERO — Balanced & Centered to match other pages */}
      <section className="pt-40 pb-20 px-6 bg-[#0A192F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.4em]"
          >
            Our Core
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight tracking-tight"
          >
            Engineering With Purpose
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/60 mt-6 max-w-xl text-base leading-relaxed"
          >
            Our culture is defined by technical rigor and a shared vision to 
            modernize the global energy grid through intelligent design.
          </motion.p>
        </div>

        {/* Minimal Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full bg-[#bbade0]/5 blur-[120px]" />
      </section>

      {/* VALUES GRID — Refined Minimal Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md hover:border-[#bbade0]/30 transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#bbade0] mb-8 group-hover:bg-[#bbade0] group-hover:text-white transition-colors">
                  <v.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-4">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION — Maintaining Uniformity */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 md:p-16 rounded-[40px] bg-white border border-slate-100 text-center">
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">The Human Element</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Beyond calculations and CAD drawings, we are a community of problem solvers 
              dedicated to transparency, mentorship, and excellence in every project we deliver.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}