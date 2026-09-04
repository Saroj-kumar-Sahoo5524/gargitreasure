'use client';

import { motion, useReducedMotion } from 'framer-motion';

type StatIconVariant = 'years' | 'customers' | 'solutions' | 'digital';

interface StatIconProps {
  variant: StatIconVariant;
  isVisible: boolean;
  size?: number;
}

/** Inline SVG paths per stat */
const iconPaths: Record<StatIconVariant, string> = {
  years: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
  customers: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  solutions: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
  digital: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z',
};

/**
 * Animated stat icon that pops/scales in when the stat becomes visible.
 * aria-hidden — purely decorative.
 */
export function StatIcon({ variant, isVisible, size = 20 }: StatIconProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="rgba(255,255,255,0.6)"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-2"
      initial={shouldReduce ? false : { scale: 0.5, opacity: 0 }}
      animate={
        isVisible
          ? { scale: 1, opacity: 1 }
          : { scale: 0.5, opacity: 0 }
      }
      transition={shouldReduce ? {} : { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <path d={iconPaths[variant]} />
    </motion.svg>
  );
}
