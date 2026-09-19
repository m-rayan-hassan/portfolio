"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ... (keep your interfaces and data array exactly as they are) ...
interface Project {
  title: string;
  date: string;
  role: string;
  description: string;
  tags: string[];
  type: string;
  featured?: boolean;
  sourceLink?: string;
  liveLink?: string;
  videoLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "AI Clinical Intelligence Platform",
    date: "Governed Clinical Decision Support System",
    role: "Full Stack AI Engineer",
    description: "Splits the system into a Node.js/Express service (auth, RBAC, PostgreSQL/Drizzle, governance state machine) and an internal-only FastAPI service running an XGBoost model and a RAG/LangChain pipeline. Requires practitioner review and a CMO/Admin approval gate before any AI-generated recommendation reaches a patient record.",
    tags: ["Next.js", "Node.js/Express", "FastAPI", "PostgreSQL/Drizzle", "LangChain", "XGBoost", "Pinecone"],
    type: "Full Stack",
    featured: true,
    sourceLink: "https://github.com/m-rayan-hassan/Clinical-Intelligence-Platform",
    image: "#"
  },
  {
    title: "Cognivio AI - AI-Powered Learning Platform",
    date: "Full-Stack SaaS Platform",
    role: "Team Lead, AI Engineering",
    description: "Converts static documents into 7+ interactive AI learning modes: Remotion-rendered video overviews, Vapi/ElevenLabs voice discussion and oral-exam-style Viva sessions, quizzes, and flashcards. Parses text-and-diagram-heavy PDFs with LlamaParse before chunking and embedding into MongoDB Atlas Vector Search.",
    tags: ["Next.js", "Node.js/Express", "MongoDB Atlas", "LangChain", "Gemini API", "Vapi", "ElevenLabs", "Remotion", "Stripe", "LemonSqueezy"],
    type: "Full Stack",
    featured: true,
    sourceLink: "https://github.com/m-rayan-hassan/CognivioAI",
    liveLink: "https://cognivioai.app/",
    image: "/cognivio.png",
  },
  {
    title: "UltimateFit - AI-Powered Fitness Web App",
    date: "Full-Stack Web App",
    role: "Lead Developer",
    description: "Replaces static intake forms with a Vapi voice agent that interviews users and auto-generates a personalized workout and nutrition plan with curated video tutorials. Runs as a fully typed, end-to-end TypeScript app with Clerk auth and MongoDB persistence.",
    tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "Vapi", "Clerk"],
    type: "Full Stack",
    featured: true,
    sourceLink: "https://github.com/m-rayan-hassan/ultimatefit",
    liveLink: "https://ultimatefit.vercel.app/",
    image: "/ultimatefit.png", 
    videoLink: "https://www.linkedin.com/posts/muhammad-rayan-hassan-ab6a93327_ai-nextjs-openai-activity-7382766828151914496-x7Yb"
  },
  {
    title: "FeedbackVault - Anonymous Feedback System",
    date: "Anonymous Messaging",
    role: "Fullstack Developer",
    description: "Lets users send and receive fully anonymous feedback via a shareable profile link. Generates thoughtful message suggestions with the Gemini API. Secures accounts with NextAuth credential-based auth, Zod-validated forms, and Resend email verification.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "Gemini API", "Resend"],
    type: "Full Stack",
    featured: false,
    sourceLink: "https://github.com/m-rayan-hassan/feedbackvault",
    liveLink: "https://thefeedbackvault.vercel.app/",
    image: "/feedbackvault.png",
    videoLink: "https://www.linkedin.com/posts/muhammad-rayan-hassan-ab6a93327_nextjs-fullstack-typescript-activity-7370379989713723392-BROE"
  },
  {
    title: "Productivity Leak Detector",
    date: "Hackathon Project",
    role: "Finalist, IEEE Hackathon",
    description: "An AI web app that analyzes daily routine logs to identify time inefficiencies and generate actionable fixes, delivering a working MVP in 6 hours. Integrated Clerk authentication, OpenAI API, and MongoDB.",
    tags: ["Next.js", "Clerk", "OpenAI", "MongoDB"],
    type: "Full Stack",
    sourceLink: "#",
  },
  {
    title: "Smart Inventory & Sales System",
    date: "Semester Project",
    role: "Java Developer",
    description: "Built a desktop business management app with Java Swing and SQL Server. Implemented a rule-based dynamic pricing engine that auto-adjusts prices based on real-time stock levels and demand.",
    tags: ["Java", "Java Swing", "SQL Server", "OOP"],
    type: "Semester Project",
    sourceLink: "https://github.com/m-rayan-hassan/SmartInventoryAndSalesSystem",
    image: "/smartInventory.png",
  }
];

