"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* HERO — Balanced & Centered */}
      <section className="pt-40 pb-20 px-6 bg-[#0A192F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.4em]"
          >
            Prosperous Solar
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight tracking-tight"
          >
            Engineering the <br className="hidden md:block" /> Future of Energy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/60 mt-6 max-w-xl text-base leading-relaxed"
          >
            We provide elite-level solar infrastructure design and consulting, 
            bridging the gap between complex engineering and sustainable growth.
          </motion.p>
        </div>

        {/* Minimal Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full bg-[#bbade0]/5 blur-[120px]" />
      </section>

      {/* MISSION SECTION — Uniform Width & Clean Text */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#bbade0] font-bold text-[10px] uppercase tracking-[0.3em]">
                Our Mission
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mt-3">
                Precision in Every Watt
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-slate-600 leading-relaxed text-base">
                Founded on the principles of technical excellence and integrity, 
                Prosperous Solar specializes in high-scale PV design and grid 
                integration. We believe that the transition to renewables requires 
                more than just hardware—it requires rigorous engineering.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Our team of specialists works globally to ensure that every 
                project we touch is optimized for performance, safety, and 
                long-term viability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES — Minimal Grid Design */}
      <section className="py-20 bg-white border-y border-slate-100 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Technical Integrity", desc: "No shortcuts. We prioritize accuracy and safety in every design." },
              { title: "Global Vision", desc: "Scalable solutions designed to meet international energy standards." },
              { title: "Adaptive Innovation", desc: "Utilizing the latest AI and CAD tools to stay ahead of the curve." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-8 h-[2px] bg-[#bbade0] mb-6 group-hover:w-12 transition-all" />
                <h3 className="text-lg font-bold text-[#0A192F] mb-3">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA — Matches the Careers Page */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0A192F] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let's Engineer the Future Together
              </h3>
              <p className="text-blue-100/50 max-w-lg mx-auto mb-8 text-sm">
                Have a project in mind or looking to collaborate? Reach out 
                to our technical team today.
              </p>
              <button className="bg-[#bbade0] px-8 py-3.5 rounded-full font-bold uppercase text-[10px] tracking-widest text-[#0A192F] hover:bg-white transition-all">
                Contact Us
              </button>
            </div>
            <div className="absolute inset-0 bg-[#bbade0]/5 blur-[100px]" />
          </div>
        </div>
      </section>
    </main>
  );
}