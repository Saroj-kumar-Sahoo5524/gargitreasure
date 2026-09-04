import type { Metadata } from 'next';
import { ResourcesGrid } from '@/components/sections/ResourcesGrid';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
  title: 'Resources — Gargi Treasure',
  description:
    'Practical guides on budgeting, loans, and investing — written in plain language.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-[80px]">
      <ResourcesGrid />
      <FAQAccordion />
    </div>
  );
}
