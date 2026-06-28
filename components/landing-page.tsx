"use client";

import { useRef, useState } from "react";
import { AudiencesSection } from "@/components/landing/audiences-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { ContributionSection } from "@/components/landing/contribution-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { ModulesSection } from "@/components/landing/modules-section";
import { OpenSourceSection } from "@/components/landing/open-source-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { SecuritySection } from "@/components/landing/security-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TechSection } from "@/components/landing/tech-section";
import { useLandingAnimations } from "@/components/landing/use-landing-animations";

export function LandingPage() {
  const rootRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useLandingAnimations(rootRef);

  return (
    <main ref={rootRef} className="min-h-screen bg-background text-foreground">
      <LandingHeader
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((prev) => !prev)}
      />
      <HeroSection />
      <AudiencesSection />
      <ModulesSection />
      <CapabilitiesSection />
      <SecuritySection />
      <StatsSection />
      <PricingSection />
      <OpenSourceSection />
      <TechSection />
      <ContributionSection />
      <LandingFooter />
    </main>
  );
}
