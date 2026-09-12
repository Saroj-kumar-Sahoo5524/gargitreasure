'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';
import { useScrolled } from '@/hooks/useScrolled';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';

/** All nav links shown in the top bar */
const desktopNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Investment', href: '/investments' },
  { label: 'Finance', href: '/finance' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Leaders', href: '/our-leaders' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

const mobileLinks = desktopNavItems;

/**
 * Sticky navigation bar.
 *
 * Design:
 * - Always solid white with dark text for maximum readability on all pages
 * - Elevates with a stronger shadow once scrolled
 * - Active link shown in royal blue
 */
export function Navbar() {
  const scrolled = useScrolled();
  const { isOpen, open, close } = useMobileMenu();
  const pathname = usePathname();

  return (
    <>
      <header
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[1000] bg-white transition-all duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
          scrolled
            ? 'py-[10px] shadow-[0_1px_0_rgba(11,27,52,.06),0_8px_28px_rgba(11,27,52,.10)]'
            : 'py-[14px] shadow-[0_1px_0_rgba(11,27,52,.06)]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Gargi Treasure Logo"
              height={58}
              width={108}
              className="h-[58px] w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop nav links ── */}
          <nav
            className="hidden lg:flex items-center gap-[20px] flex-1 justify-center"
            aria-label="Primary"
          >
            {desktopNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[13.5px] font-semibold whitespace-nowrap relative py-1 transition-colors duration-200
                    after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-[#2451D6]
                    after:transition-[width] after:duration-[250ms] after:ease-out
                    ${
                      isActive
                        ? 'text-[#2451D6] after:w-full'
                        : 'text-[#3A4560] hover:text-[#2451D6] after:w-0 hover:after:w-full'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Button variant="ghost" size="sm" href="/contact">
              Talk to an Advisor
            </Button>
            <Button variant="primary" size="sm" href="/solutions">
              Get Started
            </Button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden bg-transparent border-none text-[22px] cursor-pointer p-2 text-[#0B1B34] transition-colors duration-[250ms]"
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
