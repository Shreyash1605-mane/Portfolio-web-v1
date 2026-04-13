"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const skillData = [
  { name: "Java", level: 90, category: "Programming" },
  { name: "Python", level: 85, category: "Programming" },
  { name: "JavaScript", level: 85, category: "Programming" },
  { name: "C", level: 80, category: "Programming" },
  { name: "HTML", level: 95, category: "Web" },
  { name: "CSS", level: 90, category: "Web" },
  { name: "MySQL", level: 80, category: "Web" },
  { name: "Firebase", level: 75, category: "Web" },
  { name: "Cybersecurity", level: 85, category: "Domain" },
  { name: "Data Science", level: 80, category: "Domain" },
  { name: "IoT", level: 85, category: "Domain" },
  { name: "ML", level: 75, category: "Domain" },
];

function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animated, setAnimated] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);
  const progressRef = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 280;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.36;
    const levels = 5;
    const totalSkills = skillData.length;
    const angleStep = (Math.PI * 2) / totalSkills;

    const draw = (progress: number) => {
      ctx.clearRect(0, 0, size, size);

      // Grid rings
      for (let l = 1; l <= levels; l++) {
        const r = (radius * l) / levels;
        ctx.beginPath();
        for (let i = 0; i <= totalSkills; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255, 155, 81, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Axis lines
      for (let i = 0; i < totalSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
        ctx.strokeStyle = "rgba(255, 155, 81, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Data polygon
      ctx.beginPath();
      for (let i = 0; i <= totalSkills; i++) {
        const idx = i % totalSkills;
        const angle = idx * angleStep - Math.PI / 2;
        const value = (skillData[idx].level / 100) * radius * progress;
        const x = centerX + value * Math.cos(angle);
        const y = centerY + value * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      // Fill
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, "rgba(255, 155, 81, 0.25)");
      gradient.addColorStop(1, "rgba(255, 155, 81, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke
      ctx.strokeStyle = "rgba(255, 155, 81, 0.7)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Data points
      for (let i = 0; i < totalSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = (skillData[i].level / 100) * radius * progress;
        const x = centerX + value * Math.cos(angle);
        const y = centerY + value * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#FF9B51";
        ctx.fill();
        ctx.strokeStyle = "var(--card, #FFFFFF)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Labels
      ctx.font = "10px var(--font-mono, monospace)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = 0; i < totalSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const labelR = radius + 20;
        const x = centerX + labelR * Math.cos(angle);
        const y = centerY + labelR * Math.sin(angle);

        ctx.fillStyle = "var(--text-secondary, #5F6F7E)";
        ctx.fillText(skillData[i].name, x, y);
      }
    };

    const animate = () => {
      progressRef.current += 0.02;
      if (progressRef.current >= 1) {
        progressRef.current = 1;
        draw(1);
        return;
      }
      draw(progressRef.current);
      animRef.current = requestAnimationFrame(animate);
    };

    if (animated) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      draw(0);
    }

    return () => cancelAnimationFrame(animRef.current);
  }, [animated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        className="max-w-[280px] w-full"
      />
    </div>
  );
}

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
      <div className="h-2.5 bg-cyber-border/50 rounded-full overflow-hidden">
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

        {/* Animated Tech Ticker Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
        >
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap py-3">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
                "Docker", "Kubernetes", "Tailwind CSS", "Figma", "AWS", "Python",
                "TensorFlow", "Scikit-learn", "Pandas", "Arduino", "ESP32",
                "Kali Linux", "Wireshark", "Burp Suite", "Metasploit",
                "Git", "Linux", "Firebase", "PostgreSQL",
              ].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="inline-flex items-center mx-3 px-3 py-1.5 bg-cyber-card/80 border border-cyber-border rounded-full text-xs font-medium text-silver-dim/80 shrink-0"
                >
                  {tech}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
                "Docker", "Kubernetes", "Tailwind CSS", "Figma", "AWS", "Python",
                "TensorFlow", "Scikit-learn", "Pandas", "Arduino", "ESP32",
                "Kali Linux", "Wireshark", "Burp Suite", "Metasploit",
                "Git", "Linux", "Firebase", "PostgreSQL",
              ].map((tech, i) => (
                <span
                  key={`${tech}-dup-${i}`}
                  className="inline-flex items-center mx-3 px-3 py-1.5 bg-cyber-card/80 border border-cyber-border rounded-full text-xs font-medium text-silver-dim/80 shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-6 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card max-w-md mx-auto"
        >
          <p className="text-center text-xs font-mono text-silver-dim mb-4 tracking-wider">
            SKILL RADAR
          </p>
          <RadarChart />
        </motion.div>

        {/* Skill Bars */}
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
                className="px-4 py-2 bg-cyber-card border border-cyber-border rounded-full text-sm text-foreground/70 hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300 cursor-default"
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
