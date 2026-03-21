"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, ArrowUp, Zap } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white pt-24 pb-10 border-t border-slate-100 flex flex-col items-center overflow-hidden">
      
      {/* 1. BRANDED ARCHITECTURAL GRID */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* TOP SECTION: BRAND & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-1 mb-8">
              <span className="text-xl md:text-2xl font-black text-[#003d2b] tracking-tighter uppercase leading-none">
                PROSPEROUS
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#8dc63f] leading-none uppercase">
                CONSULTANCY
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 max-w-xs">
              Empowering EPC partners with high-precision engineering and cost-optimized infrastructure solutions globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#003d2b]/5 border border-[#003d2b]/10 flex items-center justify-center text-[#003d2b] hover:bg-[#8dc63f] hover:text-[#001a12] hover:border-[#8dc63f] transition-all duration-300">
                <Linkedin size={18} strokeWidth={2} />
              </a>
              <a href="mailto:prosperousconsultancy1@gmail.com" className="w-10 h-10 rounded-full bg-[#003d2b]/5 border border-[#003d2b]/10 flex items-center justify-center text-[#003d2b] hover:bg-[#8dc63f] hover:text-[#001a12] hover:border-[#8dc63f] transition-all duration-300">
                <Mail size={18} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Directions */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8dc63f] mb-8">
              Platform
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about/company" },
                { name: "Our Services", href: "/#services" },
                { name: "Milestones", href: "/#achievements" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-[#003d2b] transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-[#8dc63f] opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Expertise */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8dc63f] mb-8">
              Expertise
            </h4>
            <ul className="space-y-4">
              {[
                "3D Pre-Design", 
                "Detailed Engineering", 
                "Project Management", 
                "Structural Design", 
                "Site Feasibility"
              ].map((link) => (
                <li key={link}>
                  <Link href="/#services" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-[#003d2b] transition-colors flex items-center gap-2 group">
                    <Zap size={10} className="text-[#8dc63f] opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8dc63f] mb-8">
              Reach Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#8dc63f] shrink-0" strokeWidth={2.5} />
                <span className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                  301, Western Arena, <br />Green City Road, Adajan, <br />Surat, India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#8dc63f] shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-[#003d2b] font-black">+91 90336 89323</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SCROLL */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
               © 2026 PROSPEROUS CONSULTANCY.
            </span>
            <div className="h-[1px] w-12 bg-slate-100 hidden md:block" />
            <a href="mailto:tryflysolution@gmail.com" className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter hover:text-[#003d2b] transition-colors">
              Development by tryflysolution@gmail.com
            </a>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black text-[#003d2b] uppercase tracking-[0.3em] transition-all"
          >
            Back to Top
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#003d2b] group-hover:border-[#003d2b] group-hover:text-[#8dc63f] transition-all duration-500 shadow-sm">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>

      </div>

      {/* SIGNATURE BRAND BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#003d2b] via-[#8dc63f] to-[#003d2b]/10" />
    </footer>
  );
}