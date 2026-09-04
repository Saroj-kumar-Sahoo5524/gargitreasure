import type { BadgeVariant } from '@/types/content';

interface BadgeProps {
  variant: BadgeVariant;
  children: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  short: 'bg-[rgba(36,81,214,.1)] text-royal-deep',
  medium: 'bg-[rgba(168,124,52,.12)] text-brass',
  long: 'bg-[rgba(14,124,123,.1)] text-teal-deep',
  moderate: 'bg-[rgba(181,100,28,.1)] text-warn',
  higher: 'bg-[rgba(198,58,58,.1)] text-[#C63A3A]',
};

/** Small colored pill badge for investment table and cards. */
export function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-[11px] py-1 rounded-full text-[12px] font-bold ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
