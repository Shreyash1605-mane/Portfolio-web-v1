"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Rocket,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";

const experiences = [
  {
    icon: Briefcase,
    title: "AI Intern",
    organization: "TechSaksham",
    subtitle: "Microsoft & SAP CSR Initiative",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    content:
      "Completed an intensive AI internship at TechSaksham, a prestigious CSR initiative by Microsoft and SAP. Gained hands-on experience in artificial intelligence, machine learning workflows, and enterprise-level technology solutions. Worked on real-world AI projects and developed a deep understanding of how AI transforms industries.",
    tags: ["AI/ML", "Microsoft", "SAP", "Enterprise Tech"],
  },
  {
    icon: Rocket,
    title: "Student Ambassador",
    organization: "Vyomika Space Academy",
    subtitle: "Space Education & Outreach",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    content:
      "Served as a Student Ambassador at Vyomika Space Academy, promoting space science education and inspiring the next generation of innovators. Organized workshops, participated in outreach programs, and represented the academy at various events. This role strengthened leadership, communication, and public speaking abilities.",
    tags: ["Leadership", "Space Science", "Education", "Outreach"],
  },
  {
    icon: Award,
    title: "Professional Certifications",
    organization: "NPTEL · DY Patil · HackerRank",
    subtitle: "Verified Technical Credentials",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    content:
      "Earned multiple professional certifications to strengthen technical foundations. These include OOP Fundamentals from NPTEL (IIT certification), IoT specialization from DY Patil University, and JavaScript Intermediate from HackerRank. Each certification represents a commitment to continuous learning and technical mastery.",
    tags: ["NPTEL", "IoT", "JavaScript", "HackerRank"],
  },
];

export default function ExperienceSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
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
            JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="shimmer-text">Certifications</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            A timeline of professional growth, learning, and impact.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {experiences.map((exp, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div
                      className={`border ${exp.borderColor} rounded-2xl bg-cyber-card/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 glow-hover`}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`flex items-center justify-center w-14 h-14 rounded-xl ${exp.bgColor} shrink-0 transition-transform duration-300`}
                        >
                          <exp.icon className={`w-7 h-7 ${exp.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-silver">
                            {exp.title}
                          </h3>
                          <p className="text-neon-blue font-semibold mt-1">
                            {exp.organization}
                          </p>
                          <p className="text-silver-dim text-sm mt-0.5">
                            {exp.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-silver-dim leading-relaxed mb-6 text-sm sm:text-base">
                        {exp.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1.5 ${exp.bgColor} ${exp.color} rounded-full text-xs font-medium border ${exp.borderColor}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => api?.scrollPrev()}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-border hover:border-neon-blue/50 text-silver-dim hover:text-neon-blue transition-all duration-300 hover:bg-neon-blue/5"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-neon-blue"
                      : "w-2 bg-cyber-border hover:bg-silver-dim"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => api?.scrollNext()}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-border hover:border-neon-blue/50 text-silver-dim hover:text-neon-blue transition-all duration-300 hover:bg-neon-blue/5"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
