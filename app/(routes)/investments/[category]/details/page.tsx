import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { investmentMegaMenu } from '@/lib/data/megamenu';
import { investmentDetails } from '@/lib/data/investmentDetails';
import { InvestmentHero } from '@/components/investments/InvestmentHero';
import { InvestmentSection } from '@/components/investments/InvestmentSection';
import { InvestmentAdvantageCard } from '@/components/investments/InvestmentAdvantageCard';
import { InvestmentCTA } from '@/components/investments/InvestmentCTA';

interface Props {
  params: { category: string };
}

/** Pre-render all 6 category detail pages at build time */
export function generateStaticParams() {
  return investmentMegaMenu.categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = investmentMegaMenu.categories.find((c) => c.slug === params.category);
  const detail = investmentDetails[params.category];
  if (!cat || !detail) return { title: 'Not Found' };
  return {
    title: `${cat.title} Investment Details — Gargi Treasure`,
    description: detail.subheadline,
  };
}

/**
 * /investments/[category]/details
 *
 * A shared, data-driven details page for all 6 investment categories.
 * Content is sourced exclusively from lib/data/investmentDetails.ts —
 * edit content there without touching this file.
 *
 * Layout:
 *  1. InvestmentHero    — dark-gradient hero with eyebrow / headline / subheadline
 *  2. InvestmentSection — one per investment area (Petrochemicals, Solar, EV, etc.)
 *  3. Advantage Section — "Our Investment Advantage" 3-col card grid
 *  4. InvestmentCTA     — bottom contact CTA band
 */
export default function InvestmentDetailsPage({ params }: Props) {
  const cat = investmentMegaMenu.categories.find((c) => c.slug === params.category);
  const detail = investmentDetails[params.category];

  if (!cat || !detail) notFound();

  return (
    <main id="main" className="min-h-screen" style={{ background: '#F8FAFC' }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <InvestmentHero
        categorySlug={cat.slug}
        categoryTitle={cat.title}
        categoryIcon={cat.icon}
        eyebrow={detail.eyebrow}
        headline={detail.headline}
        subheadline={detail.subheadline}
      />

      {/* ── 2. INVESTMENT SECTIONS ──────────────────────────────────────────── */}
      {detail.sections.map((section, i) => (
        <InvestmentSection key={section.title} section={section} index={i} />
      ))}

      {/* ── 3. OUR INVESTMENT ADVANTAGE ─────────────────────────────────────── */}
      <section
        className="py-[80px]"
        style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 100%)' }}
        aria-labelledby="advantage-heading"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">

          {/* Section header */}
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/75 text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-[7px] rounded-full mb-5">
              Why Choose Us
            </span>
            <h2
              id="advantage-heading"
              className="font-heading font-extrabold text-white"
              style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.15 }}
            >
              OUR INVESTMENT ADVANTAGE
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-royal opacity-70" />
          </div>

          {/* Advantage cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detail.advantages.map((adv, i) => (
              <InvestmentAdvantageCard key={adv.title} advantage={adv} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. CTA BAND ─────────────────────────────────────────────────────── */}
      <InvestmentCTA
        categoryTitle={cat.title}
        categorySlug={cat.slug}
        ctaLabel={detail.ctaLabel}
      />

    </main>
  );
}
