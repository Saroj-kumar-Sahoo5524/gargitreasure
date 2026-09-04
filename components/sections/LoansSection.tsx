'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa6';
import { Tabs } from '@/components/ui/Tabs';
import { Kicker } from '@/components/ui/Kicker';
import { LoanCalculator } from './LoanCalculator';
import { loanTabs } from '@/lib/data/loans';
import type { LoanTabKey } from '@/types/content';

const tabItems = loanTabs.map((t) => ({ key: t.key, label: t.label }));

/**
 * Loans section — tabbed panel with loan details + embedded calculator.
 */
export function LoansSection() {
  const [activeTab, setActiveTab] = useState<LoanTabKey>('personal');
  const shouldReduce = useReducedMotion();
  const currentTab = loanTabs.find((t) => t.key === activeTab)!;

  return (
    <section id="loans" className="section">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Loans</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Financing that moves your plans forward
          </h2>
          <p className="text-text-muted text-[17px]">
            Explore terms, documentation, and application steps for each type of financing, then estimate your eligibility below.
          </p>
        </motion.div>

        <Tabs
          tabs={tabItems}
          active={activeTab}
          onChange={(key) => setActiveTab(key as LoanTabKey)}
          variant="button"
          className="mb-9"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-[44px] items-start">
          {/* Loan detail */}
          <motion.div
            key={activeTab}
            initial={shouldReduce ? {} : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-heading font-bold text-[24px] text-ink mb-3">{currentTab.title}</h3>
            <p className="text-text-muted mb-6 text-[15px]">{currentTab.description}</p>

            {/* Meta boxes */}
            <div className="grid grid-cols-2 gap-[14px] mb-[26px]">
              {currentTab.meta.map((m) => (
                <div key={m.label} className="bg-white border border-border-base rounded-[12px] p-4">
                  <div className="text-[12px] text-text-soft font-semibold mb-[5px]">{m.label}</div>
                  <div className="font-bold text-[14.5px] text-ink">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Docs sections */}
            {currentTab.docs.map((section) => (
              <div key={section.title} className="mb-[10px]">
                <h5 className="font-bold text-[13.5px] text-ink mb-3">{section.title}</h5>
                <ul className="space-y-[9px]">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-[10px] text-[14px] text-text-muted items-start">
                      <FaCircle className="text-teal mt-1 flex-shrink-0" size={8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Calculator */}
          <LoanCalculator />
        </div>
      </div>
    </section>
  );
}
