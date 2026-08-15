'use client';

import React from 'react';
import { useTheme, ThemeType } from '@/components/core/ThemeProvider';
import { Palette } from 'lucide-react';

const THEMES: { id: ThemeType; name: string; colors: string[] }[] = [
  { id: 'titanium-dark', name: 'Titanium Gold', colors: ['#0A0B0E', '#D4AF37', '#00E5FF'] },
  { id: 'enterprise-light', name: 'Electric Sky', colors: ['#F8FAFC', '#0284C7', '#38BDF8'] },
  { id: 'emerald-forest', name: 'Neon Emerald', colors: ['#293827', '#57EF40', '#65C556'] },
  { id: 'sunset-ochre', name: 'Sunset Ochre', colors: ['#20130E', '#FABF52', '#FA8952'] },
  { id: 'cyber-industrial', name: 'Cyber Industrial', colors: ['#081A19', '#2514EB', '#F02C10'] },
];

export interface ThemeSelectorProps {
  variant?: 'floating' | 'inline';
}

export function ThemeSelector({ variant = 'inline' }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme();

  const containerClasses =
    variant === 'floating'
      ? 'fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#12141A]/90 backdrop-blur-xl shadow-2xl shadow-black/60 shrink-0 whitespace-nowrap'
      : 'flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-[#12141A]/80 backdrop-blur-md shrink-0 whitespace-nowrap';

  return (
    <div className={containerClasses}>
      <div className="flex items-center gap-1 text-[11px] font-tech text-slate-400">
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
              className={`group relative w-4.5 h-4.5 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? 'scale-115 ring-2 ring-accent-primary ring-offset-1 ring-offset-[#12141A]'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
              style={{ width: '18px', height: '18px' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden flex transform -rotate-45 shadow-sm">
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
