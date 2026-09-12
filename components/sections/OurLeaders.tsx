'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa6';
import { leadersData, type Leader } from '@/lib/data/leaders';

/* ─────────────────────────────────────────
   Individual leader row — alternating layout
───────────────────────────────────────── */
function LeaderRow({ leader, index }: { leader: Leader; index: number }) {
  const shouldReduce = useReducedMotion();
  const isEven = index % 2 === 0;

  const cardAnim = {
    initial: shouldReduce ? {} : { opacity: 0, x: isEven ? -48 : 48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  const avatarAnim = {
    initial: shouldReduce ? {} : { opacity: 0, scale: 0.75 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* ── Avatar side ── */}
      <motion.div
        className="flex-shrink-0 flex flex-col items-center gap-4"
        {...avatarAnim}
      >
        {/* Circle avatar */}
        <div
          className={`relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full
                      bg-gradient-to-br ${leader.gradient}
                      flex items-center justify-center
                      shadow-[0_8px_40px_rgba(11,27,52,0.22)]
                      ring-4 ring-white`}
        >
          <span className="font-heading font-extrabold text-white text-[48px] md:text-[56px] select-none">
            {leader.initials}
          </span>
          {/* Gloss */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
        </div>

        {/* Badge */}
        {leader.badge && (
          <span
            className={`text-[10.5px] font-bold uppercase tracking-widest px-4 py-[6px] rounded-full
                        bg-gradient-to-r ${leader.gradient} text-white shadow-sm`}
          >
            {leader.badge}
          </span>
        )}
      </motion.div>

      {/* ── Connector dot (desktop only) ── */}
      <div className="hidden md:flex flex-col items-center gap-0 flex-shrink-0">
        <div className={`w-px h-10 bg-gradient-to-b ${leader.gradient}`} />
        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${leader.gradient} shadow-md`} />
        <div className={`w-px h-10 bg-gradient-to-b ${leader.gradient}`} />
      </div>

      {/* ── Card side ── */}
      <motion.article
        className="group relative bg-white rounded-[24px] border border-[#E3E7EF] overflow-hidden flex-1
                   shadow-[0_4px_24px_rgba(11,27,52,0.07)] hover:shadow-[0_16px_56px_rgba(11,27,52,0.13)]
                   transition-shadow duration-500"
        {...cardAnim}
      >
        {/* Accent bar */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${leader.gradient}`} />

        <div className="p-7 lg:p-9">
          {/* Name & title */}
          <h3 className="font-heading font-extrabold text-[#0B1B34] text-[20px] md:text-[22px] leading-snug mb-1">
            {leader.name}
          </h3>
          <p
            className={`text-[13px] font-bold uppercase tracking-wider mb-1
                        bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}
          >
            {leader.title}
          </p>
          <p className="text-[12.5px] text-[#8791A3] font-semibold mb-5">
            {leader.role}
          </p>

          {/* Divider */}
          <div className="h-px bg-[#EDF0F5] mb-5" />

          {/* Bio */}
          <p className="text-[14.5px] text-[#5A6478] leading-[1.8] mb-7">
            {leader.bio}
          </p>

          {/* LinkedIn button — same style for all */}
          {leader.linkedin ? (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with ${leader.name} on LinkedIn`}
              className={`inline-flex items-center gap-[10px] px-5 py-[10px] rounded-[11px]
                          bg-gradient-to-r ${leader.gradient} text-white text-[13px] font-bold
                          hover:opacity-90 hover:scale-[1.03] active:scale-100
                          transition-all duration-200 shadow-md`}
            >
              <FaLinkedinIn size={14} />
              Connect on LinkedIn
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-[10px] px-5 py-[10px] rounded-[11px]
                          bg-gradient-to-r ${leader.gradient} text-white text-[13px] font-bold
                          shadow-md opacity-70 cursor-default select-none`}
            >
              <FaLinkedinIn size={14} />
              Connect on LinkedIn
            </span>
          )}
        </div>
      </motion.article>
    </div>
  );
}

/* ─────────────────────────────────────────
   Hero banner
───────────────────────────────────────── */
function LeadersHero() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative bg-[#0B1B34] overflow-hidden">
      {/* Gradient mesh */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(ellipse 800px 600px at 20% 50%, #2451D6, transparent),
                            radial-gradient(ellipse 600px 500px at 80% 30%, #0E7C7B, transparent),
                            radial-gradient(ellipse 400px 400px at 60% 80%, #A87C34, transparent)`,
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-8 py-[96px] text-center">
        <motion.span
          className="inline-block text-[#2451D6] font-bold text-[13.5px] uppercase tracking-[0.2em] mb-5
                     bg-[#2451D6]/10 px-4 py-2 rounded-full border border-[#2451D6]/20"
          initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Leadership Team
        </motion.span>

        <motion.h1
          className="font-heading font-extrabold text-white mb-5"
          style={{ fontSize: 'clamp(34px,4.5vw,58px)', lineHeight: 1.08 }}
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          The Minds Behind{' '}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#2451D6] via-[#0E7C7B] to-[#A87C34] bg-clip-text text-transparent">
            Gargi Treasure
          </span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-[17px] max-w-[580px] mx-auto leading-[1.7]"
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Seasoned architects, engineers, and financial strategists — united by
          a singular goal of making capital work smarter for every client we serve.
        </motion.p>

        <motion.div
          className="mt-12 inline-flex flex-wrap justify-center gap-10"
          initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          {[
            { value: '6', label: 'Leaders' },
            { value: '15+', label: 'Years Experience' },
            { value: '3', label: 'Disciplines' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-extrabold text-white text-[30px]">
                {s.value}
              </div>
              <div className="text-white/40 text-[11.5px] font-semibold uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export function OurLeaders() {
  return (
    <>
      <LeadersHero />

      <section className="bg-[#F6F7FA] py-[96px]">
        <div className="max-w-[1240px] mx-auto px-8">
          {/* Alternating leader rows with vertical connector line */}
          <div className="relative flex flex-col gap-16 lg:gap-24">
            {/* Vertical centre line (desktop only) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2451D6]/20 via-[#2451D6]/10 to-transparent -translate-x-1/2 hidden md:block pointer-events-none" />

            {leadersData.map((leader, i) => (
              <LeaderRow key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
