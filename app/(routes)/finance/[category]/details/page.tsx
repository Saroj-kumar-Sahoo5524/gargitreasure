import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { financeMegaMenu } from '@/lib/data/megamenu';
import { financeDetails } from '@/lib/data/financeDetails';
import { InvestmentHero } from '@/components/investments/InvestmentHero';
import { InvestmentSection } from '@/components/investments/InvestmentSection';
import { InvestmentAdvantageCard } from '@/components/investments/InvestmentAdvantageCard';
import { EligibilityPanel } from '@/components/investments/EligibilityPanel';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FaArrowLeft } from 'react-icons/fa6';

interface Props {
  params: { category: string };
}

/** Pre-render all 4 finance category detail pages at build time */
export function generateStaticParams() {
  return financeMegaMenu.categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = financeMegaMenu.categories.find((c) => c.slug === params.category);
  const detail = financeDetails[params.category];
  if (!cat || !detail) return { title: 'Not Found' };
  return {
    title: `${cat.title} Details — Gargi Treasure Finance`,
    description: detail.subheadline,
  };
}

/** Per-category accent colours — matches finance/[category]/page.tsx */
const categoryAccents: Record<string, { primary: string; light: string }> = {
  banking:                { primary: '#2563EB', light: '#DBEAFE' },
  insurance:              { primary: '#0D9488', light: '#CCFBF1' },
  'provident-fund':       { primary: '#D97706', light: '#FEF3C7' },
  'alternate-investment': { primary: '#7C3AED', light: '#EDE9FE' },
};

/**
 * /finance/[category]/details
 *
 * A shared, data-driven details page for all 4 finance categories.
 * Content is sourced exclusively from lib/data/financeDetails.ts —
 * edit content there without touching this file.
 *
 * Layout:
 *  1. InvestmentHero      — dark-gradient hero with eyebrow / headline / subheadline
 *  2. InvestmentSection × N — one per service area (Mutual Funds, Loans, Micro Finance)
 *  3. Eligibility Section — (if present) criteria panels per service area
 *  4. Our Advantage       — 3-col InvestmentAdvantageCard grid
 *  5. CTA Band            — contact CTA + back button
 */
export default function FinanceDetailsPage({ params }: Props) {
  const cat = financeMegaMenu.categories.find((c) => c.slug === params.category);
  const detail = financeDetails[params.category];

  if (!cat || !detail) notFound();

  const accent = categoryAccents[cat.slug] ?? { primary: '#2563EB', light: '#DBEAFE' };
  const hasEligibility = detail.eligibilitySections && detail.eligibilitySections.length > 0;

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
        basePath="finance"
      />

      {/* ── 2. SERVICE SECTIONS ─────────────────────────────────────────────── */}
      {detail.sections.map((section, i) => (
        <InvestmentSection key={section.title} section={section} index={i} />
      ))}

      {/* ── 3. ELIGIBILITY CRITERIA (Banking only for now) ──────────────────── */}
      {hasEligibility && (
        <section
          className="py-[80px] relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg,#0B132B 0%,#0F1F3D 55%,#0B132B 100%)' }}
          aria-labelledby="eligibility-heading"
        >
          {/* Decorative orbs */}
          <div
            className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle,#2563EB12,transparent 70%)' }}
          />
          <div
            className="absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle,#0D948810,transparent 70%)' }}
          />

          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">

            {/* Section header */}
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/75 text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-[7px] rounded-full mb-5"
                >
                  Eligibility Criteria
                </span>
                <h2
                  id="eligibility-heading"
                  className="font-heading font-extrabold text-white leading-tight"
                  style={{ fontSize: 'clamp(26px,3vw,40px)' }}
                >
                  Who Can Apply?
                </h2>
                <p className="text-white/55 text-[15px] mt-3 max-w-[500px] leading-relaxed">
                  Review the criteria below for each service. Our advisors will guide you
                  through every requirement — free, no obligation.
                </p>
              </div>

              {/* Decorative stat pill */}
              <div
                className="flex-shrink-0 flex items-center gap-3 bg-white/08 border border-white/15 rounded-[14px] px-5 py-4 self-start md:self-auto"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <span className="text-[28px]" aria-hidden="true">✅</span>
                <div>
                  <p className="text-white font-bold text-[15px] leading-snug">Simple Process</p>
                  <p className="text-white/50 text-[12px]">Guided by our advisors</p>
                </div>
              </div>
            </div>

            {/* Eligibility panels grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
              {detail.eligibilitySections!.map((es, i) => (
                <EligibilityPanel
                  key={es.title}
                  section={es}
                  index={i}
                />
              ))}
            </div>

            {/* Bottom disclaimer */}
            <p className="mt-8 text-white/35 text-[12px] text-center leading-relaxed max-w-[600px] mx-auto">
              Eligibility criteria may vary based on individual profile, location, and applicable regulations.
              All approvals are subject to internal credit assessment.
            </p>
          </div>
        </section>
      )}

      {/* ── 4. OUR ADVANTAGE ────────────────────────────────────────────────── */}
      <section
        className="py-[80px]"
        style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 100%)' }}
        aria-labelledby="advantage-heading"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/75 text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-[7px] rounded-full mb-5">
              Why Choose Us
            </span>
            <h2
              id="advantage-heading"
              className="font-heading font-extrabold text-white"
              style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.15 }}
            >
              OUR {cat.title.toUpperCase()} ADVANTAGE
            </h2>
            <div
              className="mx-auto mt-4 h-[3px] w-14 rounded-full opacity-70"
              style={{ background: accent.primary }}
            />
          </div>

          {/* Advantage cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detail.advantages.map((adv, i) => (
              <InvestmentAdvantageCard key={adv.title} advantage={adv} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA BAND ─────────────────────────────────────────────────────── */}
      <section
        className="py-[80px]"
        style={{ background: 'linear-gradient(135deg,#0B132B 0%,#1C2541 60%,#0F172A 100%)' }}
        aria-label="Call to action"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-extrabold text-white text-[22px] sm:text-[26px] mb-2 leading-snug">
              Ready to get started with {cat.title}?
            </h2>
            <p className="text-white/60 text-[15px] max-w-[460px]">
              Our certified planners will design a personalised strategy — free, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link
              href="/contact"
              id="finance-details-cta-contact"
              className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[11px] text-[15px] font-bold text-white hover:opacity-90 transition-all"
              style={{ background: accent.primary }}
            >
              {detail.ctaLabel}
            </Link>
            <Button variant="ghost" size="md" href={`/finance/${cat.slug}`}>
              <span className="flex items-center gap-2">
                <FaArrowLeft size={11} aria-hidden="true" />
                Back to {cat.title}
              </span>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
