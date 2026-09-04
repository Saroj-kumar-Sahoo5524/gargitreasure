'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Tabs } from '@/components/ui/Tabs';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Kicker } from '@/components/ui/Kicker';
import { faqItems, faqCategories } from '@/lib/data/faq';
import type { FAQCategory } from '@/types/content';

/**
 * FAQ section — category tabs filter + animated accordion items.
 */
export function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('loans');
  const shouldReduce = useReducedMotion();

  const tabItems = faqCategories.map((c) => ({ key: c.key, label: c.label }));
  const filteredItems = faqItems.filter((item) => item.category === activeCategory);

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
          <Kicker>FAQ</Kicker>
          <h2 className="font-heading font-extrabold text-ink" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Frequently asked questions
          </h2>
        </motion.div>

        <Tabs
          tabs={tabItems}
          active={activeCategory}
          onChange={(key) => setActiveCategory(key as FAQCategory)}
          variant="pill"
          className="mb-[30px]"
        />

        <Accordion>
          {filteredItems.map((item, i) => (
            <motion.div
              key={`${activeCategory}-${item.question}`}
              initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <AccordionItem question={item.question}>
                {item.answer}
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
