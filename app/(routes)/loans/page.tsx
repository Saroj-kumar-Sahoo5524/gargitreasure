import type { Metadata } from 'next';
import { LoansSection } from '@/components/sections/LoansSection';

export const metadata: Metadata = {
  title: 'Loans — Gargi Treasure',
  description:
    'Explore personal, vehicle, and business loan options with flexible eligibility and transparent processes at Gargi Treasure.',
};

export default function LoansPage() {
  return (
    <div className="pt-[80px]">
      <LoansSection />
    </div>
  );
}
