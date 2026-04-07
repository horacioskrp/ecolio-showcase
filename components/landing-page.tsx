"use client";

import { useRef, useState } from "react";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { ContributionSection } from "@/components/landing/contribution-section";
import { FaqSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { MarqueeSection } from "@/components/landing/marquee-section";
import { ModulesSection } from "@/components/landing/modules-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { UserFlowSection } from "@/components/landing/user-flow-section";
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
      <MarqueeSection />
      <ModulesSection />
      <UserFlowSection />
      <CapabilitiesSection />
      <PricingSection />
      <FaqSection />
      <ContributionSection />
      <LandingFooter />
    </main>
  );
}
