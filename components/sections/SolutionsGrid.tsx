'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import {
  FaSackDollar, FaCar, FaBriefcase, FaHouseChimney, FaChartLine, FaUserTie,
} from 'react-icons/fa6';
import { servicesData } from '@/lib/data/services';
import { Kicker } from '@/components/ui/Kicker';
import type { ServiceCard } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaSackDollar, FaCar, FaBriefcase, FaHouseChimney, FaChartLine, FaUserTie,
};

function ServiceCardComponent({ card, index }: { card: ServiceCard; index: number }) {
  const shouldReduce = useReducedMotion();
  const Icon = iconMap[card.iconName];

  return (
    <motion.div
      className="bg-white border border-border-base rounded-md p-[30px_26px] relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 group hover:-translate-y-[6px] hover:shadow-lg hover:border-transparent"
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      style={{
        /* gradient border on hover via pseudo element — replicated inline */
      }}
    >
      {/* Icon */}
      <div
        className="w-[50px] h-[50px] rounded-[13px] flex items-center justify-center text-[21px] mb-5 text-white"
        style={{ background: card.iconGradient }}
      >
        {Icon && <Icon size={20} />}
      </div>

      <h3 className="text-[19px] font-heading font-bold text-ink mb-[10px]">{card.title}</h3>
      <p className="text-text-muted text-[14.5px] mb-[18px]">{card.description}</p>

      <ul className="mb-[22px] space-y-2">
        {card.features.map((f) => (
          <li key={f} className="text-[13.5px] text-text-muted flex items-center gap-2">
            <span className="text-teal text-[12px]">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href={card.href}
        className="inline-flex items-center gap-2 font-bold text-[14px] text-ink"
      >
        Explore {card.title}
        <FaArrowRight size={11} className="transition-transform duration-[250ms] group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}

/**
 * Financial solutions grid — six service cards with staggered scroll reveal.
 */
export function SolutionsGrid() {
  return (
    <section id="solutions" className="section">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Financial solutions</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Financial solutions built around your goals
          </h2>
          <p className="text-text-muted text-[17px]">
            From everyday financing needs to long-term wealth building, explore services designed to fit real financial circumstances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {servicesData.map((card, i) => (
            <ServiceCardComponent key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
