"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useCallback } from "react";

const projects = [
  {
    title: "Smart Parking System",
    image: "/images/smart-parking.png",
    tags: ["Arduino", "ESP32", "IoT", "IR Sensors"],
    description:
      "Real-time parking slot monitoring system using Arduino/ESP32 microcontroller with IR sensor integration for live slot availability updates.",
    techDetails:
      "Built with Arduino/ESP32 microcontrollers, this system uses IR sensors to detect vehicle presence in real-time. The slot availability data is transmitted wirelessly and displayed on an LED dashboard. Features include automatic slot counting, real-time updates, and an intuitive user interface.",
    github: "#",
  },
  {
    title: "E-Grampanchayat Portal",
    image: "/images/grampanchayat.png",
    tags: ["HTML", "JavaScript", "MySQL", "Web Dev"],
    description:
      "Digital governance dashboard for streamlining village record management and administrative processes.",
    techDetails:
      "A comprehensive web-based portal built with HTML, JavaScript, and MySQL to digitize village administration. Features include citizen records management, birth/death registration, tax collection tracking, and report generation. Designed to bring transparency and efficiency to rural governance.",
    github: "#",
  },
  {
    title: "Disease Prediction System",
    image: "/images/disease-prediction.png",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    description:
      "Supervised learning models for predicting diseases based on patient symptoms and medical history data.",
    techDetails:
      "Developed using Python with Scikit-learn and Pandas, this system employs supervised learning algorithms including Random Forest, SVM, and Logistic Regression. Features data preprocessing pipelines, feature engineering, cross-validation, and an interactive web interface for predictions with probability scores.",
    github: "#",
  },
];

export default function ProjectsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleFlip = useCallback((index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
            PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="shimmer-text">Projects</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Hover or tap the cards to explore the technical details behind each
            project.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flip-card h-[420px] sm:h-[460px] cursor-pointer ${flippedCards.has(index) ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
              onKeyDown={(e) => e.key === "Enter" && handleFlip(index)}
              role="button"
              tabIndex={0}
              aria-label={`${project.title} - click to ${flippedCards.has(index) ? "see front" : "see details"}`}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front Side */}
                <div className="flip-card-front absolute inset-0 rounded-2xl border border-cyber-border bg-cyber-card overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
                    {/* Hover/tap indicator */}
                    <div className="absolute inset-0 flex items-center justify-center bg-neon-blue/0 group-hover:bg-neon-blue/10 transition-all duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-cyber-darker/80 backdrop-blur-sm rounded-full text-sm font-medium text-silver border border-cyber-border">
                        Tap to flip
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-silver mb-2">
                      {project.title}
                    </h3>
                    <p className="text-silver-dim text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-neon-blue/10 text-neon-blue rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute inset-0 rounded-2xl border border-neon-blue/30 bg-cyber-card overflow-hidden flex flex-col">
                  {/* Gradient header */}
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-neon-blue/10 to-transparent border-b border-cyber-border">
                    <h3 className="text-lg sm:text-xl font-bold text-silver mb-1">
                      {project.title}
                    </h3>
                    <p className="text-neon-blue text-sm font-medium">
                      Technical Breakdown
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col">
                    <p className="text-silver-dim text-sm leading-relaxed flex-1">
                      {project.techDetails}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-neon-blue/10 text-neon-blue rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue rounded-lg text-sm font-medium transition-all duration-300 border border-neon-blue/20 hover:border-neon-blue/40"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
