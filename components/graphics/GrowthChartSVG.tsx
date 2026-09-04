'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useAnimation } from 'framer-motion';
import type { GrowthDataPoint } from '@/types/calculators';

interface GrowthChartSVGProps {
  series: GrowthDataPoint[];
  width?: number;
  height?: number;
}

/**
 * Investment growth chart SVG.
 * - Renders two lines: dashed "invested" (blue) and solid "value" (teal)
 * - Value line animates via pathLength draw-in when data changes
 * - Area fill beneath the value line
 * - Respects prefers-reduced-motion
 */
export function GrowthChartSVG({ series, width = 600, height = 260 }: GrowthChartSVGProps) {
  const shouldReduce = useReducedMotion();
  const controls = useAnimation();
  const prevSeriesRef = useRef<GrowthDataPoint[]>([]);

  const padL = 50, padB = 28, padT = 14, padR = 10;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;

  const maxVal = Math.max(...series.map((d) => d.value), 1);
  const n = series.length;

  function xPos(i: number) {
    return padL + (n > 1 ? (i / (n - 1)) * innerW : innerW / 2);
  }
  function yPos(v: number) {
    return height - padB - (v / maxVal) * innerH;
  }

  function buildPath(getter: (d: GrowthDataPoint) => number) {
    return series
      .map((d, i) => `${i === 0 ? 'M' : 'L'}${xPos(i).toFixed(1)},${yPos(getter(d)).toFixed(1)}`)
      .join(' ');
  }

  const investedPath = buildPath((d) => d.invested);
  const valuePath = buildPath((d) => d.value);
  const areaPath =
    valuePath +
    ` L${xPos(n - 1).toFixed(1)},${(height - padB).toFixed(1)} L${xPos(0).toFixed(1)},${(height - padB).toFixed(1)} Z`;

  // Trigger draw-in animation whenever the series changes
  useEffect(() => {
    if (shouldReduce) return;
    if (series !== prevSeriesRef.current) {
      controls.set({ pathLength: 0 });
      controls.start({ pathLength: 1, transition: { duration: 0.8, ease: 'easeOut' } });
      prevSeriesRef.current = series;
    }
  }, [series, controls, shouldReduce]);

  // Gridlines
  const gridLines = Array.from({ length: 5 }, (_, g) => {
    const gy = padT + g * (innerH / 4);
    return (
      <line
        key={g}
        x1={padL}
        y1={gy.toFixed(1)}
        x2={width - padR}
        y2={gy.toFixed(1)}
        stroke="#E3E7EF"
        strokeWidth="1"
      />
    );
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="w-full"
      style={{ height }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gcFillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E7C7B" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0E7C7B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {gridLines}

      <path d={areaPath} fill="url(#gcFillGrad)" />

      {/* Invested — static dashed blue */}
      <path
        d={investedPath}
        fill="none"
        stroke="#2451D6"
        strokeWidth="2.5"
        strokeDasharray="5,4"
        strokeLinecap="round"
      />

      {/* Value — animated teal line */}
      <motion.path
        d={valuePath}
        fill="none"
        stroke="#0E7C7B"
        strokeWidth="3"
        strokeLinecap="round"
        initial={shouldReduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={shouldReduce ? {} : controls}
      />
    </svg>
  );
}
