import Link from 'next/link';
import { FaArrowRight, FaChevronRight, FaCircleCheck } from 'react-icons/fa6';
import { financeMegaMenu } from '@/lib/data/megamenu';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Solutions — Gargi Treasure',
  description:
    'Comprehensive financial solutions including banking, insurance, provident fund, and alternate investments — tailored to your goals by Gargi Treasure.',
};

/** Colour per category */
const categoryColors: Record<string, { bg: string; color: string }> = {
  banking:                { bg: '#2451D614', color: '#2451D6' },
  insurance:              { bg: '#0E7C7B14', color: '#0E7C7B' },
  'provident-fund':       { bg: '#A87C3414', color: '#A87C34' },
  'alternate-investment': { bg: '#7C3AED14', color: '#7C3AED' },
};

/** Loan product cards shown below */
const loanProducts = [
  {
    icon: '💰',
    color: '#2451D6',
    bg: '#2451D614',
    title: 'Personal Loan',
    description: 'Flexible personal financing designed to help manage planned and unexpected expenses.',
    features: ['Flexible eligibility', 'Convenient application', 'Transparent process'],
    href: '/loans',
    cta: 'Explore Personal Loan',
  },
  {
    icon: '🚗',
    color: '#0E7C7B',
    bg: '#0E7C7B14',
    title: 'Vehicle Loan',
    description: 'Financing solutions for purchasing new or pre-owned vehicles, including two-wheelers.',
    features: ['Car & two-wheeler financing', 'Flexible repayment options', 'Application support'],
    href: '/loans',
    cta: 'Explore Vehicle Loan',
  },
  {
    icon: '🏢',
    color: '#A87C34',
    bg: '#A87C3414',
    title: 'Business Finance',
    description: 'Solutions designed to support business expansion, working capital, equipment, and growth needs.',
    features: ['Working capital support', 'Equipment financing', 'Growth-stage funding'],
    href: '/loans',
    cta: 'Explore Business Finance',
  },
];

/**
 * Finance landing page.
 * Shows "What financial solution do you need?" + 4 category cards + loan products.
 * Route: /finance
 */
export default function FinancePage() {
  return (
    <main id="main" className="min-h-screen" style={{ background: '#F6F7FA' }}>

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <section
        className="pt-[140px] pb-[64px] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 60%,#78350F 100%)' }}
      >
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,#A87C3420,transparent)' }} />

        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <nav className="flex items-center gap-2 text-[13px] text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight size={9} />
            <span className="text-white font-medium">Finance</span>
          </nav>

          <h1
            className="font-heading font-extrabold text-white mb-3"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
          >
            What financial solution do you need?
          </h1>
          <p className="text-white/65 text-[17px] max-w-[560px] leading-relaxed">
            From banking and insurance to provident funds and alternative assets — comprehensive financial solutions built around your life goals.
          </p>
        </div>
      </section>

      {/* ── Finance Category Cards ───────────────────────────────────────── */}
      <section className="py-[72px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financeMegaMenu.categories.map((cat) => {
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
                    href={`/finance/${cat.slug}`}
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

      {/* ── Loan Products ────────────────────────────────────────────────── */}
      <section className="pb-[72px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2
            className="font-heading font-extrabold text-[#0B1B34] mb-2"
            style={{ fontSize: 'clamp(22px,2.8vw,32px)' }}
          >
            Loan Products
          </h2>
          <p className="text-[#5A6478] text-[15px] mb-8">
            Transparent terms, fast approval, and dedicated support for every financing need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loanProducts.map((loan) => (
              <div
                key={loan.title}
                className="bg-white border border-[#E3E7EF] rounded-[18px] p-7 hover:shadow-[0_12px_40px_rgba(11,27,52,.10)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col"
              >
                {/* Icon badge */}
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[26px] mb-5"
                  style={{ background: loan.bg }}
                >
                  {loan.icon}
                </div>

                <h3 className="font-heading font-bold text-[#0B1B34] text-[18px] mb-2">
                  {loan.title}
                </h3>
                <p className="text-[#5A6478] text-[14px] leading-relaxed mb-5 flex-1">
                  {loan.description}
                </p>

                <ul className="flex flex-col gap-[8px] mb-6">
                  {loan.features.map((f) => (
                    <li key={f} className="flex items-center gap-[10px] text-[13.5px] text-[#16294A]">
                      <FaCircleCheck size={13} style={{ color: loan.color }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={loan.href}
                  className="inline-flex items-center gap-[6px] text-[14px] font-bold transition-colors hover:underline"
                  style={{ color: loan.color }}
                >
                  {loan.cta} <FaArrowRight size={11} />
                </Link>
              </div>
            ))}
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
              Not sure which solution is right for you?
            </h3>
            <p className="text-white/65 text-[15px]">
              Our certified planners will design a personalised finance strategy — free, no obligation.
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
