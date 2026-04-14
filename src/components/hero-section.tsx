"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ParticleCanvas from "@/components/particle-canvas";
import TerminalShowcase from "@/components/terminal-showcase";

const roles = [
  "Cybersecurity",
  "Data Science",
  "IoT Development",
  "Machine Learning",
  "Web Development",
];

function AnimatedCounter({
  target,
  suffix = "+",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-neon-blue tabular-nums">
      {count}
      {suffix}
    </div>
  );
}

function TypingText({ words, delay = 0 }: { words: string[]; delay?: number }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentCharIndex < word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      }, 80 + delay);
    } else if (!isDeleting && currentCharIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentCharIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, currentCharIndex - 1));
        setCurrentCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && currentCharIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="text-neon-blue font-semibold">
      {displayText}
      <span className="inline-block w-[3px] h-[1.1em] bg-neon-blue ml-0.5 animate-pulse align-text-bottom" />
    </span>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for hero spotlight
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      section.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [downloading, setDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setDownloading(true);
    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Shreyash_Mane_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = "/resume.pdf";
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center particle-bg overflow-hidden scanline-overlay grain-overlay mesh-gradient-bg hero-spotlight"
    >
      {/* Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/60 via-transparent to-background pointer-events-none" />

      {/* Morphing decorative blob */}
      <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-neon-blue/[0.04] morph-blob pointer-events-none blur-xl" />

      {/* Animated blobs for depth */}
      <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-neon-blue/[0.07] blob pointer-events-none blur-sm" />
      <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] bg-neon-glow/[0.06] blob blob-delay-1 pointer-events-none blur-sm" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-neon-blue/[0.04] blob blob-delay-2 pointer-events-none blur-sm" />

      {/* Starfield sparkle effect */}
      <div className="starfield">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              ['--twinkle-duration' as string]: `${2.5 + (i % 5) * 0.8}s`,
              ['--twinkle-delay' as string]: `${(i % 8) * 0.5}s`,
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
            }}
          />
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-sm sm:text-base font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              National Level Silver Medalist
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-silver-dim text-sm sm:text-base font-mono mb-4 tracking-wider"
            >
              &gt; Hello, I&apos;m
            </motion.p>

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

            {/* Sub-headline with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-silver-dim text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              <span>Computer Science Student specializing in </span>
              <TypingText words={roles} />
              <span>.</span>
              <br />
              <span className="text-silver-dim/80 text-sm sm:text-base mt-2 inline-block">
                Passionate about building innovative solutions and competitive
                problem solving.
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleDownloadResume}
                disabled={downloading}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neon-blue hover:bg-neon-blue/90 text-silver font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/15 hover:shadow-neon-blue/30 hover:scale-[1.02] active:scale-[0.98] gradient-border cta-breathe disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {downloading ? (
                  <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                )}
                {downloading ? "Generating..." : "Download Resume"}
              </button>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-cyber-border hover:border-neon-blue/50 text-silver hover:text-neon-blue font-semibold rounded-lg transition-all duration-300 hover:bg-neon-blue/5 active:scale-[0.98]"
              >
                View My Work
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Social Proof Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8 mb-8"
            >
              {[
                { label: "🥇 Silver Medalist", icon: "🏆" },
                { label: "💻 CS Student", icon: "🎓" },
                { label: "🔓 Cybersecurity", icon: "🛡️" },
                { label: "📊 Data Science", icon: "📈" },
                { label: "🌐 Full Stack", icon: "⚡" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cyber-card border border-cyber-border text-silver-dim hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 cursor-default"
                >
                  {item.icon} {item.label}
                </span>
              ))}
            </motion.div>

            {/* Terminal Showcase */}
            <TerminalShowcase />

            {/* Quick stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-8 mt-10 justify-center lg:justify-start"
            >
              <div className="text-center">
                <AnimatedCounter target={3} duration={2000} />
                <div className="text-xs sm:text-sm text-silver-dim mt-1">
                  Awards Won
                </div>
              </div>
              <div className="w-px bg-cyber-border" />
              <div className="text-center">
                <AnimatedCounter target={3} duration={2200} />
                <div className="text-xs sm:text-sm text-silver-dim mt-1">
                  Projects Built
                </div>
              </div>
              <div className="w-px bg-cyber-border" />
              <div className="text-center">
                <AnimatedCounter target={8} duration={2400} />
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

                {/* Middle octagon ring */}
                <div
                  className="absolute inset-3 rounded-full border border-neon-blue/30"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                  }}
                />

                {/* Inner dashed ring */}
                <div className="absolute inset-6 rounded-full border border-dashed border-neon-blue/10 animate-[spin_30s_linear_infinite_reverse]" />

                {/* Enhanced animated dashed rings at different speeds */}
                <div className="hero-ring hero-ring-1" />
                <div className="hero-ring hero-ring-2" />
                <div className="hero-ring hero-ring-3" />
                <div className="hero-ring hero-ring-dotted" />

                {/* Neon glow container */}
                <div className="absolute inset-4 rounded-full neon-glow overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(59,130,246,0.2), 0 0 60px rgba(59,130,246,0.08)' }}>
                  <Image
                    src="https://drive.google.com/uc?export=view&id=14nK4P9w91_dfAR6S9Uy2AM8JdmjfSMn0"
                    alt="Shreyash Mane"
                    fill
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neon-blue/60 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-neon-blue/60 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-neon-blue/60 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neon-blue/60 rounded-br-lg" />

                {/* Pulse dots on corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3">
                  <div className="absolute inset-0 bg-neon-blue rounded-full" />
                  <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-50" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3">
                  <div className="absolute inset-0 bg-neon-blue rounded-full" />
                  <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Floating tech badges around the image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:top-0 sm:-right-8 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue shadow-lg shadow-black/20 tech-badge-glass"
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
                className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue shadow-lg shadow-black/20 tech-badge-glass"
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
                className="absolute top-1/2 -right-8 sm:-right-12 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue shadow-lg shadow-black/20 tech-badge-glass"
              >
                🏆 Silver Medalist
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="hidden sm:flex absolute -top-2 -left-8 sm:-left-12 px-3 py-1.5 bg-cyber-card border border-cyber-border rounded-lg text-xs font-mono text-neon-blue shadow-lg shadow-black/20 tech-badge-glass"
              >
                🤖 IoT
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
