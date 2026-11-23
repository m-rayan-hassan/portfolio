"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Play, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Eyebrow from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

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
  /* Captures are only as sharp as their source file, so each visual is framed
     near its native width instead of being stretched across the column. */
  frame?: "sm" | "md";
}

const projects: Project[] = [
  {
    title: "AI Clinical Intelligence Platform",
    date: "Governed Clinical Decision Support System",
    role: "Full Stack AI Engineer",
    description:
      "Splits the system into a Node.js/Express service (auth, RBAC, PostgreSQL/Drizzle, governance state machine) and an internal-only FastAPI service running an XGBoost model and a RAG/LangChain pipeline. Requires practitioner review and a CMO/Admin approval gate before any AI-generated recommendation reaches a patient record.",
    tags: [
      "Next.js",
      "Node.js/Express",
      "FastAPI",
      "PostgreSQL/Drizzle",
      "LangChain",
      "XGBoost",
      "Pinecone",
    ],
    type: "Full Stack",
    featured: true,
    sourceLink:
      "https://github.com/m-rayan-hassan/Clinical-Intelligence-Platform",
  },
  {
    title: "Cognivio AI — AI-Powered Learning Platform",
    date: "Full-Stack SaaS Platform",
    role: "Team Lead, AI Engineering",
    description:
      "Converts static documents into 7+ interactive AI learning modes: Remotion-rendered video overviews, Vapi/ElevenLabs voice discussion and oral-exam-style Viva sessions, quizzes, and flashcards. Parses text-and-diagram-heavy PDFs with LlamaParse before chunking and embedding into MongoDB Atlas Vector Search.",
    tags: [
      "Next.js",
      "Node.js/Express",
      "MongoDB Atlas",
      "LangChain",
      "Gemini API",
      "Vapi",
      "ElevenLabs",
      "Remotion",
      "Stripe",
      "LemonSqueezy",
    ],
    type: "Full Stack",
    featured: true,
    sourceLink: "https://github.com/m-rayan-hassan/CognivioAI",
    liveLink: "https://cognivioai.app/",
    image: "/cognivio.png",
  },
  {
    title: "UltimateFit — AI-Powered Fitness Web App",
    date: "Full-Stack Web App",
    role: "Lead Developer",
    description:
      "Replaces static intake forms with a Vapi voice agent that interviews users and auto-generates a personalized workout and nutrition plan with curated video tutorials. Runs as a fully typed, end-to-end TypeScript app with Clerk auth and MongoDB persistence.",
    tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "Vapi", "Clerk"],
    type: "Full Stack",
    featured: true,
    sourceLink: "https://github.com/m-rayan-hassan/ultimatefit",
    liveLink: "https://ultimatefit.vercel.app/",
    image: "/ultimatefit-2x.webp",
    frame: "sm",
    videoLink:
      "https://www.linkedin.com/posts/muhammad-rayan-hassan-ab6a93327_ai-nextjs-openai-activity-7382766828151914496-x7Yb",
  },
  {
    title: "FeedbackVault — Anonymous Feedback System",
    date: "Anonymous Messaging",
    role: "Fullstack Developer",
    description:
      "Lets users send and receive fully anonymous feedback via a shareable profile link, and generates thoughtful message suggestions with the Gemini API. Secures accounts with NextAuth credential-based auth, Zod-validated forms, and Resend email verification.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "NextAuth.js",
      "Gemini API",
      "Resend",
    ],
    type: "Full Stack",
    featured: false,
    sourceLink: "https://github.com/m-rayan-hassan/feedbackvault",
    liveLink: "https://thefeedbackvault.vercel.app/",
    image: "/feedbackvault-2x.webp",
    frame: "sm",
    videoLink:
      "https://www.linkedin.com/posts/muhammad-rayan-hassan-ab6a93327_nextjs-fullstack-typescript-activity-7370379989713723392-BROE",
  },
  {
    title: "Productivity Leak Detector",
    date: "Hackathon Project",
    role: "Finalist, IEEE Hackathon",
    description:
      "An AI web app that analyzes daily routine logs to identify time inefficiencies and generate actionable fixes, delivered as a working MVP in six hours. Integrated Clerk authentication, the OpenAI API, and MongoDB.",
    tags: ["Next.js", "Clerk", "OpenAI", "MongoDB"],
    type: "Full Stack",
    featured: false,
  },
  {
    title: "Smart Inventory & Sales System",
    date: "Semester Project",
    role: "Java Developer",
    description:
      "A desktop business management app built with Java Swing and SQL Server, including a rule-based dynamic pricing engine that adjusts prices from real-time stock levels and demand.",
    tags: ["Java", "Java Swing", "SQL Server", "OOP"],
    type: "Semester Project",
    sourceLink:
      "https://github.com/m-rayan-hassan/SmartInventoryAndSalesSystem",
    image: "/smartInventory-2x.webp",
    frame: "sm",
  },
];

const categories = ["All", "Full Stack", "Semester Project"];

function ProjectLinks({ project }: { project: Project }) {
  const links: { label: string; href: string; icon: LucideIcon }[] = [];

  if (project.liveLink) {
    links.push({ label: "Live site", href: project.liveLink, icon: ArrowUpRight });
  }
  if (project.sourceLink && project.sourceLink !== "#") {
    links.push({ label: "Source", href: project.sourceLink, icon: Github });
  }
  if (project.videoLink) {
    links.push({
      label: "Walkthrough",
      href: project.videoLink,
      icon: Play,
    });
  }

  if (links.length === 0) return null;

  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
      {links.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="link-draw inline-flex items-center gap-1.5 text-[13.5px] text-white/75 transition-colors hover:text-white"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          {label}
        </Link>
      ))}
    </div>
  );
}

