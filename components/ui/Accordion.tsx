'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import type { ReactNode } from 'react';

// ── AccordionItem ─────────────────────────────────────────────────────────────

interface AccordionItemProps {
  question: string;
  children: ReactNode;
}

export function AccordionItem({ question, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-base">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full text-left bg-none border-none px-1 py-5 flex justify-between items-center text-[15.5px] font-bold text-ink gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 ${isOpen ? 'text-royal' : 'text-text-soft'}`}
        >
          <FaPlus size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-1 pb-5 text-text-muted text-[14.5px] max-w-[680px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Accordion container ───────────────────────────────────────────────────────

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return <div className={`max-w-[800px] ${className}`}>{children}</div>;
}
