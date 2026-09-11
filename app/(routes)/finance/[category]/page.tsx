import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaChevronRight, FaCircleCheck } from 'react-icons/fa6';
import { financeMegaMenu } from '@/lib/data/megamenu';
import { CategoryIllustration } from '@/components/graphics/CategoryIllustration';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return financeMegaMenu.categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = financeMegaMenu.categories.find((c) => c.slug === params.category);
  if (!cat) return { title: 'Not Found' };
  return {
    title: `${cat.title} — Gargi Treasure Finance`,
    description: cat.pageDescription,
  };
}

/** Accent colour per finance category — used for badge, checkmarks, links */
const categoryAccents: Record<string, { primary: string; light: string; hero: string }> = {
  banking: { primary: '#2563EB', light: '#DBEAFE', hero: 'linear-gradient(135deg,#0B132B 0%,#1C2541 50%,#0F172A 100%)' },
  insurance: { primary: '#0D9488', light: '#CCFBF1', hero: 'linear-gradient(135deg,#0B2B2A 0%,#0A3B3A 50%,#082825 100%)' },
  'provident-fund': { primary: '#D97706', light: '#FEF3C7', hero: 'linear-gradient(135deg,#1C1308 0%,#2D1F0C 50%,#150E06 100%)' },
  'alternate-investment': { primary: '#7C3AED', light: '#EDE9FE', hero: 'linear-gradient(135deg,#13092B 0%,#1E0F40 50%,#0E061D 100%)' },
};

/**
 * Finance category detail page — same wireframe layout as investment [category]:
 * dark hero (left content + right advisor card) → overview + illustration →
 * sub-categories → other finance categories → CTA.
 */
