"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Code2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const milestones = [
  {
    id: "milestone-1",
    icon: Trophy,
    title: "National Recognition",
    badge: "India Skills 2025-26",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/20 hover:border-yellow-400/40",
    bgColor: "bg-yellow-400/10",
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
              className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-400/20"
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
    icon: Medal,
    title: "Regional & State Wins",
    badge: "Landscape Gardening",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20 hover:border-emerald-400/40",
    bgColor: "bg-emerald-400/10",
    content: (
      <div className="space-y-4">
        <p className="text-silver-dim leading-relaxed">
          Demonstrated excellence at both regional and state levels in Landscape
          Gardening competitions. Won{" "}
          <span className="text-emerald-400 font-semibold">
            Silver Medal in Ahmedabad
          </span>{" "}
          and secured the{" "}
          <span className="text-emerald-400 font-semibold">
            Gold Medal in Mumbai
          </span>
          , showcasing versatility and competitive drive beyond technology.
        </p>
        <div className="p-3 bg-emerald-400/5 rounded-lg border border-emerald-400/10">
          <div className="text-sm font-semibold text-emerald-400 mb-1">
            Cash Prize Awarded
          </div>
          <div className="text-2xl font-bold text-silver">₹25,000</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Ahmedabad Silver", "Mumbai Gold", "₹25,000 Prize"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/20"
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
    icon: Code2,
    title: "Hackathon Success",
    badge: "Smart India Hackathon",
    color: "text-purple-400",
    borderColor: "border-purple-400/20 hover:border-purple-400/40",
    bgColor: "bg-purple-400/10",
    content: (
      <div className="space-y-4">
        <p className="text-silver-dim leading-relaxed">
          Ranked{" "}
          <span className="text-purple-400 font-semibold">2nd place</span> in
          the Internal Smart India Hackathon conducted at DYPSEM. Developed an
          innovative solution under competitive pressure, demonstrating
          problem-solving skills, teamwork, and the ability to deliver
          real-world impact through technology.
        </p>
        <div className="flex flex-wrap gap-2">
          {["2nd Place", "DYPSEM", "Smart India Hackathon"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs font-medium border border-purple-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function MilestonesSection() {
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

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={milestone.id}
                  className={`border ${milestone.borderColor} rounded-xl bg-cyber-card/50 backdrop-blur-sm transition-all duration-300 px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-neon-blue/5`}
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg ${milestone.bgColor} ${milestone.color} shrink-0`}
                      >
                        <milestone.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-base sm:text-lg font-semibold text-silver">
                          {milestone.title}
                        </div>
                        <div className="text-sm text-silver-dim mt-0.5">
                          {milestone.badge}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-silver-dim">
                    {milestone.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
