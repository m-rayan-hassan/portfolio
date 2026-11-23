"use client";

import { useState } from "react";
import Link from "next/link";
import {
    AlertCircle,
    ArrowUpRight,
    CheckCircle,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Eyebrow from "@/components/ui/eyebrow";

const EMAIL = "rayanhassan200691@gmail.com";

const profiles = [
    {
        label: "GitHub",
        value: "m-rayan-hassan",
        href: "https://github.com/m-rayan-hassan",
        icon: Github,
    },
    {
        label: "LinkedIn",
        value: "Muhammad Rayan Hassan",
        href: "https://www.linkedin.com/in/muhammad-rayan-hassan-ab6a93327/",
        icon: Linkedin,
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Message sent. I\u2019ll get back to you soon.",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.error || "Failed to send. Please try again.",
                });
            }
        } catch {
            setSubmitStatus({
                type: "error",
                message: "Failed to send. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const fieldClass =
        "w-full border-b border-neutral-900/20 bg-transparent pb-2.5 pt-1 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900";
    const labelClass =
        "font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500";

    return (
        <section id="contact" className="section-paper">
            <SectionWrapper className="py-24 md:py-32">
                <div className="overflow-hidden rounded-[4px] border border-neutral-900/12 md:grid md:grid-cols-2">
                    {/* Details */}
                    <div className="flex flex-col bg-[#0a0a0a] p-8 text-white sm:p-10 lg:p-12">
                        <Eyebrow
                            index="06"
                            label="Contact"
                            className="text-white"
                        />

                        <h2 className="mt-8 font-display text-[clamp(1.95rem,3.2vw,2.6rem)] leading-[1.06] text-white">
                            Let&apos;s build something
                            <br />
                            <span className="italic text-white/45">
                                that holds up.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-sm text-[15.5px] leading-[1.75] text-white/65">
                            Have a question, an idea, or something you&apos;d
                            like to work through together? Share a little about
                            what you have in mind and I&apos;ll reply
                            personally.
                        </p>

                        <a
                            href={`mailto:${EMAIL}`}
                            className="group mt-10 border-t border-white/15 pt-6"
                        >
                            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                                Email
                            </span>
                            <span className="mt-2.5 flex items-center justify-between gap-4 font-display text-[clamp(1.05rem,1.7vw,1.35rem)] leading-tight text-white">
                                <span className="truncate">{EMAIL}</span>
                                <ArrowUpRight
                                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </span>
                        </a>

                        <div className="mt-5 flex items-center gap-2.5 text-[14px] text-white/60">
                            <MapPin
                                className="h-4 w-4 shrink-0"
                                aria-hidden="true"
                            />
                            Islamabad, Pakistan / Remote
                        </div>

                        <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                            {profiles.map(({ label, href, icon: Icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] text-white/75 transition-colors hover:border-white/40 hover:text-white"
                                >
                                    <Icon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col bg-white p-8 sm:p-10 lg:p-12">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                            New message
                        </p>
                        <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-neutral-900">
                            Tell me about it
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-1 flex-col"
                        >
                            <div className="space-y-7">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className={labelClass}
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className={fieldClass}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className={labelClass}
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className={fieldClass}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className={labelClass}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="A few lines about what you have in mind..."
                                        required
                                        className={`${fieldClass} resize-none`}
                                    />
                                </div>
                            </div>

                            {submitStatus.type && (
                                <div
                                    className={`mt-7 flex items-start gap-2 border px-3.5 py-2.5 text-[13px] leading-relaxed ${
                                        submitStatus.type === "success"
                                            ? "border-neutral-900/12 bg-neutral-50 text-neutral-700"
                                            : "border-red-200 bg-red-50 text-red-700"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="mt-px h-3.5 w-3.5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" />
                                    )}
                                    <span>{submitStatus.message}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary mt-9 w-full disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
                                        Sending
                                    </>
                                ) : (
                                    <>
                                        <Send
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                        Send message
                                    </>
                                )}
                            </button>

                            <p className="mt-4 flex items-center gap-2 text-[12.5px] text-neutral-500">
                                <Mail
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                                Replies usually within a day.
                            </p>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
