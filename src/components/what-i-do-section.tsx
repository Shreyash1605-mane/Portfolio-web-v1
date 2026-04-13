"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, Cpu, Globe } from "lucide-react";

const specialties = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Ethical hacking, network security, vulnerability assessment, and security best practices for robust digital protection.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
    iconBg: "bg-cyan-400/15",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Data analysis, machine learning models, statistical computing, and data-driven decision making with Python and Pandas.",
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "border-violet-400/20",
    iconBg: "bg-violet-400/15",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded",
    description:
      "Arduino, ESP32, sensor integration, real-time systems, and building smart connected hardware prototypes.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    iconBg: "bg-amber-400/15",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications, responsive UI design, database management, and modern JavaScript frameworks.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    iconBg: "bg-emerald-400/15",
  },
];

export default function WhatIDoSection() {
  return (
    <section id="what-i-do" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/20 to-transparent pointer-events-none" />

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
            SPECIALIZATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I{" "}
            <span className="shimmer-text">Do</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Bridging the gap between hardware, software, and security to build
            impactful real-world solutions.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative h-full p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm transition-all duration-400 glow-hover hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.iconBg} ${item.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3
                  className={`text-lg font-bold mb-2 ${item.color} transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <p className="text-silver-dim text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner line */}
                <div
                  className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 ${item.borderColor} rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 ${item.borderColor} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
