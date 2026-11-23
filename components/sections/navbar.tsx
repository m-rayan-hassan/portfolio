"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "@/components/ui/logo";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/m-rayan-hassan",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/",
    icon: Linkedin,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section, footer")
    );

    /* A section's background never changes, so resolve each one once instead
       of asking for computed styles on every scroll frame. */
    const surfaces = new WeakMap<HTMLElement, boolean>();

    const isDarkSurface = (el: HTMLElement) => {
      const cached = surfaces.get(el);
      if (cached !== undefined) return cached;

      let dark = true;
      const m = getComputedStyle(el).backgroundColor.match(/\d+/g);
      if (m) {
        const brightness =
          (parseInt(m[0]) * 299 +
            parseInt(m[1]) * 587 +
            parseInt(m[2]) * 114) /
          1000;
        dark = brightness < 128;
      }
      surfaces.set(el, dark);
      return dark;
    };

    let frame = 0;

    /* One read pass per animation frame, never per scroll event */
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);

      /* Detect if the navbar overlaps a dark or light section */
      const navY = 34;
      let dark = true;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navY && rect.bottom >= navY) {
          dark = isDarkSurface(sec);
          break;
        }
      }
      setOnDark(dark);
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    measure();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  /* Lock the page behind the full-screen menu */
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const textBase = onDark ? "text-neutral-300" : "text-neutral-600";
  const textHover = onDark ? "hover:text-white" : "hover:text-black";
  const brandText = onDark ? "text-zinc-100" : "text-zinc-900";
  const ctaClasses = onDark
    ? "bg-white text-black hover:bg-neutral-200"
    : "bg-[#0d0d0d] text-white hover:bg-black";

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        isOpen
          ? "border-b border-transparent bg-[#070707]"
          : scrolled
            ? onDark
              ? "border-b border-white/[0.08] bg-[#070707]/85 backdrop-blur-xl"
              : "border-b border-black/[0.07] bg-[#f7f5f1]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="relative z-50 mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-6">
        {/* Brand */}
        <Link
          href="/"
          className={cn(
            "group transition-colors",
            brandText,
            !onDark && "text-neutral-900"
          )}
          aria-label="Rayan Hassan, home"
        >
          <Wordmark
            markClassName="h-[36px] w-[36px]"
            markSrc={isOpen || onDark ? "/logo.png" : "/logo2.png"}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative py-1 text-[13.5px] tracking-[-0.005em] transition-colors",
                  isActive
                    ? onDark
                      ? "text-white"
                      : "text-black"
                    : textBase + " " + textHover
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-300",
                    isActive ? "scale-x-100 opacity-70" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-3.5">
            {socials.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className={cn("transition-colors", textBase, textHover)}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <span
            className={cn("h-4 w-px", onDark ? "bg-white/15" : "bg-black/15")}
          />
          <Link
            href="#contact"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-colors active:translate-y-px",
              ctaClasses
            )}
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "p-2 md:hidden",
            isOpen ? "text-white" : cn(textBase, textHover)
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#070707] px-6 pb-10 pt-24 md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4"
                >
                  <span className="font-display text-[1.85rem] leading-none text-white/90">
                    {item.name}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-5">
                {socials.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
