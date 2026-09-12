'use client';

import {
  FaPhone,
  FaChartLine,
  FaStar,
  FaRocket,
  FaCrown,
} from 'react-icons/fa6';

/* ── Plan tiles (name + icon only — no pricing/details) ─────────────────── */
const plans = [
  {
    id: 'starter',
    icon: FaStar,
    label: 'Starter Plan',
    tagline: 'Begin your investment journey',
    gradient: 'linear-gradient(135deg,#2451D6 0%,#1B3DA6 100%)',
    glow: 'rgba(36,81,214,0.22)',
    bgSoft: 'rgba(36,81,214,0.06)',
    borderHover: '#2451D6',
  },
  {
    id: 'professional',
    icon: FaRocket,
    label: 'Professional Plan',
    tagline: 'Grow your wealth, steadily',
    gradient: 'linear-gradient(135deg,#0E7C7B 0%,#0A5F5E 100%)',
    glow: 'rgba(14,124,123,0.22)',
    bgSoft: 'rgba(14,124,123,0.06)',
    borderHover: '#0E7C7B',
    badge: 'Popular',
  },
  {
    id: 'elite',
    icon: FaCrown,
    label: 'Elite Plan',
    tagline: 'Premium wealth management',
    gradient: 'linear-gradient(135deg,#A87C34 0%,#8B5E1A 100%)',
    glow: 'rgba(168,124,52,0.22)',
    bgSoft: 'rgba(168,124,52,0.06)',
    borderHover: '#A87C34',
  },
];

const PHONES = [
  { label: 'Landline', number: '06744119039' },
  { label: 'Mobile', number: '7438968674' },
];

/* ── Component ──────────────────────────────────────────────────────────── */
export function InvestmentPlansCard() {
  return (
    <section
      id="invest-with-us"
      className="py-[80px] px-4"
      style={{ background: 'linear-gradient(180deg,#F6F7FA 0%,#EEF1F6 100%)' }}
    >
      <div className="max-w-[1000px] mx-auto">

        {/* ── Main card ── */}
        <div
          className="relative rounded-[28px] overflow-hidden"
          style={{
            background: '#fff',
            border: '1.5px solid #E3E7EF',
            boxShadow: '0 16px 60px rgba(11,27,52,0.09), 0 2px 12px rgba(11,27,52,0.05)',
          }}
        >

          {/* ── Dark hero band ── */}
          <div
            className="relative px-8 sm:px-14 py-14 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 55%,#0E7C7B 100%)' }}
          >
            {/* Decorative orbs */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div style={{
                position: 'absolute', width: 340, height: 340, borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(36,81,214,0.18),transparent)', top: -120, left: -100
              }} />
              <div style={{
                position: 'absolute', width: 260, height: 260, borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(14,124,123,0.20),transparent)', bottom: -80, right: -60
              }} />
            </div>

            {/* Kicker */}
            <div
              className="relative inline-flex items-center gap-2 rounded-full px-4 py-[6px] mb-6 text-[12px] font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)' }}
            >
              <FaChartLine size={10} />
              Invest With Us
            </div>

            <h2
              className="relative font-heading font-extrabold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(26px,4vw,46px)' }}
            >
              Grow Your Wealth With<br className="hidden sm:block" /> Gargi Treasure
            </h2>

            <p
              className="relative text-[16px] leading-relaxed max-w-[520px] mx-auto"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Interested in investing with us? Choose a plan below and simply
              reach out — our team will guide you every step of the way.
            </p>
          </div>

          {/* ── Plan tiles ── */}
          <div className="px-8 sm:px-14 py-10 border-b border-[#E3E7EF]">
            <p className="text-center text-[12px] font-semibold uppercase tracking-widest text-[#8791A3] mb-7">
              Our Investment Plans
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.id}
                    className="relative flex flex-col items-center text-center rounded-[20px] px-6 py-8 transition-all duration-300 group cursor-default"
                    style={{
                      background: plan.bgSoft,
                      border: `1.5px solid ${plan.borderHover}20`,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.border = `1.5px solid ${plan.borderHover}55`;
                      el.style.boxShadow = `0 12px 36px ${plan.glow}`;
                      el.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.border = `1.5px solid ${plan.borderHover}20`;
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Popular badge */}
                    {plan.badge && (
                      <span
                        className="absolute top-[-12px] left-1/2 -translate-x-1/2 px-3 py-[4px] rounded-full text-[10px] font-bold tracking-widest uppercase text-white"
                        style={{ background: plan.gradient, boxShadow: `0 4px 14px ${plan.glow}` }}
                      >
                        {plan.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <div
                      className="w-[60px] h-[60px] rounded-[18px] flex items-center justify-center mb-4"
                      style={{ background: plan.gradient, boxShadow: `0 8px 24px ${plan.glow}` }}
                    >
                      <Icon size={26} color="#fff" />
                    </div>

                    {/* Name */}
                    <p className="font-heading font-extrabold text-[#0B1B34] text-[17px] leading-tight mb-1">
                      {plan.label}
                    </p>

                    {/* Tagline */}
                    <p className="text-[13px] text-[#5A6478] leading-snug">
                      {plan.tagline}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className="mt-5 h-[3px] w-[40px] rounded-full"
                      style={{ background: plan.gradient }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Contact strip ── */}
          <div className="px-8 sm:px-14 py-10">
            <p className="text-center text-[12px] font-semibold uppercase tracking-widest text-[#8791A3] mb-6">
              Contact us to get started
            </p>

            {/* Phone cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {PHONES.map(({ label, number }) => (
                <a
                  key={number}
                  href={`tel:${number}`}
                  className="group flex items-center gap-4 w-full sm:w-auto rounded-[16px] px-7 py-5 border border-[#E3E7EF] transition-all duration-300 hover:-translate-y-[3px]"
                  style={{ background: '#F6F7FA', boxShadow: '0 2px 12px rgba(11,27,52,0.05)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '#2451D6';
                    el.style.boxShadow = '0 10px 32px rgba(36,81,214,0.14)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '#E3E7EF';
                    el.style.boxShadow = '0 2px 12px rgba(11,27,52,0.05)';
                  }}
                >
                  <div
                    className="w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#2451D6,#1B3DA6)', boxShadow: '0 4px 14px rgba(36,81,214,0.30)' }}
                  >
                    <FaPhone size={16} color="#fff" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8791A3]">{label}</span>
                    <span className="text-[18px] font-bold text-[#0B1B34] tracking-wide">{number}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* OR divider */}
            {/* <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-[#E3E7EF]" />
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8791A3]">or</span>
              <div className="flex-1 h-px bg-[#E3E7EF]" />
            </div> */}

            {/* Message CTA */}
            {/* <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[12px] px-8 py-[14px] text-[15px] font-bold text-white hover:-translate-y-[2px] transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg,#2451D6,#1B3DA6)',
                  boxShadow: '0 6px 22px rgba(36,81,214,0.30)',
                }}
              >
                Send Us a Message <FaArrowRight size={12} />
              </Link>
              <p className="text-[#8791A3] text-[13px] mt-3">
                Mon – Sat &nbsp;·&nbsp; 9 AM – 7 PM
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}
