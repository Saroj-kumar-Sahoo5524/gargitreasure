'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Kicker } from '@/components/ui/Kicker';

/**
 * Dashboard demo section — static demo panel with scroll reveal.
 */
export function DashboardDemo() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>See it in action</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            A clearer view of your finances
          </h2>
          <p className="text-text-muted text-[17px]">
            A sample of what your dashboard could look like once your solutions are active — shown here with demo data.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-[26px] p-2 shadow-lg"
          style={{ background: '#0B1B34' }}
          initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Demo badge */}
          <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-brass text-white text-[11.5px] font-bold px-4 py-[6px] rounded-full shadow-[0_6px_16px_rgba(168,124,52,.35)] z-[5] whitespace-nowrap">
            Demo data · not a real account
          </div>

          {/* Inner */}
          <div className="rounded-[20px] p-[34px]" style={{ background: '#0F2144' }}>
            {/* Top row */}
            <div className="flex justify-between items-center mb-7 flex-wrap gap-[14px]">
              <h4 className="text-white text-[16px] font-bold">Financial overview</h4>
              <div className="flex gap-2">
                {['This quarter', 'This year', 'All time'].map((tab, i) => (
                  <div
                    key={tab}
                    className={`px-[14px] py-[7px] rounded-full text-[12.5px] font-semibold border border-white/[0.08] ${i === 0 ? 'bg-white/[0.12] text-white' : 'bg-white/[0.05] text-white/55'}`}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-4 mb-4">
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-[16px] p-5">
                <div className="text-[12px] text-white/50 font-semibold mb-2">Investment value</div>
                <div className="font-heading font-extrabold text-[25px] text-white mb-[6px] tabular-nums">₹18,42,600</div>
                <div className="text-[12.5px] text-[#8FE3C7] font-bold flex items-center gap-1">↑ +6.2% growth</div>
                <svg viewBox="0 0 260 70" preserveAspectRatio="none" className="w-full h-[70px] mt-[6px]" aria-hidden="true">
                  <path d="M0,55 20,50 40,52 60,40 80,44 100,30 120,34 140,20 160,24 180,12 200,16 220,8 240,12 260,4" fill="none" stroke="#8FE3C7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-[16px] p-5">
                <div className="text-[12px] text-white/50 font-semibold mb-2">Active loan balance</div>
                <div className="font-heading font-extrabold text-[25px] text-white mb-[6px] tabular-nums">₹4,86,200</div>
                <div className="text-[12.5px] text-[#F0A5A5] font-bold flex items-center gap-1">↓ On schedule</div>
              </div>
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-[16px] p-5">
                <div className="text-[12px] text-white/50 font-semibold mb-2">Next EMI due</div>
                <div className="font-heading font-extrabold text-[25px] text-white mb-[6px] tabular-nums">₹12,450</div>
                <div className="text-[12.5px] text-white/55 font-semibold">Due in 14 days</div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-[16px] p-5">
                <div className="flex justify-between mb-3 text-[13.5px] text-white font-semibold">
                  <span>Home down payment goal</span><span className="tabular-nums">68%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-[6px]">
                  <div className="h-full rounded-full bg-gradient-to-r from-teal to-[#3FD6A0]" style={{ width: '68%' }} />
                </div>
                <div className="text-[11.5px] text-white/45 tabular-nums">₹6.8L of ₹10L target</div>
              </div>
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-[16px] p-5">
                <ul className="space-y-0">
                  {[
                    { label: 'Investment contribution', amount: '+ ₹25,000', color: '#fff' },
                    { label: 'Personal loan EMI', amount: '− ₹12,450', color: '#fff' },
                    { label: 'Portfolio review completed', amount: 'Done', color: '#8FE3C7' },
                  ].map(({ label, amount, color }) => (
                    <li key={label} className="flex justify-between items-center py-[9px] border-b border-white/[0.06] last:border-none text-[13px] text-white/80">
                      <span>{label}</span>
                      <span className="font-bold font-heading tabular-nums" style={{ color }}>{amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