const categories = ["All", "Full Stack", "Backend", "Frontend", "Semester Project"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.type.includes(activeCategory) || (activeCategory === "Backend" && p.tags.includes("Spring Boot")) || (activeCategory === "Frontend" && p.tags.includes("React")));

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <SectionWrapper id="projects" className="py-24 overflow-hidden"> 
      {/* Added overflow-hidden to wrapper to prevent scrollbar flickering */}
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-neon-cyan">Projects</span>
        </h2>
        <p className="text-zinc-400">A collection of projects showcasing my skills in full-stack development</p>
        
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all border",
                activeCategory === cat 
                  ? "bg-neon-blue-light border-neon-cyan text-white shadow-[0_0_10px_rgba(30,58,138,0.5)]" 
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 gap-8"
      >
        {displayedProjects.map((project, idx) => (
          <motion.div 
            layout
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
            key={`${project.title}-${idx}`}
            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-neon-cyan/30 transition-all hover:bg-zinc-900/80 hover:scale-[1.01] flex flex-col md:flex-row gap-8"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3 aspect-video bg-zinc-950 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-shadow">
               {project.image && project.image !== "#" ? (
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-contain"
                   sizes="(max-width: 768px) 100vw, 33vw" // Optimization for mobile loading
                 />
               ) : (
                 <>
                   <div className="absolute inset-0 bg-gradient-to-br from-neon-blue-light/20 to-transparent opacity-50" />
                   <div className="text-center p-4 relative z-10">
                      <div className="w-12 h-12 mx-auto bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-2">
                        <Github className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <h3 className="text-lg font-bold text-neon-cyan/80">{project.title.split(" ")[0]}</h3>
                   </div>
                 </>
               )}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
               <div className="flex flex-wrap items-center justify-between gap-2">
                   <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                     {project.title}
                   </h3>
                   {project.featured && (
                     <span className="bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                       ★ Featured
                     </span>
                   )}
                   {project.type === "Semester Project" && (
                     <span className="bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                       🎓 Semester Project
                     </span>
                   )}
               </div>
               
               <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">📅 {project.date}</span>
                  <span className="flex items-center gap-1">👤 {project.role}</span>
               </div>

               <p className="text-zinc-400 leading-relaxed text-sm">
                 {project.description}
               </p>

               <div className="flex flex-wrap gap-2 pt-2">
                   {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
               </div>

               <div className="flex items-center gap-4 pt-4">
                  {project.sourceLink && (
                    <Link href={project.sourceLink} target="_blank" className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 text-sm font-medium transition-colors">
                       <Github className="w-4 h-4" /> Source
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan text-black hover:bg-cyan-400 text-sm font-bold transition-colors">
                       <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                  )}
                  {project.videoLink && (
                    <Link href={project.videoLink} target="_blank" className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan/20 text-sm font-medium transition-colors">
                       <Play className="w-4 h-4 fill-current" /> View Video
                    </Link>
                  )}
               </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length > 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-3 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 font-medium transition-all transform hover:-translate-y-1"
          >
            {showAllProjects ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      )}
    </SectionWrapper>
  );
}