/**
 * InvestmentHero
 * Dark-gradient hero section for /investments/[category]/details pages.
 * Matches the visual language of the existing [category] page hero.
 */
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

interface Props {
  categorySlug: string;
  categoryTitle: string;
  categoryIcon: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export function InvestmentHero({
  categorySlug,
  categoryTitle,
  categoryIcon,
  eyebrow,
  headline,
  subheadline,
}: Props) {
  return (
    <section
      className="relative pt-[120px] pb-[100px] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#0B132B 0%,#1C2541 50%,#0F172A 100%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Large orb — top right */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,#2563EB18,transparent 70%)' }}
      />

      {/* Small orb — bottom left */}
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,#0E7C7B14,transparent 70%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-2 text-[13px] text-white/50 mb-10"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <FaChevronRight size={9} />
          <Link href="/investments" className="hover:text-white transition-colors">Investments</Link>
          <FaChevronRight size={9} />
          <Link
            href={`/investments/${categorySlug}`}
            className="hover:text-white transition-colors"
          >
            {categoryTitle}
          </Link>
          <FaChevronRight size={9} />
          <span className="text-white font-medium">Details</span>
        </nav>

        <div className="max-w-[780px]">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-[7px] rounded-full mb-6">
            <span className="text-[16px]" aria-hidden="true">{categoryIcon}</span>
            {eyebrow}
          </span>

          {/* Main headline */}
          <h1
            className="font-heading font-extrabold text-white leading-[1.06] mb-5"
            style={{ fontSize: 'clamp(30px,3.8vw,52px)' }}
          >
            {headline}
          </h1>

          {/* Supporting text */}
          <p
            className="text-white/65 leading-relaxed max-w-[620px]"
            style={{ fontSize: 'clamp(15px,1.6vw,18px)' }}
          >
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
