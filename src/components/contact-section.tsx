"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  Loader2,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MAX_MESSAGE_LENGTH = 500;

const presetMessages = [
  "Let's collaborate on a project",
  "I have a cybersecurity opportunity",
  "Just wanted to say hi!",
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const messageLength = formData.message.length;
  const isNearMax = messageLength > 450;

  const handlePresetMessage = (preset: string) => {
    setFormData((prev) => ({ ...prev, message: preset }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("maneshreyash16@gmail.com");
      setEmailCopied(true);
      toast({
        title: "Email Copied!",
        description: "maneshreyash16@gmail.com has been copied to your clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      toast({
        title: "Copy Failed",
        description: "Could not copy the email address. Please copy it manually.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact?XTransformPort=3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.details?.[0]?.message || data.error || "Something went wrong.";
        setError(msg);
        return;
      }

      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: `Thanks ${formData.name}! Your message has been saved successfully.`,
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
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

            {/* Social Media Links */}
            <div className="p-6 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.04]">
              <h3 className="text-lg font-bold text-silver mb-4">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyber-border bg-cyber-dark/50 text-silver-dim text-sm font-medium transition-all duration-300 hover:border-neon-blue/50 hover:text-neon-blue hover:bg-neon-blue/5"
                    >
                      <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 dark:bg-emerald-400/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <p className="text-sm font-medium text-emerald-400">
                  Available for opportunities
                </p>
              </div>
              <p className="text-silver-dim text-sm mb-4">
                Open to internships, hackathons, and collaborative projects in
                cybersecurity, data science, and web development.
              </p>
              {/* Response time badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/15">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Usually responds within 24 hours</span>
              </div>
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
            {/* Quick Message Presets */}
            <div className="mb-4 flex flex-wrap gap-2">
              {presetMessages.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetMessage(preset)}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-cyber-border bg-cyber-dark/50 text-silver-dim text-xs font-medium transition-all duration-300 hover:border-neon-blue/40 hover:text-neon-blue hover:bg-neon-blue/5 cursor-pointer"
                >
                  {preset}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.04] space-y-5 premium-card-accent focus-within-glow"
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
                    maxLength={MAX_MESSAGE_LENGTH}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-border rounded-lg text-silver placeholder:text-silver-dim/50 text-sm transition-all duration-300 resize-none"
                  />
                </div>
                {/* Character count indicator */}
                <div className="mt-1.5 text-right">
                  <span
                    className={`text-xs transition-colors duration-300 ${
                      isNearMax
                        ? "text-red-400 font-medium"
                        : "text-silver-dim"
                    }`}
                  >
                    {messageLength}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>
              </div>
              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </motion.div>
              )}
              <button
                type="submit"
                disabled={submitted || sending}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neon-blue hover:bg-neon-blue/90 text-silver font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/15 hover:shadow-neon-blue/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Prefer Email CTA */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center gap-1.5 text-xs text-silver-dim hover:text-neon-blue transition-colors duration-300 cursor-pointer mt-2"
              >
                Prefer to email directly?{" "}
                <span className="underline underline-offset-2 decoration-silver-dim/40 group-hover:decoration-neon-blue/50 transition-colors duration-300">
                  maneshreyash16@gmail.com
                </span>
                <span className="inline-flex ml-0.5">
                  {emailCopied ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
