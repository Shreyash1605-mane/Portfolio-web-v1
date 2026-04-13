"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Hero" },
  { id: "what-i-do", label: "About" },
  { id: "education", label: "Education" },
  { id: "milestones", label: "Milestones" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "current", label: "Current" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before showing to avoid layout shift
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-1"
          aria-label="Section navigation"
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div key={section.id} className="relative flex items-center group">
                {/* Tooltip */}
                <AnimatePresence>
                  {(isActive || isHovered) && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-8 whitespace-nowrap text-xs font-medium text-silver dark:text-silver bg-cyber-card dark:bg-cyber-card border border-cyber-border dark:border-cyber-border px-2.5 py-1 rounded-md shadow-lg pointer-events-none"
                    >
                      {section.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <button
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className={`rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "w-3 h-3 bg-neon-blue shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                      : "w-2 h-2 bg-cyber-border dark:bg-cyber-border hover:bg-neon-blue/50 hover:scale-125"
                  }`}
                  aria-label={`Navigate to ${section.label} section`}
                />
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
