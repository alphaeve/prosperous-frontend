"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Solar Engineering Mock Data ---
const BLOG_POSTS = [
  {
    id: 1,
    category: "Technical Optimization",
    title: "AI-Driven Yield Optimization in Utility-Scale Solar",
    excerpt: "Exploring how machine learning algorithms are revolutionizing real-time performance tracking and predictive maintenance for solar assets.",
    content: `
      <p>In the world of utility-scale solar, a 1% increase in yield can translate to millions in additional revenue over the lifecycle of a plant. Engineering is no longer just about hardware; it's about the data layer.</p>
      <h3>Predictive Maintenance</h3>
      <p>By leveraging SCADA data and AI, engineers can now predict inverter failures before they happen, reducing downtime by up to 30%. This shift from reactive to proactive maintenance is the new industry standard.</p>
      <p>At Prosperous, we integrate these algorithms into our bankable designs to ensure long-term asset health and investor confidence.</p>
    `,
    author: "Arjun Mehta",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Grid Compliance",
    title: "Navigating Technical Compliance for Grid Integration",
    excerpt: "A deep dive into the engineering requirements for integrating large-scale solar infrastructure into national power grids.",
    content: `
      <p>Grid stability is the greatest challenge facing the renewable transition. Solar engineers must design systems that not only produce power but provide grid services like frequency regulation and voltage support.</p>
      <p>Understanding local Grid Codes is essential for bankability. We explore the role of Power Plant Controllers (PPC) and battery storage in mitigating the intermittency of solar generation.</p>
    `,
    author: "Siddharth Rao",
    date: "Feb 05, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "Innovation",
    title: "The Rise of Bifacial Modules and Single-Axis Trackers",
    excerpt: "Why the combination of bifacial technology and tracking systems has become the baseline for ROI in modern solar design.",
    content: `
      <p>Single-axis trackers combined with bifacial modules are delivering up to 25% higher LCOE efficiency compared to fixed-tilt mono-facial systems. However, the engineering complexity increases significantly.</p>
      <p>From wind load analysis to soil stability, every technical detail matters when designing tracker-based systems for 25-year durability.</p>
    `,
    author: "Elena Rodriguez",
    date: "Feb 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-6">
        
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            /* --- BLOG LIST VIEW --- */
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Header */}
              <div className="mb-16">
                <span className="text-[11px] font-black tracking-[0.4em] text-[#FF8C00] uppercase">
                  Technical Journal
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mt-3 tracking-tight">
                  Solar <span className="text-[#FF8C00]">Insights</span> & Engineering
                </h2>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden p-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#0A192F]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#FF8C00]" /> {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} className="text-[#FF8C00]" /> {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#0A192F] mb-4 group-hover:text-[#FF8C00] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-2 text-[#0A192F] text-[11px] font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                        Read Analysis <ArrowRight size={16} className="text-[#FF8C00]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* --- BLOG DETAIL VIEW --- */
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-[#FF8C00] transition-colors mb-12 group"
              >
                <div className="p-2.5 rounded-full bg-white border border-slate-100 group-hover:border-[#FF8C00]/30 shadow-sm">
                  <ArrowLeft size={18} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Back to Archive</span>
              </button>

              {/* Blog Header */}
              <div className="text-center mb-12">
                <span className="bg-[#FF8C00]/10 text-[#FF8C00] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  {selectedBlog.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F] mt-8 mb-8 leading-[1.1] tracking-tight">
                  {selectedBlog.title}
                </h1>
                
                <div className="flex items-center justify-center gap-8 text-slate-400">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                        <img src={`https://images.unsplash.com/photo-1558444479-c84826027205?q=80&w=1000&auto=format&fit=crop`} alt="author" />
                    </div>
                    <div className="text-left">
                        <div className="text-[#0A192F] text-[13px] font-bold">{selectedBlog.author}</div>
                        <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Technical Lead</div>
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-slate-200" />
                  <div className="text-left">
                    <div className="text-[#0A192F] text-[13px] font-bold">{selectedBlog.date}</div>
                    <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Published</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-2xl border-8 border-white">
                <img
                  src={selectedBlog.image}
                  className="w-full h-full object-cover"
                  alt="hero"
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-slate prose-lg max-w-none">
                <div 
                  className="text-slate-600 leading-[1.8] space-y-6 text-lg font-light"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                />
              </article>

              {/* Footer CTA */}
              <div className="mt-20 p-12 bg-[#0A192F] rounded-[3rem] text-center text-white relative overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Stay ahead in Solar Engineering</h3>
                    <p className="text-blue-100/60 mb-8 max-w-md mx-auto text-sm leading-relaxed font-light">Join 5,000+ engineers receiving our monthly technical deep-dives into solar infrastructure and grid compliance.</p>
                    <button className="bg-[#FF8C00] text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-500/20">
                        Subscribe to Newsletter
                    </button>
                </div>
                {/* Glassy Background shape */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF8C00]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}