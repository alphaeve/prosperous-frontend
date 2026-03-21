"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, CheckCircle2 } from "lucide-react";

// Consultant-Specific Content Data
const BLOG_POST_DATA: Record<string, any> = {
  "optimizing-mw-scale-design": {
    category: "Design Engineering",
    title: "Optimizing MW-Scale Solar Design for Maximum ROI",
    readTime: "5 min read",
    author: "Arjun Mehta",
    date: "Feb 12, 2024",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb65858bb?q=80&w=1200",
    content: `
      <p>In the world of Megawatt-scale solar assets, the difference between a project that is simply "functional" and one that is "optimized" can result in millions of rupees in saved BOS costs.</p>
      <h4>Engineering Accuracy</h4>
      <p>By utilizing advanced 3D shading analysis, we identify inter-row losses that traditional 2D models miss. Our design consultancy focuses on reducing cable lengths and optimizing transformer placement to keep ohmic losses below 1.5%.</p>
      <p>Precision documentation ensures that EPC teams can execute without delays, making the transition from planning to commissioning seamless and cost-effective.</p>
    `
  },
  "regulatory-compliance-guide": {
    category: "Technical Compliance",
    title: "Navigating CEIG and Net Metering Regulations",
    readTime: "8 min read",
    author: "Siddharth Rao",
    date: "Feb 20, 2024",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1200",
    content: `
      <p>Ensuring that your solar asset is technically compliant with state nodal agencies and CEIG requirements is non-negotiable for project synchronization.</p>
      <h4>The Compliance Roadmap</h4>
      <p>Our consultancy provides verified single-line diagrams (SLDs) and earth-pit layouts that meet strict electrical safety standards. We manage the technical documentation required for Net Metering approvals, ensuring that developers face zero regulatory friction.</p>
    `
  }
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = BLOG_POST_DATA[slug as string] || BLOG_POST_DATA["optimizing-mw-scale-design"];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#8dc63f]/30">
      <Navbar />

      {/* --- HERO HEADER: Balanced for Laptop View --- */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-20 bg-[#003d2b] relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`, backgroundSize: '45px 45px' }} 
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-[#8dc63f] text-[9px] font-black uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#8dc63f] text-[#003d2b] text-[8px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest">{post.category}</span>
            <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
          </div>
          
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-10">
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-x-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8dc63f]"><User size={16} /></div>
                  <div className="flex flex-col"><span className="text-[8px] text-white/40 uppercase tracking-widest">Lead Analyst</span><span className="text-xs font-bold text-white uppercase">{post.author}</span></div>
              </div>
              <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8dc63f]"><Calendar size={16} /></div>
                  <div className="flex flex-col"><span className="text-[8px] text-white/40 uppercase tracking-widest">Date</span><span className="text-xs font-bold text-white uppercase">{post.date}</span></div>
              </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION: Minimal & Clean --- */}
      <section className="py-16 md:py-24 px-6 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-16 shadow-xl border border-slate-100">
            <img src={post.image} className="w-full h-full object-cover" alt="Technical Insight" />
          </motion.div>

          <article className="prose prose-slate max-w-none 
            prose-headings:text-[#003d2b] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
            prose-p:text-slate-600 prose-p:text-lg prose-p:leading-[1.8] prose-p:font-medium
            prose-strong:text-[#003d2b] prose-strong:font-black">
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Minimal Inline Newsletter */}
          <div className="mt-24 p-8 md:p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-black text-[#003d2b] uppercase tracking-tighter mb-2">Subscribe to Insights</h3>
                    <p className="text-slate-500 text-sm font-medium">Join solar engineers receiving our monthly technical reports.</p>
                </div>
                <form className="relative z-10 flex w-full md:w-auto gap-2 p-1 bg-white rounded-full border border-slate-200 shadow-sm focus-within:border-[#8dc63f]/50">
                    <input type="email" placeholder="Corporate Email" className="bg-transparent px-5 py-2 text-sm focus:outline-none w-full md:w-64 font-medium" />
                    <button className="bg-[#003d2b] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#8dc63f] hover:text-[#003d2b] transition-all">Join</button>
                </form>
          </div>
        </div>
      </section>
    </main>
  );
}
