import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'bordered';
}

export function Card({
  children,
  className,
  variant = 'glass',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';

  const variants = {
    glass: 'bg-white/90 backdrop-blur-md border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-900/5',
    solid: 'bg-white border border-slate-200 shadow-sm',
    bordered: 'border border-slate-200 bg-transparent hover:border-accent-border',
  };

  return (
    <div className={twMerge(clsx(baseStyles, variants[variant], className))} {...props}>
      {children}
    </div>
  );
}
