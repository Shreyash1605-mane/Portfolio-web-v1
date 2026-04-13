"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BookOpen,
  Code,
  Coffee,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  GitCommit,
  Bug,
} from "lucide-react";
import { useMemo } from "react";

const currentActivities = [
  {
    icon: Target,
    title: "Preparing for India Skills 2025-26",
    description:
      "Training and preparing for the next national-level cybersecurity competition.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: BookOpen,
    title: "Deepening ML & AI Expertise",
    description:
      "Exploring advanced machine learning techniques and neural network architectures.",
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Code,
    title: "Building Open Source Tools",
    description:
      "Contributing to cybersecurity tools and developing personal utility projects.",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Rocket,
    title: "Exploring Cloud Security",
    description:
      "Learning AWS, Docker, and cloud-native security practices for modern infrastructure.",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500/10",
  },
];

const activityFeed = [
  {
    id: 1,
    icon: GitCommit,
    description: "Pushed 3 commits to smart-parking",
    timestamp: "2 hours ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 2,
    icon: Bug,
    description: "Fixed bug in authentication flow",
    timestamp: "5 hours ago",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 3,
    icon: Code,
    description: "Refactored ML pipeline for better accuracy",
    timestamp: "Yesterday",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
  },
  {
    id: 4,
    icon: Coffee,
    description: "Learning Rust fundamentals",
    timestamp: "Yesterday",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 5,
    icon: Rocket,
    description: "Deployed e-grampanchayat portal v2.0",
    timestamp: "3 days ago",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 6,
    icon: GitCommit,
    description: "Merged PR #12: Added dark mode support",
    timestamp: "3 days ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 7,
    icon: Code,
    description: "Wrote unit tests for disease prediction model",
    timestamp: "5 days ago",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
  },
];

