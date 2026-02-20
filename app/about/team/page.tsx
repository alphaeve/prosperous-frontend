"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Chief Solar Engineer", specialized: "Utility-Scale PV Design" },
  { name: "Siddharth Rao", role: "Technical Director", specialized: "Grid Compliance" },
  { name: "Priya Sharma", role: "Sustainability Lead", specialized: "ESG & Impact" },
  { name: "Vikram Singh", role: "Operations Manager", specialized: "Asset Optimization" },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* HERO — Standardized Centered Layout */}
      <section className="pt-40 pb-20 px-6 bg-[#0A192F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.4em]"
          >
            Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight tracking-tight"
          >
            The Minds Behind the Power
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/60 mt-6 max-w-xl text-base leading-relaxed"
          >
            Our team consists of specialized engineers dedicated to pushing the 
            boundaries of solar efficiency and technical compliance.
          </motion.p>
        </div>

        {/* Minimal Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full bg-[#bbade0]/5 blur-[120px]" />
      </section>

      {/* TEAM GRID — Clean & Uniform */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                {/* Image Placeholder with refined corners */}
                <div className="aspect-[4/5] bg-white rounded-3xl mb-5 overflow-hidden relative border border-slate-100 shadow-sm transition-all group-hover:shadow-md">
                  <div className="absolute inset-0 bg-slate-200/50 group-hover:bg-slate-200/30 transition-colors" />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#bbade0] transition-colors cursor-pointer">
                        <Linkedin size={16} />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#bbade0] transition-colors cursor-pointer">
                        <Mail size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text content normalized */}
                <h3 className="text-lg font-bold text-[#0A192F] tracking-tight">{member.name}</h3>
                <p className="text-[#bbade0] text-[10px] font-bold uppercase tracking-widest mt-1.5">{member.role}</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                   <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-tighter opacity-80">Specialization</p>
                   <p className="text-slate-600 text-sm font-medium mt-0.5">{member.specialized}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA — Balanced with the theme */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 md:p-16 rounded-[40px] bg-white border border-slate-100 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">Want to Join Us?</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed mb-8">
              We are always looking for passionate engineers and sustainability experts 
              to join our growing global team.
            </p>
            <button className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#0A192F] transition-colors">
              Explore Openings →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}