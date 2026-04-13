"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#what-i-do" },
  { label: "Education", href: "#education" },
  { label: "Milestones", href: "#milestones" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Current", href: "#current-focus" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-neon-blue/10 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-neon-blue/10 text-silver-dim hover:text-neon-blue transition-all duration-300"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-[18px] h-[18px]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-[18px] h-[18px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [indicatorPos, setIndicatorPos] = useState({ left: 0, width: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 500);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update animated indicator position when activeSection changes
  useEffect(() => {
    const activeHref = `#${activeSection}`;
    const activeLinkEl = linkRefs.current.get(activeHref);
    if (activeLinkEl && navContainerRef.current) {
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const linkRect = activeLinkEl.getBoundingClientRect();
      setIndicatorPos({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  }, [activeSection]);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[4px] scroll-progress-container">
        <div
          className="h-full bg-gradient-to-r from-neon-blue to-neon-glow scroll-progress-glow scroll-progress-enhanced"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
        {/* Sparkle at leading edge */}
        {scrollProgress > 0.01 && (
          <div
            className="scroll-sparkle"
            style={{ left: `${scrollProgress * 100}%` }}
          />
        )}
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-[4px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-surface-soft)] backdrop-blur-2xl border-b border-cyber-border shadow-lg shadow-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="text-lg sm:text-xl font-bold text-silver hover:text-neon-blue transition-colors duration-300"
            >
              <span className="text-neon-blue">{"<"}</span>
              SM
              <span className="text-neon-blue">{"/>"}</span>
            </a>

            {/* Desktop Nav */}
            <div
              ref={navContainerRef}
              className="hidden lg:flex items-center gap-0.5 relative"
            >
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    ref={(el) => {
                      if (el) {
                        linkRefs.current.set(link.href, el);
                      }
                    }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-neon-blue"
                        : "text-silver-dim hover:text-neon-blue"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              {/* Animated underline indicator */}
              <motion.div
                className="absolute bottom-0 h-[2px] bg-neon-blue rounded-full"
                animate={{
                  left: indicatorPos.left,
                  width: indicatorPos.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
              {/* Theme Toggle (Desktop) */}
              <div className="ml-2 pl-2 border-l border-cyber-border">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile: Theme + Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neon-blue/10 text-silver-dim hover:text-neon-blue transition-all duration-300"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-cyber-darker/95 backdrop-blur-xl border-b border-cyber-border lg:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-neon-blue bg-neon-blue/10"
                          : "text-silver-dim hover:text-neon-blue hover:bg-neon-blue/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/30 rounded-full text-neon-blue backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
