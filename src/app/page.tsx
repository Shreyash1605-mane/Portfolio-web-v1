"use client";

import Navbar from "@/components/navbar";
import PagePreloader from "@/components/page-preloader";
import CursorGlow from "@/components/cursor-glow";
import HeroSection from "@/components/hero-section";
import WhatIDoSection from "@/components/what-i-do-section";
import EducationSection from "@/components/education-section";
import MilestonesSection from "@/components/milestones-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import TestimonialsSection from "@/components/testimonials-section";
import FooterSection from "@/components/footer-section";

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="section-divider" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PagePreloader />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <WhatIDoSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <MilestonesSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
