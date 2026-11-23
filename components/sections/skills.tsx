import SectionWrapper from "@/components/ui/section-wrapper";
import Eyebrow from "@/components/ui/eyebrow";
import {
  Cpu,
  BrainCircuit,
  FileSearch,
  DatabaseZap,
  Code2,
  Server,
  Database,
  Shield,
  Workflow,
  Lock,
  Zap,
} from "lucide-react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiVercel,
  SiStripe,
  SiExpress,
  SiFastapi,
  SiAmazonwebservices,
} from "react-icons/si";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type IconComponent = IconType | LucideIcon;

interface Skill {
  name: string;
  icon: IconComponent;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Remotion", icon: Code2 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: Server },
      { name: "Redis", icon: SiRedis },
      { name: "BullMQ", icon: Zap },
      { name: "Clerk", icon: Lock },
      { name: "NextAuth.js", icon: Shield },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "NeonDB", icon: Database },
      { name: "Prisma", icon: DatabaseZap },
      { name: "Drizzle", icon: DatabaseZap },
    ],
  },
  {
    title: "AI / LLM & ML",
    skills: [
      { name: "OpenAI & Gemini", icon: BrainCircuit },
      { name: "LangChain", icon: Workflow },
      { name: "RAG & Vector Search", icon: FileSearch },
      { name: "XGBoost", icon: Cpu },
      { name: "scikit-learn", icon: Code2 },
    ],
  },
  {
    title: "DevOps, Tools & APIs",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
      { name: "n8n", icon: Workflow },
      { name: "Stripe", icon: SiStripe },
      { name: "Git & Linux", icon: FaLinux },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-paper">
      <SectionWrapper className="py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <Eyebrow index="04" label="Stack" />
            <h2 className="mt-6 text-[clamp(2.1rem,4.4vw,3.1rem)] leading-[1.03] text-neutral-900">
              Technologies &amp; tools
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-sm text-[15px] leading-[1.7] text-neutral-600">
              The frameworks, languages, and platforms I use to build scalable,
              reliable web systems and AI workflows.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-900/10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-4 border-b border-neutral-900/10 py-7 md:grid-cols-12 md:gap-8"
            >
              <h3 className="font-mono text-[11px] uppercase leading-[2.1] tracking-[0.14em] text-neutral-500 md:col-span-3">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-x-7 gap-y-3.5 md:col-span-9">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="group inline-flex items-center gap-2 text-[14.5px] text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      <Icon
                        className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-neutral-700"
                        aria-hidden="true"
                      />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
