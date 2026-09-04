import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/** Generic card wrapper matching the design system's white card style. */
export function Card({ children, className = '', id }: CardProps) {
  return (
    <div
      id={id}
      className={`bg-white border border-border-base rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
