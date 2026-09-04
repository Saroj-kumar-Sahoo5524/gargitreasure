import type { Metadata } from 'next';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { GoalPicker } from '@/components/sections/GoalPicker';

export const metadata: Metadata = {
  title: 'Financial Solutions — Gargi Treasure',
  description:
    'From everyday financing needs to long-term wealth building — explore financial solutions designed around your goals.',
};

export default function SolutionsPage() {
  return (
    <div className="pt-[80px]">
      <SolutionsGrid />
      <GoalPicker />
    </div>
  );
}
