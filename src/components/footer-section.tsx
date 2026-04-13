"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Heart, MapPin, ArrowUpRight, Sparkles, ExternalLink, Terminal } from "lucide-react";
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

const quickStats = [
  { label: "Projects", value: "3+" },
  { label: "Awards", value: "3" },
  { label: "Certifications", value: "4" },
  { label: "Technologies", value: "8+" },
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

  const scrollToSection = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <footer className="relative mt-auto">
      {/* Animated gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />

      {/* Background with pattern dots */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/60 via-cyber-darker/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* CTA Banner with gradient border glow */}
          <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neon-blue/10 via-neon-blue/5 to-neon-glow/10 border border-neon-blue/20 relative overflow-hidden elevated-card">
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(255,155,81,0.1)_0%,_transparent_70%)] pointer-events-none" />
            {/* Decorative floating dots */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-blue/30 animate-pulse" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-neon-blue/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 right-12 w-1 h-1 rounded-full bg-neon-glow/30 animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-neon-blue" />
                <p className="text-neon-blue font-mono text-xs tracking-wider uppercase">
                  Open to collaborate
                </p>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-silver mb-3">
                Let&apos;s Build Something{" "}
                <span className="animated-gradient-text">Amazing Together</span>
              </h3>
              <p className="text-silver-dim text-sm max-w-lg mx-auto mb-6">
                Whether you have a project idea, need a cybersecurity consultation, or just want to connect — I&apos;m always open to new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue hover:bg-neon-blue/90 text-silver font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/15 hover:shadow-neon-blue/30 hover:scale-[1.02]"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-cyber-border hover:border-neon-blue/40 text-silver hover:text-neon-blue font-semibold rounded-lg transition-all duration-300 hover:bg-neon-blue/5"
                >
                  <Terminal className="w-4 h-4" />
                  View Resume
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center py-3 px-4 rounded-xl bg-cyber-card/40 border border-cyber-border/50 hover:border-neon-blue/20 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl font-bold text-neon-blue counter-value">
                  {stat.value}
                </div>
                <div className="text-xs text-silver-dim mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Name + Location */}
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-silver mb-2">
              <span className="text-neon-blue">{"<"}</span>
              Shreyash Mane
              <span className="text-neon-blue">{"/>"}</span>
            </h3>
            <div className="flex items-center justify-center gap-2 text-silver-dim text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Maharashtra, India</span>
              <span className="text-cyber-border mx-1">|</span>
              <span className="text-emerald-400 text-xs font-medium">Available for work</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-cyber-card border border-cyber-border hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/10"
                aria-label={link.label}
                title={link.label}
              >
                <link.icon className="w-[18px] h-[18px] text-silver-dim group-hover:text-neon-blue transition-colors duration-300" />
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
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyber-border to-transparent mx-auto mb-6" />

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#what-i-do" },
              { label: "Education", href: "#education" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map(
              (item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-silver-dim hover:text-neon-blue text-sm transition-colors duration-300 animated-underline"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="text-silver-dim/70 text-xs flex items-center justify-center gap-1.5">
            Designed & Built with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            by Shreyash Mane &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
