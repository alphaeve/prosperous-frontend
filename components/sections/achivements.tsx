"use client";

import React from "react";

const achievements = [
  {
    title: "Gujarat State Annual Solar Award",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop",
    description: "Awarded by EQ Magazine for outstanding contributions to Gujarat's renewable energy sector.",
  },
  {
    title: "Global Clean-Tech Leadership",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
    description: "Recognized for engineering excellence in utility-scale solar asset optimization.",
  },
  {
    title: "Technical Excellence Milestone",
    year: "2022",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1000&auto=format&fit=crop",
    description: "Achieved 500MW of bankable solar designs with 100% technical compliance.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-black tracking-[0.4em] uppercase text-[#00A884]">
            Recognition
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Our Achievements
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-52 w-full bg-slate-100 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-[24px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {item.year}
                  </span>
                  <div className="h-[1px] w-8 bg-slate-200" />
                </div>

                <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 text-[10px] font-bold uppercase tracking-wider text-[#00A884] cursor-pointer group inline-flex items-center gap-1">
                  View Case Study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
