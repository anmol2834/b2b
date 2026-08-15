import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-lg';
  
  const variants = {
    primary: 'bg-[#D4AF37] text-black hover:bg-[#c49f2e] active:scale-[0.98] shadow-md shadow-[#D4AF37]/20 font-semibold',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 active:scale-[0.98] border border-slate-700',
    outline: 'border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 active:scale-[0.98]',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/60',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
}
