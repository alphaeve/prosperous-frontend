"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    company: "M/s. Aarjay Enterprise",
    text: "Highly satisfied with the solar setup. Efficient and reliable performance from day one. Amazing experience with the solar plant installation.",
    type: "Industrial"
  },
  {
    company: "M/s. Umasree Texplast Pvt. Ltd.",
    text: "Top-notch service and quality! Reduced energy costs significantly with this solar solution. The team exceeded my expectations.",
    type: "Commercial"
  },
  {
    company: "M/s. Shivtex Spinning Pvt. Ltd.",
    text: "Excellent team and great attention to detail. Quick and hassle-free installation. Extremely happy with the savings and green energy.",
    type: "Textile"
  },
  {
    company: "M/s. Creative Carbon Composites",
    text: "Highly recommend their solar services. Efficient, cost-saving, and eco-friendly solutions tailored for our specific needs.",
    type: "Manufacturing"
  },
  {
    company: "M/s. Lincoln Pharmaceuticals Ltd.",
    text: "Professional installation with premium-quality materials. Very satisfied with the results and the ROI tracking provided.",
    type: "Pharma"
  },
  {
    company: "M/s. Crystal Colourchem Pvt Ltd",
    text: "Exceptional service with a professional and transparent approach. Ensuring customers receive the best solar solutions.",
    type: "Chemical"
  }
];

export default function ReviewSection() {
  return (
    <section id="reviews" className="relative py-24 bg-white overflow-hidden flex flex-col items-center">
      
      {/* 1. ARCHITECTURAL GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 2. UNIFORM CENTRALIZED CONTAINER */}
      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#8dc63f]" /> 
            <p className="text-[10px] font-black text-[#8dc63f] uppercase tracking-[0.4em]">
              Technical Validation
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#003d2b] tracking-tighter uppercase mb-6 leading-[0.9]">
              CLIENT <span className="italic font-light text-[#8dc63f]">TESTIMONIALS.</span>
          </h2>
        </div>

        {/* 3. MESSAGE-STYLE UNIFORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex h-full"
            >
              <div className="group relative flex flex-col w-full">
                
                {/* THE MESSAGE BUBBLE */}
                <div className="flex-grow p-8 rounded-[2.5rem] rounded-bl-none border border-[#003d2b]/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:border-[#8dc63f]/30 group-hover:shadow-[0_20px_40px_rgba(141,198,63,0.1)] relative">
                  
                  {/* Category & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#8dc63f]" />
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.type}</span>
                    </div>
                    <div className="flex gap-0.5">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={10} className="fill-[#8dc63f] text-[#8dc63f]" />
                       ))}
                    </div>
                  </div>

                  {/* Icon Decoration */}
                  <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <MessageSquare size={40} />
                  </div>

                  {/* Quote Text */}
                  <p className="text-slate-600 text-base leading-relaxed font-medium italic relative z-10">
                    "{item.text}"
                  </p>
                </div>

                {/* THE COMPANY TAG (Attached to bubble) */}
                <div className="mt-4 flex items-center gap-3">
                  {/* Small Bubble Tail SVG */}
                  <div className="w-6 h-6 shrink-0 -mt-5">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white group-hover:drop-shadow-[0_4px_4px_rgba(141,198,63,0.1)] transition-all">
                      <path d="M24 0V24L0 0H24Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* Branded Label Pill */}
                  <div className="bg-[#003d2b] px-5 py-2.5 rounded-full shadow-lg transition-all duration-500 group-hover:bg-[#8dc63f] group-hover:-translate-y-1">
                    <h3 className="text-[10px] font-black text-white group-hover:text-[#003d2b] uppercase tracking-wider">
                      {item.company}
                    </h3>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. FOOTER SYMMETRY DETAIL */}
        <div className="mt-20 flex flex-col items-center gap-4 opacity-20">
             <div className="w-10 h-[1.5px] bg-[#003d2b]" />
             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Verified EPC Partners</p>
        </div>
      </div>
    </section>
  );
}