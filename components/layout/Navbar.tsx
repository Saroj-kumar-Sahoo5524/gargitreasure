'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';
import { useScrolled } from '@/hooks/useScrolled';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { MobileMenu } from './MobileMenu';
import { navRoutes } from '@/lib/data/nav';
import { Button } from '@/components/ui/Button';

/**
 * Sticky navigation bar.
 * - Applies frosted-glass background past 40px scroll via useScrolled()
 * - Swaps between hash anchors (#section) on home and route links (/section) elsewhere
 * - Desktop: logo + nav links + CTA buttons
 * - Mobile (< 900px): logo + hamburger toggle → MobileMenu overlay
 */
export function Navbar() {
  const scrolled = useScrolled();
  const { isOpen, open, close } = useMobileMenu();
  const pathname = usePathname();

  return (
    <>
      <header
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
          scrolled
            ? 'py-[14px] bg-white/86 backdrop-blur-[14px] backdrop-saturate-[160%] shadow-[0_1px_0_rgba(11,27,52,.06),0_12px_30px_rgba(11,27,52,.06)]'
            : 'py-[22px]'
        }`}
      >
        <div className="max-w-content mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[10px] font-heading font-extrabold text-[19px] text-ink no-underline">
            <span className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white text-[15px] font-extrabold flex-shrink-0">
              GT
            </span>
            Gargi Treasure
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-[34px]" aria-label="Primary">
            {navRoutes.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14.5px] font-semibold text-ink-soft relative py-1 transition-colors duration-200 hover:text-royal after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-royal after:transition-[width] after:duration-[250ms] after:ease-out hover:after:w-full ${
                  pathname === item.href ? 'text-royal after:w-full' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="/contact">
              Talk to an Advisor
            </Button>
            <Button variant="primary" size="sm" href="/solutions">
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden bg-none border-none text-[22px] text-ink cursor-pointer p-2"
            id="navToggle"
            onClick={open}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <FaBars />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} links={navRoutes} isHome={false} />
    </>
  );
}
