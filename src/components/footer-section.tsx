"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Heart, MapPin } from "lucide-react";

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
  return (
    <footer className="relative mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/50 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
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

          {/* Email */}
          <a
            href="mailto:maneshreyash16@gmail.com"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-glow transition-colors duration-300 text-sm font-medium mb-6"
          >
            <Mail className="w-4 h-4" />
            maneshreyash16@gmail.com
          </a>

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
                  className="text-silver-dim hover:text-neon-blue text-sm transition-colors duration-300"
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
