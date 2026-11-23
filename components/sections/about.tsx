import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Eyebrow from "@/components/ui/eyebrow";

const facts = [
  {
    label: "Experience",
    value: "Full Stack AI Engineering Intern & Team Lead",
  },
  { label: "Specialty", value: "Full Stack AI Engineering" },
  {
    label: "Focus",
    value: "Applied AI Systems, Clean Architecture, Scalable Web Apps",
  },
];

export default function About() {
  return (
    <section id="about" className="section-paper">
      <SectionWrapper className="py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Intro */}
          <div className="md:col-span-5">
            <Eyebrow index="01" label="About" />

            <h2 className="mt-7 text-[clamp(2.1rem,4.6vw,3.1rem)] leading-[1.02] text-neutral-900">
              Muhammad Rayan
              <br />
              Hassan
            </h2>

            <p className="mt-4 font-mono text-[11.5px] uppercase tracking-[0.16em] text-neutral-500">
              Full Stack AI Engineer
            </p>

            <p className="mt-7 max-w-md text-[16px] leading-[1.75] text-neutral-600">
              My background spans full-stack engineering and applied AI/LLM
              systems, with production experience building retrieval-augmented,
              agentic AI tools in safety-critical domains such as healthcare and
              education, alongside practical productivity and automation tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="#projects"
                className="link-draw inline-flex items-center gap-1.5 text-[13.5px] font-medium text-neutral-900"
              >
                View projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="link-draw inline-flex items-center gap-1.5 text-[13.5px] font-medium text-neutral-900"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Facts + about text */}
          <div className="md:col-span-7 md:pl-10">
            <dl className="border-t border-neutral-900/10">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-3 gap-4 border-b border-neutral-900/10 py-5"
                >
                  <dt className="font-mono text-[11px] uppercase leading-[1.7] tracking-[0.14em] text-neutral-500">
                    {fact.label}
                  </dt>
                  <dd className="col-span-2 text-[15px] leading-[1.65] text-neutral-800">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 max-w-xl">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                About me
              </h3>
              <p className="mt-4 text-[16px] leading-[1.8] text-neutral-600">
                I am a Full Stack AI Engineer and CS student focused on
                integrating clean system architecture with auditable AI
                reasoning. My experience runs from designing robust REST APIs
                and data models to building retrieval-augmented generation and
                agentic workflows. I keep AI-assisted decisions human-reviewed
                rather than fully autonomous, so the systems I ship stay
                reliable and production-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 border-t border-neutral-900/10 pt-10 md:mt-24">
          <div className="grid gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                Education
              </h3>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
                <div className="sm:col-span-7">
                  <p className="text-[18px] font-medium tracking-tight text-neutral-900">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="mt-2 text-[15px] text-neutral-600">
                    National University of Technology (NUTECH)
                  </p>
                  <p className="mt-1 text-[14px] text-neutral-500">
                    Islamabad, Pakistan
                  </p>
                </div>
                <div className="sm:col-span-5 sm:text-right">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    CGPA
                  </p>
                  <p className="mt-1.5 text-[16px] text-neutral-900">
                    3.55 / 4.0
                  </p>
                  <p className="mt-1 font-mono text-[12px] tracking-[0.1em] text-neutral-500">
                    2024 — 2028
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
