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
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-[#0A192F]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-[#bbade0] font-bold text-xs uppercase tracking-[0.4em]">Expertise</motion.span>
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="text-4xl md:text-6xl font-bold text-white mt-4">The Minds Behind the Power</motion.h1>
          <p className="text-blue-100/60 mt-6 max-w-2xl mx-auto text-lg font-light">Our team consists of specialized engineers dedicated to pushing the boundaries of solar efficiency and technical compliance.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <Linkedin size={18} className="text-white cursor-pointer hover:text-[#bbade0]" />
                    <Mail size={18} className="text-white cursor-pointer hover:text-[#bbade0]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">{member.name}</h3>
              <p className="text-[#bbade0] text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
              <p className="text-slate-500 text-sm mt-3 border-t border-slate-100 pt-3">{member.specialized}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}