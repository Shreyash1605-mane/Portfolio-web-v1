"use client";

import { motion } from "framer-motion";

function SkeletonBlock({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`bg-cyber-border/20 animate-pulse rounded ${className ?? ""}`}
    />
  );
}

function SkeletonNavbar() {
  return (
    <div className="w-full h-16 bg-cyber-border/10 animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="w-16 h-6 bg-cyber-border/20 rounded" />
        <div className="hidden lg:flex items-center gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-14 h-5 bg-cyber-border/20 rounded"
            />
          ))}
        </div>
        <div className="w-9 h-9 bg-cyber-border/20 rounded-lg" />
      </div>
    </div>
  );
}

function SkeletonHero() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 sm:py-24 px-4">
      {/* Circle headshot */}
      <SkeletonBlock className="w-28 h-28 sm:w-36 sm:h-36 rounded-full" />
      {/* Text lines */}
      <div className="flex flex-col items-center gap-3 w-full max-w-lg">
        <SkeletonBlock className="w-48 h-5 rounded" />
        <SkeletonBlock className="w-72 sm:w-96 h-8 rounded" />
        <SkeletonBlock className="w-56 sm:w-80 h-4 rounded" />
      </div>
      {/* CTA buttons */}
      <div className="flex items-center gap-3 mt-2">
        <SkeletonBlock className="w-36 h-11 rounded-lg" />
        <SkeletonBlock className="w-36 h-11 rounded-lg" />
      </div>
      {/* Stats row */}
      <div className="flex items-center gap-8 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <SkeletonBlock className="w-10 h-6 rounded" />
            <SkeletonBlock className="w-16 h-3 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonWhatIDo() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
      {/* Section header */}
      <div className="text-center mb-12 flex flex-col items-center gap-3">
        <SkeletonBlock className="w-32 h-4 rounded" />
        <SkeletonBlock className="w-64 h-8 rounded" />
        <SkeletonBlock className="w-80 h-4 rounded" />
      </div>
      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonBlock key={i} className="h-52 rounded-2xl" delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function SkeletonSection() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="text-center mb-12 flex flex-col items-center gap-3">
        <SkeletonBlock className="w-28 h-4 rounded" />
        <SkeletonBlock className="w-56 h-8 rounded" />
        <SkeletonBlock className="w-72 h-4 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonBlock key={i} className="h-64 rounded-2xl" delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-background">
      <SkeletonNavbar />
      <SkeletonHero />
      <SkeletonWhatIDo />
      <SkeletonSection />
    </div>
  );
}
