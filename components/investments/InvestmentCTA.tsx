/**
 * InvestmentCTA
 * Bottom CTA band for /investments/[category]/details pages.
 * Matches the style of the existing CTA band on [category]/page.tsx.
 */
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FaArrowLeft } from 'react-icons/fa6';

interface Props {
  categoryTitle: string;
  categorySlug: string;
  ctaLabel: string;
}

export function InvestmentCTA({ categoryTitle, categorySlug, ctaLabel }: Props) {
  return (
    <section
      className="py-[80px]"
      style={{
        background: 'linear-gradient(135deg,#0B132B 0%,#1C2541 60%,#0F172A 100%)',
      }}
      aria-label="Call to action"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Copy */}
        <div>
          <h2 className="font-heading font-extrabold text-white text-[22px] sm:text-[26px] mb-2 leading-snug">
            Ready to invest in {categoryTitle}?
          </h2>
          <p className="text-white/60 text-[15px] max-w-[460px]">
            Speak to an advisor who will guide you to the right strategy — free, no obligation.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <Button variant="primary" size="md" href="/contact" id="details-cta-contact">
            {ctaLabel}
          </Button>
          <Button variant="ghost" size="md" href={`/investments/${categorySlug}`}>
            <span className="flex items-center gap-2">
              <FaArrowLeft size={11} aria-hidden="true" />
              Back to {categoryTitle}
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
}
