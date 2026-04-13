"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center particle-bg overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/50 via-transparent to-background pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              National Level Silver Medalist
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-4"
            >
              <span className="text-silver">Shreyash</span>{" "}
              <span className="shimmer-text">Mane</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-silver-dim text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Computer Science Student specializing in{" "}
              <span className="text-neon-blue font-semibold">
                Cybersecurity
              </span>{" "}
              &{" "}
              <span className="text-neon-blue font-semibold">Data Science</span>
              . Passionate about building innovative solutions and competitive
              problem solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neon-blue hover:bg-neon-blue/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-cyber-border hover:border-neon-blue/50 text-silver hover:text-neon-blue font-semibold rounded-lg transition-all duration-300 hover:bg-neon-blue/5 active:scale-[0.98]"
              >
                View My Work
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-8 mt-10 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-blue">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-silver-dim mt-1">
                  Awards Won
                </div>
              </div>
              <div className="w-px bg-cyber-border" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-blue">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-silver-dim mt-1">
                  Projects Built
                </div>
              </div>
              <div className="w-px bg-cyber-border" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-blue">
                  8+
                </div>
                <div className="text-xs sm:text-sm text-silver-dim mt-1">
                  Technologies
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative float-animation">
              {/* Geometric frame with neon glow */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-neon-blue/20 animate-[spin_20s_linear_infinite]" />

                {/* Middle ring */}
                <div
                  className="absolute inset-3 rounded-full border border-neon-blue/30"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                  }}
                />

                {/* Neon glow container */}
                <div className="absolute inset-4 rounded-full neon-glow overflow-hidden">
                  <Image
                    src="/images/headshot.png"
                    alt="Shreyash Mane"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neon-blue/60 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-neon-blue/60 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-neon-blue/60 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neon-blue/60 rounded-br-lg" />
              </div>

              {/* Floating tech badges around the image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:top-0 sm:-right-8 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue"
              >
                🔒 Cybersecurity
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue"
              >
                📊 Data Science
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-8 sm:-right-12 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue"
              >
                🏆 Silver Medalist
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-silver-dim/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-neon-blue rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
