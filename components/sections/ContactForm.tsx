"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 bg-[#FCFCFC] overflow-hidden">
      {/* 1. ARCHITECTURAL GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#1F1F1F 1px, transparent 1px), linear-gradient(90deg, #1F1F1F 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-sm mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E2957A] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1F1F1F]">Contact Us</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold text-[#1F1F1F] tracking-tighter leading-none mb-8">
              GET IN <span className="text-[#E2957A]">TOUCH!</span>
            </h2>

            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12">
              Let’s start a conversation. Tell us a bit about yourself and 
              send your inquiry to us. We’ll get back to you within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="space-y-8">
              {[
                { 
                  icon: MapPin, 
                  label: "Visit Us", 
                  content: "C1B/158, BHATPORE GIDC, NH 53, Surat, India",
                  sub: "Headquarters" 
                },
                { 
                  icon: Phone, 
                  label: "Call Us", 
                  content: "+91 79904 54355", 
                  sub: "Mon - Sat, 9am - 6pm" 
                },
                { 
                  icon: Mail, 
                  label: "Email Us", 
                  content: "info@solstr.in", 
                  sub: "Online Support 24/7" 
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#E2957A] group-hover:border-[#E2957A]/30 transition-all duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 block">
                      {item.label}
                    </span>
                    <h4 className="text-[17px] font-bold text-[#1F1F1F] mb-1">{item.content}</h4>
                    <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM CARD */}
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-[#E2957A]/5 rounded-[3rem] blur-2xl -z-10" />
            
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-100">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h3 className="text-2xl font-bold text-[#1F1F1F] mb-8">Send Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                          <input required type="text" placeholder="Enter your name" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#E2957A]/30 focus:ring-4 focus:ring-[#E2957A]/5 outline-none transition-all text-sm font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                          <input required type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#E2957A]/30 focus:ring-4 focus:ring-[#E2957A]/5 outline-none transition-all text-sm font-medium" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                        <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#E2957A]/30 outline-none transition-all text-sm font-medium appearance-none">
                          <option>Purpose of inquiry...</option>
                          <option>Solar Design Engineering</option>
                          <option>Feasibility Study</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Inquiry</label>
                        <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-[#E2957A]/30 outline-none transition-all text-sm font-medium resize-none" />
                      </div>

                      <button 
                        disabled={loading}
                        className="w-full bg-[#1F1F1F] hover:bg-[#E2957A] text-white py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-slate-200 flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {loading ? "Processing..." : <>Send Message <Send size={16} /></>}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">Message Sent!</h3>
                    <p className="text-slate-500 font-medium">We'll get back to you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#bbade0] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}