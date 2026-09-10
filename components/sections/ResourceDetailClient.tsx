'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaWallet, FaFileInvoiceDollar, FaScaleBalanced, FaChartLine, FaPiggyBank, FaCircleQuestion,
  FaMoneyBillTrendUp, FaArrowLeft, FaClock, FaTag,
} from 'react-icons/fa6';
import type { ResourceCard } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaWallet, FaFileInvoiceDollar, FaScaleBalanced, FaChartLine, FaPiggyBank, FaCircleQuestion,
  FaMoneyBillTrendUp,
};

interface Props {
  card: ResourceCard;
}

export function ResourceDetailClient({ card }: Props) {
  const Icon = iconMap[card.iconName];

  return (
    <div className="pt-[80px] min-h-screen bg-white">
      {/* Hero banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-royal via-[#1a3a7a] to-teal">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-content mx-auto px-8 py-[64px]">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[13.5px] font-semibold transition-colors duration-200 mb-8"
            >
              <FaArrowLeft size={12} /> Back to Resources
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Icon */}
            <motion.div
              className="shrink-0 w-[72px] h-[72px] rounded-[18px] bg-white/15 backdrop-blur-sm flex items-center justify-center text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {Icon && <Icon size={30} />}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {/* Category + read time */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-[12px] font-semibold px-3 py-1 rounded-full">
                  <FaTag size={10} /> {card.category}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-[12px] font-semibold px-3 py-1 rounded-full">
                  <FaClock size={10} /> {card.readTime}
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-white leading-[1.2]"
                style={{ fontSize: 'clamp(24px, 3.2vw, 42px)' }}>
                {card.title}
              </h1>
              <p className="text-white/70 text-[15.5px] mt-3 max-w-[600px] leading-[1.6]">
                {card.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-[820px] mx-auto px-8 py-[64px]">
        {card.content.map((section, i) => (
          <motion.div
            key={section.heading}
            className="mb-[48px] last:mb-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
          >
            {/* Section number + heading */}
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 w-[32px] h-[32px] rounded-full bg-royal/10 text-royal flex items-center justify-center text-[13px] font-bold mt-0.5">
                {i + 1}
              </div>
              <h2 className="font-heading font-bold text-ink text-[20px] leading-[1.3]">
                {section.heading}
              </h2>
            </div>

            {/* Body text (optional) */}
            {section.body && (
              <p className="text-text-muted text-[15.5px] leading-[1.8] pl-[48px]">
                {section.body}
              </p>
            )}

            {/* Numbered list */}
            {section.numbered && section.numbered.length > 0 && (
              <ol className="mt-4 pl-[48px] space-y-3">
                {section.numbered.map((item, n) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-text-muted leading-[1.7]">
                    <span className="shrink-0 w-[24px] h-[24px] rounded-full bg-royal text-white flex items-center justify-center text-[12px] font-bold mt-[1px]">
                      {n + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )}

            {/* Bullet list */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-4 pl-[48px] space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[15px] text-text-muted leading-[1.7]">
                    <span className="shrink-0 mt-[7px] w-[7px] h-[7px] rounded-full bg-royal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Comparison table */}
            {section.table && (
              <div className="mt-5 pl-[48px] overflow-x-auto">
                <table className="w-full border-collapse text-[14px] rounded-[12px] overflow-hidden border border-border-base">
                  <thead>
                    <tr className="bg-royal text-white">
                      {section.table.headers.map((h) => (
                        <th key={h} className="text-left px-4 py-3 font-semibold text-[13px] border-r border-white/20 last:border-r-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, r) => (
                      <tr key={r} className={r % 2 === 0 ? 'bg-white' : 'bg-bg-alt'}>
                        {row.map((cell, c) => (
                          <td key={c} className={`px-4 py-3 text-[13.5px] border-r border-border-base last:border-r-0 align-top leading-[1.6] ${c === 0 ? 'font-semibold text-ink' : 'text-text-muted'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Formula block */}
            {section.formula && (
              <div className="mt-5 pl-[48px]">
                <div className="bg-[#0f1923] rounded-[12px] px-6 py-5 border border-royal/20">
                  <p className="font-mono text-[22px] font-bold text-teal tracking-wide text-center">
                    {section.formula.expression}
                  </p>
                </div>
                <p className="mt-3 text-[13.5px] text-text-muted leading-[1.7] italic">
                  {section.formula.legend}
                </p>
              </div>
            )}
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          className="mt-[64px] border-t border-border-base pt-[40px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-ink font-semibold text-[15px] mb-1">Ready to take the next step?</p>
            <p className="text-text-muted text-[13.5px]">Speak with our advisors for personalised guidance.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-royal text-white font-semibold text-[14px] px-6 py-3 rounded-[10px] hover:bg-royal/90 transition-colors duration-200 whitespace-nowrap"
          >
            Talk to an Advisor
          </Link>
        </motion.div>

        {/* Back link bottom */}
        <div className="mt-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-royal hover:text-royal/80 text-[13.5px] font-semibold transition-colors duration-200"
          >
            <FaArrowLeft size={12} /> Back to all resources
          </Link>
        </div>
      </div>
    </div>
  );
}
