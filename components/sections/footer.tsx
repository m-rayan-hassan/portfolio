"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Muhammad Rayan Hassan</h2>
        
        <div className="flex justify-center gap-6 mb-8">
            <Link href="https://github.com/m-rayan-hassan" target="_blank" className="cursor-pointer text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"><Github className="w-6 h-6" /></Link>
            <Link href="https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/" target="_blank" className="cursor-pointer text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"><Linkedin className="w-6 h-6" /></Link>
        </div>

        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 opacity-50" />

        <p className="text-zinc-500 text-sm italic mb-4">
            "Building practical solutions through code, logic, and innovation"
        </p>

        <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Muhammad Rayan Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
