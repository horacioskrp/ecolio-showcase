"use client";

import { useRef } from "react";
import { AudiencesSection } from "@/components/landing/audiences-section";
import { AutomationSection } from "@/components/landing/automation-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { DigitalizationSection } from "@/components/landing/digitalization-section";
import { ContributionSection } from "@/components/landing/contribution-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { ModulesSection } from "@/components/landing/modules-section";
import { OpenSourceSection } from "@/components/landing/open-source-section";
import { SecuritySection } from "@/components/landing/security-section";
import { SiteHeader } from "@/components/landing/site-header";
import { StatisticsSection } from "@/components/landing/statistics-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TechSection } from "@/components/landing/tech-section";
import { useLandingAnimations } from "@/components/landing/use-landing-animations";

export function LandingPage() {
  const rootRef = useRef<HTMLElement>(null);
  useLandingAnimations(rootRef);

  return (
    <main ref={rootRef} className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <DigitalizationSection />
      <AutomationSection />
      <AudiencesSection />
      <ModulesSection />
      <StatisticsSection />
      <CapabilitiesSection />
      <SecuritySection />
      <StatsSection />
      <OpenSourceSection />
      <TechSection />
      <ContributionSection />
      <LandingFooter />
    </main>
  );
}
