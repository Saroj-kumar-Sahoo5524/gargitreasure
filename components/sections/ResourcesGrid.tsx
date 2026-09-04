'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  FaWallet, FaFileInvoiceDollar, FaScaleBalanced, FaChartLine, FaPiggyBank, FaCircleQuestion,
} from 'react-icons/fa6';
import { Kicker } from '@/components/ui/Kicker';
import { resourcesData } from '@/lib/data/resources';
import type { ResourceCard } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaWallet, FaFileInvoiceDollar, FaScaleBalanced, FaChartLine, FaPiggyBank, FaCircleQuestion,
};

function ResourceCardComponent({ card, index }: { card: ResourceCard; index: number }) {
  const shouldReduce = useReducedMotion();
  const Icon = iconMap[card.iconName];

  return (
    <motion.div
      className="bg-white border border-border-base rounded-[16px] overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-md"
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
    >
      <div className="h-[150px] bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white/85 text-[30px]">
        {Icon && <Icon size={30} />}
      </div>
      <div className="p-5">
        <div className="flex gap-3 text-[12px] text-text-soft font-semibold mb-[10px]">
          <span className="text-royal">{card.category}</span>
          <span>·</span>
          <span>{card.readTime}</span>
        </div>
        <h4 className="font-heading font-bold text-[15.5px] text-ink mb-2 leading-[1.4]">{card.title}</h4>
        <p className="text-[13.5px] text-text-muted">{card.description}</p>
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
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Resources</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Financial education hub
          </h2>
          <p className="text-text-muted text-[17px]">
            Practical guides on budgeting, loans, and investing — written in plain language.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {resourcesData.map((card, i) => (
            <ResourceCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
