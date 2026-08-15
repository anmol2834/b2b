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
    glass: 'bg-[#12141A]/80 backdrop-blur-md border border-slate-800/80 hover:border-slate-700/80 shadow-lg shadow-black/40',
    solid: 'bg-[#12141A] border border-slate-800',
    bordered: 'border border-slate-800 bg-transparent hover:border-[#D4AF37]/40',
  };

  return (
    <div className={twMerge(clsx(baseStyles, variants[variant], className))} {...props}>
      {children}
    </div>
  );
}
