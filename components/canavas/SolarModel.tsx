// "use client";
// import React from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// export default function SolarModel() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Smooth the mouse input for high-end feel
//   const smoothX = useSpring(mouseX, { stiffness: 40, damping: 30 });
//   const smoothY = useSpring(mouseY, { stiffness: 40, damping: 30 });

//   // 1. Shared Rotation for the whole assembly
//   const rotateY = useTransform(smoothX, [-400, 400], [-15, 15]);
//   const rotateX = useTransform(smoothY, [-400, 400], [10, -10]);

//   // 2. Parallax Multipliers for each layer (The "Exploded" effect)
//   // Layer 3 (Top) moves most, Layer 1 (Bottom) moves least
//   const layer3X = useTransform(smoothX, [-400, 400], [-40, 40]);
//   const layer3Y = useTransform(smoothY, [-400, 400], [-30, 30]);

//   const layer2X = useTransform(smoothX, [-400, 400], [-20, 20]);
//   const layer2Y = useTransform(smoothY, [-400, 400], [-15, 15]);

//   const layer1X = useTransform(smoothX, [-400, 400], [-5, 5]);
//   const layer1Y = useTransform(smoothY, [-400, 400], [-5, 5]);

//   return (
//     <div
//       className="h-full w-full bg-white flex items-center justify-center overflow-hidden cursor-crosshair"
//       style={{ perspective: "2000px" }} // Deep perspective for engineering feel
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         mouseX.set(e.clientX - rect.left - rect.width / 2);
//         mouseY.set(e.clientY - rect.top - rect.height / 2);
//       }}
//       onMouseLeave={() => {
//         mouseX.set(0);
//         mouseY.set(0);
//       }}
//     >
//       {/* Container that rotates the whole assembly */}
//       <motion.div
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//         }}
//         className="relative w-[70%] h-[70%] flex items-center justify-center"
//       >
        
//         {/* Subtle Engineering Grid Backdrop */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//              style={{ backgroundImage: 'radial-gradient(#1F1F1F 1px, transparent 1px)', size: '20px 20px' }} />

//         {/* LAYER 1: The Foundation (Deepest) */}
//         <motion.img
//           src="/panel1.png"
//           alt="Structure Base"
//           className="absolute w-full object-contain filter grayscale"
//           style={{
//             x: layer1X,
//             y: layer1Y,
//             z: -100, // Pushed back in 3D space
//             opacity: 0.4,
//           }}
//         />

//         {/* LAYER 2: The Mechanical Racking (Middle) */}
//         {/* <motion.img
//           src="/panel2.png"
//           alt="Mechanical Layout"
//           className="absolute w-full object-contain"
//           style={{
//             x: layer2X,
//             y: layer2Y,
//             z: 0, // Center
//             opacity: 0.7,
//           }}
//         /> */}

//         {/* LAYER 3: The Finished Panels (Top / Closest) */}
//         {/* <motion.img
//           src="/panel3.jpg"
//           alt="Final Panel Assembl3"
//           className="absolute w-full object-contain"
//           style={{
//             x: layer3X,
//             y: layer3Y,
//             z: 150, // Pushed forward
//             filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
//           }}
//         /> */}

//         {/* Connecting "Technical" Lines - Visible only on interaction */}
//         <motion.div 
//           className="absolute inset-0 border border-[#E2957A]/10 rounded-full"
//           style={{
//             rotateX: 90,
//             z: 50,
//             scale: 1.2,
//             opacity: useTransform(smoothX, [-400, 400], [0.1, 0.4])
//           }}
//         />

//       </motion.div>

//       {/* Decorative Technical Specs in corner */}
//       <div className="absolute bottom-10 left-10 text-[9px] font-mono text-slate-300 uppercase tracking-[0.3em]">
//         Technical View: Exploded Assembly <br />
//         Z-Axis Depth: 250mm
//       </div>
//     </div>
//   );
// }