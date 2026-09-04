'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { GoalKey } from '@/types/content';

interface GoalIconProps {
  goal: GoalKey;
  size?: number;
  color?: string;
  className?: string;
}

/** SVG path data per goal key. Inline so no external assets needed. */
const paths: Record<GoalKey, string> = {
  vehicle:
    'M3 12h1l1-3h10l1 3h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H8a2 2 0 0 1-4 0H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm3 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm8 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM5 12l.75-2.25h8.5L15 12H5z',
  home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  business:
    'M20 6h-2.18c.07-.44.18-.88.18-1a3 3 0 0 0-6 0c0 .12.11.56.18 1H10c-1.1 0-1.99.9-1.99 2L8 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
  wealth:
    'M17 8C8 10 5.9 16.17 3.82 21h1.86l1.02-2.5c.26.1.55.2.82.3 1.08.36 2.1.7 2.95 1.34.85.64 1.58 1.65 2.53 3.11V21h2v-1.37c1.33-.5 2.67-1.38 4.04-2.95A12.43 12.43 0 0 0 19 8c-2 0-2 0-2 0z',
  expenses:
    'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
  future:
    'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
};

/**
 * Animated inline SVG icon per goal.
 * Transitions between goals with AnimatePresence fade/scale.
 * aria-hidden — purely decorative, the goal title conveys the meaning.
 */
export function GoalIcon({ goal, size = 24, color = 'currentColor', className = '' }: GoalIconProps) {
  const shouldReduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.svg
        key={goal}
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={shouldReduce ? false : { opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={shouldReduce ? undefined : { opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2 }}
      >
        <path d={paths[goal]} />
      </motion.svg>
    </AnimatePresence>
  );
}
