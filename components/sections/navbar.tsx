"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Scroll Spy / Active Section Logic
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -35% 0px', // Trigger when section is near middle of viewport
        threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Track all sections
    navItems.forEach((item) => {
        if (item.href.startsWith("#")) {
            const sectionId = item.href.substring(1);
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        }
    });

    return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/50 backdrop-blur-md border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <span className="text-xl font-bold text-white tracking-wide">Rayan</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => {
              let isActive = false;
              if (item.href.startsWith("#")) {
                  isActive = activeSection === item.href.substring(1);
              }
              
              return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-neon-cyan relative group",
                  isActive ? "text-neon-cyan" : "text-zinc-400"
                )}
              >
                {item.name}
                <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-neon-cyan transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            )})}
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
            <Link href="https://github.com/m-rayan-hassan" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
             <Link href="https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan px-5 py-2 rounded-full font-medium transition-all text-sm flex items-center gap-2 shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Let's Talk →
            </Link>
          </div>
        
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-space-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-neon-cyan"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                 onClick={() => setIsOpen(false)}
                className="bg-orange-500 text-white px-5 py-3 rounded-xl font-bold text-center mt-4"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
