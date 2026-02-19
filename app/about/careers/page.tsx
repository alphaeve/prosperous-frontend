"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const jobs = [
  { title: "Senior PV Designer", type: "Full-Time", location: "Remote/India" },
  { title: "Grid Integration Specialist", type: "Full-Time", location: "Ahmedabad" },
  { title: "Structural Engineer (Solar)", type: "Contract", location: "Hybrid" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-[#0A192F] tracking-tight"
          >
            Power Your <span className="text-[#bbade0]">Career</span>
          </motion.h1>
          <p className="text-slate-500 mt-8 text-lg max-w-2xl mx-auto">Join a team of elite engineers building the backbone of the world's renewable energy infrastructure.</p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 flex justify-between items-end border-b border-slate-100 pb-6">
            <h2 className="text-2xl font-bold text-[#0A192F]">Open Positions</h2>
            <span className="text-slate-400 text-sm">{jobs.length} roles available</span>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="group flex justify-between items-center p-8 rounded-3xl border border-slate-100 hover:border-[#bbade0]/30 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <div>
                  <h4 className="text-xl font-bold text-[#0A192F]">{job.title}</h4>
                  <div className="flex gap-4 mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbade0]">{job.type}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{job.location}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#bbade0] group-hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[40px] bg-[#0A192F] text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
            <p className="text-blue-100/60 mb-8">We are always looking for exceptional solar engineers and consultants.</p>
            <button className="bg-[#bbade0] px-8 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-colors">
              Send Speculative CV
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}