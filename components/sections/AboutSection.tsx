'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';

/**
 * About Us section — two-column layout with copy and quote panel.
 */
export function AboutSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="section">
      <div className="max-w-content mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Copy */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-royal font-bold text-[14.5px] block mb-[14px]">About Us</span>
            <h2
              className="font-heading font-extrabold text-ink mb-5"
              style={{ fontSize: 'clamp(26px,3vw,34px)' }}
            >
              Financial services built to be understood, not just used
            </h2>
            <p className="text-text-muted text-[16.5px] mb-5 max-w-[520px]">
              At Gargi Treasure, we believe financial services should be easier to understand, easier to access, and designed around real financial goals.
            </p>
            <p className="text-text-muted text-[16.5px] mb-7 max-w-[520px]">
              Our aim is to connect people with appropriate financial solutions while emphasizing responsible decision-making and transparent information at every step — from application to ongoing support.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Clear, transparent terms',
                'Goal-oriented planning',
                'Responsible guidance',
                'Long-term relationships',
              ].map((v) => (
                <div key={v} className="flex gap-3 items-start">
                  <FaCheck className="text-royal mt-[3px] flex-shrink-0" size={13} />
                  <span className="text-[14px] font-semibold text-ink-soft">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote panel */}
          <motion.div
            className="bg-bg-alt rounded-[20px] p-9 border border-border-base"
            initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-heading font-bold text-[20px] text-ink leading-[1.5] mb-[18px]">
              &ldquo;We aim to make financial decisions feel less like paperwork and more like progress toward something that matters to you.&rdquo;
            </p>
            <p className="text-[13px] text-text-soft font-semibold">— Gargi Treasure, Company Philosophy</p>

            <div className="mt-6 h-px bg-border-base" />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[12px] text-text-soft font-semibold mb-1">Mission</div>
                <div className="text-[13.5px] text-ink-soft font-semibold">Accessible, transparent finance</div>
              </div>
              <div>
                <div className="text-[12px] text-text-soft font-semibold mb-1">Vision</div>
                <div className="text-[13.5px] text-ink-soft font-semibold">Financial confidence for all</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
