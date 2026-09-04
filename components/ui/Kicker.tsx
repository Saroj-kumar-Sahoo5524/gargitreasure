interface KickerProps {
  children: string;
  className?: string;
}

/** Section eyebrow/kicker text — royal colored, bold, small. */
export function Kicker({ children, className = '' }: KickerProps) {
  return (
    <span
      className={`text-royal font-bold text-[14.5px] mb-[14px] block ${className}`}
    >
      {children}
    </span>
  );
}
