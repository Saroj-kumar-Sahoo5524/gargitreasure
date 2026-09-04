import { Hero } from '@/components/sections/Hero';
import { StatsCounters } from '@/components/sections/StatsCounters';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { GoalPicker } from '@/components/sections/GoalPicker';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Timeline } from '@/components/sections/Timeline';
import { DashboardDemo } from '@/components/sections/DashboardDemo';
import { LoansSection } from '@/components/sections/LoansSection';
import { InvestmentsSection } from '@/components/sections/InvestmentsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ResourcesGrid } from '@/components/sections/ResourcesGrid';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTABand } from '@/components/sections/CTABand';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Home page — composes all section components into the full landing page.
 * Individual routes (/loans, /investments, etc.) show each section in isolation.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounters />
      <SolutionsGrid />
      <GoalPicker />
      <WhyChoose />
      <Timeline />
      <DashboardDemo />
      <LoansSection />
      <InvestmentsSection />
      <AboutSection />
      <ResourcesGrid />
      <FAQAccordion />
      <CTABand />
      <ContactSection />
    </>
  );
}
