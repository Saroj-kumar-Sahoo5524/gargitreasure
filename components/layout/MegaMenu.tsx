'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa6';
import type { MegaMenuGroup } from '@/lib/data/megamenu';

interface MegaMenuProps {
  group: MegaMenuGroup | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Full-width mega-menu dropdown panel.
 * Renders a grid of category cards with sub-item links and Explore buttons.
 * Triggered by hovering "Investment" or "Finance" in the Navbar.
 */
export function MegaMenu({ group, isOpen, onClose }: MegaMenuProps) {
  if (!group) return null;

  const colsClass =
    group.categories.length === 6
      ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
      : 'grid-cols-2 md:grid-cols-4';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible overlay to detect mouse-leave */}
          <div
            className="fixed inset-0 z-[998]"
            style={{ top: '72px' }}
            onClick={onClose}
          />

          <motion.div
            key={`megamenu-${group.key}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed left-0 right-0 z-[999] bg-white border-b border-[#E3E7EF] shadow-[0_24px_64px_rgba(11,27,52,.14)]"
            style={{ top: '72px' }}
            onMouseLeave={onClose}
          >
            {/* Coloured accent top bar */}
            <div
              className="h-[3px] w-full"
              style={{
                background:
                  group.key === 'investment'
                    ? 'linear-gradient(90deg,#2451D6,#0E7C7B)'
                    : 'linear-gradient(90deg,#A87C34,#2451D6)',
              }}
            />

            <div className="max-w-[1240px] mx-auto px-8 py-8">
              {/* Group header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#8791A3]">
                    {group.key === 'investment' ? 'Investment Categories' : 'Finance Solutions'}
                  </span>
                  <h3 className="font-heading font-extrabold text-[20px] text-[#0B1B34] mt-[2px]">
                    {group.key === 'investment'
                      ? 'Where would you like to invest?'
                      : 'What financial solution do you need?'}
                  </h3>
                </div>
                <Link
                  href={group.basePath}
                  onClick={onClose}
                  className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-[#2451D6] hover:text-[#1B3DA6] transition-colors duration-200"
                >
                  View all {group.label}
                  <FaChevronRight size={10} />
                </Link>
              </div>

              {/* Category cards grid */}
              <div className={`grid ${colsClass} gap-4`}>
                {group.categories.map((cat, i) => (
                  <motion.div
                    key={cat.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                    className="group relative bg-[#F6F7FA] hover:bg-white border border-[#E3E7EF] hover:border-[#2451D6]/30 hover:shadow-[0_8px_24px_rgba(11,27,52,.08)] rounded-[16px] p-5 transition-all duration-200 flex flex-col"
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-[10px] mb-3">
                      <span className="text-[22px] leading-none">{cat.icon}</span>
                      <h4 className="font-heading font-bold text-[14.5px] text-[#0B1B34] group-hover:text-[#2451D6] transition-colors duration-200">
                        {cat.title}
                      </h4>
                    </div>

                    {/* Sub-items */}
                    <ul className="flex flex-col gap-[6px] mb-4 flex-1">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-[8px] text-[13px] text-[#5A6478] hover:text-[#2451D6] transition-colors duration-150 py-[2px]"
                          >
                            <FaArrowRight size={9} className="flex-shrink-0 text-[#0E7C7B]" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Explore button */}
                    <Link
                      href={`${group.basePath}/${cat.slug}`}
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-4 py-[8px] rounded-[8px] text-[12.5px] font-semibold border border-[#2451D6]/40 text-[#2451D6] hover:bg-[#2451D6] hover:text-white hover:border-[#2451D6] transition-all duration-200"
                    >
                      Explore
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
