'use client';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  id?: string;
}

/** Labeled select dropdown matching the calculator form style. */
export function Select({ label, value, options, onChange, id }: SelectProps) {
  return (
    <div className="mb-[18px]">
      <label className="block text-[13px] font-bold text-ink-soft mb-2">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-[13px] py-[11px] rounded-[9px] border-[1.5px] border-border-base text-[14.5px] font-semibold text-ink bg-white focus:border-royal outline-none transition-colors duration-200"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
