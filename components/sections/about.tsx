"use client";

// Image import removed
import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Content Column */}
        <div className="md:col-span-12 space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-neon-cyan drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    Muhammad Rayan Hassan
                </h2>
                <h3 className="text-xl font-medium text-white">
                    Software Developer
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                    A motivated CS student and developer who enjoys turning ideas into functional products. I primarily build full-stack web applications (MERN & Next.js) and also have working knowledge of Java, C++, and Python.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: "Experience", value: "Student Developer | Project-Based Experience" },
                    { label: "Specialty", value: "Full Stack" },
                    { label: "Focus", value: "Full-Stack Development • System Design • AI-Integrated Applications" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-sm md:text-base font-bold text-white break-words">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                <Link href="#projects" className="cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                    View Projects
                </Link>
                <Link href="#contact" className="cursor-pointer bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
                    Get in Touch
                </Link>
            </div>

            <div className="pt-8 border-t border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">About Me</h4>
                <p className="text-zinc-400 leading-relaxed mb-4">
                    I’m Muhammad Rayan Hassan, a Computer Science student at National University of Technology (NUTECH), Islamabad, Pakistan with a strong focus on full-stack web development. I build complete applications using MERN and Next.js, working across frontend, backend, databases, and API integrations.
Alongside full-stack development, I have experience with Java, C++, and Python through academic and system-level projects. These have strengthened my problem-solving skills and understanding of software fundamentals, which directly support my web development work.
I enjoy building reliable systems that are simple, efficient, and designed to solve real-world problems.
                </p>
                
                {/* Education Section */}
                <div className="mt-8">
                    <h5 className="text-xl font-bold text-white mb-4">Education</h5>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                                <h6 className="text-lg font-bold text-neon-cyan">Bachelor of Science in Computer Science</h6>
                                <p className="text-white font-medium mt-1">National University of Technology (NUTECH)</p>
                                <p className="text-zinc-400 text-sm mt-1">Islamabad, Pakistan</p>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                                <div className="bg-neon-cyan/10 border border-neon-cyan/30 px-4 py-2 rounded-lg">
                                    <p className="text-xs text-zinc-400 uppercase tracking-wider">CGPA</p>
                                    <p className="text-2xl font-bold text-neon-cyan">3.62/4.0</p>
                                </div>
                                <p className="text-sm text-zinc-500">2024 - 2028</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
