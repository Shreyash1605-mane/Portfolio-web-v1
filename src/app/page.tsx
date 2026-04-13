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
import CurrentFocusSection from "@/components/current-focus-section";
import ContactSection from "@/components/contact-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import CertificationsSection from "@/components/certifications-section";
import FooterSection from "@/components/footer-section";
import WaveDivider from "@/components/wave-divider";
import ScrollSpy from "@/components/scroll-spy";
import KeyboardNavigation from "@/components/keyboard-navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PagePreloader />
      <CursorGlow />
      <Navbar />
      <ScrollSpy />
      <KeyboardNavigation />
      <main className="flex-1">
        <HeroSection />
        <WaveDivider variant="inverted" />
        <WhatIDoSection />
        <WaveDivider variant="normal" />
        <EducationSection />
        <WaveDivider variant="inverted" />
        <MilestonesSection />
        <WaveDivider variant="normal" />
        <ProjectsSection />
        <WaveDivider variant="inverted" />
        <ExperienceSection />
        <WaveDivider variant="normal" />
        <CertificationsSection />
        <WaveDivider variant="inverted" />
        <SkillsSection />
        <WaveDivider variant="inverted" />
        <CurrentFocusSection />
        <WaveDivider variant="normal" />
        <TestimonialsCarousel />
        <WaveDivider variant="inverted" />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
