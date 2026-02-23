"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Zap } from "lucide-react";

const jobs = [
  { title: "Senior PV Designer", type: "Full-Time", location: "Remote / India" },
  { title: "Grid Integration Specialist", type: "Full-Time", location: "Surat / Ahmedabad" },
  { title: "Structural Engineer (Solar)", type: "Contract", location: "Hybrid" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO — Standard Theme */}
      <section className="pt-48 pb-24 px-6 bg-[#003d2b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#8dc63f]/20 border border-[#8dc63f]/30 px-4 py-1.5 rounded-full mb-8"><span className="text-[#8dc63f] font-black text-[10px] uppercase tracking-[0.4em]">Career Path</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase">Power Your <span className="italic font-light text-[#8dc63f]">Career.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 mt-8 max-w-xl text-lg font-medium">Join a team of elite solar engineers shaping the backbone of the renewable energy transition.</motion.p>
        </div>
      </section>

      {/* POSITIONS — Compact Uniform List */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-100 pb-10">
            <div className="flex items-center gap-3"><div className="w-10 h-[2px] bg-[#8dc63f]" /><h2 className="text-3xl md:text-5xl font-black text-[#003d2b] uppercase tracking-tighter">Open <span className="italic font-light text-[#8dc63f]">Positions.</span></h2></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{jobs.length} TECHNICAL ROLES AVAILABLE</span>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="group flex flex-col md:flex-row md:items-center justify-between bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#003d2b]/5 hover:border-[#8dc63f]/40 hover:shadow-xl transition-all cursor-pointer"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#003d2b] group-hover:text-[#8dc63f] transition-colors uppercase tracking-tight">{job.title}</h3>
                  <div className="flex gap-6 mt-4">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#8dc63f]"><Briefcase size={14} /> {job.type}</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><MapPin size={14} /> {job.location}</div>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-[#003d2b] group-hover:bg-[#8dc63f] group-hover:border-[#8dc63f] transition-all"><ArrowRight size={20} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Standard Stacking Style */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#003d2b] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Growth <span className="italic font-light text-[#8dc63f]">First.</span></h3>
            <p className="text-white/50 max-w-lg mx-auto mb-10 font-medium">Exceptional solar designers are always welcome. Send us your CV for future technical consultations.</p>
            <button className="bg-[#8dc63f] px-10 py-4 rounded-full font-black uppercase text-[11px] tracking-widest text-[#003d2b] hover:bg-white transition-all shadow-xl shadow-[#8dc63f]/20">Send Speculative CV</button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8dc63f]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          </div>
        </div>
      </section>
    </main>
  );
}