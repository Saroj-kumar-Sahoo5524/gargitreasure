'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

/**
 * CTA Band — dark gradient banner with two call-to-action buttons.
 */
export function CTABand() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-tight">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="relative overflow-hidden rounded-[26px] px-[56px] py-[64px] flex items-center justify-between gap-[30px] flex-wrap"
          style={{
            background: 'linear-gradient(120deg, #0B1B34 0%, #142B52 100%)',
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[-50%] right-[-10%] w-[50%] h-[200%]"
            style={{ background: 'radial-gradient(circle, rgba(36,81,214,.35), transparent 60%)' }}
          />

          <div className="relative">
            <h2
              className="text-white font-heading font-extrabold mb-[10px] max-w-[480px]"
              style={{ fontSize: 'clamp(24px,3vw,32px)' }}
            >
              Ready to take the next step?
            </h2>
            <p className="text-white/65 text-[15.5px] max-w-[440px]">
              Explore a solution that fits your goal, or speak with an advisor about what&apos;s right for you.
            </p>
          </div>

          <div className="flex gap-[14px] relative flex-wrap">
            <Button variant="primary" href="/solutions">Explore Solutions</Button>
            <Button variant="light" href="/contact">Talk to an Advisor</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
