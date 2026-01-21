"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


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
    title: "UltimateFit - AI-Powered Fitness Web App",
    date: "Full-Stack Web App",
    role: "Lead Developer",
    description: "A modern full-stack fitness platform delivering personalized workout routines and diet plans through an intelligent AI voice coach. Designed with a strong focus on UX, performance, and scalability.",
    tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "AI APIs"],
    type: "Full Stack",
    featured: true,
    sourceLink: "https://github.com/m-rayan-hassan/ultimatefit",
    liveLink: "https://ultimatefit.vercel.app/",
    image: "/ultimatefit.png", // Using existing image for demo
    videoLink: "https://www.linkedin.com/posts/muhammad-rayan-hassan-ab6a93327_ai-nextjs-openai-activity-7382766828151914496-x7Yb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKQW2oBomFIES9qF1JBmP0gcbhTjVQWKhg"
  },
  {
    title: "FeedbackVault - Anonymous Feedback System",
    date: "Anonymous Messaging",
    role: "Fullstack Developer",
    description: "Secure, anonymous messaging platform allowing users to receive honest feedback. Integrates Gemini API for AI-powered constructive response suggestions while maintaining complete anonymity.",
    tags: ["Next.js", "React", "MongoDB", "Gemini API"],
    type: "Full Stack",
    featured: false,
    sourceLink: "https://github.com/m-rayan-hassan/feedbackvault",
    liveLink: "https://thefeedbackvault.vercel.app/dashboard",
    image: "/feedbackvault.png", // Using existing image for demo
    videoLink: "https://www.linkedin.com/posts/muhammad-rayan-hassan-ab6a93327_nextjs-fullstack-typescript-activity-7370379989713723392-BROE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKQW2oBomFIES9qF1JBmP0gcbhTjVQWKhg"
  },
  {
    title: "LMS with Payment Gateway",
    date: "Backend System",
    role: "Backend Developer",
    description: "Backend-driven Learning Management System handling course management, user auth, and secure Stripe payments. Demonstrates scalable API design and secure transaction handling.",
    tags: ["Node.js", "Express", "MongoDB", "Stripe API"],
    type: "Backend",
    sourceLink: "https://github.com/m-rayan-hassan/LMS-PaymentGateway",
    // No live link for this backend system
  },
  {
    title: "Smart Inventory & Sales System with Dynamic Price Optimization",
    date: "Semester Project",
    role: "Java Developer",
    description: "Comprehensive inventory and sales management system developed in Java. Manages products, stock levels, and sales while applying dynamic price optimization using rule-based logic.",
    tags: ["Java", "SQL", "Swing", "JDBC"],
    type: "Semester Project",
    sourceLink: "https://github.com/m-rayan-hassan/SmartInventoryAndSalesSystem",
    image: "/smartInventory.png",
  },
  {
    title: "Mini-Amazon – Smart Marketplace System",
    date: "Academic Project",
    role: "C++ Developer",
    description: "Smart marketplace simulation implementing core e-commerce features like product listings, searching, and ordering. Built to demonstrate efficient data handling with custom data structures.",
    tags: ["C++", "DSA", "Heaps", "HashMaps", "BST"],
    type: "Semester Project",
    sourceLink: "https://github.com/m-rayan-hassan/mini-Amazon-DSA-"
  },
  {
      title: "Portfolio Website",
      date: "Frontend Project",
      role: "Frontend Developer",
      description: "Modern portfolio website with robust animations, SEO optimization, and responsive design. Built with the latest frontend technologies to showcase my work.",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      type: "Frontend",
      sourceLink: "#",
      liveLink: "#",
      image: "/portfolio.png" // using existing image for demo
  }
];

const categories = ["All", "Full Stack", "Backend", "Frontend", "Semester Project"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.type.includes(activeCategory) || (activeCategory === "Backend" && p.tags.includes("Spring Boot")) || (activeCategory === "Frontend" && p.tags.includes("React")));

  return (
    <SectionWrapper id="projects" className="py-24">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-neon-cyan">Projects</span>
        </h2>
        <p className="text-zinc-400">A collection of projects showcasing my skills in full-stack development</p>
        
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all border",
                activeCategory === cat 
                  ? "bg-neon-blue-light border-neon-cyan text-white shadow-[0_0_10px_rgba(30,58,138,0.5)]" 
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={idx} 
            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-neon-cyan/30 transition-all hover:bg-zinc-900/80 flex flex-col md:flex-row gap-8"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3 aspect-video bg-zinc-950 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-shadow">
               {project.image && project.image !== "#" ? (
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-contain"
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
                     <span className="bg-neon-purple/20 text-neon-purple border border-neon-purple/30 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
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
                  {project.tags.slice(0, 6).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="text-xs px-2 py-1 text-zinc-500">+{project.tags.length - 6} more</span>
                  )}
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
                    <Link href={project.videoLink} target="_blank" className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20 hover:bg-neon-purple/20 text-sm font-medium transition-colors">
                       <Play className="w-4 h-4 fill-current" /> View Video
                    </Link>
                  )}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
