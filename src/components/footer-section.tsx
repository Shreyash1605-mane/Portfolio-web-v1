"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Heart, ArrowUpRight, ExternalLink, Terminal } from "lucide-react";
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

  const scrollToSection = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <footer className="relative mt-auto">
      {/* Animated gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/60 via-cyber-darker/20 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Minimalist CTA Banner */}
          <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neon-blue/10 via-neon-blue/5 to-neon-glow/10 border border-neon-blue/20 relative overflow-hidden elevated-card">
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] pointer-events-none" />
            {/* Decorative floating dots */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-blue/30 animate-pulse" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-neon-blue/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 right-12 w-1 h-1 rounded-full bg-neon-glow/30 animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-silver mb-3">
                Let&apos;s Build Something{" "}
                <span className="animated-gradient-text">Amazing Together</span>
              </h3>
              <p className="text-silver-dim text-sm max-w-lg mx-auto mb-6">
                Have a project idea or just want to connect? I&apos;m always open to new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue hover:bg-neon-blue/90 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/35 hover:scale-[1.02]"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-cyber-border hover:border-neon-blue/40 text-silver hover:text-neon-blue font-bold rounded-lg transition-all duration-300 hover:bg-neon-blue/5"
                >
                  <Terminal className="w-4 h-4" />
                  View Resume
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Name + Code-style branding */}
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-silver mb-2">
              <span className="text-neon-blue">{"<"}</span>
              Shreyash Mane
              <span className="text-neon-blue">{"/>"}</span>
            </h3>
            <p className="text-silver-dim text-sm">
              National Level Silver Medalist &bull; Cybersecurity &bull; Data Science
            </p>
          </div>

          {/* Social Links — Email + GitHub + LinkedIn */}
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

          {/* Copyright */}
          <p className="text-silver-dim/60 text-xs flex items-center justify-center gap-1.5">
            Designed & Built with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            by Shreyash Mane &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
