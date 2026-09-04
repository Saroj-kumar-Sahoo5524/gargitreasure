'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa6';
import {
  FaCar, FaHouse, FaBriefcase, FaSeedling, FaWallet, FaHourglassHalf,
} from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import { goalPickerData, goalListItems } from '@/lib/data/goals';
import { Kicker } from '@/components/ui/Kicker';
import type { GoalKey } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaCar, FaHouse, FaBriefcase, FaSeedling, FaWallet, FaHourglassHalf,
};

/**
 * Interactive goal picker — click a goal to see recommendations.
 * Panel content transitions with AnimatePresence fade/slide.
 */
export function GoalPicker() {
  const [activeGoal, setActiveGoal] = useState<GoalKey>('vehicle');
  const shouldReduce = useReducedMotion();
  const goalData = goalPickerData[activeGoal];

  return (
    <section className="section-tight" style={{ background: 'var(--bg-alt, #EEF1F6)' }}>
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Start with your goal</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            What are you planning for?
          </h2>
          <p className="text-text-muted text-[17px]">Select a goal to see which financial solutions typically apply.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-start">
          {/* Goal list */}
          <div className="flex flex-col gap-[10px]">
            {goalListItems.map((item, i) => {
              const Icon = iconMap[item.iconName];
              const isActive = item.key === activeGoal;

              return (
                <motion.button
                  key={item.key}
                  onClick={() => setActiveGoal(item.key)}
                  className={`flex items-center justify-between gap-4 px-[22px] py-5 rounded-[14px] border-[1.5px] cursor-pointer text-left w-full transition-all duration-[250ms] ${
                    isActive
                      ? 'border-royal bg-gradient-to-r from-royal/5 to-white/0'
                      : 'border-border-base bg-white hover:border-royal'
                  }`}
                  initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="flex items-center gap-[14px]">
                    <div
                      className={`w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-[17px] transition-all duration-[250ms] ${
                        isActive ? 'bg-royal text-white' : 'bg-bg-alt text-royal'
                      }`}
                    >
                      {Icon && <Icon size={17} />}
                    </div>
                    <span className="font-bold text-[15.5px] text-ink">{item.label}</span>
                  </div>
                  <FaChevronRight
                    size={12}
                    className={`text-text-soft transition-transform duration-[250ms] ${isActive ? 'rotate-90 text-royal' : ''}`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Goal panel */}
          <div
            className="rounded-[20px] p-[34px] text-white min-h-[340px] relative overflow-hidden"
            style={{ background: '#0B1B34' }}
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[-30%] right-[-20%] w-[60%] h-[120%]"
              style={{ background: 'radial-gradient(circle, rgba(14,124,123,.3), transparent 65%)' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGoal}
                initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <p className="text-[12.5px] text-white/50 font-bold mb-[10px]">Recommended for this goal</p>
                <h3 className="text-white text-[23px] font-heading font-bold mb-[14px]">{goalData.title}</h3>
                <p className="text-white/68 text-[14.5px] mb-6 max-w-[400px]">{goalData.desc}</p>

                <div className="flex flex-col gap-[10px]">
                  {goalData.recs.map((rec) => (
                    <div
                      key={rec}
                      className="flex items-center justify-between bg-white/[0.06] border border-white/10 px-4 py-[14px] rounded-[12px] text-[14px] font-semibold"
                    >
                      <span>{rec}</span>
                      <span className="text-[#8FE3C7] text-[13px] flex items-center gap-[6px]">
                        View <FaArrowRight size={10} />
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
