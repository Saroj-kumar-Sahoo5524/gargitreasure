import type { Metadata } from 'next';
import { ApplicationForm } from '@/components/investments/ApplicationForm';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Apply — Investment Application | Gargi Treasure',
  description:
    'Fill in your investment application form with Gargi Treasure. Complete your personal details, address information, and submit to speak with an advisor.',
};

/**
 * Standalone investment application form page.
 * Route: /investments/apply
 */
export default function ApplyPage() {
  return (
    <main id="main" className="min-h-screen" style={{ background: '#F6F7FA' }}>

      {/* ── Hero header ─────────────────────────────────────────────────── */}
      <section
        className="pt-[120px] pb-[48px] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 60%,#0E7C7B 100%)' }}
      >
        {/* decorative orb */}
        <div
          className="absolute top-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,#2451D620,transparent)' }}
        />
        <div
          className="absolute bottom-[-80px] left-[-40px] w-[280px] h-[280px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,#0E7C7B18,transparent)' }}
        />

        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12.5px] text-white/50 mb-7">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight size={8} />
            <Link href="/investments" className="hover:text-white transition-colors">Investments</Link>
            <FaChevronRight size={8} />
            <span className="text-white font-medium">Apply</span>
          </nav>

          <div className="flex items-start gap-5">
            <div
              className="hidden sm:flex w-[52px] h-[52px] rounded-[14px] items-center justify-center text-[24px] flex-shrink-0 mt-1"
              style={{ background: 'rgba(36,81,214,0.2)', border: '1px solid rgba(36,81,214,0.3)' }}
            >
              📋
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                Gargi Treasure · Investment
              </div>
              <h1
                className="font-heading font-extrabold text-white mb-3"
                style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}
              >
                Investment Application Form
              </h1>
              <p className="text-white/60 text-[15px] max-w-[560px] leading-relaxed">
                Please fill this form in <strong className="text-white/85">ENGLISH</strong> and
                in <strong className="text-white/85">BLOCK LETTERS</strong>. Fields marked
                with <span className="text-red-400">*</span> are required.
              </p>
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-3 mt-8 flex-wrap">
            {['Identity Details', 'Address Details', 'Declaration'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '30px', padding: '5px 14px',
                  fontSize: '12px', color: 'rgba(255,255,255,0.8)',
                }}>
                  <span style={{
                    width: '18px', height: '18px', borderRadius: '50%',
                    background: '#2451D6', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff',
                    flexShrink: 0,
                  }}>{i + 1}</span>
                  {step}
                </div>
                {i < 2 && <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>›</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────────────────── */}
      <section className="py-[48px]">
        <div className="max-w-[900px] mx-auto px-6">
          <ApplicationForm />
        </div>
      </section>

    </main>
  );
}
