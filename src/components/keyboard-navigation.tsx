"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";

const sections = [
  { key: "1", id: "hero", label: "Home" },
  { key: "2", id: "what-i-do", label: "About" },
  { key: "3", id: "education", label: "Education" },
  { key: "4", id: "milestones", label: "Milestones" },
  { key: "5", id: "projects", label: "Projects" },
  { key: "6", id: "experience", label: "Experience" },
  { key: "7", id: "skills", label: "Skills" },
  { key: "8", id: "current", label: "Current Focus" },
  { key: "9", id: "testimonials", label: "Testimonials" },
  { key: "0", id: "contact", label: "Contact" },
];

export default function KeyboardNavigation() {
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Show hint after a delay
  useEffect(() => {
    const timer = setTimeout(() => setIsHintVisible(true), 6000);
    // Hide hint after 10s or on first scroll
    const hideOnScroll = () => setIsHintVisible(false);
    window.addEventListener("scroll", hideOnScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", hideOnScroll);
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't capture when typing in inputs
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      // Cmd/Ctrl + K to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
        setSearch("");
        return;
      }

      if (isPaletteOpen) {
        if (e.key === "Escape") {
          setIsPaletteOpen(false);
          return;
        }
        // Match search to section key
        const matched = sections.find(
          (s) =>
            s.key === e.key ||
            s.label.toLowerCase().startsWith(search.toLowerCase())
        );
        if (matched && e.key === "Enter") {
          const el = document.getElementById(matched.id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          setIsPaletteOpen(false);
          return;
        }
      }

      // Quick number key navigation (without palette)
      const section = sections.find((s) => s.key === e.key);
      if (section) {
        e.preventDefault();
        const el = document.getElementById(section.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsHintVisible(false);
      }
    },
    [isPaletteOpen, search]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredSections = search
    ? sections.filter(
        (s) =>
          s.label.toLowerCase().includes(search.toLowerCase()) ||
          s.id.toLowerCase().includes(search.toLowerCase())
      )
    : sections;

  return (
    <>
      {/* Keyboard hint */}
      <AnimatePresence>
        {isHintVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 z-50 hidden lg:block"
          >
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyber-card/80 border border-cyber-border backdrop-blur-sm text-silver-dim text-xs hover:text-silver hover:border-neon-blue/30 transition-all duration-300 shadow-lg shadow-black/5"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-cyber-dark border border-cyber-border text-[10px] font-mono">
                1-9
              </kbd>
              <span>to navigate</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Overlay */}
      <AnimatePresence>
        {isPaletteOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm"
              onClick={() => setIsPaletteOpen(false)}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-1/2 top-[15%] -translate-x-1/2 z-[151] w-[90%] max-w-lg"
            >
              <div className="rounded-2xl border border-cyber-border bg-cyber-card shadow-2xl shadow-black/20 overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-cyber-border">
                  <Command className="w-5 h-5 text-silver-dim shrink-0" />
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search sections..."
                    className="flex-1 bg-transparent text-silver placeholder:text-silver-dim/50 text-sm outline-none"
                  />
                  <kbd className="px-2 py-0.5 rounded bg-cyber-dark border border-cyber-border text-[10px] font-mono text-silver-dim">
                    ESC
                  </kbd>
                </div>

                {/* Section list */}
                <div className="max-h-[340px] overflow-y-auto p-2">
                  {filteredSections.length === 0 ? (
                    <p className="text-center text-silver-dim text-sm py-8">
                      No matching sections
                    </p>
                  ) : (
                    filteredSections.map((section) => (
                      <button
                        key={section.key}
                        onClick={() => {
                          const el = document.getElementById(section.id);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                          setIsPaletteOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-neon-blue/5 transition-colors duration-150 group"
                      >
                        <kbd className="w-7 h-7 flex items-center justify-center rounded-lg bg-cyber-dark border border-cyber-border text-xs font-mono text-silver-dim group-hover:border-neon-blue/30 group-hover:text-neon-blue transition-colors">
                          {section.key}
                        </kbd>
                        <span className="text-sm text-silver group-hover:text-neon-blue transition-colors">
                          {section.label}
                        </span>
                        <span className="ml-auto text-xs text-silver-dim/50 font-mono">
                          #{section.id}
                        </span>
                      </button>
                    ))
                  )}
                </div>

                {/* Footer hint */}
                <div className="flex items-center gap-4 px-5 py-3 border-t border-cyber-border bg-cyber-dark/30">
                  <span className="text-[10px] text-silver-dim">
                    Type to search, enter to select
                  </span>
                  <div className="ml-auto flex gap-2">
                    <kbd className="px-1.5 py-0.5 rounded bg-cyber-dark border border-cyber-border text-[10px] font-mono text-silver-dim">
                      ↑↓
                    </kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-cyber-dark border border-cyber-border text-[10px] font-mono text-silver-dim">
                      ↵
                    </kbd>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
