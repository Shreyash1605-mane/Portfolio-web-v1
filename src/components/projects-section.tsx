"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Layers,
  Zap,
  Filter,
  CheckCircle2,
  Clock,
  Globe,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ProjectStatus = "completed" | "in-progress";

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  category: string;
  filterCategory: string;
  status: ProjectStatus;
  description: string;
  fullDescription: string;
  techDetails: string;
  features: string[];
  impact: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Parking System",
    image: "/images/smart-parking.png",
    tags: ["Arduino", "ESP32", "IoT", "IR Sensors", "C++", "LED Dashboard"],
    category: "IoT & Embedded",
    filterCategory: "iot",
    status: "completed",
    description:
      "Real-time parking slot monitoring system using Arduino/ESP32 microcontroller with IR sensor integration for live slot availability updates.",
    fullDescription:
      "The Smart Parking System is a comprehensive IoT solution designed to eliminate the hassle of finding parking in crowded areas. By deploying IR sensors at each parking slot, the system provides real-time visibility into which spots are occupied and which are available. The ESP32 microcontroller acts as the central hub, wirelessly transmitting sensor data to a centralized LED dashboard display at the parking entrance, enabling drivers to make informed decisions before entering the lot. The system includes automatic slot counting algorithms, real-time wireless data transmission, and an intuitive visual interface that makes it accessible to parking attendants and drivers alike. Built entirely with Arduino/ESP32 in C++, it demonstrates robust embedded systems engineering with practical real-world impact in urban infrastructure management.",
    techDetails:
      "Built with Arduino/ESP32 microcontrollers in C++, this system uses IR sensors to detect vehicle presence in real-time. The slot availability data is transmitted wirelessly and displayed on an LED dashboard. Features include automatic slot counting, real-time updates, and an intuitive user interface.",
    features: [
      "Real-time slot detection with IR sensors",
      "Wireless data transmission via ESP32",
      "LED dashboard for live visualization",
      "Automatic slot counting algorithm",
      "OTA firmware update support",
    ],
    impact: "Streamlined parking management with instant slot availability updates.",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "E-Grampanchayat Portal",
    image: "/images/grampanchayat.png",
    tags: ["HTML", "JavaScript", "MySQL", "PHP", "CSS", "Web Dev"],
    category: "Web Development",
    filterCategory: "web",
    status: "completed",
    description:
      "Digital governance dashboard for streamlining village record management and administrative processes.",
    fullDescription:
      "The E-Grampanchayat Portal is a comprehensive web-based platform aimed at digitizing and modernizing rural governance in India. It replaces paper-based record-keeping with an efficient digital system that handles citizen records management, birth and death registration, tax collection tracking, and automated report generation. The portal was designed with a focus on accessibility and ease of use for village-level administrators who may have limited technical expertise. By bringing transparency and efficiency to rural governance processes, this project demonstrates how technology can bridge the digital divide and improve public service delivery. The backend uses MySQL for reliable data persistence, while the frontend provides a clean, responsive interface that works across devices.",
    techDetails:
      "A comprehensive web-based portal built with HTML, CSS, JavaScript, and PHP with MySQL for data persistence. Features include citizen records management, birth/death registration, tax collection tracking, and report generation.",
    features: [
      "Citizen records management system",
      "Birth/death registration module",
      "Tax collection & tracking",
      "Automated report generation",
      "Admin dashboard with analytics",
    ],
    impact: "Digitized village administration, improving transparency and accessibility.",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Disease Prediction System",
    image: "/images/disease-prediction.png",
    tags: ["Python", "Scikit-learn", "Pandas", "ML", "NumPy", "Flask"],
    category: "Machine Learning",
    filterCategory: "ml",
    status: "in-progress",
    description:
      "Supervised learning models for predicting diseases based on patient symptoms and medical history data.",
    fullDescription:
      "The Disease Prediction System leverages multiple supervised machine learning algorithms to predict potential diseases based on patient symptoms, medical history, and demographic data. The system employs Random Forest, Support Vector Machine, and Logistic Regression classifiers, comparing their performance through rigorous cross-validation to select the optimal model for each prediction task. A comprehensive data preprocessing pipeline handles missing values, encodes categorical features, and normalizes numerical data to ensure high-quality inputs for the models. Feature engineering and selection techniques are applied to identify the most predictive symptoms, reducing dimensionality while maintaining accuracy. The system includes a Flask-based web interface that provides probability-scored predictions along with confidence intervals, enabling healthcare professionals to make data-driven preliminary assessments. This project showcases the practical application of ML in healthcare for early disease detection.",
    techDetails:
      "Developed using Python with Scikit-learn, Pandas, and NumPy. Employs Random Forest, SVM, and Logistic Regression with cross-validation. Includes data preprocessing pipelines, feature engineering, and a Flask web interface for interactive predictions.",
    features: [
      "Multiple ML algorithms (RF, SVM, LR)",
      "Data preprocessing pipelines",
      "Feature engineering & selection",
      "Probability score predictions",
      "Cross-validated model comparison",
    ],
    impact: "Enabled early disease detection through data-driven predictions.",
    github: "#",
    demo: "#",
  },
];

