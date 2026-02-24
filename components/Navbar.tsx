"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LayoutGrid, Users, Leaf, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "About Us", 
    href: "/about/company",
    dropdown: [
      { name: "About Company", sub: "SOLAR EXPERTISE", href: "/about/company", icon: LayoutGrid },
      { name: "Our Team", sub: "EXPERT ENGINEERS", href: "/about/team", icon: Users },
      { name: "Our Vision", sub: "SUSTAINABLE FUTURE", href: "/about/culture", icon: Leaf },
      { name: "Careers", sub: "JOIN OUR MISSION", href: "/about/careers", icon: Briefcase },
    ]
  },
  { name: "Services", href: "/#services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    setCurrentHash(window.location.hash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (link.href.includes("#")) {
      const hash = link.href.split("#")[1];
      return currentHash === `#${hash}`;
    }
    if (link.name === "About Us") {
      return pathname.startsWith("/about");
    }
    return pathname === link.href;
  };

  const primaryBtnClass = "bg-[#8dc63f] text-[#001a12] hover:bg-white transition-all duration-300 shadow-lg active:scale-95";

  return (
    <div className="fixed w-full top-4 md:top-6 z-[100] px-3 md:px-6 flex justify-center font-sans">
      <nav
        className={cn(
          "w-full max-w-6xl border relative",
          "md:transition-all md:duration-300", 
          isOpen 
            ? "rounded-[1.5rem] bg-[#001a12] backdrop-blur-3xl shadow-2xl border-white/20" 
            : "rounded-full bg-black/40 backdrop-blur-xl border-white/10",
          scrolled && !isOpen ? "py-2 md:py-2.5" : "py-3 md:py-4"
        )}
      >
        <div className="px-2 md:px-10 flex justify-between items-center relative z-[110]">
          
          {/* --- LOGO AREA: Navigation to Home --- */}
          <Link 
            href="/" 
            onClick={() => setCurrentHash("")} // Clears active section highlights
            className="flex items-center shrink-0"
          >
            <div className="relative h-7 w-32 md:h-12 md:w-48 transition-opacity hover:opacity-80 duration-300">
              <Image
                src="/logo.png"
                alt="Prosperous Consultancy Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-2"
                onMouseEnter={() => setHoverDropdown(link.name)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    if (link.href === "/") setCurrentHash("");
                  }}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 flex items-center gap-1.5",
                    link.name === "Home" 
                      ? "text-white/80 hover:text-[#8dc63f]" 
                      : (hoverDropdown === link.name || isLinkActive(link) 
                          ? "text-[#8dc63f]" 
                          : "text-white/80 hover:text-[#8dc63f]")
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={12} className={cn("transition-transform duration-300", hoverDropdown === link.name && "rotate-180")} />
                  )}
                </Link>

                <AnimatePresence>
                  {link.dropdown && hoverDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[450px] bg-[#001a12]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl p-6 z-[120]"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href} 
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                          >
                            <div className="p-2.5 bg-[#8dc63f]/10 rounded-lg text-[#8dc63f] group-hover:bg-[#8dc63f] group-hover:text-[#001a12] transition-all duration-300">
                              <item.icon size={18} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black uppercase text-white tracking-widest group-hover:text-[#8dc63f] transition-colors duration-300">{item.name}</span>
                              <span className="text-[7px] text-[#8dc63f] tracking-[0.2em] font-bold uppercase mt-1 opacity-60">{item.sub}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link 
              href="/#contact" 
              className={cn(primaryBtnClass, "px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest")}
            >
              Consult Now
            </Link>
          </div>

          <button className="md:hidden p-2 text-[#8dc63f]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden px-5 pb-8 pt-2">
            <div className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 last:border-0 text-white font-black">
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => setMobileMenuOpen(mobileMenuOpen === link.name ? null : link.name)} 
                        className={cn(
                          "flex items-center justify-between w-full py-4 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                          isLinkActive(link) ? "text-[#8dc63f]" : "text-white/90 hover:text-[#8dc63f]"
                        )}
                      >
                        {link.name} 
                        <ChevronDown size={14} className={cn("text-[#8dc63f] transition-transform duration-300", mobileMenuOpen === link.name && "rotate-180")} />
                      </button>
                      {mobileMenuOpen === link.name && (
                        <div className="bg-[#8dc63f]/5 rounded-xl mb-4 p-2 flex flex-col gap-1">
                          {link.dropdown.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              className={cn(
                                "flex items-center gap-4 p-4 text-[10px] font-bold text-white/70 uppercase tracking-widest active:text-[#8dc63f] transition-colors duration-200",
                                pathname === sub.href ? "text-[#8dc63f]" : "text-white/70"
                              )}
                            >
                              <sub.icon size={16} className="text-[#8dc63f]" /> 
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => {
                        if (link.href === "/") setCurrentHash("");
                      }}
                      className={cn(
                        "block py-4 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                        link.name === "Home" 
                          ? "text-white hover:text-[#8dc63f]" 
                          : (isLinkActive(link) ? "text-[#8dc63f]" : "text-white/90 hover:text-[#8dc63f]")
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/#contact" 
                className={cn(primaryBtnClass, "mt-6 w-full text-center py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.3em]")}
              >
                Consult Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}