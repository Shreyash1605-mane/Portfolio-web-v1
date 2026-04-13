"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "DYPSEM (D.Y. Patil College of Engineering)",
    location: "Maharashtra, India",
    period: "Currently Pursuing",
    description:
      "Specializing in Cybersecurity and Data Science. Active participant in hackathons, coding competitions, and technical workshops. Maintaining strong academic performance while building real-world projects.",
    highlights: ["Cybersecurity Specialization", "Smart India Hackathon", "Data Science Track"],
    icon: GraduationCap,
    color: "text-neon-blue",
    borderColor: "border-neon-blue/30",
    dotColor: "bg-neon-blue",
    lineColor: "bg-neon-blue/20",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Maharashtra State Board",
    location: "Maharashtra, India",
    period: "Completed",
    description:
      "Completed Higher Secondary education with a Science-Mathematics focus. Built foundation in programming and analytical thinking that led to pursuing Computer Science at the university level.",
    highlights: ["Science-Mathematics", "State Board", "Merit Recognition"],
    icon: GraduationCap,
    color: "text-violet-700",
    borderColor: "border-violet-400/30",
    dotColor: "bg-violet-400",
    lineColor: "bg-violet-400/20",
  },
  {
    degree: "Professional Certifications",
    institution: "NPTEL · HackerRank · DY Patil",
    location: "Online",
    period: "2023 - Present",
    description:
      "Earned industry-recognized certifications to validate technical skills. OOP Fundamentals from NPTEL (IIT), IoT from DY Patil University, and JavaScript from HackerRank demonstrate commitment to continuous learning.",
    highlights: ["NPTEL (IIT)", "HackerRank", "IoT Certified"],
    icon: Award,
    color: "text-emerald-700",
    borderColor: "border-emerald-400/30",
    dotColor: "bg-emerald-400",
    lineColor: "bg-emerald-400/20",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
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
            ACADEMIC BACKGROUND
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education &{" "}
            <span className="shimmer-text">Learning</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            A foundation built on academic rigor, continuous learning, and
            real-world application.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/40 via-neon-blue/15 to-transparent" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] sm:left-[26px] top-6 z-10">
                  <div
                    className={`w-5 h-5 rounded-full ${item.dotColor} ring-4 ring-cyber-dark/80`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`p-5 sm:p-6 rounded-xl border ${item.borderColor} bg-cyber-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.04] glow-hover hover:-translate-y-0.5 transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg bg-cyber-dark ${item.color} shrink-0`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-silver">
                          {item.degree}
                        </h3>
                        <p className={`${item.color} text-sm font-medium`}>
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-silver-dim text-xs sm:text-sm shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-silver-dim text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>

                  {/* Description */}
                  <p className="text-silver-dim text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${item.borderColor} ${item.color} bg-neon-blue/10`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
