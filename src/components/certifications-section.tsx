"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Shield,
  Code,
  Database,
  Cpu,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CategoryConfig = {
  icon: LucideIcon;
  color: string;
  borderColor: string;
  bg: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
};

const categoryStyles: Record<string, CategoryConfig> = {
  Programming: {
    icon: Code,
    color: "text-cyan-600 dark:text-cyan-400",
    borderColor: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    tagColor: "text-cyan-600 dark:text-cyan-400",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/20",
  },
  IoT: {
    icon: Cpu,
    color: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-500/30",
    bg: "bg-amber-500/10",
    tagColor: "text-amber-600 dark:text-amber-400",
    tagBg: "bg-amber-500/10",
    tagBorder: "border-amber-500/20",
  },
  "Web Dev": {
    icon: BookOpen,
    color: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    tagColor: "text-emerald-600 dark:text-emerald-400",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/20",
  },
  Cybersecurity: {
    icon: Shield,
    color: "text-rose-600 dark:text-rose-400",
    borderColor: "border-rose-500/30",
    bg: "bg-rose-500/10",
    tagColor: "text-rose-600 dark:text-rose-400",
    tagBg: "bg-rose-500/10",
    tagBorder: "border-rose-500/20",
  },
  "Data Science": {
    icon: Database,
    color: "text-violet-600 dark:text-violet-400",
    borderColor: "border-violet-500/30",
    bg: "bg-violet-500/10",
    tagColor: "text-violet-600 dark:text-violet-400",
    tagBg: "bg-violet-500/10",
    tagBorder: "border-violet-500/20",
  },
};

type Certification = {
  name: string;
  issuer: string;
  date: string;
  category: string;
  credential: string;
};

const certifications: Certification[] = [
  {
    name: "Object Oriented Programming",
    issuer: "NPTEL (IIT Roorkee)",
    date: "2024",
    category: "Programming",
    credential: "Elite + Silver",
  },
  {
    name: "The Joy of Computing using Python",
    issuer: "NPTEL (IIT Hyderabad)",
    date: "2024",
    category: "Programming",
    credential: "Elite",
  },
  {
    name: "IoT Fundamentals & Applications",
    issuer: "DY Patil University",
    date: "2023",
    category: "IoT",
    credential: "Certified",
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "2023",
    category: "Web Dev",
    credential: "5-Star",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Cybersecurity",
    credential: "Completed",
  },
  {
    name: "Data Science Foundations",
    issuer: "NPTEL",
    date: "2024",
    category: "Data Science",
    credential: "Elite",
  },
];

function getCredentialIcon(credential: string): LucideIcon {
  if (credential.includes("Star") || credential.includes("5")) return Star;
  if (credential.includes("Elite") || credential.includes("Silver")) return Award;
  if (credential.includes("Completed")) return CheckCircle;
  return CheckCircle;
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.015] to-transparent pointer-events-none" />

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
            VERIFIED CREDENTIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Certifications &{" "}
            <span className="shimmer-text">Badges</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Industry-recognized certifications validating technical expertise.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const style = categoryStyles[cert.category] ?? categoryStyles["Programming"];
            const CategoryIcon = style.icon;
            const CredentialIcon = getCredentialIcon(cert.credential);

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="elevated-card p-5 sm:p-6 rounded-xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm soft-focus-ring card-shine glow-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Top: Icon + Category Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl ${style.bg} ${style.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border ${style.tagBorder} ${style.tagColor} ${style.tagBg}`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-base sm:text-lg font-bold text-silver mb-1.5 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Issuer + Date */}
                  <div className="flex items-center gap-1.5 text-silver-dim text-sm mb-4">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                    <span className="text-silver-dim/40 mx-1">·</span>
                    <span className="shrink-0">{cert.date}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Bottom: Credential Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-cyber-border/50">
                    <div className="flex items-center gap-2">
                      <CredentialIcon
                        className={`w-4 h-4 ${style.color}`}
                      />
                      <span
                        className={`text-sm font-semibold ${style.color}`}
                      >
                        {cert.credential}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-silver-dim/60 hover:text-neon-blue transition-colors duration-200">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Verify</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
