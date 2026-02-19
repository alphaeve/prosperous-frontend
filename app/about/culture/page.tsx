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
      
      <section className="pt-40 pb-20 px-6 bg-[#0A192F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-[#bbade0] font-bold text-xs uppercase tracking-[0.4em]">Our Core</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">Engineering <br/>With Purpose</h1>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#bbade0]/10 blur-[120px]" />
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#bbade0]/10 rounded-2xl flex items-center justify-center text-[#bbade0] mb-8">
                  <v.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F] mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}