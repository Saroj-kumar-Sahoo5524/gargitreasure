import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'light';
type ButtonSize = 'sm' | 'md';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-royal text-white shadow-[0_6px_20px_rgba(36,81,214,.28)] hover:bg-royal-deep hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(36,81,214,.36)] active:translate-y-0',
  ghost: 'bg-transparent text-ink border border-border-base hover:border-ink hover:bg-ink/[0.03]',
  light: 'bg-white text-ink border border-border-base hover:-translate-y-0.5 hover:shadow-md',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-[18px] py-[10px] text-[13.5px]',
  md: 'px-[26px] py-[14px] text-[15px]',
};

/**
 * Reusable Button/Link component. Renders as <a> (via Next Link) when `href` is provided,
 * otherwise as <button>.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  href,
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-[10px] rounded-[11px] font-semibold border-none transition-[transform,box-shadow,background] duration-[180ms] ease-out whitespace-nowrap cursor-pointer font-body select-none';
  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    block ? 'w-full justify-center' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} id={id}>
      {children}
    </button>
  );
}
