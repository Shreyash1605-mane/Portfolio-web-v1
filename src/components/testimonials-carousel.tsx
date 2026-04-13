"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Prof. Amit Deshmukh",
    role: "Faculty Mentor, DYPSEM",
    quote:
      "Shreyash is one of the most dedicated students I've mentored. His ability to bridge cybersecurity theory with practical implementation is exceptional. He consistently delivers beyond expectations.",
    rating: 5,
    initials: "AD",
  },
  {
    name: "Priya Sharma",
    role: "Hackathon Team Lead",
    quote:
      "Working with Shreyash during the Smart India Hackathon was a fantastic experience. His problem-solving skills and calm demeanor under pressure made our team's success possible.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rajesh Kulkarni",
    role: "TechSaksham Program Coordinator",
    quote:
      "During his AI internship, Shreyash demonstrated remarkable technical aptitude and a genuine passion for learning. His project implementations were among the best in the cohort.",
    rating: 4,
    initials: "RK",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? "fill-neon-blue text-neon-blue"
              : "fill-transparent text-cyber-border"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    },
    []
  );

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
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
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What People{" "}
            <span className="shimmer-text">Say</span>
          </h2>
          <p className="text-silver-dim max-w-2xl mx-auto text-base sm:text-lg">
            Words from mentors, teammates, and coordinators who have worked
            closely with me.
          </p>
          <div className="w-24 h-1 bg-neon-blue/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full p-8 sm:p-10 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card">
                  {/* Large quote icon background */}
                  <div className="absolute top-4 right-6 opacity-[0.04] pointer-events-none">
                    <Quote className="w-32 h-32 text-neon-blue" />
                  </div>

                  {/* Quote Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neon-blue/10 text-neon-blue mb-6">
                    <Quote className="w-6 h-6" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-silver-dim text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Person Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar with gradient ring */}
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue to-neon-glow p-[2px]">
                          <div className="w-full h-full rounded-full bg-cyber-card flex items-center justify-center text-sm font-bold text-neon-blue">
                            {testimonial.initials}
                          </div>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-cyber-card" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-silver">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-silver-dim mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-blue/20 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-blue/20 rounded-bl-2xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-border hover:border-neon-blue/50 text-silver-dim hover:text-neon-blue transition-all duration-300 hover:bg-neon-blue/5 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 h-2.5 bg-neon-blue"
                      : "w-2.5 h-2.5 bg-cyber-border hover:bg-silver-dim"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-border hover:border-neon-blue/50 text-silver-dim hover:text-neon-blue transition-all duration-300 hover:bg-neon-blue/5 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Counter text */}
          <p className="text-center text-xs text-silver-dim font-mono mt-4">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
        </motion.div>

        {/* Mini testimonial cards below carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                current === i
                  ? "border-neon-blue/40 bg-neon-blue/5 shadow-lg shadow-neon-blue/5"
                  : "border-cyber-border bg-cyber-card/30 hover:border-neon-blue/20 hover:bg-neon-blue/[0.02]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  current === i ? "bg-neon-blue text-white" : "bg-cyber-border/50 text-silver-dim"
                }`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-medium truncate ${current === i ? "text-neon-blue" : "text-silver"}`}>
                    {t.name}
                  </p>
                  <p className="text-xs text-silver-dim truncate">{t.role}</p>
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
