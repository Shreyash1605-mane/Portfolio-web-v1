"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Code2,
  Layers,
  Zap,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Smart Parking System",
    image: "/images/smart-parking.png",
    tags: ["Arduino", "ESP32", "IoT", "IR Sensors"],
    category: "IoT & Embedded",
    description:
      "Real-time parking slot monitoring system using Arduino/ESP32 microcontroller with IR sensor integration for live slot availability updates.",
    techDetails:
      "Built with Arduino/ESP32 microcontrollers, this system uses IR sensors to detect vehicle presence in real-time. The slot availability data is transmitted wirelessly and displayed on an LED dashboard. Features include automatic slot counting, real-time updates, and an intuitive user interface.",
    features: [
      "Real-time slot detection with IR sensors",
      "Wireless data transmission via ESP32",
      "LED dashboard for live visualization",
      "Automatic slot counting algorithm",
    ],
    impact: "Streamlined parking management with instant slot availability updates.",
    github: "#",
  },
  {
    id: 2,
    title: "E-Grampanchayat Portal",
    image: "/images/grampanchayat.png",
    tags: ["HTML", "JavaScript", "MySQL", "Web Dev"],
    category: "Web Development",
    description:
      "Digital governance dashboard for streamlining village record management and administrative processes.",
    techDetails:
      "A comprehensive web-based portal built with HTML, JavaScript, and MySQL to digitize village administration. Features include citizen records management, birth/death registration, tax collection tracking, and report generation. Designed to bring transparency and efficiency to rural governance.",
    features: [
      "Citizen records management system",
      "Birth/death registration module",
      "Tax collection & tracking",
      "Automated report generation",
    ],
    impact: "Digitized village administration, improving transparency and accessibility.",
    github: "#",
  },
  {
    id: 3,
    title: "Disease Prediction System",
    image: "/images/disease-prediction.png",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    category: "Machine Learning",
    description:
      "Supervised learning models for predicting diseases based on patient symptoms and medical history data.",
    techDetails:
      "Developed using Python with Scikit-learn and Pandas, this system employs supervised learning algorithms including Random Forest, SVM, and Logistic Regression. Features data preprocessing pipelines, feature engineering, cross-validation, and an interactive web interface for predictions with probability scores.",
    features: [
      "Multiple ML algorithms (RF, SVM, LR)",
      "Data preprocessing pipelines",
      "Feature engineering & selection",
      "Probability score predictions",
    ],
    impact: "Enabled early disease detection through data-driven predictions.",
    github: "#",
  },
];

export default function ProjectsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const project = selectedProject !== null ? projects[selectedProject] : null;

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
            Tap the cards to flip, or click &quot;View Details&quot; for the full breakdown.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flip-card h-[420px] sm:h-[460px] cursor-pointer ${flippedCards.has(index) ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
              onKeyDown={(e) => e.key === "Enter" && handleFlip(index)}
              role="button"
              tabIndex={0}
              aria-label={`${proj.title} - click to ${flippedCards.has(index) ? "see front" : "see details"}`}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front Side */}
                <div className="flip-card-front absolute inset-0 rounded-2xl border border-cyber-border bg-cyber-card overflow-hidden group">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-cyber-darker/80 backdrop-blur-sm rounded-md text-xs font-mono text-neon-blue border border-neon-blue/20">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-silver mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-silver-dim text-sm leading-relaxed mb-4 line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag) => (
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
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-neon-blue/10 to-transparent border-b border-cyber-border">
                    <h3 className="text-lg sm:text-xl font-bold text-silver mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-neon-blue text-sm font-medium">
                      Technical Breakdown
                    </p>
                  </div>
                  <div className="flex-1 p-5 sm:p-6 flex flex-col">
                    <p className="text-silver-dim text-sm leading-relaxed flex-1">
                      {proj.techDetails}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 mb-3">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-neon-blue/10 text-neon-blue rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={proj.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue rounded-lg text-sm font-medium transition-all duration-300 border border-neon-blue/20 hover:border-neon-blue/40"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(index);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-neon-blue hover:bg-neon-blue/90 text-white rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-cyber-border bg-cyber-card shadow-2xl shadow-black/50 modal-scroll"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-cyber-dark/80 border border-cyber-border text-silver-dim hover:text-silver hover:border-silver-dim/30 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded-md text-xs font-mono text-neon-blue inline-block mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-silver">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Description */}
                <p className="text-silver-dim leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-neon-blue" />
                    <h4 className="text-sm font-bold text-silver uppercase tracking-wider">
                      Key Features
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-silver-dim text-sm">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neon-blue/10 mt-0.5 shrink-0">
                          <Zap className="w-3 h-3 text-neon-blue" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Details */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4 text-neon-blue" />
                    <h4 className="text-sm font-bold text-silver uppercase tracking-wider">
                      Technical Details
                    </h4>
                  </div>
                  <p className="text-silver-dim text-sm leading-relaxed">
                    {project.techDetails}
                  </p>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/10">
                  <p className="text-sm">
                    <span className="text-neon-blue font-semibold">Impact: </span>
                    <span className="text-silver-dim">{project.impact}</span>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-neon-blue/10 text-neon-blue rounded-lg text-xs font-medium border border-neon-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue rounded-lg text-sm font-medium transition-all duration-300 border border-neon-blue/20 hover:border-neon-blue/40"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
