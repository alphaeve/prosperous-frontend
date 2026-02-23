"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, Zap } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Chief Solar Engineer", specialized: "Utility-Scale PV Design" },
  { name: "Siddharth Rao", role: "Technical Director", specialized: "Grid Compliance" },
  { name: "Priya Sharma", role: "Sustainability Lead", specialized: "ESG & Impact Engineering" },
  { name: "Vikram Singh", role: "Operations Manager", specialized: "Asset Optimization" },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO — Deep Green Header */}
      <section className="pt-48 pb-24 px-6 bg-[#003d2b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#8dc63f]/20 border border-[#8dc63f]/30 px-4 py-1.5 rounded-full mb-8">
            <span className="text-[#8dc63f] font-black text-[10px] uppercase tracking-[0.4em]">Expertise</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            The Minds Behind <br /> <span className="italic font-light text-[#8dc63f]">The Power.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 mt-8 max-w-xl text-lg font-medium leading-relaxed">
            Our specialized engineers are dedicated to pushing the boundaries of solar efficiency and technical compliance.
          </motion.p>
        </div>
      </section>

      {/* TEAM GRID — Centralized & Clean */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="group flex flex-col">
                <div className="aspect-[4/5] bg-slate-50 rounded-[2.5rem] mb-6 overflow-hidden relative border border-[#003d2b]/5 shadow-sm transition-all group-hover:shadow-2xl group-hover:border-[#8dc63f]/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003d2b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-8">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#003d2b] hover:bg-[#8dc63f] transition-all cursor-pointer"><Linkedin size={18} /></div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#003d2b] hover:bg-[#8dc63f] transition-all cursor-pointer"><Mail size={18} /></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#003d2b] uppercase tracking-tighter">{member.name}</h3>
                <p className="text-[#8dc63f] text-[10px] font-black uppercase tracking-widest mt-1">{member.role}</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                   <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Specialization</span>
                   <p className="text-[#003d2b]/70 text-sm font-bold mt-1 uppercase tracking-tight">{member.specialized}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}