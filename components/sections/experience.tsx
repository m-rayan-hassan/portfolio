import SectionWrapper from "@/components/ui/section-wrapper";
import Eyebrow from "@/components/ui/eyebrow";

const roles = [
  {
    period: "Jul 2026 — Sep 2026",
    title: "Full Stack AI Engineering Intern",
    company: "Operant Labs & Elite-Filing, NASTP",
    bullets: [
      "AI Clinical Intelligence Platform: owned end-to-end development of the governance layer (RBAC, review screens, CMO approval state machine), and maintained the Node.js/Express service calling the FastAPI AI service.",
      "Operant OS: shipped full-stack features for HRMS, CRM, and billing workflows, and designed n8n automation workflows that integrate LLM calls to replace manual operations.",
    ],
  },
  {
    period: "Jan 2026 — Feb 2026",
    title: "Team Lead, AI Engineering",
    company: "Cognivio AI (ICAT Project), NUTECH",
    bullets: [
      "Led faculty-supervised research into retrieval-augmented generation for document-grounded AI tutoring, and designed the RAG pipeline.",
      "Prototyped a hybrid PDF-extraction approach and adopted LlamaParse for production-grade parsing of text, diagrams, and figures.",
      "Directed the team\u2019s research and build-out of a real-time voice AI tutor that runs spoken discussion and oral-exam-style review sessions.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-paper border-t border-neutral-900/10"
    >
      <SectionWrapper className="py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          {/* Section head, held in place while the timeline scrolls */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Eyebrow index="02" label="Experience" />

              <h2 className="mt-7 font-display text-[clamp(2.1rem,4.2vw,3rem)] leading-[1.04] text-neutral-900">
                Where I&apos;ve
                <br />
                <span className="italic text-neutral-500">done the work.</span>
              </h2>

              <p className="mt-6 max-w-xs text-[15.5px] leading-[1.75] text-neutral-600">
                Two production teams: governed AI for clinicians, and
                full-stack platforms for education and operations.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-8">
            <ol>
              {roles.map((role) => (
                <li
                  key={role.title}
                  className="relative border-l border-neutral-900/15 pb-12 pl-8 last:border-transparent last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5.5px] top-[6px] h-[11px] w-[11px] rounded-full border border-neutral-900/40 bg-[#f7f5f1] ring-4 ring-[#f7f5f1]"
                  />

                  <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-neutral-500">
                    {role.period}
                  </p>

                  <h3 className="mt-3 font-display text-[1.6rem] leading-[1.12] text-neutral-900">
                    {role.title}
                  </h3>

                  <p className="mt-1.5 text-[15px] text-neutral-600">
                    {role.company}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[15px] leading-[1.72] text-neutral-700"
                      >
                        <span
                          className="mt-[0.78em] h-px w-3 shrink-0 bg-neutral-400"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
