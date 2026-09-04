'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface TimelineMarkerProps {
  isVisible: boolean;
}

/**
 * Animated horizontal fill line for the How It Works timeline.
 * Travels from 0% to 100% width when isVisible becomes true.
 */
export function TimelineMarker({ isVisible }: TimelineMarkerProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="absolute top-[23px] left-0 h-[2px]"
      style={{
        background: 'linear-gradient(90deg, #2451D6, #0E7C7B)',
        zIndex: 1,
      }}
      initial={{ width: '0%' }}
      animate={isVisible ? { width: '100%' } : { width: '0%' }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }
      }
    />
  );
}
