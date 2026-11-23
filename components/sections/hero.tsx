"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import {
  SiAmazonwebservices,
  SiDocker,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const ExpertiseGlobe = dynamic(() => import("@/components/ui/globe-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] w-full max-w-[540px] items-center justify-center sm:h-[460px] lg:h-[520px]">
      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30" />
    </div>
  ),
});

const socials = [
  { name: "GitHub", href: "https://github.com/m-rayan-hassan", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/",
    icon: Linkedin,
  },
];

const stack = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Docker", icon: SiDocker },
];

const ROLES = [
  "Full Stack AI Engineer",
  "Computer Science Student",
  "Applied AI Systems Builder",
];

const MASK =
  "radial-gradient(ellipse 78% 68% at 48% 34%, #000 32%, transparent 100%)";

function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Technical grid, faded at the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "66px 66px",
          maskImage: MASK,
          WebkitMaskImage: MASK,
        }}
      />

      {/* Both washes are painted as gradients rather than blurred layers: a
          130px blur filter on a large element is one of the most expensive
          things a page can composite while scrolling. */}
      <div
        className="absolute -right-[12%] top-[2%] h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.03) 40%, transparent 72%)",
        }}
      />

      <div
        className="absolute -left-[16%] top-[14%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.022) 42%, transparent 74%)",
        }}
      />

      {/* Film grain keeps the flat black from feeling empty */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

/* Rotating role line: types, holds, deletes, moves on. Static for reduced motion. */
function RoleTicker() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(ROLES[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    /* Reduced motion keeps the first role on screen, no typing */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = ROLES[wordIndex];

    let delay = deleting ? 26 : 52;
    if (!deleting && text === word) delay = 2100;
    if (deleting && text === "") delay = 280;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % ROLES.length);
        return;
      }
      setText(
        deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <p className="hero-enter mt-5 flex h-6 items-center font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-300 sm:text-[12.5px] sm:tracking-[0.16em]">
      <span aria-hidden="true" className="whitespace-nowrap">
        {text}
        <span className="caret" />
      </span>
      <span className="sr-only">{ROLES.join(", ")}</span>
    </p>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Pointer spotlight: cheap, one CSS variable, disabled for touch/reduced motion */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };

    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-svh overflow-x-clip bg-[#070707]"
    >
      <HeroBackdrop />

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(460px circle at var(--mx, 72%) var(--my, 26%), rgba(255,255,255,0.05), transparent 68%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-6 pb-12 pt-28 md:pt-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Text */}
          <div className="lg:col-span-6">
            <div
              className="hero-enter flex items-center gap-3"
              style={{ animationDelay: "0.04s" }}
            >
              <span className="h-px w-8 bg-white/25" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-200">
                Muhammad Rayan Hassan
              </span>
            </div>

            <h1
              className="hero-enter mt-7 text-[2.5rem] leading-[1.04] text-white sm:text-[3rem] lg:text-[3.4rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Production systems.
              <span className="mt-1 block italic text-neutral-400">
                AI you can audit.
              </span>
            </h1>

            <RoleTicker />

            <p
              className="hero-enter mt-6 max-w-xl text-[16px] leading-[1.75] text-neutral-300"
              style={{ animationDelay: "0.24s" }}
            >
              Full Stack AI Engineer and CS student. I build scalable
              applications by integrating clean system architecture with
              auditable AI reasoning, creating production-ready tools that
              people can trust.
            </p>

            <div className="hero-enter mt-9" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="#projects" className="btn btn-primary group">
                  See the work
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link href="#contact" className="btn btn-ghost">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-6">
                {socials.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] text-neutral-400 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Globe */}
          <div
            className="hero-enter-settle relative flex items-center justify-center lg:col-span-6 lg:justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <ExpertiseGlobe />
          </div>
        </div>

        {/* Stack strip */}
        <div
          className="hero-enter-fade mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "0.44s" }}
        >
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {stack.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-neutral-100"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="#about"
            className="group hidden items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-neutral-100 sm:inline-flex"
          >
            Scroll
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-transform duration-200 group-hover:translate-y-0.5">
              <ArrowDown className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
