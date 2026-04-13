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
  Heart
} from "lucide-react";

const currentActivities = [
  {
    icon: Target,
    title: "Preparing for India Skills 2025-26",
    description: "Training and preparing for the next national-level cybersecurity competition.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: BookOpen,
    title: "Deepening ML & AI Expertise",
    description: "Exploring advanced machine learning techniques and neural network architectures.",
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Code,
    title: "Building Open Source Tools",
    description: "Contributing to cybersecurity tools and developing personal utility projects.",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Rocket,
    title: "Exploring Cloud Security",
    description: "Learning AWS, Docker, and cloud-native security practices for modern infrastructure.",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500/10",
  },
];

const funFacts = [
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  { icon: Zap, label: "Hackathons Attended", value: "3+" },
  { icon: Lightbulb, label: "Projects Shipped", value: "10+" },
  { icon: Heart, label: "Technologies Loved", value: "8+" },
];

export default function CurrentFocusSection() {
  return (
    <section className="relative py-24 sm:py-32">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
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
                  <div className={`flex items-center justify-center w-11 h-11 rounded-lg ${item.bgColor} ${item.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
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
                  <div className={`w-2 h-2 rounded-full ${item.bgColor} ${item.color} animate-pulse`} />
                </div>
              </div>
            </motion.div>
          ))}
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
