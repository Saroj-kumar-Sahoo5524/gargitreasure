'use client';

import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 40;

/**
 * Returns true when the page has been scrolled past the threshold (40px).
 * Used by the Navbar to apply the frosted-glass "scrolled" style.
 */
export function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll(); // set initial value
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
}
