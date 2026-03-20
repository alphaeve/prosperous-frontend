// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import { motion } from "framer-motion";
// import { ArrowLeft, CheckCircle2, Zap, ArrowRight } from "lucide-react";
// import Link from "next/link";

// const serviceData: Record<string, any> = {
//   "solar-layout-design": {
//     title: "Solar Layout & Design",
//     desc: "Optimized plant layouts and high-precision system engineering.",
//     details: "Our engineering team utilizes high-precision CAD and 3D modeling to create optimized site layouts. We focus on maximizing Ground Coverage Ratio (GCR) while minimizing inter-row shading to ensure every square meter delivers maximum energy.",
//     image: "https://images.unsplash.com/photo-1509391366360-fe5bb65858bb?q=80&w=1200"
//   },
//   "pvsyst-simulation": {
//     title: "PVsyst Simulation",
//     desc: "Advanced generation reports and energy yield analysis.",
//     details: "We provide industry-standard PVsyst simulation reports. By modeling hourly meteorological data and system losses, we provide an accurate P50/P90 generation forecast that lenders and investors rely on for project bankability.",
//     image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200"
//   },
//   "electrical-sld-design": {
//     title: "Electrical SLD Design",
//     desc: "Detailed Single Line Diagrams and optimized stringing.",
//     details: "Our electrical engineering package includes detailed SLDs from the module string level up to the grid injection point. We ensure optimal cable sizing to reduce losses and maintain strict adherence to safety standards.",
//     image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200"
//   },
//   "approval-drawings": {
//     title: "Approval Drawings",
//     desc: "Technical documentation for Net Metering and CEIG approvals.",
//     details: "Navigating regulatory approvals requires precision. We create submission-ready Net Metering and CEIG drawing sets that meet the specific requirements of government nodal agencies and utility providers.",
//     image: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1200"
//   },
//   "technical-documentation": {
//     title: "Technical Documentation",
//     desc: "Engineering support from planning to commissioning.",
//     details: "Beyond drawings, we provide the full technical backbone for your project. This includes design basis reports, equipment specifications, and manuals that ensure your EPC team executes with zero ambiguity.",
//     image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1200"
//   },
//   "boq-cost-optimization": {
//     title: "BOQ & Cost Optimization",
//     desc: "Optimized Bill of Quantities to reduce project expenditure.",
//     details: "Engineering is as much about economics as it is about physics. We refine your BOQ to eliminate waste and optimize material procurement without compromising the structural or electrical integrity of the plant.",
//     image: "https://images.unsplash.com/photo-1554224155-1191a88140b1?q=80&w=1200"
//   },
// };

// export default function ServiceDetailPage() {
//   const { slug } = useParams();
//   const data = serviceData[slug as string] || serviceData["solar-layout-design"];

//   return (
//     <main className="min-h-screen bg-white font-sans overflow-hidden">
//       <Navbar />

//       {/* --- MINIMAL HERO HEADER --- */}
//       <section className="pt-40 pb-16 bg-[#003d2b] relative overflow-hidden px-6">
//         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
//           style={{ backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
//         />
        
//         <div className="max-w-6xl mx-auto relative z-10">
//           <Link href="/#services" className="inline-flex items-center gap-2 text-[#8dc63f] text-[9px] font-black uppercase tracking-[0.3em] mb-10 hover:text-white transition-colors group">
//             <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
//           </Link>
//           <motion.h1 
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6"
//           >
//             {data.title}
//           </motion.h1>
//           <p className="text-white/60 text-base md:text-lg max-w-xl font-medium leading-relaxed">
//             {data.desc}
//           </p>
//         </div>
//       </section>

//       {/* --- MINIMAL CONTENT SECTION --- */}
//       <section className="py-20 px-6 relative">
//         <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
//              style={{ backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />

//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
//             {/* LEFT SIDE: COMPACT IMAGE */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.98 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="lg:col-span-5 lg:sticky lg:top-32"
//             >
//               <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
//                 <img src={data.image} alt={itemTitle} className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#003d2b]/40 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
//                    <div className="flex items-center gap-2">
//                       <Zap size={14} className="text-[#8dc63f] fill-[#8dc63f]" />
//                       <span className="text-white font-bold uppercase text-[8px] tracking-[0.2em]">Engineering Specification</span>
//                    </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT SIDE: MINIMAL TEXT CONTENT */}
//             <div className="lg:col-span-7">
//               <div className="flex items-center gap-2 mb-6">
//                 <div className="w-8 h-[1.5px] bg-[#8dc63f]" />
//                 <span className="text-[#8dc63f] font-black text-[9px] uppercase tracking-[0.3em]">Core Workflow</span>
//               </div>
              
//               <h2 className="text-2xl md:text-4xl font-black text-[#003d2b] uppercase tracking-tighter mb-8 leading-tight">
//                 Technical <span className="italic font-light text-[#8dc63f]">Methodology.</span>
//               </h2>

//               <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 font-medium">
//                 {data.details}
//               </p>
              
//               {/* Refined Small Features */}
//               <div className="grid grid-cols-2 gap-4 mb-16">
//                 {["IEC Standards", "3D Modeling", "Bankable Yield", "ROI Focused"].map((item, i) => (
//                   <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:border-[#8dc63f]/30">
//                     <CheckCircle2 size={16} className="text-[#8dc63f]" />
//                     <span className="text-[#003d2b] font-black uppercase text-[8px] tracking-widest">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* COMPACT ACTION CARD */}
//               <div className="bg-[#003d2b] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-lg group">
//                  <div className="relative z-10">
//                     <h3 className="text-xl md:text-2xl font-black uppercase mb-3">Initiate Design</h3>
//                     <p className="text-white/50 mb-8 text-sm font-medium">Consult with our lead engineers to optimize your site requirements.</p>
//                     <Link href="/#contact" className="inline-flex items-center gap-3 bg-[#8dc63f] text-[#003d2b] px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
//                        Technical Quote <ArrowRight size={14} />
//                     </Link>
//                  </div>
//                  {/* Subtle brand detail */}
//                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#8dc63f]/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-[#8dc63f]/10 transition-colors" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// // Utility for clean code
// const itemTitle = "Service Detail Image";

