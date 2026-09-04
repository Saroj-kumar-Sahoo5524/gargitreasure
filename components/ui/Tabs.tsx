'use client';

interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  active: string;
  onChange: (key: string) => void;
  variant?: 'pill' | 'button';
  className?: string;
}

/**
 * Generic tab switcher component.
 * variant="pill" → FAQ-style rounded pill tabs
 * variant="button" → Loan-style rectangular button tabs
 */
export function Tabs({ tabs, active, onChange, variant = 'button', className = '' }: TabsProps) {
  const containerClass = variant === 'pill'
    ? 'flex gap-[10px] flex-wrap'
    : 'flex gap-[10px] flex-wrap';

  const getTabClass = (key: string) => {
    if (variant === 'pill') {
      return key === active
        ? 'px-[18px] py-[10px] rounded-full border-[1.5px] border-royal bg-royal text-white text-[13.5px] font-bold cursor-pointer transition-all duration-200'
        : 'px-[18px] py-[10px] rounded-full border-[1.5px] border-border-base bg-white text-text-muted text-[13.5px] font-bold cursor-pointer transition-all duration-200 hover:border-royal hover:text-royal';
    }
    return key === active
      ? 'px-5 py-[11px] rounded-[11px] border-[1.5px] border-ink bg-ink text-white text-[14px] font-bold cursor-pointer transition-all duration-200'
      : 'px-5 py-[11px] rounded-[11px] border-[1.5px] border-border-base bg-white text-text-muted text-[14px] font-bold cursor-pointer transition-all duration-200 hover:border-ink hover:text-ink';
  };

  return (
    <div className={`${containerClass} ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={getTabClass(tab.key)}
          aria-pressed={tab.key === active}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
