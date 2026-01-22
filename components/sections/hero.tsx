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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center pt-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"
      >
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2">
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
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Hello, I'm
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-neon-purple pb-2">
              Muhammad Rayan Hassan
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            I build modern full-stack web applications with a focus on scalability, performance, and solving real-world problems, enhanced with smart AI integrations.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href="#projects" className="cursor-pointer px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-[#0099ff] text-white font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all transform hover:-translate-y-1">
              View My Work
            </Link>
            <Link href="#contact" className="cursor-pointer px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all transform hover:-translate-y-1">
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
            {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/" },
                { icon: Github, href: "https://github.com/m-rayan-hassan" },
            ].map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank" className="cursor-pointer text-zinc-400 hover:text-white transition-all">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <social.icon className="w-6 h-6" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* 3D Character Placeholder / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center z-10"
        >
            <HeroVectorAnimation />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
