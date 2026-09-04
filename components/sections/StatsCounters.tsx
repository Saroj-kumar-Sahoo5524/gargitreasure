'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { statsData } from '@/lib/data/stats';
import { useCountUp } from '@/hooks/useCountUp';
import { StatIcon } from '@/components/graphics/StatIcon';

type StatIconVariant = 'years' | 'customers' | 'solutions' | 'digital';
const iconVariants: StatIconVariant[] = ['years', 'customers', 'solutions', 'digital'];

interface StatCounterProps {
  stat: (typeof statsData)[number];
  index: number;
  iconVariant: StatIconVariant;
}

function StatCounter({ stat, index, iconVariant }: StatCounterProps) {
  const shouldReduce = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { displayValue, ref: countRef } = useCountUp({
    target: stat.count ?? 0,
    prefix: stat.prefix,
    suffix: stat.suffix,
    duration: 1600,
  });

  // Track visibility for icon animation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="text-left border-l-2 border-white/[0.14] pl-5"
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <StatIcon variant={iconVariant} isVisible={isVisible} size={20} />
      <span
        ref={countRef}
        className="font-heading font-extrabold text-white block mb-[6px] tabular-nums"
        style={{ fontSize: 'clamp(28px,3vw,38px)' }}
      >
        {stat.count === null ? stat.staticValue : displayValue}
      </span>
      <span className="text-white/60 text-[13.5px] font-semibold">{stat.label}</span>
    </motion.div>
  );
}

/**
 * Stats strip — dark ink background with four animated count-up statistics.
 */
export function StatsCounters() {
  return (
    <section className="bg-ink py-[56px]">
      <div className="max-w-content mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 row-gap-8">
          {statsData.map((stat, i) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              index={i}
              iconVariant={iconVariants[i]}
            />
          ))}
        </div>
        <p className="mt-7 text-[12.5px] text-white/40 text-center">
          Figures shown are illustrative placeholders for demonstration purposes and should be replaced with verified company data.
        </p>
      </div>
    </section>
  );
}
