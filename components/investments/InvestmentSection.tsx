/**
 * InvestmentSection
 * Renders one investment area (e.g., Petrochemicals, Solar, EV Charging).
 * Contains a title, subtitle, description, and a grid of InvestmentOpportunityCards.
 * Alternates background between white and #F8FAFC for visual rhythm.
 */
import type { InvestmentSection as InvestmentSectionData } from '@/lib/data/investmentDetails';
import { InvestmentOpportunityCard } from './InvestmentOpportunityCard';

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

      </div>
    </section>
  );
}
