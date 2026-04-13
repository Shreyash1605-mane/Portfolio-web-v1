"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:maneshreyash16@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/30 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-blue font-mono text-sm mb-3 tracking-wider">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="shimmer-text">Connect</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind or just want to say hi? I&apos;d love to hear
            from you.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact card */}
            <div className="p-6 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.04]">
              <h3 className="text-lg font-bold text-silver mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neon-blue/10 shrink-0">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-silver-dim mb-1">Email</p>
                    <a
                      href="mailto:maneshreyash16@gmail.com"
                      className="text-sm text-silver hover:text-neon-blue transition-colors duration-300 break-all"
                    >
                      maneshreyash16@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neon-blue/10 shrink-0">
                    <User className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-silver-dim mb-1">Location</p>
                    <p className="text-sm text-silver">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <p className="text-sm font-medium text-emerald-400">
                  Available for opportunities
                </p>
              </div>
              <p className="text-silver-dim text-sm">
                Open to internships, hackathons, and collaborative projects in
                cybersecurity, data science, and web development.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.04] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-silver mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-dim" />
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-border rounded-lg text-silver placeholder:text-silver-dim/50 text-sm transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-silver mb-2"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-dim" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-border rounded-lg text-silver placeholder:text-silver-dim/50 text-sm transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-silver mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-silver-dim" />
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-border rounded-lg text-silver placeholder:text-silver-dim/50 text-sm transition-all duration-300 resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neon-blue hover:bg-neon-blue/90 text-silver font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/15 hover:shadow-neon-blue/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Opening Email Client
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
