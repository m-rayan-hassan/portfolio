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
                    Full Stack AI Engineer
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                    My background spans full-stack engineering and applied AI/LLM systems, with production experience building retrieval-augmented, agentic AI tools across safety-critical domains such as healthcare and education, as well as practical productivity and automation tools.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: "Experience", value: "Full Stack AI Engineering Intern & Team Lead" },
                    { label: "Specialty", value: "Full Stack AI Engineering" },
                    { label: "Focus", value: "Applied AI Systems • Clean Architecture • Scalable Web Apps" },
                ].map((stat, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        className="bg-white/5 border border-white/10 p-4 rounded-xl text-center transition-colors"
                    >
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-sm md:text-base font-bold text-white break-words">{stat.value}</p>
                    </motion.div>
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
                    I am a Full Stack AI Engineer and CS student focused on integrating clean system architecture with auditable AI reasoning. My experience spans from designing robust REST APIs and data models to building retrieval-augmented generation and agentic workflows. I prioritize keeping AI-assisted decisions human-reviewed rather than fully autonomous, creating reliable, production-ready systems that solve real-world problems.
                </p>
                
                {/* Education Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8"
                >
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
                                    <p className="text-2xl font-bold text-neon-cyan">3.55/4.0</p>
                                </div>
                                <p className="text-sm text-zinc-500">Sep 2024 - Jul 2028</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div 
                  id="experience"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-16 pt-8"
                >
                    <h5 className="text-3xl font-bold text-center text-white mb-12">Experience</h5>
                    <div className="relative mx-auto w-full max-w-4xl">
                        {/* Vertical line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2"></div>
                        {/* Vertical line (Mobile) */}
                        <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-white/20"></div>

                        {/* Experience Item 1 (Left aligned card) */}
                        <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
                            {/* Mobile dot */}
                            <div className="md:hidden absolute left-[11px] top-1.5 h-2.5 w-2.5 rounded-full bg-neon-cyan ring-4 ring-zinc-950 group-hover:bg-white transition-colors"></div>
                            
                            {/* Left Content */}
                            <div className="w-full md:w-5/12 pl-10 md:pl-0 md:pr-10 relative">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors shadow-lg hover:shadow-neon-cyan/10">
                                    <h6 className="text-lg font-bold text-neon-cyan group-hover:text-white transition-colors">Full Stack AI Engineering Intern</h6>
                                    <p className="text-white font-medium mt-1 mb-3">Operant Labs & Elite-Filing, NASTP</p>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-400 text-sm">
                                        <li><strong>AI Clinical Intelligence Platform:</strong> Owned end-to-end development of governance layer (RBAC, review screens, CMO approval state machine). Maintained Node.js/Express service calling FastAPI AI service.</li>
                                        <li><strong>Operant OS:</strong> Shipped full-stack features for HRMS, CRM, and billing workflows. Designed n8n automation workflows integrating LLM calls to replace manual operations.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Middle Dot (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-6 h-4 w-4 rounded-full bg-zinc-950 border-2 border-neon-cyan group-hover:bg-neon-cyan transition-colors z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

                            {/* Right Content (Date) */}
                            <div className="hidden md:flex w-5/12 pl-10 items-start mt-6">
                                <span className="px-4 py-2 bg-neon-cyan/10 text-neon-cyan text-sm font-bold rounded-full border border-neon-cyan/20">Jul 2026 - Sep 2026</span>
                            </div>
                            
                            {/* Mobile date */}
                            <div className="md:hidden w-full pl-10 mt-4">
                                <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-bold rounded-full">Jul 2026 - Sep 2026</span>
                            </div>
                        </div>

                        {/* Experience Item 2 (Right aligned card) */}
                        <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-12 group">
                            {/* Mobile dot */}
                            <div className="md:hidden absolute left-[11px] top-1.5 h-2.5 w-2.5 rounded-full bg-neon-cyan ring-4 ring-zinc-950 group-hover:bg-white transition-colors"></div>
                            
                            {/* Left Content (Date on Desktop) */}
                            <div className="hidden md:flex w-5/12 pr-10 items-start justify-end mt-6">
                                <span className="px-4 py-2 bg-neon-cyan/10 text-neon-cyan text-sm font-bold rounded-full border border-neon-cyan/20">Jan 2026 - Feb 2026</span>
                            </div>

                            {/* Middle Dot (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-6 h-4 w-4 rounded-full bg-zinc-950 border-2 border-neon-cyan group-hover:bg-neon-cyan transition-colors z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

                            {/* Right Content */}
                            <div className="w-full md:w-5/12 pl-10 md:pl-10 relative">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors shadow-lg hover:shadow-neon-cyan/10">
                                    <h6 className="text-lg font-bold text-neon-cyan group-hover:text-white transition-colors">Team Lead, AI Engineering</h6>
                                    <p className="text-white font-medium mt-1 mb-3">Cognivio AI (ICAT Project), NUTECH</p>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-400 text-sm">
                                        <li>Led faculty-supervised research into retrieval-augmented generation for document-grounded AI tutoring, designing the RAG pipeline.</li>
                                        <li>Prototyped a hybrid PDF-extraction approach and adopted LlamaParse for production-grade parsing of text, diagrams, and figures.</li>
                                        <li>Directed the team's research and build-out of a real-time voice AI tutor that conducts spoken discussion and oral-exam-style review sessions.</li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Mobile date */}
                            <div className="md:hidden w-full pl-10 mt-4">
                                <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-bold rounded-full">Jan 2026 - Feb 2026</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
