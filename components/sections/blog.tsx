"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const BLOG_POSTS = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of AI in Modern Creative Agencies",
    excerpt: "Discover how artificial intelligence is reshaping the landscape of design and strategy in 2024.",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept; it is a present-day tool that is revolutionizing how we approach creativity. In this deep dive, we explore the intersection of human intuition and machine precision.</p>
      <p>By leveraging generative models, agencies are now able to prototype ideas at speeds previously thought impossible. This doesn't replace the designer; it empowers them to focus on high-level strategy and emotional resonance.</p>
      <h3>The Paradigm Shift</h3>
      <p>The transition from manual labor to AI-assisted workflows allows for hyper-personalization in marketing campaigns. Imagine a world where every ad is uniquely tailored to the viewer's current mood and context.</p>
    `,
    author: "Sarah Jenkins",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "Culture",
    title: "Why Minimalist Design is Harder Than You Think",
    excerpt: "Stripping away the noise requires a deep understanding of core functionality and user psychology.",
    content: `
      <p>Minimalism is not the absence of design; it is the perfect amount of design. Every element on a page must serve a purpose, or it must be removed.</p>
      <p>When you have fewer elements, the ones that remain become significantly more important. The margin for error vanishes. A single pixel of misalignment can ruin the entire balance of a minimalist composition.</p>
    `,
    author: "Marcus Aurel",
    date: "Nov 05, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "Business",
    title: "Scaling Your Startup: Lessons from Phosphorus",
    excerpt: "Growth is a double-edged sword. Learn how to scale your operations without losing your soul.",
    content: `
      <p>Scaling a business requires more than just capital; it requires a culture that can withstand pressure. As Phosphorus grew, we learned that the most important investment wasn't in software, but in people.</p>
      <p>In this article, we outline the five pillars of sustainable growth that helped us become an industry leader.</p>
    `,
    author: "Elena Rodriguez",
    date: "Dec 01, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-slate-50/50 min-h-screen">
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
                <span className="text-[12px] font-black tracking-[0.3em] text-[#E2957A] uppercase">
                  Our Journal
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mt-3">
                  Latest <span className="text-[#E2957A]">Insights</span>
                </h2>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F1F1F]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4 text-slate-400 text-[11px] font-bold uppercase tracking-tight">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} /> {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} /> {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 group-hover:text-[#E2957A] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-2 text-[#E2957A] text-[12px] font-black uppercase tracking-widest">
                        Read Story <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
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
                className="flex items-center gap-2 text-slate-400 hover:text-[#E2957A] transition-colors mb-12 group"
              >
                <div className="p-2 rounded-full bg-white border border-slate-100 group-hover:border-[#E2957A]/30 shadow-sm">
                  <ArrowLeft size={20} />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-widest">Back to Articles</span>
              </button>

              {/* Blog Header */}
              <div className="text-center mb-12">
                <span className="bg-[#E2957A]/10 text-[#E2957A] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {selectedBlog.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F1F1F] mt-6 mb-8 leading-tight">
                  {selectedBlog.title}
                </h1>
                
                <div className="flex items-center justify-center gap-8 text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                        <img src={`https://ui-avatars.com/api/?name=${selectedBlog.author}&background=E2957A&color=fff`} alt="author" />
                    </div>
                    <div className="text-left">
                        <div className="text-[#1F1F1F] text-[13px] font-bold">{selectedBlog.author}</div>
                        <div className="text-[10px] font-medium uppercase tracking-tighter">Author</div>
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-slate-200" />
                  <div className="text-left">
                    <div className="text-[#1F1F1F] text-[13px] font-bold">{selectedBlog.date}</div>
                    <div className="text-[10px] font-medium uppercase tracking-tighter">Published</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-slate-200">
                <img
                  src={selectedBlog.image}
                  className="w-full h-full object-cover"
                  alt="hero"
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-slate prose-lg max-w-none">
                <div 
                  className="text-slate-600 leading-[1.8] space-y-6"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                />
              </article>

              {/* Footer CTA */}
              <div className="mt-20 p-12 bg-[#1F1F1F] rounded-[2.5rem] text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Enjoyed this perspective?</h3>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">Subscribe to our newsletter to receive the latest updates in technology and design.</p>
                    <button className="bg-[#E2957A] text-white px-8 py-4 rounded-full text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                        Subscribe to Journal
                    </button>
                </div>
                {/* Abstract shape background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2957A]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}