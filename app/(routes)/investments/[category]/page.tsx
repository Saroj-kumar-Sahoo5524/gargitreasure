import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaChevronRight, FaCircleCheck } from 'react-icons/fa6';
import { investmentMegaMenu } from '@/lib/data/megamenu';
import { CategoryIllustration } from '@/components/graphics/CategoryIllustration';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return investmentMegaMenu.categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = investmentMegaMenu.categories.find((c) => c.slug === params.category);
  if (!cat) return { title: 'Not Found' };
  return {
    title: `${cat.title} Investments — Gargi Treasure`,
    description: cat.pageDescription,
  };
}

/**
 * Investment category detail page — matches SVG wireframe design.
 * Layout: dark hero (left content + right advisor card) →
 *         overview section (description + illustration) →
 *         sub-categories 3-col grid →
 *         other categories 5-col strip →
 *         CTA band.
 */
export default function InvestmentCategoryPage({ params }: Props) {
  const cat = investmentMegaMenu.categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const otherCategories = investmentMegaMenu.categories.filter((c) => c.slug !== params.category);

  return (
    <main id="main" className="min-h-screen bg-[#F8FAFC]">

      {/* ── DARK HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative pt-[100px] pb-[80px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0B132B 0%,#1C2541 50%,#0F172A 100%)' }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }}/>

        {/* Orb */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,#2563EB18,transparent 70%)' }}/>

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 items-start">

            {/* LEFT: Hero content */}
            <div className="pt-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[13px] text-white/50 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <FaChevronRight size={9}/>
                <Link href="/investments" className="hover:text-white transition-colors">Investments</Link>
                <FaChevronRight size={9}/>
                <span className="text-white font-medium">{cat.title}</span>
              </nav>

              {/* Category badge */}
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-[6px] rounded-full mb-6">
                <span className="text-[16px]">{cat.icon}</span>
                Investment Category
              </span>

              {/* Title */}
              <h1 className="font-heading font-extrabold text-white mb-4 leading-[1.06]"
                style={{ fontSize: 'clamp(32px,3.8vw,52px)' }}>
                {cat.title} Investments
              </h1>
              <p className="text-white/65 text-[18px] leading-relaxed mb-10 max-w-[540px]">
                {cat.tagline}. Explore curated opportunities backed by expert research and transparent terms.
              </p>

              {/* Quick navigation tags */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <Link key={item.label} href={item.href}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/85 text-[13.5px] font-semibold px-4 py-[9px] rounded-full hover:bg-white/20 transition-colors duration-200">
                    <FaArrowRight size={9} className="text-white/60"/>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Advisor card */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.25)] mt-4 lg:mt-8">
              {/* Blue accent strip */}
              <div className="h-[6px]" style={{ background: 'linear-gradient(90deg,#2563EB,#3B82F6)'}}/>
              <div className="p-8">
                <h3 className="font-heading font-extrabold text-[#0F172A] text-[20px] mb-2">
                  Get Started with {cat.title}
                </h3>
                <p className="text-[#64748B] text-[14px] leading-relaxed mb-7">
                  Our advisors will assess your risk profile, investment horizon, and financial goals to recommend the best {cat.title.toLowerCase()} strategy for you.
                </p>

                {/* Bullet list */}
                <ul className="flex flex-col gap-[14px] mb-7">
                  {[
                    'Free initial consultation',
                    'Personalised investment plan',
                    'Ongoing portfolio monitoring',
                    'Dedicated relationship manager',
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-[14px] text-[#334155] font-medium">
                      <span className="w-5 h-5 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                        <FaCircleCheck size={10} className="text-[#2563EB]"/>
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact"
                  className="flex items-center justify-center w-full py-[14px] rounded-[11px] text-[15px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ background: 'linear-gradient(90deg,#2563EB,#3B82F6)' }}>
                  Schedule a Call
                </Link>

                <p className="text-[11px] text-[#94A3B8] text-center mt-4 leading-relaxed">
                  *Investments are subject to market risk. Please read all scheme-related documents carefully before investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW SECTION ──────────────────────────────────────────────── */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: Why invest + features */}
            <div>
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#2563EB] block mb-4">
                Overview
              </span>
              <h2 className="font-heading font-extrabold text-[#0F172A] mb-5"
                style={{ fontSize: 'clamp(24px,2.8vw,36px)' }}>
                Why invest in {cat.title}?
              </h2>
              <p className="text-[#475569] text-[16px] leading-[1.75] mb-8">
                {cat.pageDescription}
              </p>

              <h3 className="font-heading font-bold text-[#0F172A] text-[20px] mb-5">
                What we offer
              </h3>
              <ul className="flex flex-col gap-5 mb-10">
                {cat.pageFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <span className="w-[22px] h-[22px] rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0 mt-[2px]">
                      <FaCircleCheck size={11} className="text-[#2563EB]"/>
                    </span>
                    <span className="text-[#334155] text-[15px] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md" href="/contact">
                  {cat.ctaLabel}
                </Button>
                <Button variant="ghost" size="md" href="/investments">
                  <span className="flex items-center gap-2">
                    <FaArrowLeft size={12}/> All Investments
                  </span>
                </Button>
              </div>
            </div>

            {/* Right: Category illustration */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,.08)] p-4">
              <CategoryIllustration slug={cat.slug} className="w-full h-auto rounded-[12px]"/>
              <p className="text-center text-[12px] text-[#94A3B8] font-medium mt-3">
                {cat.title} — Investment Overview
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
                {/* Arrow icon badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <FaArrowRight size={12} className="text-[#2563EB]"/>
                  </span>
                  <h3 className="font-heading font-bold text-[#0F172A] text-[17px]">
                    {item.label}
                  </h3>
                </div>
                <p className="text-[#64748B] text-[14px] leading-relaxed mb-5">
                  Discover tailored {item.label.toLowerCase()} opportunities carefully selected by our research team, offering competitive returns with full transparency.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-1 text-[14px] font-bold text-[#2563EB] hover:underline transition-colors">
                  Learn more <FaArrowRight size={10}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER INVESTMENT CATEGORIES ───────────────────────────────────── */}
      <section className="py-[72px] bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-heading font-extrabold text-[#0F172A] text-[26px] mb-8">
            Other investment categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((other) => (
              <Link key={other.slug} href={`/investments/${other.slug}`}
                className="group bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-[0_10px_30px_rgba(15,23,42,.10)] rounded-[14px] p-5 transition-all duration-200">
                <span className="text-[32px] block mb-3">{other.icon}</span>
                <span className="font-heading font-bold text-[14px] text-[#0F172A] group-hover:text-[#2563EB] transition-colors block">
                  {other.title}
                </span>
                <span className="text-[11.5px] text-[#94A3B8] mt-1 block leading-snug">{other.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────────────── */}
      <section className="py-[72px]"
        style={{ background: 'linear-gradient(135deg,#0B132B 0%,#1C2541 60%,#0F172A 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-white text-[24px] mb-2">
              Ready to invest in {cat.title}?
            </h3>
            <p className="text-white/60 text-[15px]">
              Speak to an advisor who will guide you to the right strategy — free, no obligation.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Button variant="primary" size="md" href="/contact">
              Schedule a Consultation
            </Button>
            <Button variant="ghost" size="md" href="/investments">
              ← All Investments
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
