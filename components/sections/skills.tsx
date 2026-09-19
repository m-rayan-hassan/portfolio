"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Mic, FileSearch, AudioWaveform, Headset, DatabaseZap, Code2, Server, Cloud, Database, Shield, Workflow, Lock, Zap } from "lucide-react";
import { 
  FaJava, FaReact, FaDocker, FaGithub, FaGitAlt, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaLinux 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiCplusplus, SiPython,
  SiNextdotjs, SiTailwindcss, SiFramer,
  SiMysql, SiMongodb, SiPostgresql, SiRedis,
  SiVsco, SiPostman, SiAmazonwebservices,
  SiVercel, SiCloudinary, SiStripe,
  SiOpenai, SiGoogle, SiExpress, SiFastapi
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    iconColor: "text-neon-cyan",
    hoverIconColor: "group-hover:text-white",
    hoverBg: "hover:bg-neon-cyan/10",
    hoverBorder: "hover:border-neon-cyan/50",
    skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FaJava },
        { name: "C++", icon: SiCplusplus },
        { name: "SQL", icon: FaDatabase },
    ]
  },
  {
    title: "Frontend Development",
    iconColor: "text-blue-400",
    hoverIconColor: "group-hover:text-white",
    hoverBg: "hover:bg-blue-400/10",
    hoverBorder: "hover:border-blue-400/50",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Remotion", icon: Code2 },
    ]
  },
  {
    title: "Backend",
    iconColor: "text-sky-400",
    hoverIconColor: "group-hover:text-white",
    hoverBg: "hover:bg-sky-400/10",
    hoverBorder: "hover:border-sky-400/50",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: Server },
      { name: "Redis", icon: SiRedis },
      { name: "BullMQ", icon: Zap },
      { name: "Clerk", icon: Lock },
      { name: "NextAuth.js", icon: Shield },
    ]
  },
  {
    title: "Databases & ORMs",
    iconColor: "text-blue-500",
    hoverIconColor: "group-hover:text-white",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/50",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "NeonDB", icon: Database },
      { name: "Prisma", icon: DatabaseZap },
      { name: "Drizzle", icon: DatabaseZap },
    ]
  },
  {
    title: "AI / LLM & ML",
    iconColor: "text-neon-cyan",
    hoverIconColor: "group-hover:text-white",
    hoverBg: "hover:bg-neon-cyan/10",
    hoverBorder: "hover:border-neon-cyan/50",
    skills: [
        { name: "OpenAI & Gemini", icon: BrainCircuit },
        { name: "LangChain", icon: Workflow },
        { name: "RAG & Vector Search", icon: FileSearch },
        { name: "XGBoost", icon: Cpu },
        { name: "scikit-learn", icon: Code2 },
    ]
  },
  {
    title: "DevOps, Tools & APIs",
    iconColor: "text-sky-400",
    hoverIconColor: "group-hover:text-white",
    hoverBg: "hover:bg-sky-400/10",
    hoverBorder: "hover:border-sky-400/50",
    skills: [
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: SiAmazonwebservices },
        { name: "Vercel", icon: SiVercel },
        { name: "n8n", icon: Workflow },
        { name: "Stripe", icon: SiStripe },
        { name: "Git & Linux", icon: FaLinux },
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
            className={`p-6 rounded-2xl bg-zinc-900/50 border border-white/5 ${category.hoverBorder} hover:bg-zinc-900/80 transition-all shadow-sm`}
          >
            <h3 className="text-lg font-bold mb-6 text-zinc-100 border-b border-white/5 pb-2">{category.title}</h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, sIdx) => (
                <motion.div 
                  key={sIdx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                  className={`flex items-center gap-3 p-2 rounded-lg ${category.hoverBg} transition-colors group`}
                >
                  <skill.icon className={`w-5 h-5 ${category.iconColor} ${category.hoverIconColor} transition-colors`} />
                  <span className="text-zinc-300 font-medium text-sm group-hover:text-white transition-colors">
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
