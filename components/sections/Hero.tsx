'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaShieldHalved, FaCircleCheck, FaHeadset } from 'react-icons/fa6';
import { FloatingShapes } from '@/components/graphics/FloatingShapes';
import { HeroChart } from '@/components/graphics/HeroChart';
import { Button } from '@/components/ui/Button';

const trustItems = [
  { icon: FaShieldHalved, label: 'Transparent process' },
  { icon: FaCircleCheck, label: 'No hidden charges' },
  { icon: FaHeadset, label: 'Dedicated support' },
];

/**
 * Hero section — full-width gradient background with animated text entrance,
 * hero dashboard panel, two smoothly floating cards, and decorative SVG shapes.
 *
 * Fix notes:
 * - Left-column text uses Framer Motion initial/animate so content is always
 *   visible from SSR (no blank-flash on first load).
 * - Float cards use CSS float animation classes for smooth bob.
 * - isLargeScreen guard avoids display:none + Framer Motion conflict on cards.
 */
export function Hero() {
  const shouldReduce = useReducedMotion();

  // Show float cards only on desktop, detected after mount (avoids display:none + FM conflict)
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        padding: '160px 0 100px',
        background:
          'radial-gradient(1100px 520px at 82% -10%, rgba(36,81,214,.13), transparent 60%), ' +
          'radial-gradient(700px 420px at 5% 8%, rgba(14,124,123,.09), transparent 60%), ' +
          'linear-gradient(180deg,#FBFCFE 0%, #F6F7FA 100%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,27,52,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,52,.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(180deg, black, transparent 75%)',
        }}
      />

      {/* Decorative floating shapes */}
      <FloatingShapes className="absolute inset-0" />

      <div className="max-w-content mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">

          {/* ── Left copy ── */}
          <div>
            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 bg-white border border-border-base px-[14px] py-[8px] pl-[8px] rounded-full text-[13.5px] font-semibold text-ink-soft shadow-sm mb-[24px]"
              initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="w-[8px] h-[8px] rounded-full bg-teal shadow-[0_0_0_4px_rgba(14,124,123,.15)] flex-shrink-0" />
              Your Financial Journey, Our Commitment
            </motion.span>

            {/* Heading */}
            <motion.h1
              className="font-heading font-extrabold text-ink leading-[1.06] mb-[20px]"
              style={{ fontSize: 'clamp(36px, 4.4vw, 58px)' }}
              initial={shouldReduce ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: 'easeOut' }}
            >
              WHERE CAPITAL MEETS GLOBAL TRADE
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-[17px] text-text-muted max-w-[520px] mb-[32px] leading-[1.65]"
              initial={shouldReduce ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: 'easeOut' }}
            >
              Expanding credit, optimizing investments, and unlocking new trade frontiers. We make every market move count by providing transparent financing solutions and proven investment governance for enterprise and family wealth.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex gap-[12px] flex-wrap mb-[40px]"
              initial={shouldReduce ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: 'easeOut' }}
            >
              <Button variant="primary" href="/solutions">
                Explore Solutions <FaArrowRight size={12} />
              </Button>
              <Button variant="ghost" href="/contact">
                Talk to an Advisor
              </Button>
            </motion.div>

            {/* Trust items */}
            <motion.div
              className="flex items-center gap-[20px] flex-wrap"
              initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32, ease: 'easeOut' }}
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-[7px] text-[13.5px] text-text-muted font-semibold"
                >
                  <Icon className="text-teal" size={14} />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Dashboard visual ── */}
          <motion.div
            className="relative"
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Main dark panel */}
            <div
              className="relative rounded-[22px] p-[26px] overflow-hidden"
              style={{
                background: '#0B1B34',
                boxShadow: '0 24px 64px rgba(11,27,52,.22), 0 0 0 1px rgba(255,255,255,.06)',
              }}
            >
              {/* Radial glow inside panel */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[-40%] right-[-20%] w-[70%] h-[140%]"
                style={{ background: 'radial-gradient(circle, rgba(36,81,214,.32), transparent 60%)' }}
              />

              {/* Panel top row */}
              <div className="relative z-[1] flex justify-between items-start mb-[18px]">
                <div>
                  <div className="text-[12px] text-white/50 font-semibold mb-[5px]">Portfolio value</div>
                  <div className="font-heading font-extrabold text-[30px] text-white tabular-nums">₹18,42,600</div>
                </div>
                <div
                  className="rounded-full px-[12px] py-[5px] text-[12px] font-bold flex items-center gap-[6px]"
                  style={{
                    background: 'rgba(143,227,199,.12)',
                    border: '1px solid rgba(143,227,199,.2)',
                    color: '#8FE3C7',
                  }}
                >
                  ↗ +6.2% this qtr
                </div>
              </div>

              {/* Chart */}
              <HeroChart />

              {/* Stats row */}
              <div className="relative z-[1] grid grid-cols-3 gap-[8px]">
                {[
                  { label: 'Invested', value: '₹14.2L', color: '#fff' },
                  { label: 'Growth', value: '+₹4.2L', color: '#8FE3C7' },
                  { label: 'Active plans', value: '3', color: '#fff' },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="rounded-[11px] p-[10px_12px]"
                    style={{
                      background: 'rgba(255,255,255,.06)',
                      border: '1px solid rgba(255,255,255,.09)',
                    }}
                  >
                    <div className="text-[11px] text-white/55 font-semibold mb-[4px]">{label}</div>
                    <div
                      className="font-heading font-extrabold text-[16px] tabular-nums"
                      style={{ color }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Float card 1 — Home Finance (top-left) ── */}
            {/* CSS hero-float-a handles the bob. motion.div inside only for hover. */}
            {isLargeScreen && (
              <div
                className="absolute hero-float-a"
                style={{ top: '-22px', left: '-28px' }}
              >
                <motion.div
                  className="bg-white rounded-[14px] flex items-center gap-[10px]"
                  style={{ padding: '11px 16px 11px 11px', boxShadow: '0 8px 32px rgba(11,27,52,.14), 0 0 0 1px rgba(255,255,255,.9)' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(11,27,52,.22), 0 0 0 1.5px rgba(14,124,123,.3)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center rounded-[9px] flex-shrink-0 text-[18px]" style={{ width: '36px', height: '36px', background: 'rgba(14,124,123,.12)' }}>🏠</div>
                  <div>
                    <div className="text-[11px] text-text-muted font-semibold leading-none mb-[4px]">Home Finance</div>
                    <div className="font-heading font-extrabold text-[14px] text-ink">Approved in 5 days*</div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* ── Float card 2 — Investment plan (bottom-right) ── */}
            {/* CSS hero-float-b handles the bob. motion.div inside only for hover. */}
            {isLargeScreen && (
              <div
                className="absolute hero-float-b"
                style={{ bottom: '-18px', right: '-22px' }}
              >
                <motion.div
                  className="bg-white rounded-[14px] flex items-center gap-[10px]"
                  style={{ padding: '11px 16px 11px 11px', boxShadow: '0 8px 32px rgba(11,27,52,.14), 0 0 0 1px rgba(255,255,255,.9)' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(11,27,52,.22), 0 0 0 1.5px rgba(36,81,214,.3)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center rounded-[9px] flex-shrink-0 text-[18px]" style={{ width: '36px', height: '36px', background: 'rgba(36,81,214,.12)' }}>📈</div>
                  <div>
                    <div className="text-[11px] text-text-muted font-semibold leading-none mb-[4px]">Investment plan</div>
                    <div className="font-heading font-extrabold text-[14px] text-ink">Long-term · Active</div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
