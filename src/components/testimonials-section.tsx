"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prof. Amit Deshmukh",
    role: "Faculty Mentor, DYPSEM",
    quote:
      "Shreyash is one of the most dedicated students I've mentored. His ability to bridge cybersecurity theory with practical implementation is exceptional. He consistently delivers beyond expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Hackathon Team Lead",
    quote:
      "Working with Shreyash during the Smart India Hackathon was a fantastic experience. His problem-solving skills and calm demeanor under pressure made our team's success possible.",
    rating: 5,
  },
  {
    name: "Rajesh Kulkarni",
    role: "TechSaksham Program Coordinator",
    quote:
      "During his AI internship, Shreyash demonstrated remarkable technical aptitude and a genuine passion for learning. His project implementations were among the best in the cohort.",
    rating: 4,
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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl border border-cyber-border bg-cyber-card/50 backdrop-blur-sm elevated-card card-shine soft-focus-ring">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-blue/10 text-neon-blue opacity-80 mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Quote Text */}
                <p className="text-silver-dim text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-cyber-border mb-4" />

                {/* Person Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/15 flex items-center justify-center text-sm font-bold text-[#C2410C] shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-silver">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-silver-dim mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyber-border rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyber-border rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
