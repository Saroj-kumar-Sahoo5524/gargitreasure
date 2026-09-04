'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { timelineSteps } from '@/lib/data/timeline';
import { TimelineMarker } from '@/components/graphics/TimelineMarker';
import { Kicker } from '@/components/ui/Kicker';

/**
 * How It Works timeline — animated fill line + staggered step reveal on scroll.
 */
export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(timelineRef, { once: true, amount: 0.3 });
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-tight" style={{ background: 'var(--bg-alt, #EEF1F6)' }}>
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Process</Kicker>
          <h2 className="font-heading font-extrabold text-ink" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            How it works
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div
          ref={timelineRef}
          className="relative hidden md:flex justify-between gap-3 mt-3"
        >
          {/* Background track */}
          <div className="absolute top-[23px] left-0 right-0 h-[2px] bg-border-base" />

          {/* Animated fill */}
          <TimelineMarker isVisible={isVisible} />

          {timelineSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex-1 relative text-left"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.22 }}
            >
              {/* Step number circle */}
              <motion.div
                className="w-[46px] h-[46px] rounded-full bg-white border-2 flex items-center justify-center font-heading font-extrabold text-[15px] mb-5 relative z-[1] transition-all duration-[400ms]"
                animate={
                  isVisible
                    ? { borderColor: '#2451D6', color: '#2451D6', boxShadow: '0 0 0 6px rgba(36,81,214,.1)' }
                    : { borderColor: '#E3E7EF', color: '#8791A3', boxShadow: 'none' }
                }
                transition={{ delay: i * 0.22 + 0.4 }}
              >
                {step.number}
              </motion.div>
              <h4 className="font-heading font-bold text-[15.5px] text-ink mb-2">{step.title}</h4>
              <p className="text-[13.5px] text-text-muted max-w-[190px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked timeline */}
        <div className="flex flex-col gap-7 md:hidden">
          {timelineSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-4"
              initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-royal flex items-center justify-center font-heading font-extrabold text-[15px] text-royal flex-shrink-0 shadow-[0_0_0_6px_rgba(36,81,214,.1)]">
                {step.number}
              </div>
              <div>
                <h4 className="font-heading font-bold text-[15.5px] text-ink mb-1">{step.title}</h4>
                <p className="text-[13.5px] text-text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