function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full"
    >
      <div className="relative p-5 sm:p-6 rounded-xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card overflow-hidden">
        {/* Header with online indicator */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-50" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </div>
          <p className="font-mono text-xs tracking-wider text-emerald-500 uppercase">
            Online now
          </p>
          <span className="text-silver-dim/40 text-xs">·</span>
          <p className="font-mono text-xs tracking-wider text-neon-blue/70 uppercase">
            Recent Activity
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {activityFeed.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="relative flex items-start gap-3 group"
            >
              {/* Timeline connector line */}
              {index < activityFeed.length - 1 && (
                <div className="absolute left-[15px] top-[32px] w-px h-[calc(100%_-_12px)] bg-gradient-to-b from-cyber-border/60 to-transparent" />
              )}

              {/* Icon dot */}
              <div
                className={`relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full ${activity.bgColor} shrink-0 transition-transform duration-300 group-hover:scale-110`}
              >
                <activity.icon className={`w-3.5 h-3.5 ${activity.color}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-5 last:pb-0">
                <p className="text-sm text-silver leading-relaxed">
                  {activity.description}
                </p>
                <p className="text-xs text-silver-dim/60 mt-0.5 font-mono">
                  {activity.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const funFacts = [
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  { icon: Zap, label: "Hackathons Attended", value: "3+" },
  { icon: Lightbulb, label: "Projects Shipped", value: "10+" },
  { icon: Heart, label: "Technologies Loved", value: "8+" },
];

// Seeded random number generator for deterministic contribution data
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateContributions() {
  const random = seededRandom(42);
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      // Create a realistic pattern: more activity on weekdays, bursts of activity
      const isWeekday = d > 0 && d < 6;
      const burstChance = random();
      let value: number;

      if (burstChance > 0.85) {
        // Burst of high activity
        value = Math.floor(random() * 5) + 8;
      } else if (isWeekday) {
        // Normal weekday activity
        value = Math.floor(random() * 12);
      } else {
        // Weekend - less activity
        value = Math.floor(random() * 8);
      }

      // Some days have zero contributions
      if (random() > 0.75) {
        value = 0;
      }

      week.push(value);
    }
    grid.push(week);
  }

  return grid;
}

function getContribColor(value: number): string {
  if (value === 0) return "bg-cyber-border/30 dark:bg-cyber-border/20";
  if (value <= 3) return "bg-neon-blue/20 dark:bg-neon-blue/25";
  if (value <= 6) return "bg-neon-blue/40 dark:bg-neon-blue/45";
  if (value <= 9) return "bg-neon-blue/60 dark:bg-neon-blue/65";
  return "bg-neon-blue dark:bg-neon-blue";
}

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["Mon", "Wed", "Fri"];

function ContributionHeatmap() {
  const contributions = useMemo(() => generateContributions(), []);

  // Calculate month start positions (approximate: each week ~7.15 days)
  const monthPositions = useMemo(() => {
    const positions: { label: string; col: number }[] = [];
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayCount = 0;

    // Start from January
    daysPerMonth.forEach((days, i) => {
      const weekCol = Math.floor(dayCount / 7);
      positions.push({ label: MONTH_LABELS[i], col: weekCol });
      dayCount += days;
    });

    return positions;
  }, []);

  // Calculate total contributions and current streak
  const stats = useMemo(() => {
    let total = 0;
    contributions.forEach((week) => {
      week.forEach((day) => {
        total += day;
      });
    });
    return total;
  }, [contributions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full"
    >
      <div className="relative p-5 sm:p-6 rounded-xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card overflow-hidden">
        {/* Card label */}
        <div className="flex items-center justify-between mb-4">
          <p className="font-mono text-xs tracking-wider text-neon-blue/70 uppercase">
            Contribution Activity
          </p>
          <p className="font-mono text-xs text-silver-dim">
            {stats.toLocaleString()} contributions in the last year
          </p>
        </div>

        {/* Scrollable heatmap container */}
        <div className="relative overflow-x-auto">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-8 w-4 bg-gradient-to-r from-cyber-card/80 dark:from-cyber-card/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-4 bg-gradient-to-l from-cyber-card/80 dark:from-cyber-card/80 to-transparent z-10 pointer-events-none" />

          <div className="inline-flex flex-col min-w-full" style={{ minWidth: "600px" }}>
            {/* Month labels row */}
            <div className="flex mb-1.5 pl-10">
              {monthPositions.map((month, i) => {
                // Only show month if enough gap from previous
                const prevCol = i > 0 ? monthPositions[i - 1].col : -3;
                const showLabel = month.col - prevCol >= 3;

                return showLabel ? (
                  <div
                    key={month.label}
                    className="text-[10px] text-silver-dim font-mono"
                    style={{
                      width: `${(month.col - (i > 0 && monthPositions[i - 1].col + 3 <= month.col ? monthPositions[i - 1].col : 0)) * 14 + 14}px`,
                    }}
                  >
                    {month.label}
                  </div>
                ) : null;
              })}
            </div>

            {/* Grid: day labels + cells */}
            <div className="flex gap-0">
              {/* Day labels column */}
              <div className="flex flex-col justify-between py-0.5 pr-2 shrink-0" style={{ height: "calc(7 * 14px + 6 * 3px)" }}>
                <span className="text-[10px] text-silver-dim font-mono leading-none h-[14px] flex items-center">Mon</span>
                <span className="text-[10px] text-silver-dim font-mono leading-none h-[14px] flex items-center">Wed</span>
                <span className="text-[10px] text-silver-dim font-mono leading-none h-[14px] flex items-center">Fri</span>
              </div>

              {/* Contribution cells grid */}
              <div className="flex gap-[3px]">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.map((value, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.15,
                          delay: weekIndex * 0.005 + dayIndex * 0.01,
                        }}
                        className={`w-[11px] h-[11px] rounded-[2px] ${getContribColor(value)} transition-colors duration-200 hover:ring-1 hover:ring-neon-blue/40 hover:ring-offset-1 hover:ring-offset-background cursor-default`}
                        title={`${value} contribution${value !== 1 ? "s" : ""}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <span className="text-[10px] text-silver-dim font-mono">Less</span>
          <div className="flex gap-[3px]">
            <div className="w-[11px] h-[11px] rounded-[2px] bg-cyber-border/30 dark:bg-cyber-border/20" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-neon-blue/20 dark:bg-neon-blue/25" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-neon-blue/40 dark:bg-neon-blue/45" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-neon-blue/60 dark:bg-neon-blue/65" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-neon-blue dark:bg-neon-blue" />
          </div>
          <span className="text-[10px] text-silver-dim font-mono">More</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CurrentFocusSection() {
  return (
    <section id="current" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-blue font-mono text-sm mb-3 tracking-wider">
            CURRENTLY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I&apos;m{" "}
            <span className="shimmer-text">Up To</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Always learning, building, and pushing boundaries.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {currentActivities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-5 sm:p-6 rounded-xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card soft-focus-ring hover:border-neon-blue/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-lg ${item.bgColor} ${item.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-silver mb-1 group-hover:text-neon-blue transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-silver-dim text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Progress indicator dot */}
                <div className="absolute top-5 right-5">
                  <div
                    className={`w-2 h-2 rounded-full ${item.bgColor} ${item.color} animate-pulse`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Timeline */}
        <div className="max-w-4xl mx-auto mb-12">
          <ActivityTimeline />
        </div>

        {/* Contribution Heatmap */}
        <div className="max-w-4xl mx-auto mb-12">
          <ContributionHeatmap />
        </div>

        {/* Fun Facts Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center p-5 rounded-xl bg-neon-blue/5 border border-neon-blue/10 hover:border-neon-blue/25 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neon-blue/10 text-neon-blue mb-3 transition-transform duration-300 group-hover:scale-110">
                  <fact.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-neon-blue mb-1">
                  {fact.value}
                </div>
                <div className="text-xs sm:text-sm text-silver-dim">
                  {fact.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
