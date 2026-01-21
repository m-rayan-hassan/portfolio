"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/section-wrapper";
// Removed unused Button import
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
// Removed unused TypeAnimation import
import { motion } from "framer-motion";

import { TypeAnimation } from 'react-type-animation';
import HeroVectorAnimation from "@/components/ui/hero-vector-animation";

export default function Hero() {
  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div className="flex items-center gap-2">
            <span className="w-1 h-8 bg-neon-cyan/50 rounded-full"></span>
            <div className="text-xl md:text-2xl font-medium text-zinc-300 tracking-wide flex gap-2">
              I am a
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Computer Science Student',
                  2000,
                  'Full Stack Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-neon-cyan font-bold"
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Hello, I'm
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-neon-purple pb-2">
              Muhammad Rayan Hassan
            </h1>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            I build modern full-stack web applications with a focus on scalability, performance, and solving real-world problems, enhanced with smart AI integrations.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#projects" className="cursor-pointer px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-[#0099ff] text-white font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all transform hover:-translate-y-1">
              View My Work
            </Link>
            <Link href="#contact" className="cursor-pointer px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all transform hover:-translate-y-1">
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-8">
            {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/" },
                { icon: Github, href: "https://github.com/m-rayan-hassan" },
            ].map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank" className="cursor-pointer text-zinc-400 hover:text-white hover:scale-110 transition-all">
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* 3D Character Placeholder / Image */}
        <div className="relative flex justify-center items-center z-10">
            <HeroVectorAnimation />
        </div>
      </div>
    </SectionWrapper>
  );
}
