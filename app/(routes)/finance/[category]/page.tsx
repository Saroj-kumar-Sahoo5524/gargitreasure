import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import { financeMegaMenu } from '@/lib/data/megamenu';
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

/**
 * Dynamic category page for each finance type.
 * Route: /finance/[category]
 */
export default function FinanceCategoryPage({ params }: Props) {
  const cat = financeMegaMenu.categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const otherCategories = financeMegaMenu.categories.filter(
    (c) => c.slug !== params.category
  );

  return (
    <main id="main" className="min-h-screen bg-[#F6F7FA]">
      {/* Hero banner */}
      <section
        className="pt-[140px] pb-[80px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 55%,#A87C34 100%)',
        }}
      >
        <div
          className="absolute top-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#A87C34,transparent)' }}
        />

        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/finance" className="hover:text-white transition-colors">Finance</Link>
            <span>/</span>
            <span className="text-white">{cat.title}</span>
          </nav>

          <div className="flex items-start gap-5 mb-6">
            <span className="text-[52px] leading-none">{cat.icon}</span>
            <div>
              <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-[12px] font-bold tracking-[0.06em] uppercase px-3 py-1 rounded-full mb-3">
                Finance Solution
              </span>
              <h1
                className="font-heading font-extrabold text-white mb-2"
                style={{ fontSize: 'clamp(32px,4vw,52px)' }}
              >
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
                <FaArrowRight size={10} className="text-[#A87C34]" />
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
            <span className="inline-block text-[11px] font-bold tracking-[0.08em] uppercase text-[#A87C34] mb-3">
              Overview
            </span>
            <h2
              className="font-heading font-extrabold text-[#0B1B34] mb-5"
              style={{ fontSize: 'clamp(24px,2.8vw,34px)' }}
            >
              Why choose {cat.title}?
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
                  <FaCircleCheck size={17} className="text-[#A87C34] mt-[3px] flex-shrink-0" />
                  <span className="text-[#16294A] text-[15.5px]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="md" href="/contact">
                {cat.ctaLabel}
              </Button>
              <Button variant="ghost" size="md" href="/finance">
                <span className="flex items-center gap-2">
                  <FaArrowLeft size={13} /> All Finance
                </span>
              </Button>
            </div>
          </div>

          {/* Right: info card */}
          <div className="sticky top-[100px]">
            <div className="bg-white border border-[#E3E7EF] rounded-[20px] p-7 shadow-[0_8px_24px_rgba(11,27,52,.08)]">
              <h4 className="font-heading font-bold text-[18px] text-[#0B1B34] mb-4">
                Get {cat.title} Advisory
              </h4>
              <p className="text-[#5A6478] text-[14px] mb-6 leading-relaxed">
                Our certified financial planners will evaluate your current situation and design a personalised {cat.title.toLowerCase()} strategy aligned to your goals.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                {[
                  'No-obligation initial consultation',
                  'Customised financial plan',
                  'Regular review and updates',
                  'Dedicated expert support',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[13.5px] text-[#16294A]">
                    <FaCircleCheck size={13} className="text-[#A87C34] flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <Button variant="primary" size="md" href="/contact" className="w-full justify-center">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-category detail sections */}
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
                  <FaArrowRight size={12} className="text-[#A87C34]" />
                  {item.label}
                </h3>
                <p className="text-[#5A6478] text-[14px] leading-relaxed">
                  Expert advisory and implementation support for {item.label.toLowerCase()} — backed by our in-depth knowledge of the Indian financial ecosystem.
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

      {/* Other finance categories */}
      <section className="py-[60px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="font-heading font-bold text-[#0B1B34] text-[22px] mb-8">
            Other finance solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/finance/${other.slug}`}
                className="group bg-white border border-[#E3E7EF] hover:border-[#A87C34]/40 hover:shadow-[0_8px_24px_rgba(11,27,52,.08)] rounded-[16px] p-5 transition-all duration-200 flex items-start gap-4"
              >
                <span className="text-[32px] leading-none">{other.icon}</span>
                <div>
                  <span className="font-heading font-bold text-[15px] text-[#0B1B34] group-hover:text-[#A87C34] transition-colors block">
                    {other.title}
                  </span>
                  <span className="text-[12.5px] text-[#8791A3] mt-1 block">{other.tagline}</span>
                </div>
                <FaArrowRight size={12} className="text-[#E3E7EF] group-hover:text-[#A87C34] transition-colors ml-auto mt-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
