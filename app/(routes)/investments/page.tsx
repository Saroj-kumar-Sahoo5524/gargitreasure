import type { Metadata } from 'next';
import { InvestmentsSection } from '@/components/sections/InvestmentsSection';

export const metadata: Metadata = {
  title: 'Investments — Gargi Treasure',
  description:
    'Structured investment opportunities across short and long-term horizons — each with clear terms and risk information.',
};

export default function InvestmentsPage() {
  return (
    <div className="pt-[80px]">
      <InvestmentsSection />
    </div>
  );
}
