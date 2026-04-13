"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Web & Database",
    icon: "🌐",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "Specialized Domains",
    icon: "🎯",
    skills: [
      { name: "Cybersecurity", level: 85 },
      { name: "Data Science", level: 80 },
      { name: "IoT", level: 85 },
      { name: "Machine Learning", level: 75 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-silver group-hover:text-neon-blue transition-colors duration-300">
          {name}
        </span>
        <span className="text-xs font-mono text-silver-dim tabular-nums">{level}%</span>
      </div>
      <div className="h-2 bg-cyber-border/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-glow relative overflow-hidden"
        >
          <div
            className="absolute inset-0 animate-[shimmer_2s_linear_infinite]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              backgroundSize: "200% 100%",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
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
            TECH STACK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="shimmer-text">Arsenal</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="border border-cyber-border rounded-2xl bg-cyber-card/50 backdrop-blur-sm p-6 elevated-card soft-focus-ring group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyber-border">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-silver group-hover:text-neon-blue transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-silver-dim text-sm mb-4">
            Also experienced with:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub",
              "VS Code",
              "Arduino IDE",
              "Google Colab",
              "Figma",
              "Linux",
              "Postman",
              "Jupyter Notebook",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-cyber-card border border-cyber-border rounded-full text-sm text-[#374151] hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
