"use client";

import { motion } from "framer-motion";

interface WaveDividerProps {
  variant?: "normal" | "inverted";
  className?: string;
}

export default function WaveDivider({ variant = "normal", className = "" }: WaveDividerProps) {
  const isInverted = variant === "inverted";

  return (
    <div className={`relative w-full overflow-hidden ${isInverted ? "-mt-1" : "-mt-1"} ${className}`}>
      {/* Subtle gradient accent line at top of wave */}
      <div
        className={`absolute ${isInverted ? "bottom-full" : "top-0"} left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent z-10`}
      />

      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] sm:h-[50px] lg:h-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id={`wave-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--background)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--background)" />
            <stop offset="100%" stopColor="var(--background)" stopOpacity="0.6" />
          </linearGradient>

          {/* Accent gradient for the wave edge */}
          <linearGradient id={`wave-accent-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="30%" stopColor="rgba(59,130,246,0.15)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.25)" />
            <stop offset="70%" stopColor="rgba(59,130,246,0.15)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>

        {/* Main wave fill */}
        <motion.path
          d={
            isInverted
              ? "M0,20 C120,5 240,45 360,30 C480,15 600,50 720,35 C840,20 960,48 1080,32 C1200,16 1320,42 1440,25 L1440,0 L0,0 Z"
              : "M0,25 C120,42 240,16 360,30 C480,44 600,15 720,35 C840,55 960,20 1080,32 C1200,44 1320,18 1440,30 L1440,80 L0,80 Z"
          }
          fill="var(--background)"
          animate={
            isInverted
              ? {
                  d: [
                    "M0,20 C120,5 240,45 360,30 C480,15 600,50 720,35 C840,20 960,48 1080,32 C1200,16 1320,42 1440,25 L1440,0 L0,0 Z",
                    "M0,15 C120,35 240,10 360,25 C480,40 600,12 720,28 C840,44 960,18 1080,38 C1200,22 1320,35 1440,20 L1440,0 L0,0 Z",
                    "M0,25 C120,10 240,38 360,20 C480,8 600,35 720,18 C840,5 960,32 1080,20 C1200,8 1320,30 1440,15 L1440,0 L0,0 Z",
                    "M0,20 C120,5 240,45 360,30 C480,15 600,50 720,35 C840,20 960,48 1080,32 C1200,16 1320,42 1440,25 L1440,0 L0,0 Z",
                  ],
                }
              : {
                  d: [
                    "M0,25 C120,42 240,16 360,30 C480,44 600,15 720,35 C840,55 960,20 1080,32 C1200,44 1320,18 1440,30 L1440,80 L0,80 Z",
                    "M0,35 C120,18 240,40 360,25 C480,10 600,38 720,22 C840,8 960,35 1080,22 C1200,10 1320,38 1440,25 L1440,80 L0,80 Z",
                    "M0,18 C120,35 240,12 360,38 C480,50 600,22 720,40 C840,58 960,30 1080,42 C1200,52 1320,28 1440,38 L1440,80 L0,80 Z",
                    "M0,25 C120,42 240,16 360,30 C480,44 600,15 720,35 C840,55 960,20 1080,32 C1200,44 1320,18 1440,30 L1440,80 L0,80 Z",
                  ],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent line at wave edge */}
        <motion.path
          d={
            isInverted
              ? "M0,20 C120,5 240,45 360,30 C480,15 600,50 720,35 C840,20 960,48 1080,32 C1200,16 1320,42 1440,25"
              : "M0,25 C120,42 240,16 360,30 C480,44 600,15 720,35 C840,55 960,20 1080,32 C1200,44 1320,18 1440,30"
          }
          fill="none"
          stroke="url(#wave-accent-gradient)"
          strokeWidth="1"
          animate={
            isInverted
              ? {
                  d: [
                    "M0,20 C120,5 240,45 360,30 C480,15 600,50 720,35 C840,20 960,48 1080,32 C1200,16 1320,42 1440,25",
                    "M0,15 C120,35 240,10 360,25 C480,40 600,12 720,28 C840,44 960,18 1080,38 C1200,22 1320,35 1440,20",
                    "M0,25 C120,10 240,38 360,20 C480,8 600,35 720,18 C840,5 960,32 1080,20 C1200,8 1320,30 1440,15",
                    "M0,20 C120,5 240,45 360,30 C480,15 600,50 720,35 C840,20 960,48 1080,32 C1200,16 1320,42 1440,25",
                  ],
                }
              : {
                  d: [
                    "M0,25 C120,42 240,16 360,30 C480,44 600,15 720,35 C840,55 960,20 1080,32 C1200,44 1320,18 1440,30",
                    "M0,35 C120,18 240,40 360,25 C480,10 600,38 720,22 C840,8 960,35 1080,22 C1200,10 1320,38 1440,25",
                    "M0,18 C120,35 240,12 360,38 C480,50 600,22 720,40 C840,58 960,30 1080,42 C1200,52 1320,28 1440,38",
                    "M0,25 C120,42 240,16 360,30 C480,44 600,15 720,35 C840,55 960,20 1080,32 C1200,44 1320,18 1440,30",
                  ],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ stroke: "rgba(59,130,246,0.15)" }}
        />
      </motion.svg>
    </div>
  );
}
