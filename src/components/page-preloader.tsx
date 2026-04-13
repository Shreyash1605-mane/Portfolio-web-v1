"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PagePreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear progress: fast start, slow middle, fast end
        const increment = prev < 30 ? 8 : prev < 70 ? 3 : prev < 90 ? 2 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 400);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--preloader-bg,#DCE3E7)]"
        >
          {/* Subtle radial gradient background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo animation with stagger */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div className="text-5xl font-bold text-silver select-none">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-neon-blue"
                >
                  {"<"}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  SM
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="text-neon-blue"
                >
                  {"/>"}
                </motion.span>
              </div>
              {/* Glow behind */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute inset-0 -z-10 blur-2xl bg-neon-blue/20 rounded-full"
              />
            </motion.div>

            {/* Progress bar with percentage */}
            <div className="w-56">
              <div className="flex justify-between items-center mb-2">
                <span className="text-silver-dim text-xs font-mono tracking-wider uppercase">
                  Loading
                </span>
                <span className="text-silver-dim text-xs font-mono tabular-nums">
                  {progress}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-cyber-border/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-neon-blue via-neon-glow to-neon-blue rounded-full"
                  style={{
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />
              </div>
            </div>

            {/* Animated dots with wave effect */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-neon-blue rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
