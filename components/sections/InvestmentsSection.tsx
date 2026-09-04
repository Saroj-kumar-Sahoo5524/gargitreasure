'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { Kicker } from '@/components/ui/Kicker';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { InvestmentCalculator } from './InvestmentCalculator';
import { investmentCards, investmentTableRows } from '@/lib/data/investments';
import type { InvestmentCard } from '@/types/content';

function InvestCardComponent({ card }: { card: InvestmentCard }) {
  return (
    <div
      className={`rounded-[20px] p-8 relative overflow-hidden text-white ${card.gradientClass === 'short' ? 'bg-gradient-to-br from-[#123A6E] to-[#1E4FD8]' : 'bg-gradient-to-br from-[#0A5F5E] to-[#0E7C7B]'}`}
    >
      <span className="inline-block bg-white/[0.18] px-3 py-[5px] rounded-full text-[12px] font-bold mb-4">
        {card.badge}
      </span>
      <h3 className="text-white font-heading font-bold text-[22px] mb-[10px]">{card.title}</h3>
      <p className="text-white/75 text-[14.5px] mb-[22px]">{card.description}</p>

      <div className="grid grid-cols-2 gap-3 mb-[22px]">
        {card.meta.map((m) => (
          <div key={m.label} className="bg-white/10 rounded-[11px] p-3 pb-3">
            <div className="text-[11px] text-white/60 font-semibold mb-1">{m.label}</div>
            <div className="font-heading font-extrabold text-[14.5px]">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[12.5px] text-white/80 mb-5">
        <FaTriangleExclamation size={12} />
        {card.riskNote}
      </div>

      <Button variant="light" size="sm" href={card.href}>
        {card.ctaLabel}
      </Button>
    </div>
  );
}

/**
 * Investments section — cards, comparison table, and investment calculator.
 */
export function InvestmentsSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="investments" className="section" style={{ background: 'var(--bg-alt, #EEF1F6)' }}>
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Investments</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Build today. Grow tomorrow.
          </h2>
          <p className="text-text-muted text-[17px]">
            Structured investment opportunities across different time horizons — each with clear terms and risk information.
          </p>
        </motion.div>

        {/* Investment cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[56px]">
          {investmentCards.map((card, i) => (
            <motion.div
              key={card.term}
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <InvestCardComponent card={card} />
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.h3
          className="mb-5 text-[19px] font-heading font-bold text-ink"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Investment comparison
        </motion.h3>

        <motion.div
          className="overflow-x-auto rounded-[16px] border border-border-base bg-white mb-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <table className="w-full border-collapse min-w-[760px]">
            <thead>
              <tr>
                {['Investment Type', 'Time Horizon', 'Minimum Investment', 'Return Structure', 'Liquidity', 'Risk Level', 'Suitable For'].map((h) => (
                  <th key={h} className="text-left p-[16px_18px] bg-bg-alt text-[12.5px] text-text-muted font-bold border-b border-border-base whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investmentTableRows.map((row) => (
                <tr key={row.type}>
                  <td className="p-[16px_18px] border-b border-border-soft text-[14px] text-ink">{row.type}</td>
                  <td className="p-[16px_18px] border-b border-border-soft"><Badge variant={row.horizonBadge}>{row.horizon}</Badge></td>
                  <td className="p-[16px_18px] border-b border-border-soft text-[14px] text-ink tabular-nums">{row.minimum}</td>
                  <td className="p-[16px_18px] border-b border-border-soft text-[14px] text-ink">{row.returnStructure}</td>
                  <td className="p-[16px_18px] border-b border-border-soft text-[14px] text-ink">{row.liquidity}</td>
                  <td className="p-[16px_18px] border-b border-border-soft"><Badge variant={row.riskBadge}>{row.risk}</Badge></td>
                  <td className="p-[16px_18px] border-b border-border-soft text-[14px] text-ink">{row.suitableFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Investment calculator */}
        <InvestmentCalculator />
      </div>
    </section>
  );
}
