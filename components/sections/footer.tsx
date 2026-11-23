import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Wordmark } from "@/components/ui/logo";

const index = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Recognition", href: "#achievements" },
];

const elsewhere = [
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
  {
    name: "Email",
    href: "mailto:rayanhassan200691@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="section-paper border-t border-neutral-900/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link
              href="/"
              className="inline-flex text-neutral-900"
              aria-label="Rayan Hassan, home"
            >
              <Wordmark
                markClassName="h-9 w-9"
                markSrc="/logo2.png"
                className="gap-2.5"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-[1.7] text-neutral-600">
              Building systems that work, and AI that can prove it.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Index
            </p>
            <ul className="mt-4 space-y-2.5">
              {index.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="link-draw text-[14px] text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2.5">
              {elsewhere.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <Link
                    href={href}
                    target={name === "Email" ? undefined : "_blank"}
                    rel={name === "Email" ? undefined : "noreferrer"}
                    className="group inline-flex items-center gap-2 text-[14px] text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <Icon
                      className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-neutral-800"
                      aria-hidden="true"
                    />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            &copy; {new Date().getFullYear()} Muhammad Rayan Hassan
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            Islamabad, Pakistan
          </p>
          <Link
            href="#home"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