const filterCategories = [
  { key: "all", label: "All Projects" },
  { key: "iot", label: "IoT" },
  { key: "web", label: "Web Dev" },
  { key: "ml", label: "ML / AI" },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const isCompleted = status === "completed";
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border backdrop-blur-sm ${
        isCompleted
          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
          : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/20"
      }`}
    >
      {isCompleted ? (
        <CheckCircle2 className="w-3 h-3" />
      ) : (
        <Clock className="w-3 h-3" />
      )}
      {isCompleted ? "Completed" : "In Progress"}
    </div>
  );
}

function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  // Handle ESC key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0 gap-0 bg-cyber-card border-cyber-border rounded-2xl [&>button]:hidden"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <DialogHeader className="sr-only">
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.fullDescription}</DialogDescription>
              </DialogHeader>

              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-14">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded-md text-xs font-mono text-neon-blue inline-block">
                      {project.category}
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <h3 className="text-2xl font-bold text-silver">
                    {project.title}
                  </h3>
                </div>
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Full description */}
                <p className="text-silver-dim text-sm leading-relaxed">
                  {project.fullDescription}
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
                      <li
                        key={i}
                        className="flex items-start gap-3 text-silver-dim text-sm"
                      >
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
                    <span className="text-neon-blue font-semibold">
                      Impact:{" "}
                    </span>
                    <span className="text-silver-dim">{project.impact}</span>
                  </p>
                </div>

                {/* Technology stack as clickable tags */}
                <div>
                  <h4 className="text-sm font-bold text-silver uppercase tracking-wider mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-neon-blue/10 text-neon-blue rounded-lg text-xs font-medium border border-neon-blue/20 hover:bg-neon-blue/20 hover:border-neon-blue/40 cursor-pointer transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue rounded-lg text-sm font-medium transition-all duration-300 border border-neon-blue/20 hover:border-neon-blue/40"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-neon-blue hover:bg-neon-blue/90 text-silver rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-neon-blue/15 hover:shadow-neon-blue/30"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const project =
    selectedProject !== null ? projects[selectedProject] : null;

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
          className="text-center mb-12"
        >
          <p className="text-neon-blue font-mono text-sm mb-3 tracking-wider">
            PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="shimmer-text">Projects</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Tap the cards to flip, or click &quot;View Details&quot; for the
            full breakdown.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveFilter(cat.key);
                setFlippedCards(new Set());
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.key
                  ? "bg-neon-blue text-silver shadow-lg shadow-neon-blue/15"
                  : "bg-cyber-card border border-cyber-border text-silver-dim hover:text-neon-blue hover:border-neon-blue/30"
              }`}
            >
              {activeFilter === cat.key && (
                <Filter className="w-3.5 h-3.5" />
              )}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 3D Flip Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((proj, index) => {
              const originalIndex = projects.findIndex(
                (p) => p.id === proj.id
              );
              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flip-card h-[420px] sm:h-[460px] cursor-pointer ${flippedCards.has(originalIndex) ? "flipped" : ""}`}
                  onClick={() => handleFlip(originalIndex)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleFlip(originalIndex)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`${proj.title} - click to ${flippedCards.has(originalIndex) ? "see front" : "see details"}`}
                >
                  <div className="flip-card-inner relative w-full h-full">
                    {/* Front Side */}
                    <div className="flip-card-front absolute inset-0 rounded-2xl border border-cyber-border bg-cyber-card overflow-hidden group">
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
                        {/* Category badge */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-cyber-darker/80 backdrop-blur-sm rounded-md text-xs font-mono text-neon-blue border border-neon-blue/20">
                          {proj.category}
                        </div>
                        {/* Status badge */}
                        <StatusBadge status={proj.status} />
                        {/* Tap hint on mobile */}
                        <div className="absolute bottom-3 right-3 sm:hidden px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-mono">
                          Tap to flip
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
                          {proj.tags.slice(0, 4).map((tag) => (
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
                          {proj.tags.slice(0, 4).map((tag) => (
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
                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue rounded-lg text-sm font-semibold transition-all duration-300 border border-neon-blue/20 hover:border-neon-blue/40 hover:shadow-lg hover:shadow-neon-blue/10"
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(originalIndex);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-neon-blue hover:bg-neon-blue/90 text-silver rounded-lg text-sm font-medium transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-silver-dim text-lg">
              No projects in this category yet.
            </p>
            <p className="text-silver-dim/60 text-sm mt-2">
              Check back soon!
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Quick-View Modal using shadcn Dialog */}
      {project && (
        <ProjectModal
          project={project}
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
