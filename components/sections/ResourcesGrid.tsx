'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import {
  FaWallet, FaFileInvoiceDollar, FaScaleBalanced, FaChartLine, FaPiggyBank, FaCircleQuestion,
  FaMoneyBillTrendUp, FaArrowRight,
} from 'react-icons/fa6';
import { Kicker } from '@/components/ui/Kicker';
import { resourcesData } from '@/lib/data/resources';
import type { ResourceCard } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaWallet, FaFileInvoiceDollar, FaScaleBalanced, FaChartLine, FaPiggyBank, FaCircleQuestion,
  FaMoneyBillTrendUp,
};

function ResourceCardComponent({ card, index }: { card: ResourceCard; index: number }) {
  const shouldReduce = useReducedMotion();
  const Icon = iconMap[card.iconName];

  return (
    <motion.div
      className="group relative bg-white border border-border-base rounded-[16px] overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-lg"
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
    >
      <div className="h-[150px] bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white/85 text-[30px]">
        {Icon && <Icon size={30} />}
      </div>
      <div className="p-5 pb-[60px]">
        <div className="flex gap-3 text-[12px] text-text-soft font-semibold mb-[10px]">
          <span className="text-royal">{card.category}</span>
          <span>·</span>
          <span>{card.readTime}</span>
        </div>
        <h4 className="font-heading font-bold text-[15.5px] text-ink mb-2 leading-[1.4]">{card.title}</h4>
        <p className="text-[13.5px] text-text-muted">{card.description}</p>
      </div>

      {/* Know More button — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <Link
          href={`/resources/${card.slug}`}
          className="flex items-center justify-center gap-2 w-full bg-royal text-white text-[13.5px] font-semibold py-[10px] rounded-[10px] hover:bg-royal/90 transition-colors duration-200"
        >
          Know More <FaArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}


/**
 * Resources grid — six financial education cards.
 */
export function ResourcesGrid() {
  return (
    <section id="resources" className="section-tight" style={{ background: 'var(--bg-alt, #EEF1F6)' }}>
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Resources</Kicker>
          <h2 className="font-heading font-extrabold text-ink" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Financial Education Hub
          </h2>
        </motion.div>

        <motion.p
          className="text-text-muted text-[16.5px] mb-[40px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          At Gargi Treasure, we believe that true financial clarity comes from reliable information. We have deconstructed complex Indian financial systems, regulatory protections, and wealth building frameworks into straightforward, actionable insights to help you make informed decisions with absolute confidence.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {resourcesData.map((card, i) => (
            <ResourceCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
