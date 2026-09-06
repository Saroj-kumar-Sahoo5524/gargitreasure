'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';
import { useScrolled } from '@/hooks/useScrolled';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';

/** All nav links shown in the top bar */
const desktopNavItems = [
  { label: 'Home',       href: '/' },
  { label: 'Investment', href: '/investments' },
  { label: 'Finance',    href: '/finance' },
  { label: 'About Us',   href: '/about' },
  { label: 'Resources',  href: '/resources' },
  { label: 'Contact',    href: '/contact' },
];

const mobileLinks = desktopNavItems;

/**
 * Pages whose hero sections have a DARK background —
 * navbar must use white text when NOT yet scrolled on these routes.
 */
const DARK_HERO_ROUTES = [
  '/investments',
  '/finance',
  '/about',
  '/resources',
  '/contact',
  '/solutions',
  '/loans',
];

/**
 * Sticky navigation bar.
 *
 * Colour logic:
 * - On pages with dark hero AND not yet scrolled → transparent bg, white text
 * - On the home page (light hero) OR after scrolling → frosted-glass white bg, dark text
 * - Active link is highlighted in royal blue regardless
 */
export function Navbar() {
  const scrolled = useScrolled();
  const { isOpen, open, close } = useMobileMenu();
  const pathname = usePathname();

  /** True when the current page has a dark hero section */
  const isDarkHero = DARK_HERO_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  );

  /** Show white (transparent) style when on a dark-hero page and not yet scrolled */
  const useWhiteNav = isDarkHero && !scrolled;

  return (
    <>
      <header
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
          scrolled
            ? 'py-[14px] bg-white/92 backdrop-blur-[14px] backdrop-saturate-[160%] shadow-[0_1px_0_rgba(11,27,52,.06),0_12px_30px_rgba(11,27,52,.07)]'
            : useWhiteNav
              ? 'py-[22px] bg-transparent'
              : 'py-[22px] bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-8 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-[10px] font-heading font-extrabold text-[19px] no-underline transition-colors duration-[250ms] ${
              useWhiteNav ? 'text-white' : 'text-ink'
            }`}
          >
            <span className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white text-[15px] font-extrabold flex-shrink-0">
              GT
            </span>
            Gargi Treasure
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-[30px]" aria-label="Primary">
            {desktopNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              if (useWhiteNav) {
                // White text on dark heroes
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[14.5px] font-semibold relative py-1 transition-colors duration-200
                      after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white
                      after:transition-[width] after:duration-[250ms] after:ease-out
                      ${isActive
                        ? 'text-white after:w-full'
                        : 'text-white/80 hover:text-white after:w-0 hover:after:w-full'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              // Dark text on light bg (home page or after scroll)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[14.5px] font-semibold relative py-1 transition-colors duration-200
                    after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-royal
                    after:transition-[width] after:duration-[250ms] after:ease-out
                    ${isActive
                      ? 'text-royal after:w-full'
                      : 'text-ink-soft hover:text-royal after:w-0 hover:after:w-full'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {useWhiteNav ? (
              <>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-[10px] px-[18px] py-[10px] rounded-[11px] font-semibold text-[13.5px] border border-white/35 text-white hover:bg-white/10 transition-all duration-200"
                >
                  Talk to an Advisor
                </Link>
                <Button variant="primary" size="sm" href="/solutions">
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" href="/contact">
                  Talk to an Advisor
                </Button>
                <Button variant="primary" size="sm" href="/solutions">
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden bg-transparent border-none text-[22px] cursor-pointer p-2 transition-colors duration-[250ms] ${
              useWhiteNav ? 'text-white' : 'text-ink'
            }`}
            id="navToggle"
            onClick={open}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <FaBars />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} links={mobileLinks} isHome={false} />
    </>
  );
}
