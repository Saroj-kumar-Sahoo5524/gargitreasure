'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaEye, FaHeart, FaSliders, FaUserTie, FaMobileScreen, FaHandshake } from 'react-icons/fa6';
import { whyItems } from '@/lib/data/why';
import { Kicker } from '@/components/ui/Kicker';
import type { WhyItem } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaEye, FaHeart, FaSliders, FaUserTie, FaMobileScreen, FaHandshake,
};

function WhyCard({ item }: { item: WhyItem }) {
  const Icon = iconMap[item.iconName];
  return (
    <div className="bg-white p-[36px_30px] transition-colors duration-[250ms] hover:bg-bg-alt">
      <div className="w-[46px] h-[46px] rounded-[12px] bg-royal/[0.08] text-royal flex items-center justify-center text-[19px] mb-[18px]">
        {Icon && <Icon size={19} />}
      </div>
      <h3 className="font-heading font-bold text-[16.5px] text-ink mb-2">{item.title}</h3>
      <p className="text-[14px] text-text-muted">{item.description}</p>
    </div>
  );
}

/**
 * "Why Choose Gargi Treasure" section — 3×2 grid of benefit items.
 */
export function WhyChoose() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Why Gargi Treasure</Kicker>
          <h2 className="font-heading font-extrabold text-ink" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Why choose Gargi Treasure?
          </h2>
        </motion.div>

        <motion.p
          className="text-text-muted text-[16.5px] mb-[40px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Gargi Treasure is the integrated finance, investment, and commercial trade arm of the Gargi Group. We were founded to serve as a single, dependable ecosystem that addresses both sides of your financial life: accessible lending solutions including Home Loans, Vehicle Loans, and Business Credit alongside disciplined market trading and asset backed investments. Backed by the operational scale and trust of the Gargi Group, we combine institutional due diligence with a customer focused approach, ensuring every financial move you make is built on a solid, reliable foundation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border-base rounded-md overflow-hidden border border-border-base"
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          {whyItems.map((item) => (
            <WhyCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
