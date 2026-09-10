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
              Where Strategic Capital Meets Everyday Opportunity
            </h2>
            <p className="text-text-muted text-[16.5px] mb-5 max-w-[520px]">
              At Gargi Treasure, we believe real financial momentum begins with clarity knowing where the market is moving, securing the right capital at the right time, and choosing solutions that build genuine security. Whether you are funding a life milestone through structured personal credit or deploying capital into physical commerce, we cut through institutional complexity to deliver honest terms, direct guidance, and dependable execution that moves your balance sheet forward.
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
                <div className="text-[13.5px] text-ink-soft font-semibold">To simplify access to capital and market opportunities by delivering transparent credit solutions, dependable trade execution, and responsible guidance at every step.</div>
              </div>
              <div>
                <div className="text-[12px] text-text-soft font-semibold mb-1">Vision</div>
                <div className="text-[13.5px] text-ink-soft font-semibold">To build an enduring, trusted ecosystem where accessible finance, strategic investments, and global trade converge with complete clarity and purpose.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
