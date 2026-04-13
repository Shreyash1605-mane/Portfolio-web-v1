"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Code2, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const milestones = [
  {
    id: "milestone-1",
    step: 1,
    icon: Trophy,
    title: "National Recognition",
    badge: "India Skills 2025-26",
    medalType: "Silver",
    color: "text-amber-700",
    borderColor: "border-amber-700/20 hover:border-amber-700/40",
    bgColor: "bg-amber-700/10",
    hoverGradient: "hover:bg-gradient-to-r hover:from-amber-700/[0.03] hover:to-transparent",
    content: (
      <div className="space-y-4">
        <p className="text-silver-dim leading-relaxed">
          Achieved the prestigious{" "}
          <span className="text-neon-blue font-semibold">
            Silver Medal
          </span>{" "}
          at the India Skills National Level Competition 2025-26, competing
          against the brightest minds from across the nation. This recognition
          stands as a testament to dedication, technical excellence, and
          competitive spirit.
        </p>
        <div className="flex flex-wrap gap-2">
          {["National Level", "2025-26", "Silver Medal"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-amber-700/10 text-amber-700 rounded-full text-xs font-medium border border-amber-700/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "milestone-2",
    step: 2,
    icon: Medal,
    title: "Regional & State Wins",
    badge: "Landscape Gardening",
    medalType: "Gold",
    color: "text-emerald-700",
    borderColor: "border-emerald-700/20 hover:border-emerald-700/40",
    bgColor: "bg-emerald-700/10",
    hoverGradient: "hover:bg-gradient-to-r hover:from-emerald-700/[0.03] hover:to-transparent",
    content: (
      <div className="space-y-4">
        <p className="text-silver-dim leading-relaxed">
          Demonstrated excellence at both regional and state levels in Landscape
          Gardening competitions. Won{" "}
          <span className="text-emerald-700 font-semibold">
            Silver Medal in Ahmedabad
          </span>{" "}
          and secured the{" "}
          <span className="text-emerald-700 font-semibold">
            Gold Medal in Mumbai
          </span>
          , showcasing versatility and competitive drive beyond technology.
        </p>
        <div className="p-3 bg-emerald-700/5 rounded-lg border border-emerald-700/10">
          <div className="text-sm font-semibold text-emerald-700 mb-1">
            Cash Prize Awarded
          </div>
          <div className="text-2xl font-bold text-silver">₹25,000</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Ahmedabad Silver", "Mumbai Gold", "₹25,000 Prize"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-emerald-700/10 text-emerald-700 rounded-full text-xs font-medium border border-emerald-700/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "milestone-3",
    step: 3,
    icon: Code2,
    title: "Hackathon Success",
    badge: "Smart India Hackathon",
    medalType: "Silver",
    color: "text-purple-700",
    borderColor: "border-purple-700/20 hover:border-purple-700/40",
    bgColor: "bg-purple-700/10",
    hoverGradient: "hover:bg-gradient-to-r hover:from-purple-700/[0.03] hover:to-transparent",
    content: (
      <div className="space-y-4">
        <p className="text-silver-dim leading-relaxed">
          Ranked{" "}
          <span className="text-purple-700 font-semibold">2nd place</span> in
          the Internal Smart India Hackathon conducted at DYPSEM. Developed an
          innovative solution under competitive pressure, demonstrating
          problem-solving skills, teamwork, and the ability to deliver
          real-world impact through technology.
        </p>
        <div className="flex flex-wrap gap-2">
          {["2nd Place", "DYPSEM", "Smart India Hackathon"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-700/10 text-purple-700 rounded-full text-xs font-medium border border-purple-700/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

const statsData = [
  { label: "Medals Won", value: 3, suffix: "", icon: Award },
  { label: "Gold", value: 1, suffix: "", icon: Trophy },
  { label: "Silver", value: 2, suffix: "", icon: Medal },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1500;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }
  }, [inView, value]);

  return (
    <span className="counter-value">
      {count}
      {suffix}
    </span>
  );
}

export default function MilestonesSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="milestones" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/30 to-transparent pointer-events-none" />

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
            ACHIEVEMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="shimmer-text">Milestones</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            A journey of competitive excellence, continuous learning, and
            impactful contributions.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-14"
        >
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neon-blue/10 text-neon-blue">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-silver">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={statsInView}
                  />
                </div>
                <div className="text-xs text-silver-dim font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Timeline Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Vertical timeline line - hidden on mobile, visible on md+ */}
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/40 via-neon-blue/20 to-transparent" />
            </div>

            <Accordion
              type="single"
              collapsible
              className="space-y-6"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step circle */}
                  <div className="absolute left-0 top-5 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cyber-card border-2 border-neon-blue shadow-lg shadow-neon-blue/20">
                    <span className="text-sm font-bold text-neon-blue">
                      {milestone.step}
                    </span>
                  </div>

                  <div className="md:pl-16">
                    <AccordionItem
                      value={milestone.id}
                      className={`border ${milestone.borderColor} rounded-xl bg-cyber-card/50 backdrop-blur-sm transition-all duration-300 px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-neon-blue/5 ${milestone.hoverGradient}`}
                    >
                      <AccordionTrigger className="hover:no-underline py-5">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex items-center justify-center w-10 h-10 rounded-lg ${milestone.bgColor} ${milestone.color} shrink-0`}
                          >
                            <milestone.icon className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <div className="text-base sm:text-lg font-semibold text-silver">
                                {milestone.title}
                              </div>
                              <Award className="w-4 h-4 text-neon-blue" />
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-sm text-silver-dim">
                                {milestone.badge}
                              </span>
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                  milestone.medalType === "Gold"
                                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                }`}
                              >
                                <Medal className="w-3 h-3 mr-1" />
                                {milestone.medalType}
                              </span>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-silver-dim">
                        {milestone.content}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
