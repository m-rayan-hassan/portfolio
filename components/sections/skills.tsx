"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Rocket, Sparkles } from "lucide-react";
import { 
  FaJava, FaReact, FaDocker, FaGithub, FaGitAlt, FaNodeJs 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiCplusplus, SiPython,
  SiNextdotjs, SiTailwindcss,
  SiMysql, SiMongodb, SiPostgresql,
  SiVsco, SiPostman,
  SiVercel, SiCloudinary, 
  SiOpenai, SiAnthropic, SiGoogle, SiExpress
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "text-neon-cyan",
    border: "border-neon-cyan/20",
    bg: "bg-neon-cyan/10",
    skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C++", icon: SiCplusplus },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: SiPython },
    ]
  },
  {
    title: "Frontend Development",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    title: "Backend & Databases",
    color: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/10",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ]
  },
  {
    title: "Development Tools",
    color: "text-neon-cyan",
    border: "border-neon-cyan/20",
    bg: "bg-neon-cyan/10",
    skills: [
      { name: "Visual Studio Code", icon: SiVsco },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
    ]
  },
  {
    title: "Cloud & Deployment",
    color: "text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/10",
    skills: [
        { name: "Vercel", icon: SiVercel },
        { name: "Docker", icon: FaDocker },
        { name: "GitHub", icon: FaGithub },
        { name: "Cloudinary", icon: SiCloudinary },
    ]
  },
  {
      title: "AI & Automation",
      color: "text-blue-500",
      border: "border-blue-600/20",
      bg: "bg-blue-600/10",
      skills: [
          { name: "OpenAI", icon: SiOpenai },
          { name: "Gemini", icon: SiGoogle },
          { name: "Claude", icon: SiAnthropic },
          { name: "Antigravity", icon: Rocket },
      ]
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24">
      <div className="text-center mb-16">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Cpu className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan">Technology Stack</span>
         </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Technologies & Tools
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          A comprehensive overview of the technologies, frameworks, and tools I use to build modern, scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            key={idx}
            className={`p-6 rounded-2xl bg-zinc-900/50 border ${category.border} hover:bg-zinc-900/80 transition-colors group`}
          >
            <h3 className={`text-lg font-bold mb-6 ${category.color} border-b border-white/5 pb-2`}>{category.title}</h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, sIdx) => (
                <motion.div 
                  key={sIdx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <skill.icon className={`w-6 h-6 ${category.color}`} />
                  <span className="text-zinc-300 font-medium text-sm">
                     {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
