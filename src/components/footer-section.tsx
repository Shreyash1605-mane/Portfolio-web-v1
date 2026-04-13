"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Heart, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { useCallback, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:maneshreyash16@gmail.com",
    icon: Mail,
    label: "maneshreyash16@gmail.com",
  },
  {
    name: "GitHub",
    href: "#",
    icon: Github,
    label: "View GitHub Profile",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
];

export default function FooterSection() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("maneshreyash16@gmail.com").then(() => {
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Email address copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  }, [toast]);

  return (
    <footer className="relative mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/50 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* CTA Banner */}
          <div className="mb-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neon-blue/10 via-neon-blue/5 to-neon-glow/10 border border-neon-blue/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_rgba(255,155,81,0.08)_0%,_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-neon-blue" />
                <p className="text-neon-blue font-mono text-xs tracking-wider uppercase">
                  Open to collaborate
                </p>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-silver mb-3">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-silver-dim text-sm max-w-lg mx-auto mb-6">
                Whether you have a project idea, need a cybersecurity consultation, or just want to connect — I&apos;m always open to new opportunities.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neon-blue hover:bg-neon-blue/90 text-silver font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/15 hover:shadow-neon-blue/30 hover:scale-[1.02]"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-silver mb-2">
            Shreyash Mane
          </h3>
          <div className="flex items-center justify-center gap-2 text-silver-dim text-sm mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Maharashtra, India</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-card border border-cyber-border hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/10"
                aria-label={link.label}
                title={link.label}
              >
                <link.icon className="w-5 h-5 text-silver-dim group-hover:text-neon-blue transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Email with copy button */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-glow transition-colors duration-300 text-sm font-medium mb-6 group"
          >
            <Mail className="w-4 h-4" />
            maneshreyash16@gmail.com
            <span className={`inline-flex items-center justify-center w-4 h-4 rounded text-[10px] transition-all duration-300 ${copied ? "text-emerald-400 scale-110" : "text-silver-dim opacity-0 group-hover:opacity-100"}`}>
              {copied ? "✓" : "Copy"}
            </span>
          </button>

          {/* Divider */}
          <div className="w-16 h-px bg-cyber-border mx-auto mb-6" />

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#what-i-do" },
              { label: "Education", href: "#education" },
              { label: "Milestones", href: "#milestones" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ].map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-silver-dim hover:text-neon-blue text-sm transition-colors duration-300 animated-underline"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="text-silver-dim text-xs flex items-center justify-center gap-1.5">
            Designed & Built with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            by Shreyash Mane &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
