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

      {/* HERO — matched with Culture page */}
      <section className="pt-40 pb-20 px-6 bg-[#0A192F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-[#bbade0] font-bold text-xs uppercase tracking-[0.4em]">
            Careers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Power Your <br /> Career
          </h1>
          <p className="text-blue-100/70 mt-6 max-w-xl">
            Join a team of elite engineers shaping the backbone of the global
            renewable energy transition.
          </p>
        </div>

        {/* Accent glow */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#bbade0]/10 blur-[120px]" />
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-[#bbade0] font-bold text-xs uppercase tracking-[0.4em]">
                Opportunities
              </span>
              <h2 className="text-3xl font-bold text-[#0A192F] mt-4">
                Open Positions
              </h2>
            </div>
            <span className="text-sm text-slate-400">
              {jobs.length} roles available
            </span>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#0A192F]">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 mt-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#bbade0]">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#bbade0] group-hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — same weight as Culture */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-16 rounded-[40px] bg-[#0A192F] text-center relative overflow-hidden">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don’t see the right role?
            </h3>
            <p className="text-blue-100/60 max-w-xl mx-auto mb-10">
              We’re always looking for exceptional solar engineers, designers,
              and consultants.
            </p>
            <button className="bg-[#bbade0] px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-colors">
              Send Speculative CV
            </button>

            {/* subtle glow */}
            <div className="absolute inset-0 bg-[#bbade0]/10 blur-[140px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
