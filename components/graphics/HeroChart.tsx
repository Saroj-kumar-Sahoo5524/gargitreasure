'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero panel portfolio line chart — animated draw-in on mount.
 * Uses Framer Motion pathLength animation on the main line.
 */
export function HeroChart() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative h-[120px] mb-[22px] z-[1]">
      <svg
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroGradLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2451D6" />
            <stop offset="100%" stopColor="#0E7C7B" />
          </linearGradient>
          <linearGradient id="heroGradFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451D6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2451D6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill — static */}
        <path
          d="M0,90 L40,78 L80,84 L120,60 L160,66 L200,42 L240,50 L280,28 L320,34 L360,14 L400,20 L400,120 L0,120 Z"
          fill="url(#heroGradFill)"
        />

        {/* Animated line draw-in */}
        <motion.path
          d="M0,90 L40,78 L80,84 L120,60 L160,66 L200,42 L240,50 L280,28 L320,34 L360,14 L400,20"
          fill="none"
          stroke="url(#heroGradLine)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={shouldReduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
}