export default function FinanceCategoryPage({ params }: Props) {
  const cat = financeMegaMenu.categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const accent = categoryAccents[cat.slug] ?? { primary: '#2563EB', light: '#DBEAFE', hero: 'linear-gradient(135deg,#0B132B,#1C2541,#0F172A)' };
  const otherCategories = financeMegaMenu.categories.filter((c) => c.slug !== params.category);

  return (
    <main id="main" className="min-h-screen bg-[#F8FAFC]">

      {/* ── DARK HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative pt-[100px] pb-[80px] overflow-hidden"
        style={{ background: accent.hero }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 items-start">

            {/* LEFT: Hero content */}
            <div className="pt-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[13px] text-white/50 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <FaChevronRight size={9} />
                <Link href="/finance" className="hover:text-white transition-colors">Finance</Link>
                <FaChevronRight size={9} />
                <span className="text-white font-medium">{cat.title}</span>
              </nav>

              {/* Category badge */}
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-[6px] rounded-full mb-6">
                <span className="text-[16px]">{cat.icon}</span>
                Finance Solution
              </span>

              {/* Title */}
              <h1 className="font-heading font-extrabold text-white mb-4 leading-[1.06]"
                style={{ fontSize: 'clamp(32px,3.8vw,52px)' }}>
                {cat.title}
              </h1>
              <p className="text-white/65 text-[18px] leading-relaxed mb-10 max-w-[540px]">
                {cat.tagline}. Comprehensive solutions designed around your financial wellbeing.
              </p>

              {/* Quick nav pills */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <Link key={item.label} href={item.href}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/85 text-[13.5px] font-semibold px-4 py-[9px] rounded-full hover:bg-white/20 transition-colors duration-200">
                    <FaArrowRight size={9} className="text-white/60" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Advisor card */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.25)] mt-4 lg:mt-8">
              {/* Accent strip */}
              <div className="h-[6px]" style={{ background: `linear-gradient(90deg,${accent.primary},${accent.primary}BB)` }} />
              <div className="p-8">
                <h3 className="font-heading font-extrabold text-[#0F172A] text-[20px] mb-2">
                  Get {cat.title} Advisory
                </h3>
                <p className="text-[#64748B] text-[14px] leading-relaxed mb-7">
                  Our certified financial planners will evaluate your situation and design a personalised {cat.title.toLowerCase()} strategy aligned to your goals.
                </p>

                <ul className="flex flex-col gap-[14px] mb-7">
                  {[
                    'No-obligation initial consultation',
                    'Customised financial strategy',
                    'Regular reviews and updates',
                    'Dedicated expert support',
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-[14px] text-[#334155] font-medium">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: accent.light }}>
                        <FaCircleCheck size={10} style={{ color: accent.primary }} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link href="/contact"
                  className="flex items-center justify-center w-full py-[14px] rounded-[11px] text-[15px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ background: accent.primary }}>
                  Schedule a Consultation
                </Link>

                <p className="text-[11px] text-[#94A3B8] text-center mt-4 leading-relaxed">
                  *Financial advice is subject to individual eligibility. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW SECTION ──────────────────────────────────────────────── */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              {/* Pill badge */}
              <span
                className="inline-flex items-center text-[11px] font-semibold tracking-[0.1em] uppercase px-3 py-[5px] rounded-md mb-5"
                style={{ background: `${accent.light}`, color: accent.primary }}
              >
                Overview
              </span>

              {/* Title */}
              <h2
                className="font-heading font-bold tracking-tight text-slate-900 mb-4"
                style={{ fontSize: 'clamp(26px,2.8vw,40px)', lineHeight: 1.15 }}
              >
                Why choose {cat.title}?
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
                {cat.pageDescription}
              </p>

              {/* Feature list header */}
              <p className="text-slate-800 font-semibold text-[15px] mb-3">What we offer</p>

              {/* Micro-interactive feature rows */}
              <ul className="flex flex-col gap-1.5 mb-10">
                {cat.pageFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-default"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px] transition-colors duration-200"
                      style={{ background: accent.light }}
                    >
                      <FaCircleCheck size={10} style={{ color: accent.primary }} />
                    </span>
                    <span className="text-slate-600 text-[14.5px] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA group */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/finance/${params.category}/details`}
                  id={`explore-${params.category}-details`}
                  className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[11px] text-[15px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
                  style={{ background: accent.primary }}
                >
                  {cat.ctaLabel} <FaArrowRight size={11} />
                </Link>
                <Button variant="ghost" size="md" href="/finance">
                  <span className="flex items-center gap-2">
                    <FaArrowLeft size={11} /> All Finance
                  </span>
                </Button>
              </div>
            </div>

            {/* Right: Premium media card */}
            <div
              className="rounded-[24px] overflow-hidden border border-slate-200/80 bg-slate-50/60 p-[14px]"
              style={{ boxShadow: '0 20px 60px rgba(15,23,42,0.09), 0 4px 16px rgba(15,23,42,0.05)' }}
            >
              <CategoryIllustration slug={cat.slug} className="w-full" />
              <p className="text-center text-[11.5px] text-slate-400 font-medium mt-4 tracking-wide">
                {cat.title} — Finance Overview
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ── EXPLORE WITHIN (Sub-categories) ──────────────────────────────── */}
      <section className="py-[72px]" style={{ background: '#F1F5F9' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-heading font-extrabold text-[#0F172A] text-[26px] mb-8">
            Explore within {cat.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cat.items.map((item, idx) => (
              <div key={item.label}
                id={item.href.split('#')[1] || `item-${idx}`}
                className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 hover:shadow-[0_12px_40px_rgba(15,23,42,.10)] hover:-translate-y-[2px] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: accent.light }}>
                    <FaArrowRight size={12} style={{ color: accent.primary }} />
                  </span>
                  <h3 className="font-heading font-bold text-[#0F172A] text-[17px]">
                    {item.label}
                  </h3>
                </div>
                <p className="text-[#64748B] text-[14px] leading-relaxed mb-5">
                  Expert advisory and implementation support for {item.label.toLowerCase()} — backed by our in-depth knowledge of the Indian financial ecosystem.
                </p>
                <Link href={`${params.category}/details`}
                  className="inline-flex items-center gap-1 text-[14px] font-bold hover:underline transition-colors"
                  style={{ color: accent.primary }}>
                  Learn more <FaArrowRight size={10} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER FINANCE CATEGORIES ──────────────────────────────────────── */}
      <section className="py-[72px] bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-heading font-extrabold text-[#0F172A] text-[26px] mb-8">
            Other finance solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherCategories.map((other) => {
              const oa = categoryAccents[other.slug] ?? { primary: '#2563EB', light: '#DBEAFE', hero: '' };
              return (
                <Link key={other.slug} href={`/finance/${other.slug}`}
                  className="group bg-white border border-[#E2E8F0] hover:shadow-[0_10px_30px_rgba(15,23,42,.10)] rounded-[14px] p-5 transition-all duration-200 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[26px] flex-shrink-0"
                    style={{ background: oa.light }}>
                    {other.icon}
                  </span>
                  <div>
                    <span className="font-heading font-bold text-[15px] text-[#0F172A] group-hover:text-[#2563EB] transition-colors block">
                      {other.title}
                    </span>
                    <span className="text-[12px] text-[#94A3B8] mt-1 block">{other.tagline}</span>
                  </div>
                  <FaChevronRight size={12} className="text-[#CBD5E1] group-hover:text-[#2563EB] transition-colors ml-auto flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────────────── */}
      <section className="py-[72px]" style={{ background: accent.hero }}>
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-white text-[24px] mb-2">
              Ready to get started with {cat.title}?
            </h3>
            <p className="text-white/60 text-[15px]">
              Our certified planners will design a personalised strategy — free, no obligation.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[11px] text-[15px] font-bold text-white hover:opacity-90 transition-all"
              style={{ background: accent.primary }}>
              Schedule a Consultation
            </Link>
            <Button variant="ghost" size="md" href="/finance">
              ← All Finance
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
