"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Building2, Users, Heart, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "About Us", 
    href: "/about/company",
    isMega: true,
    dropdown: [
      { name: "About Company", sub: "ENGINEERING EXCELLENCE", href: "/about/company", icon: Building2 },
      { name: "Our Team", sub: "EXPERT CONSULTANTS", href: "/about/team", icon: Users },
      { name: "Our Culture", sub: "SUSTAINABILITY FIRST", href: "/about/culture", icon: Heart },
      { name: "Careers", sub: "JOIN THE MISSION", href: "/about/careers", icon: Briefcase },
    ]
  },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-6 z-[100] px-6 flex justify-center">
      <nav
        className={cn(
          "w-full max-w-6xl transition-all duration-500 rounded-full px-8 border",
          // Glass Effect Logic
          scrolled 
            ? "bg-slate-900/40 backdrop-blur-2xl border-white/20 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
            : "bg-white/10 backdrop-blur-lg border-white/10 py-5 shadow-none"
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#bbade0] p-1.5 rounded-lg shadow-lg shadow-orange-500/40">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white drop-shadow-md">
              Phosphorus
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-2"
                onMouseEnter={() => setHoverDropdown(link.name)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-1.5 drop-shadow-sm",
                    hoverDropdown === link.name ? "text-[#bbade0]" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={12} className={cn("transition-transform opacity-50", hoverDropdown === link.name && "rotate-180 opacity-100")} />
                  )}
                </Link>

                {/* Dropdown Glass Style */}
                <AnimatePresence>
                  {link.dropdown && hoverDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-slate-900/60 backdrop-blur-[40px] border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden z-50 p-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {link.dropdown.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                            >
                              <div className="p-2.5 bg-white/10 rounded-xl text-white/60 group-hover:text-[#bbade0] transition-colors">
                                <Icon size={18} strokeWidth={1.5} />
                              </div>
                              <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-[#bbade0] transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-[8px] font-medium text-white/40 tracking-widest mt-0.5 uppercase">
                                  {item.sub}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/#contact"
              className="bg-[#bbade0]/90 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#bbade0] transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 border border-white/10"
            >
              Consult Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Glass Style */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="p-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link href={link.href} className="text-sm font-bold text-white uppercase tracking-widest block py-2">{link.name}</Link>
                    {link.dropdown && (
                      <div className="grid grid-cols-1 gap-4 mt-3 pl-4 border-l border-white/20">
                        {link.dropdown.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="text-[10px] text-white/60 font-bold uppercase tracking-widest hover:text-[#bbade0]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/#contact" className="mt-4 text-center bg-[#bbade0] text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  Consult Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}




















// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, Zap, Building2, Users, Heart, Briefcase, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { 
//     name: "About Us", 
//     href: "#about", 
//     isMega: true,
//     dropdown: [
//       { name: "About Company", sub: "ENGINEERING EXCELLENCE", href: "/about/company", icon: Building2 },
//       { name: "Our Team", sub: "EXPERT CONSULTANTS", href: "/about/team", icon: Users },
//       { name: "Our Culture", sub: "SUSTAINABILITY FIRST", href: "/about/culture", icon: Heart },
//       { name: "Careers", sub: "JOIN THE MISSION", href: "/about/careers", icon: Briefcase },
//     ]
//   },
//   { name: "Services", href: "#services" },
//   { name: "Blog", href: "#blog" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // Floating Container to prevent "Too Broad" look
//     <div className="fixed w-full top-6 z-[100] px-6 flex justify-center">
//       <nav
//         className={cn(
//           "w-full max-w-6xl transition-all duration-500 rounded-full px-8",
//           "border border-white/10 backdrop-blur-md",
//           scrolled 
//             ? "bg-[#0A192F]/80 py-3 shadow-2xl shadow-black/20" 
//             : "bg-white/5 py-4"
//         )}
//       >
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <div className="bg-[#bbade0] p-1.5 rounded-lg shadow-lg shadow-orange-500/20">
//               <Zap size={18} className="text-white fill-current" />
//             </div>
//             <span className="text-lg font-bold tracking-tight text-white">
//               Phosphorus
//             </span>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <div 
//                 key={link.name} 
//                 className="relative py-2"
//                 onMouseEnter={() => setHoverDropdown(link.name)}
//                 onMouseLeave={() => setHoverDropdown(null)}
//               >
//                 <a
//                   href={link.href}
//                   className={cn(
//                     "text-[11px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-1.5",
//                     hoverDropdown === link.name ? "text-[#bbade0]" : "text-white/80 hover:text-white"
//                   )}
//                 >
//                   {link.name}
//                   {link.dropdown && <ChevronDown size={12} className={cn("transition-transform opacity-50", hoverDropdown === link.name && "rotate-180 opacity-100")} />}
//                 </a>

//                 {/* Mega Dropdown - Glass Style */}
//                 <AnimatePresence>
//                   {link.dropdown && hoverDropdown === link.name && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.98 }}
//                       className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-[#0A192F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden z-50 p-6"
//                     >
//                       <div className="grid grid-cols-2 gap-4">
//                         {link.dropdown.map((item) => {
//                           const Icon = item.icon;
//                           return (
//                             <Link
//                               key={item.name}
//                               href={item.href}
//                               className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all"
//                             >
//                               <div className="p-2.5 bg-white/5 rounded-xl text-white/40 group-hover:text-[#bbade0] group-hover:bg-[#bbade0]/10 transition-colors">
//                                 <Icon size={18} strokeWidth={1.5} />
//                               </div>
//                               <div>
//                                 <div className="text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-[#bbade0] transition-colors">
//                                   {item.name}
//                                 </div>
//                                 <div className="text-[8px] font-medium text-white/40 tracking-widest mt-0.5 uppercase">
//                                   {item.sub}
//                                 </div>
//                               </div>
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}

//             <Link
//               href="#contact"
//               className="bg-[#bbade0] text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
//             >
//               Consult Now
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu - Glass Style */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden mt-4 bg-black/20 backdrop-blur-lg rounded-2xl overflow-hidden"
//             >
//               <div className="p-6 flex flex-col gap-5">
//                 {navLinks.map((link) => (
//                   <div key={link.name}>
//                     <Link href={link.href} className="text-sm font-bold text-white uppercase tracking-widest">{link.name}</Link>
//                     {link.dropdown && (
//                       <div className="grid grid-cols-1 gap-3 mt-3 pl-4 border-l border-white/10">
//                         {link.dropdown.map((sub) => (
//                           <Link key={sub.name} href={sub.href} className="text-[10px] text-white/50 font-bold uppercase tracking-tighter">{sub.name}</Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </div>
//   );
// }