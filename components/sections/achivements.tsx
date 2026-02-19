"use client";

import React from "react";

const achievements = [
  {
    title: "Gujarat State Annual Solar Award",
    year: "2024",
    image: "/awards/award1.jpg",
    description:
      "Awarded by EQ Magazine for outstanding contributions to Gujarat's renewable energy sector.",
  },
  {
    title: "Global Clean-Tech Leadership",
    year: "2023",
    image: "/awards/award2.jpg",
    description:
      "Recognized for engineering excellence in utility-scale solar asset optimization.",
  },
  {
    title: "Technical Excellence Milestone",
    year: "2022",
    image: "/awards/award3.jpg",
    description:
      "Achieved 500MW of bankable solar designs with 100% technical compliance.",
  },
];

export default function Achievements() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[11px] font-black tracking-[0.4em] uppercase text-[#00A884]">
            Recognition
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Our Achievements
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-52 w-full bg-slate-100 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-[22px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {item.year}
                  </span>
                  <div className="h-[1px] w-8 bg-slate-200" />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>

                <div className="mt-6 text-[10px] font-bold uppercase tracking-wider text-[#00A884] cursor-pointer">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
