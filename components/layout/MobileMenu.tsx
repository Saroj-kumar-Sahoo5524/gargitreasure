'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';
import type { NavItem } from '@/types/content';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavItem[];
  isHome: boolean;
}

/**
 * Full-screen mobile navigation overlay.
 * Slides down with Framer Motion AnimatePresence.
 * Closes on nav link click.
 */
export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobileMenu"
          key="mobileMenu"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed inset-0 z-[1100] bg-ink flex flex-col px-6 py-[26px]"
        >
          {/* Top row */}
          <div className="flex justify-between items-center mb-12">
            <span className="flex items-center gap-[10px] font-heading font-extrabold text-[19px] text-white">
              <span className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white text-[15px] font-extrabold flex-shrink-0">
                GT
              </span>
              Gargi Treasure
            </span>
            <button
              id="mobileClose"
              onClick={onClose}
              className="bg-none border-none text-white text-[26px] cursor-pointer p-1"
              aria-label="Close menu"
            >
              <FaXmark />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-[6px]" aria-label="Mobile">
            {links.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-white font-heading font-bold text-[26px] py-[14px] border-b border-white/10 no-underline hover:text-teal transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-[10px] px-[26px] py-[14px] rounded-[11px] font-semibold text-[15px] border border-white/30 text-white"
            >
              Talk to an Advisor
            </Link>
            <Link
              href="/solutions"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-[10px] px-[26px] py-[14px] rounded-[11px] font-semibold text-[15px] bg-royal text-white"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
