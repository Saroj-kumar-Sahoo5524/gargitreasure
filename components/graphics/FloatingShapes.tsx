'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface FloatingShapesProps {
  className?: string;
}

/**
 * Decorative floating SVG shapes for the hero section background.
 * - Loops infinitely with staggered delays per shape
 * - Respects prefers-reduced-motion
 * - aria-hidden, pointer-events-none — purely decorative
 * - Hidden on mobile (< 768px) via CSS class
 */
export function FloatingShapes({ className = '' }: FloatingShapesProps) {
  const shouldReduce = useReducedMotion();

  const floatConfig = (delay: number) => ({
    animate: shouldReduce ? {} : {
      y: [0, -14, 0],
      rotate: [0, 3, 0],
    },
    transition: shouldReduce ? {} : {
      duration: 6 + delay,
      delay,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none hidden md:block select-none ${className}`}
    >
      {/* Blurred blob — top right */}
      <motion.div
        className="absolute top-8 right-[8%] w-64 h-64 rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #2451D6 0%, transparent 70%)' }}
        {...floatConfig(0)}
      />

      {/* Teal accent circle — lower right */}
      <motion.div
        className="absolute bottom-24 right-[12%] w-40 h-40 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #0E7C7B 0%, transparent 70%)' }}
        {...floatConfig(1.2)}
      />

      {/* Upward arrow shape */}
      <motion.svg
        width="48"
        height="64"
        viewBox="0 0 48 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[30%] right-[5%] opacity-[0.12]"
        {...floatConfig(0.6)}
      >
        <path
          d="M24 60 L24 8 M24 8 L10 24 M24 8 L38 24"
          stroke="#2451D6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Small geometric diamond */}
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[20%] right-[22%] opacity-[0.15]"
        {...floatConfig(1.8)}
      >
        <rect
          x="14"
          y="2"
          width="17"
          height="17"
          rx="3"
          transform="rotate(45 14 2)"
          stroke="#A87C34"
          strokeWidth="2"
        />
      </motion.svg>

      {/* Horizontal line accent */}
      <motion.svg
        width="80"
        height="12"
        viewBox="0 0 80 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[55%] right-[3%] opacity-[0.1]"
        {...floatConfig(2.4)}
      >
        <path
          d="M0 6 Q20 0 40 6 Q60 12 80 6"
          stroke="#2451D6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
