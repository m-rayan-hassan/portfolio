import Link from "next/link";
import { ArrowUpRight, Award, BadgeCheck, Trophy } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Eyebrow from "@/components/ui/eyebrow";

const blocks = [
  {
    icon: Trophy,
    label: "Hackathon",
    title: "Field Beyond",
    meta: "NASA Space Apps Challenge — Planetary Terrain Comparison Platform",
    points: [
      "Built a platform that matches selected Moon and Mars regions to similar Earth terrain, helping researchers find sites to test rovers and exploration technologies.",
    ],
  },
  {
    icon: Award,
    label: "Award",
    title: "Finalist, IEEE Hackathon",
    meta: "Webathon — Productivity Leak Detector, built in six hours",
    points: [
      "Built an AI web app that analyzes daily routine logs to identify time inefficiencies and generate actionable fixes.",
      "Integrated Clerk authentication, the OpenAI API, and MongoDB inside the hackathon's time constraint.",
    ],
  },
  {
    icon: BadgeCheck,
    label: "Certification",
    title: "Complete Web Development Bootcamp",
    meta: "Udemy — full-stack curriculum",
    points: [
      "HTML/CSS, JavaScript, Node.js, PostgreSQL, MongoDB, React and Next.js.",
      "Built multiple REST APIs and AI-integrated applications from scratch.",
    ],
    href: "https://www.udemy.com/certificate/UC-557a2637-383d-494b-9bdf-9d578f99cd03/",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-ink">
      <SectionWrapper className="py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <Eyebrow index="05" label="Recognition" />
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.1rem)] leading-[1.03] text-white">
              Hackathons, awards
              <br />
              <span className="italic text-white/45">&amp; certifications</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-sm text-[15px] leading-[1.7] text-white/60">
              The work that has been judged, ranked or certified — competitive
              builds under real constraints, and the training underneath them.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-white/12 bg-white/12 md:grid-cols-3">
          {blocks.map(({ icon: Icon, ...block }) => (
            <div
              key={block.title}
              className="flex flex-col bg-[#070707] p-7 lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.03] text-white/80">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/45">
                  {block.label}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[clamp(1.3rem,1.8vw,1.55rem)] leading-[1.15] text-white">
                {block.title}
              </h3>

              <p className="mt-2.5 text-[13.5px] leading-[1.6] text-white/55">
                {block.meta}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                {block.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-[14px] leading-[1.65] text-white/65"
                  >
                    <span
                      className="mt-[0.7em] h-px w-3 shrink-0 bg-white/35"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {block.href && (
                <Link
                  href={block.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-draw mt-6 inline-flex items-center gap-1.5 self-start font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
                >
                  Certificate
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
