"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Achievements Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
              <Trophy className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-3xl font-bold text-white">Achievements</h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-10 group"
          >
            <div className="absolute left-[3px] top-2 h-full w-px bg-white/20"></div>
            <div className="absolute -left-[2px] top-2 h-3 w-3 rounded-full bg-neon-cyan ring-4 ring-zinc-950 group-hover:bg-white transition-colors"></div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors shadow-lg hover:shadow-neon-cyan/10">
              <h4 className="text-xl font-bold text-neon-cyan group-hover:text-white transition-colors">Finalist, IEEE Hackathon (Webathon)</h4>
              <p className="text-zinc-400 font-medium mt-1 mb-4">Built Productivity Leak Detector MVP in 6 hours</p>
              
              <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-400 text-sm">
                <li>Built an AI web app that analyzes daily routine logs to identify time inefficiencies and generate actionable fixes.</li>
                <li>Integrated Clerk authentication, the OpenAI API for analysis, and MongoDB for result persistence within the hackathon's tight time constraint.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-8 md:pl-10 group"
          >
            <div className="absolute left-[3px] top-2 h-full w-px bg-white/20"></div>
            <div className="absolute -left-[2px] top-2 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-zinc-950 group-hover:bg-white transition-colors"></div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors shadow-lg hover:shadow-blue-500/10">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-xl font-bold text-blue-400 group-hover:text-white transition-colors">The Complete Web Development Bootcamp</h4>
                  <p className="text-zinc-400 font-medium mt-1 mb-4">Udemy</p>
                </div>
                <Link 
                  href="https://www.udemy.com/certificate/UC-557a2637-383d-494b-9bdf-9d578f99cd03/" 
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 text-xs font-bold transition-colors"
                >
                  View <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              
              <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-400 text-sm">
                <li>Comprehensive full-stack development training covering HTML/CSS, JavaScript, Node.js, PostgreSQL, MongoDB, React, and Next.js.</li>
                <li>Built multiple REST APIs and AI-integrated applications from scratch.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
