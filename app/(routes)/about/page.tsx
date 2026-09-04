import type { Metadata } from 'next';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Timeline } from '@/components/sections/Timeline';

export const metadata: Metadata = {
  title: 'About Us — Gargi Treasure',
  description:
    'At Gargi Treasure, we believe financial services should be easier to understand, easier to access, and designed around real financial goals.',
};

export default function AboutPage() {
  return (
    <div className="pt-[80px]">
      <AboutSection />
      <WhyChoose />
      <Timeline />
    </div>
  );
}