function Kicker({ project, index }: { project: Project; index?: number }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
      {index !== undefined && (
        <>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-5 bg-white/20" aria-hidden="true" />
        </>
      )}
      <span>{project.type}</span>
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="mt-3 font-mono text-[11px] uppercase leading-[1.9] tracking-[0.12em] text-white/55">
      {project.date}
      <span className="mx-2 text-white/25">/</span>
      {project.role}
    </p>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (!project.image) return null;

  const small = project.frame === "sm";

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-[3px] border border-white/10 bg-white/[0.02]",
        small ? "w-full max-w-[400px]" : "w-full"
      )}
    >
      <Image
        src={project.image}
        alt={`${project.title} interface`}
        fill
        sizes={
          small
            ? "(max-width: 768px) 100vw, 400px"
            : "(max-width: 768px) 100vw, 620px"
        }
        quality={90}
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]" />
    </div>
  );
}

/* Text-first feature: no screenshot, so the copy carries the entry */
function TextFeature({ project, index }: { project: Project; index: number }) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-5">
        <Kicker project={project} index={index} />

        <h3 className="mt-4 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] text-white">
          {project.title}
        </h3>

        <Meta project={project} />

        <p className="mt-5 font-mono text-[11px] uppercase leading-[2] tracking-[0.1em] text-white/55">
          {project.tags.join("  /  ")}
        </p>

        <ProjectLinks project={project} />
      </div>

      <div className="md:col-span-6 md:col-start-7">
        <p className="max-w-prose text-[15.5px] leading-[1.8] text-white/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flipped = index % 2 === 1;
  const hasVisual = Boolean(project.image);

  return (
    <article className="group border-t border-white/10 py-10 first:border-t-0 first:pt-0 md:py-14">
      {hasVisual ? (
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className={cn("md:col-span-7", flipped && "md:order-2")}>
            <ProjectVisual project={project} />
          </div>

          <div className={cn("md:col-span-5", flipped && "md:order-1")}>
            <Kicker project={project} index={index} />

            <h3 className="mt-4 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] text-white">
              {project.title}
            </h3>

            <Meta project={project} />

            <p className="mt-5 max-w-prose text-[15px] leading-[1.75] text-white/65">
              {project.description}
            </p>

            <p className="mt-5 font-mono text-[11px] uppercase leading-[2] tracking-[0.1em] text-white/55">
              {project.tags.join("  /  ")}
            </p>

            <ProjectLinks project={project} />
          </div>
        </div>
      ) : (
        <TextFeature project={project} index={index} />
      )}
    </article>
  );
}

function CompactProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasVisual = Boolean(project.image);

  return (
    <article className="group">
      {hasVisual ? (
        <ProjectVisual project={project} />
      ) : (
        <div className="flex max-w-[400px] items-start justify-between border-t border-white/15 pt-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="h-px w-16 bg-white/15"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="mt-6 flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
        <span>{project.type}</span>
        <span>{project.date}</span>
      </div>

      <h3 className="mt-3 font-display text-[1.35rem] leading-[1.15] text-white">
        {project.title}
      </h3>
      <p className="mt-1.5 text-[13.5px] text-white/55">{project.role}</p>

      <p className="mt-3.5 max-w-2xl text-[14.5px] leading-[1.7] text-white/60">
        {project.description}
      </p>

      <p className="mt-4 max-w-2xl font-mono text-[11px] uppercase leading-[2] tracking-[0.1em] text-white/50">
        {project.tags.join(" / ")}
      </p>

      <ProjectLinks project={project} />
    </article>
  );
}

/* The odd last card gets the full width, so it uses a two-column layout
   instead of stretching one image across the whole grid. */
function WideProject({ project }: { project: Project }) {
  return (
    <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-6">
        <ProjectVisual project={project} />
      </div>

      <div className="md:col-span-6">
        <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
          <span>{project.type}</span>
          <span>{project.date}</span>
        </div>

        <h3 className="mt-3 font-display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-[1.12] text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[13.5px] text-white/55">{project.role}</p>

        <p className="mt-4 max-w-prose text-[14.5px] leading-[1.7] text-white/60">
          {project.description}
        </p>

        <p className="mt-4 font-mono text-[11px] uppercase leading-[2] tracking-[0.1em] text-white/50">
          {project.tags.join(" / ")}
        </p>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.type.includes(activeCategory));

  const featured = filtered.filter((project) => project.featured);
  const rest = filtered.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-ink">
      <SectionWrapper className="py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <Eyebrow index="03" label="Projects" />
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.3rem)] leading-[1.02] text-white">
              Things I&apos;ve built
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-sm text-[15px] leading-[1.7] text-white/60">
              Six builds, from a governed clinical platform to shipped SaaS and
              a six-hour hackathon MVP.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  "relative pb-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                )}
              >
                {category}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-full origin-left bg-white transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {rest.map((project, index) => {
              const isWide = rest.length % 2 === 1 && index === rest.length - 1;
              return isWide ? (
                <div key={project.title} className="md:col-span-2">
                  <WideProject project={project} />
                </div>
              ) : (
                <CompactProject
                  key={project.title}
                  project={project}
                  index={index}
                />
              );
            })}
          </div>
        )}
      </SectionWrapper>
    </section>
  );
}
