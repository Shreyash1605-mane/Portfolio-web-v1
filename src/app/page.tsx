"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MilestonesSection from "@/components/milestones-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MilestonesSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <FooterSection />
    </div>
  );
}
