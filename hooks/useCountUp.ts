'use client';

import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

/**
 * Animates a number from 0 to `target` using an easing function.
 * Triggers when the returned `ref` element enters the viewport.
 *
 * @returns An object with `displayValue` (formatted string) and `ref` to attach to the counter element.
 */
export function useCountUp({
  target,
  prefix = '',
  suffix = '',
  duration = 1600,
}: UseCountUpOptions): { displayValue: string; ref: React.RefObject<HTMLSpanElement | null> } {
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            io.disconnect();

            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // Cubic ease-out
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);
              setDisplayValue(`${prefix}${current.toLocaleString('en-IN')}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, prefix, suffix, duration]);

  return { displayValue, ref };
}
