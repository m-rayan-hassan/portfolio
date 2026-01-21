"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Cloud, ShieldCheck, Code2, Check } from "lucide-react";

export default function HeroVectorAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Container - Floating Animation (The "Sink" Effect) */}
      <motion.div 
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[340px] h-[340px] md:w-[500px] md:h-[400px]"
      >
        
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-cyan/10 blur-[100px] rounded-full opacity-40 animate-pulse" />

        {/* 1. SPEED LINES (Left) - Temed Cyan */}
        <div className="absolute top-10 -left-12 space-y-3 z-0 opacity-50">
            <motion.div animate={{ width: [60, 100, 60], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="h-1 bg-neon-cyan/20 rounded-full" />
            <motion.div animate={{ width: [80, 40, 80], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="h-1 bg-neon-purple/20 rounded-full" />
            <motion.div animate={{ width: [50, 90, 50], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="h-1 bg-neon-cyan/20 rounded-full" />
            <motion.div animate={{ width: [70, 30, 70], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }} className="h-1 bg-neon-purple/20 rounded-full" />
        </div>

        {/* 2. GEARS (Themed: Blue-ish Metallic) */}
        {/* Top Right Gear */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 right-12 z-10"
        >
            <Settings className="w-24 h-24 md:w-32 md:h-32 text-slate-400/80 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]" strokeWidth={1.5} />
        </motion.div>
        
        {/* Right Middle Gear */}
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -right-8 z-10"
        >
             <Settings className="w-16 h-16 md:w-20 md:h-20 text-slate-500/80 drop-shadow-lg" strokeWidth={1.5} />
        </motion.div>

        {/* Bottom Left Gear */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 -left-10 z-10"
        >
             <Settings className="w-20 h-20 md:w-28 md:h-28 text-slate-400/80 drop-shadow-[0_0_15px_rgba(188,19,254,0.2)]" strokeWidth={1.5} />
        </motion.div>


        {/* 3. MONITOR (Central) - Themed Colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 md:w-96 md:h-64 bg-[#0a0f1e] border border-neon-cyan/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden z-20 flex flex-col group hover:border-neon-cyan/60 transition-colors duration-500">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            {/* Screen Content - Gradient Background */}
            <div className="flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] p-6 relative overflow-hidden">
                {/* Code Lines */}
                <div className="space-y-3 z-10 relative">
                    <div className="w-1/3 h-2 bg-neon-purple/80 rounded-full mb-4" />
                    <motion.div animate={{ width: ["60%", "70%", "60%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-2 bg-neon-cyan/60 rounded-full" />
                    <div className="w-3/4 h-2 bg-blue-500/60 rounded-full" />
                    <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                    
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                         <div className="w-2/3 h-2 bg-neon-cyan/40 rounded-full" />
                         <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                    </div>
                </div>

                {/* Neon Scanner */}
                <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 w-full h-[40px] bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent blur-sm z-0"
                />
            </div>
            
             {/* Monitor Base */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_10px_#00f0ff]" />
        </div>
        
        {/* Monitor Stand Base */}
        <div className="absolute bottom-[30px] md:bottom-[60px] left-1/2 -translate-x-1/2 w-24 h-4 bg-white/5 rounded-t-lg z-10 backdrop-blur-sm border-x border-t border-white/10" />
        <div className="absolute bottom-[26px] md:bottom-[56px] left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent z-10" />


        {/* 4. MOBILE PHONE (Right) - Themed */}
        <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -right-2 md:bottom-0 md:right-0 w-16 h-32 md:w-24 md:h-48 bg-[#0a0f1e] border border-neon-purple/30 rounded-2xl shadow-2xl z-30 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="w-full h-full bg-gradient-to-b from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-neon-purple/20 rounded-xl flex items-center justify-center border border-neon-purple/40">
                     <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-neon-purple" strokeWidth={2} />
                </div>
            </div>
        </motion.div>


        {/* 5. FLOATING GLASS CLOUD (Top Right) - Themed Cyan */}
        <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-0 right-0 md:-top-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-neon-cyan/10 to-blue-900/30 backdrop-blur-md border border-neon-cyan/30 rounded-2xl shadow-lg flex items-center justify-center z-30"
        >
            <Cloud className="w-10 h-10 md:w-12 md:h-12 text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
            <motion.div 
                animate={{ y: [2, 6, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute text-neon-cyan"
            >
                ↓
            </motion.div>
        </motion.div>


        {/* 6. FLOATING CODE BLOCKS (Left) - Themed Border */}
        <motion.div
            animate={{ x: [0, 5, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 -left-8 md:left-[-40px] bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-neon-purple/30 shadow-lg z-30"
        >
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-purple" />
                <div className="w-10 h-2 bg-white/20 rounded-full" />
            </div>
            <div className="mt-2 w-16 h-2 bg-white/10 rounded-full" />
        </motion.div>

        <motion.div
            animate={{ x: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-32 -left-4 md:left-[-20px] bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-neon-cyan/30 shadow-lg z-30"
        >
            <Settings className="w-5 h-5 text-neon-cyan animate-spin-slow" />
        </motion.div>

      </motion.div>
    </div>
  );
}
