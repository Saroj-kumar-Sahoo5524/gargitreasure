'use client';

interface RangeInputProps {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  id?: string;
}

/** Labeled range slider with a right-aligned display value, matching the calculator style. */
export function RangeInput({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  onChange,
  id,
}: RangeInputProps) {
  return (
    <div className="mb-[18px]">
      <label className="flex justify-between text-[13px] font-bold text-ink-soft mb-2">
        {label}
        <span className="text-royal font-heading font-bold tabular-nums">{displayValue}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-slider"
      />
    </div>
  );
}
