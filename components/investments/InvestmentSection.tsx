/**
 * InvestmentSection
 * Renders one investment area (e.g., Petrochemicals, Solar, EV Charging).
 * Contains a title, subtitle, description, and a grid of InvestmentOpportunityCards.
 * Alternates background between white and #F8FAFC for visual rhythm.
 *
 * If the section has an optional `investorSnapshot`, a premium 3-stat strip is
 * rendered below the opportunity cards.  Used on the alternate-investment detail page.
 */
import type { InvestmentSection as InvestmentSectionData } from '@/lib/data/investmentDetails';
import { InvestmentOpportunityCard } from './InvestmentOpportunityCard';
import { FaCoins, FaCalendarCheck, FaGavel } from 'react-icons/fa6';

interface Props {
  section: InvestmentSectionData;
  /** 0-indexed — used to alternate section background */
  index: number;
}

export function InvestmentSection({ section, index }: Props) {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? '#FFFFFF' : '#F8FAFC';

  return (
    <section
      className="py-[72px]"
      style={{ background: bgColor }}
      aria-labelledby={`section-heading-${index}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">

        {/* Section header */}
        <div className="mb-10">
          {/* Section number pill */}
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-md mb-4">
            Investment Area {index + 1}
          </span>

          {/* Title + subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-3">
            <h2
              id={`section-heading-${index}`}
              className="font-heading font-extrabold text-[#0B1B34]"
              style={{ fontSize: 'clamp(22px,2.4vw,32px)', lineHeight: 1.15 }}
            >
              {section.title}
            </h2>
            <span
              className="hidden sm:inline-block text-[#5A6478] text-[13px] font-medium border-l border-[#E3E7EF] pl-3 ml-1"
            >
              {section.subtitle}
            </span>
          </div>

          {/* Subtitle on mobile */}
          <p className="sm:hidden text-[#5A6478] text-[14px] font-medium mb-2 -mt-1">
            {section.subtitle}
          </p>

          {/* Description */}
          <p className="text-[#5A6478] text-[16px] leading-relaxed max-w-[760px]">
            {section.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E3E7EF] mb-10" />

        {/* Opportunity cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.opportunities.map((opp) => (
            <InvestmentOpportunityCard key={opp.title} opportunity={opp} />
          ))}
        </div>

        {/* ── Investor Snapshot strip (alternate-investment only) ─────────────── */}
        {section.investorSnapshot && (
          <div
            className="mt-10 rounded-[18px] overflow-hidden border border-[#E3E7EF]"
            style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 100%)' }}
          >
            {/* Label bar */}
            <div className="px-6 py-3 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
              <p className="text-white/60 text-[11px] font-bold tracking-[0.12em] uppercase">
                Investor Snapshot
              </p>
            </div>

            {/* Three stat items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

              {/* Entry Size */}
              <div className="flex items-start gap-4 px-6 py-5">
                <span
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-[2px]"
                  style={{ background: 'rgba(245,158,11,0.15)' }}
                >
                  <FaCoins size={15} className="text-amber-400" />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-white/45 mb-[3px]">
                    Entry Size
                  </p>
                  <p className="text-white font-semibold text-[14px] leading-snug">
                    {section.investorSnapshot.entrySize}
                  </p>
                </div>
              </div>

              {/* Holding Horizon */}
              <div className="flex items-start gap-4 px-6 py-5">
                <span
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-[2px]"
                  style={{ background: 'rgba(99,102,241,0.15)' }}
                >
                  <FaCalendarCheck size={15} className="text-indigo-400" />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-white/45 mb-[3px]">
                    Holding Horizon
                  </p>
                  <p className="text-white font-semibold text-[14px] leading-snug">
                    {section.investorSnapshot.holdingHorizon}
                  </p>
                </div>
              </div>

              {/* Legal Shield */}
              <div className="flex items-start gap-4 px-6 py-5">
                <span
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-[2px]"
                  style={{ background: 'rgba(16,185,129,0.15)' }}
                >
                  <FaGavel size={15} className="text-emerald-400" />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-white/45 mb-[3px]">
                    Legal Shield
                  </p>
                  <p className="text-white font-semibold text-[14px] leading-snug">
                    {section.investorSnapshot.legalShield}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