"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, Cog, ShieldCheck, Microscope, FileText } from "lucide-react";
import Link from "next/link";

const serviceData: Record<string, any> = {
  "solar-3d-pre-design": {
    title: "Solar 3D Pre-Design",
    desc: "The critical first phase in visualization, planning, and shading analysis.",
    details: "Solar Pre-Design, also known as Solar Preliminary Design, is the foundation of any successful project. We utilize advanced software like SketchUp and AutoCAD to develop high-fidelity 3D models. By integrating data from Google Maps and precise site measurements, we provide visual insights into shading, energy production, and financial returns before the first panel is ever installed.",
    image: "/service1.png"
  },
  "mw-scale-detailed-engineering": {
    title: "MW Scale Detailed Engineering",
    desc: "Comprehensive sets of drawings and documents for large-scale utility and industrial sites.",
    details: "This service provides the exhaustive technical blueprint necessary for installing power plants on commercial rooftops or massive industrial sites. We cover the entire spectrum of structural and electrical design, focusing on cost-optimization and maximum energy harvest. Our precise drawings ensure that installers can execute with 100% accuracy and efficiency.",
    image: "/service2.png"
  },
  "mw-scale-pmc": {
    title: "Project Management Consultancy",
    desc: "End-to-end specialized PMC services for Megawatt-scale solar assets.",
    details: "We offer specialized Project Management Consultancy (PMC) for complex MW-scale projects. Our expertise spans the entire project lifecycle. We act as your technical eyes on the ground, ensuring that execution aligns with the design intent from initial site mobilization through to final grid synchronization and commissioning.",
    image: "/service3.png"
  },
  "solar-civil-structural": {
    title: "Civil & Structural Engineering",
    desc: "Environmental challenge mitigation through robust structural design.",
    details: "Our engineering team specializes in civil and structural solutions tailored for solar infrastructure. We ensure that all mounting components and foundations are designed to withstand extreme wind loads and environmental challenges while optimizing material usage to protect your project’s budget and resources.",
    image: "/service4.png"
  },
  "site-survey-feasibility": {
    title: "Site Survey & Feasibility",
    desc: "In-depth land understanding to ensure long-term project success.",
    details: "We provide comprehensive Site Survey and Land Feasibility services across India. A solar project is only as good as the land it stands on. We ensure your project begins with a deep technical understanding of terrain, soil, and solar access, optimizing the design for the specific geographic reality of your site.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
  },
  "solar-permit-design": {
    title: "Solar Permit Design",
    desc: "Fast-turnaround, compliant permit plan sets for residential and commercial.",
    details: "We help our partners deliver on commitments through ultra-fast turnaround times and accurate permit plan sets. With a vast database of AHJ & utility requirements and a network of PE stamp partners, we handle everything from residential carports to large independent buildings with zero margin for error.",
    image: "/service6.png"
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const data = serviceData[slug as string] || serviceData["solar-3d-pre-design"];

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      <Navbar />

      {/* --- MINIMAL HERO HEADER --- */}
      <section className="pt-40 pb-16 bg-[#003d2b] relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#8dc63f 1px, transparent 1px), linear-gradient(90deg, #8dc63f 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/#services" className="inline-flex items-center gap-2 text-[#8dc63f] text-[9px] font-black uppercase tracking-[0.3em] mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6"
          >
            {data.title}
          </motion.h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {data.desc}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 px-6 relative">
        {/* Uniform Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#003d2b 1px, transparent 1px), linear-gradient(90deg, #003d2b 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT SIDE: COMPACT STICKY IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003d2b]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                   <div className="flex items-center gap-2">
                      <Zap size={14} className="text-[#8dc63f] fill-[#8dc63f]" />
                      <span className="text-white font-bold uppercase text-[8px] tracking-[0.2em]">Engineering Excellence</span>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: TECHNICAL DETAILS */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[1.5px] bg-[#8dc63f]" />
                <span className="text-[#8dc63f] font-black text-[9px] uppercase tracking-[0.3em]">Technical Overview</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black text-[#003d2b] uppercase tracking-tighter mb-8 leading-tight">
                Methodology & <span className="italic font-light text-[#8dc63f]">Process.</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 font-medium">
                {data.details}
              </p>
              
              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mb-16">
                {[
                  { label: "Technical Compliance", icon: ShieldCheck },
                  { label: "Workflow Optimized", icon: Cog },
                  { label: "Data-Driven Yield", icon: Microscope },
                  { label: "Verified Plan Sets", icon: FileText }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:border-[#8dc63f]/30">
                    <item.icon size={16} className="text-[#8dc63f]" />
                    <span className="text-[#003d2b] font-black uppercase text-[8px] tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* ACTION CARD */}
              <div className="bg-[#003d2b] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-lg group">
                 <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-black uppercase mb-3">Initiate Consultation</h3>
                    <p className="text-white/50 mb-8 text-sm font-medium">Consult with our lead engineers to optimize your specific site requirements.</p>
                    <Link href="/#contact" className="inline-flex items-center gap-3 bg-[#8dc63f] text-[#003d2b] px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                       Technical Quote <ArrowRight size={14} />
                    </Link>
                 </div>
                 <div className="absolute top-0 right-0 w-48 h-48 bg-[#8dc63f]/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-[#8dc63f]/10 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}