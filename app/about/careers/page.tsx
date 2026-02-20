"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const jobs = [
  { title: "Senior PV Designer", type: "Full-Time", location: "Remote / India" },
  { title: "Grid Integration Specialist", type: "Full-Time", location: "Ahmedabad" },
  { title: "Structural Engineer (Solar)", type: "Contract", location: "Hybrid" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* HERO — Refined typography for a modern look */}
      <section className="pt-40 pb-20 px-6 bg-[#0A192F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.4em]"
          >
            Careers
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight tracking-tight"
          >
            Power Your Career
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/60 mt-6 max-w-xl text-base leading-relaxed"
          >
            Join a team of elite engineers shaping the backbone of the global
            renewable energy transition.
          </motion.p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full bg-[#bbade0]/5 blur-[120px]" />
      </section>

      {/* OPEN POSITIONS — Uniform width with normalized text */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
            <div>
              <span className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.3em]">
                Opportunities
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mt-2">
                Open Positions
              </h2>
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              {jobs.length} roles available
            </span>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#bbade0]/30 transition-all cursor-pointer"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0A192F] group-hover:text-[#bbade0] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbade0]">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#bbade0] group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Consistent and minimal */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-10 md:p-16 rounded-[40px] bg-[#0A192F] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Don’t see the right role?
              </h3>
              <p className="text-blue-100/50 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
                We’re always looking for exceptional solar engineers and designers.
                Send us your CV for future consideration.
              </p>
              <button className="bg-[#bbade0] px-8 py-3.5 rounded-full font-bold uppercase text-[10px] tracking-widest text-[#0A192F] hover:bg-white transition-all shadow-lg">
                Send Speculative CV
              </button>
            </div>
            
            <div className="absolute inset-0 bg-[#bbade0]/5 blur-[100px]" />
          </div>
        </div>
      </section>
    </main>
  );
}