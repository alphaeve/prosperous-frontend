import React from "react";
import Navbar from "@/components/Navbar"; // Adjust path if needed

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Simple Professional Header */}
      <section className="pt-32 pb-20 px-6 bg-[#0A192F]">
        <div className="max-w-6xl mx-auto">
          <span className="text-[#bbade0] font-bold text-xs uppercase tracking-[0.3em]">
            Prosperous Solar
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">
            About Our Company
          </h1>
          <p className="text-blue-100/60 mt-6 max-w-2xl text-lg">
            Engineering the next generation of solar infrastructure with precision and purpose.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-slate-800">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Insert your specific content here for this page...
          </p>
        </div>
      </section>
    </main>
  );
}