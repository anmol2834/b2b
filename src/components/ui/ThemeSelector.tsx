'use client';

import React from 'react';
import { useTheme, ThemeType } from '@/components/core/ThemeProvider';
import { Palette } from 'lucide-react';

const THEMES: { id: ThemeType; name: string; colors: string[] }[] = [
  { id: 'enterprise-light', name: 'Electric Sky', colors: ['#F8FAFC', '#0284C7', '#38BDF8'] },
  { id: 'titanium-dark', name: 'Titanium Gold', colors: ['#FFFFFF', '#B48C1C', '#0284C7'] },
  { id: 'emerald-forest', name: 'Neon Emerald', colors: ['#F0FDF4', '#059669', '#10B981'] },
  { id: 'sunset-ochre', name: 'Sunset Ochre', colors: ['#FFFBEB', '#D97706', '#EA580C'] },
  { id: 'cyber-industrial', name: 'Cyber Indigo', colors: ['#EEF2FF', '#4F46E5', '#DC2626'] },
];

export interface ThemeSelectorProps {
  variant?: 'floating' | 'inline';
}

export function ThemeSelector({ variant = 'inline' }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme();

  const containerClasses =
    variant === 'floating'
      ? 'fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 shrink-0 whitespace-nowrap'
      : 'flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 bg-white shadow-xs backdrop-blur-md shrink-0 whitespace-nowrap';

  return (
    <div className={containerClasses}>
      <div className="flex items-center gap-1 text-[11px] font-tech text-slate-500">
        <Palette className="w-3.5 h-3.5 text-accent-primary" />
        <span className="hidden 2xl:inline uppercase tracking-wider text-[10px] font-semibold">Palette:</span>
      </div>

      <div className="flex items-center gap-1.5">
        {THEMES.map((t) => {
          const isActive = theme === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTheme(t.id)}
              title={t.name}
              aria-label={`Switch to ${t.name} palette`}
              className={`group relative rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? 'scale-115 ring-2 ring-accent-primary ring-offset-1 ring-offset-white'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
              style={{ width: '18px', height: '18px' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden flex transform -rotate-45 shadow-xs border border-slate-200">
                <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[0] }} />
                <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[1] }} />
                <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[2] }} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
