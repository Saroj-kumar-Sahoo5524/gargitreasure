import Link from 'next/link';
import { FaArrowRight, FaChevronRight, FaCircleCheck } from 'react-icons/fa6';
import { investmentMegaMenu } from '@/lib/data/megamenu';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investments — Gargi Treasure',
  description:
    'Explore structured investment opportunities across Energy, Real Estate, Shares & Bonds, Agriculture, Bullion, and Crypto — each with clear terms and expert advisory.',
};

/** Icon background colour per category */
const categoryColors: Record<string, { bg: string; color: string }> = {
  energy:               { bg: '#2451D614', color: '#2451D6' },
  'real-estate':        { bg: '#0E7C7B14', color: '#0E7C7B' },
  'shares-bonds':       { bg: '#1B3DA614', color: '#1B3DA6' },
  agriculture:          { bg: '#15803D14', color: '#15803D' },
  'bullion-gemstones':  { bg: '#A87C3414', color: '#A87C34' },
  crypto:               { bg: '#4338CA14', color: '#4338CA' },
};

/**
 * Investments landing page.
 * Shows "Where would you like to invest?" + 6 category cards.
 * Route: /investments
 */
export default function InvestmentsPage() {
  return (
    <main id="main" className="min-h-screen" style={{ background: '#F6F7FA' }}>

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <section
        className="pt-[140px] pb-[64px] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 60%,#0E7C7B 100%)' }}
      >
        {/* decorative orb */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,#2451D620,transparent)' }} />

        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <nav className="flex items-center gap-2 text-[13px] text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight size={9} />
            <span className="text-white font-medium">Investments</span>
          </nav>

          <h1
            className="font-heading font-extrabold text-white mb-3"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
          >
            Where would you like to invest?
          </h1>
          <p className="text-white/65 text-[17px] max-w-[560px] leading-relaxed">
            Choose from six curated investment categories — each backed by in-depth research, transparent terms, and dedicated expert advisory.
          </p>
        </div>
      </section>

      {/* ── Category Cards ───────────────────────────────────────────────── */}
      <section className="py-[72px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentMegaMenu.categories.map((cat) => {
              const col = categoryColors[cat.slug] ?? { bg: '#2451D614', color: '#2451D6' };
              return (
                <div
                  key={cat.slug}
                  className="bg-white border border-[#E3E7EF] rounded-[18px] p-7 hover:shadow-[0_12px_40px_rgba(11,27,52,.10)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col"
                >
                  {/* Icon badge */}
                  <div
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[26px] mb-5 flex-shrink-0"
                    style={{ background: col.bg }}
                  >
                    {cat.icon}
                  </div>

                  {/* Title */}
                  <h2 className="font-heading font-bold text-[#0B1B34] text-[18px] mb-2">
                    {cat.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#5A6478] text-[14px] leading-relaxed mb-5 flex-1">
                    {cat.pageDescription.slice(0, 120)}…
                  </p>

                  {/* Sub-items as checklist */}
                  <ul className="flex flex-col gap-[8px] mb-6">
                    {cat.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-[10px] text-[13.5px] text-[#16294A]">
                        <FaCircleCheck size={13} style={{ color: col.color }} className="flex-shrink-0" />
                        {item.label}
                      </li>
                    ))}
                  </ul>

                  {/* Explore link */}
                  <Link
                    href={`/investments/${cat.slug}`}
                    className="inline-flex items-center gap-[6px] text-[14px] font-bold transition-colors hover:underline"
                    style={{ color: col.color }}
                  >
                    Explore {cat.title} <FaArrowRight size={11} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA strip ───────────────────────────────────────────────────── */}
      <section
        className="py-[64px]"
        style={{ background: 'linear-gradient(135deg,#0B1B34,#16294A)' }}
      >
        <div className="max-w-[1240px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-white text-[22px] mb-1">
              Not sure which category fits you?
            </h3>
            <p className="text-white/65 text-[15px]">
              Speak to one of our advisors — free, no obligation.
            </p>
          </div>
          <Button variant="primary" size="md" href="/contact">
            Talk to an Advisor
          </Button>
        </div>
      </section>
    </main>
  );
}
