import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import { investmentMegaMenu } from '@/lib/data/megamenu';
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
 * Dynamic category page for each investment type.
 * Route: /investments/[category]
 */
export default function InvestmentCategoryPage({ params }: Props) {
  const cat = investmentMegaMenu.categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const otherCategories = investmentMegaMenu.categories.filter(
    (c) => c.slug !== params.category
  );

  return (
    <main id="main" className="min-h-screen bg-[#F6F7FA]">
      {/* Hero banner */}
      <section
        className="pt-[140px] pb-[80px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 60%,#0E7C7B 100%)',
        }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#2451D6,transparent)' }}
        />
        <div
          className="absolute bottom-[-40px] left-[10%] w-[200px] h-[200px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#0E7C7B,transparent)' }}
        />

        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/investments" className="hover:text-white transition-colors">Investments</Link>
            <span>/</span>
            <span className="text-white">{cat.title}</span>
          </nav>

          <div className="flex items-start gap-5 mb-6">
            <span className="text-[52px] leading-none">{cat.icon}</span>
            <div>
              <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-[12px] font-bold tracking-[0.06em] uppercase px-3 py-1 rounded-full mb-3">
                Investment Category
              </span>
              <h1 className="font-heading font-extrabold text-white mb-2" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
                {cat.title}
              </h1>
              <p className="text-white/70 text-[18px] font-medium">{cat.tagline}</p>
            </div>
          </div>

          {/* Sub-item quick links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {cat.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-[13.5px] font-semibold px-4 py-[8px] rounded-full hover:bg-white/20 transition-colors"
              >
                <FaArrowRight size={10} className="text-teal" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-[80px]">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
          {/* Left: description + features */}
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.08em] uppercase text-[#2451D6] mb-3">
              Overview
            </span>
            <h2 className="font-heading font-extrabold text-[#0B1B34] mb-5" style={{ fontSize: 'clamp(24px,2.8vw,34px)' }}>
              Why invest in {cat.title}?
            </h2>
            <p className="text-[#5A6478] text-[17px] leading-[1.75] mb-10">
              {cat.pageDescription}
            </p>

            <h3 className="font-heading font-bold text-[#0B1B34] text-[20px] mb-5">
              What we offer
            </h3>
            <ul className="flex flex-col gap-4">
              {cat.pageFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <FaCircleCheck size={17} className="text-[#0E7C7B] mt-[3px] flex-shrink-0" />
                  <span className="text-[#16294A] text-[15.5px]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="md" href="/contact">
                {cat.ctaLabel}
              </Button>
              <Button variant="ghost" size="md" href="/investments">
                <span className="flex items-center gap-2">
                  <FaArrowLeft size={13} /> All Investments
                </span>
              </Button>
            </div>
          </div>

          {/* Right: sticky info card */}
          <div className="sticky top-[100px]">
            <div className="bg-white border border-[#E3E7EF] rounded-[20px] p-7 shadow-[0_8px_24px_rgba(11,27,52,.08)]">
              <h4 className="font-heading font-bold text-[18px] text-[#0B1B34] mb-4">
                Get Started with {cat.title}
              </h4>
              <p className="text-[#5A6478] text-[14px] mb-6 leading-relaxed">
                Our advisors will assess your risk profile, investment horizon, and financial goals to recommend the best {cat.title.toLowerCase()} strategy for you.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                {[
                  'Free initial consultation',
                  'Personalised investment plan',
                  'Ongoing portfolio monitoring',
                  'Dedicated relationship manager',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[13.5px] text-[#16294A]">
                    <FaCircleCheck size={13} className="text-[#0E7C7B] flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <Button variant="primary" size="md" href="/contact" className="w-full justify-center">
                Schedule a Call
              </Button>

              <p className="text-[11.5px] text-[#8791A3] text-center mt-4">
                *Investments are subject to market risk. Please read all scheme-related documents carefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-category sections */}
      <section className="py-[60px]" style={{ background: '#EEF1F6' }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="font-heading font-bold text-[#0B1B34] text-[22px] mb-8">
            Explore within {cat.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cat.items.map((item, idx) => (
              <div
                key={item.label}
                id={item.href.split('#')[1] || `item-${idx}`}
                className="bg-white border border-[#E3E7EF] rounded-[16px] p-6 hover:shadow-[0_8px_24px_rgba(11,27,52,.08)] transition-shadow"
              >
                <h3 className="font-heading font-bold text-[16px] text-[#0B1B34] mb-3 flex items-center gap-2">
                  <FaArrowRight size={12} className="text-[#0E7C7B]" />
                  {item.label}
                </h3>
                <p className="text-[#5A6478] text-[14px] leading-relaxed">
                  Discover tailored {item.label.toLowerCase()} opportunities carefully selected by our research team, offering competitive returns with full transparency.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2451D6] mt-4 hover:underline"
                >
                  Learn more <FaArrowRight size={10} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other investment categories */}
      <section className="py-[60px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="font-heading font-bold text-[#0B1B34] text-[22px] mb-8">
            Other investment categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/investments/${other.slug}`}
                className="group bg-white border border-[#E3E7EF] hover:border-[#2451D6]/40 hover:shadow-[0_8px_24px_rgba(11,27,52,.08)] rounded-[14px] p-4 transition-all duration-200 flex flex-col items-start"
              >
                <span className="text-[28px] mb-2">{other.icon}</span>
                <span className="font-heading font-bold text-[13.5px] text-[#0B1B34] group-hover:text-[#2451D6] transition-colors">
                  {other.title}
                </span>
                <span className="text-[12px] text-[#8791A3] mt-1">{other.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
