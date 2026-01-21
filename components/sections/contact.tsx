"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Illustration / Text */}
        <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's Work Together
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
                Have an idea? Let's turn it into reality. Whether you need a full-stack application, a stunning website, or AI integration, I'm here to help.
            </p>
            
            <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm text-zinc-500">Email</p>
                        <p className="text-white font-medium">rayanhassan200691@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm text-zinc-500">Location</p>
                        <p className="text-white font-medium">Remote / Worldwide</p>
                    </div>
                </div>
            </div>

            {/* Space Illustration Placeholder */}
            <div className="relative mt-8 h-64 w-full bg-space-blue-dark/20 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center group">
                 <div className="absolute inset-0 bg-stars-pattern opacity-50" />
                 <div className="text-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl">🚀</span>
                    <p className="mt-4 text-neon-cyan font-mono text-sm">Ready for liftoff?</p>
                 </div>
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Name <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email <span className="text-red-500">*</span></label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Message <span className="text-red-500">*</span></label>
                    <textarea 
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..." 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                    />
                </div>

                {/* Success/Error Messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </motion.div>
                )}

                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className={`cursor-pointer w-full bg-gradient-to-r from-neon-blue-light to-blue-600 hover:from-neon-blue hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                </motion.button>
            </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
