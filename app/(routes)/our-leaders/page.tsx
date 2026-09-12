import type { Metadata } from 'next';
import { OurLeaders } from '@/components/sections/OurLeaders';

export const metadata: Metadata = {
  title: 'Our Leaders — Gargi Treasure',
  description:
    "Meet the visionary founders, financial strategists, and operational experts driving Gargi Treasure's mission to deliver transparent, goal-oriented financial solutions.",
};

export default function OurLeadersPage() {
  return (
    <div className="pt-[80px]">
      <OurLeaders />
    </div>
  );
}
