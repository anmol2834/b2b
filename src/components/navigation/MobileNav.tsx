'use client';

import React, { useState } from 'react';
import { DIVISIONS } from '@/config/divisions';
import { useTheme, ThemeType } from '@/components/core/ThemeProvider';
import { 
  X, 
  ChevronDown, 
  FileSpreadsheet, 
  PhoneCall, 
  Send, 
  Layers, 
  Sparkles, 
  Droplet, 
  DoorOpen, 
  Factory,
  ArrowRight,
  ShieldCheck,
  Palette,
  Clock,
  Hexagon
} from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (divisionId?: string) => void;
}

const DIVISION_ICONS = {
  sanitary: Droplet,
  hospitality: Sparkles,
  entrance: DoorOpen,
  industrial: Factory,
};

const THEMES: { id: ThemeType; name: string; colors: string[] }[] = [
  { id: 'titanium-dark', name: 'Titanium Gold', colors: ['#0A0B0E', '#D4AF37', '#00E5FF'] },
  { id: 'enterprise-light', name: 'Electric Sky', colors: ['#F8FAFC', '#0284C7', '#38BDF8'] },
  { id: 'emerald-forest', name: 'Neon Emerald', colors: ['#293827', '#57EF40', '#65C556'] },
  { id: 'sunset-ochre', name: 'Sunset Ochre', colors: ['#20130E', '#FABF52', '#FA8952'] },
  { id: 'cyber-industrial', name: 'Cyber Industrial', colors: ['#081A19', '#2514EB', '#F02C10'] },
];

export function MobileNav({ isOpen, onClose, onRequestQuote }: MobileNavProps) {
  const [expandedDivision, setExpandedDivision] = useState<string | null>('sanitary');
  const { theme, setTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Dimming Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="gpu-layer fixed inset-y-0 right-0 w-full max-w-[380px] sm:max-w-md bg-[#0A0B0E]/98 border-l border-white/15 text-white p-5 sm:p-6 shadow-2xl shadow-black/95 overflow-y-auto flex flex-col justify-between backdrop-blur-2xl">
        
        {/* Ambient Top Glow */}
        <div 
          className="pointer-events-none absolute -top-20 right-0 w-72 h-40 rounded-full blur-[90px] opacity-25"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />

        <div className="relative z-10">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl border border-accent-border bg-accent-surface text-accent-primary">
                <Hexagon className="w-4 h-4 fill-accent-primary/20 stroke-accent-primary" />
                <span className="absolute font-display font-bold text-[11px] text-white">V</span>
              </div>
              <div>
                <span className="font-display font-bold text-sm tracking-tight text-white block leading-tight">
                  VERTEX<span className="text-accent-primary">.B2B</span>
                </span>
                <span className="text-[9px] font-tech text-slate-400 tracking-wider uppercase">
                  Direct Commercial Distributor
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Close mobile navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Palette Switcher Section */}
          <div className="mb-6 p-3.5 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-tech text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-accent-primary" />
                <span>Active Accent Theme</span>
              </span>
              <span className="text-[10px] font-tech text-accent-primary font-bold uppercase">
                {THEMES.find((t) => t.id === theme)?.name}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {THEMES.map((t) => {
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTheme(t.id)}
                    title={t.name}
                    className={`py-1.5 px-1 rounded-xl flex flex-col items-center gap-1 border transition-all ${
                      isActive
                        ? 'border-accent-primary bg-accent-surface shadow-sm'
                        : 'border-white/5 bg-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex transform -rotate-45 shadow-sm">
                      <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[0] }} />
                      <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[1] }} />
                      <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[2] }} />
                    </div>
                    <span className="text-[8px] font-tech text-slate-400 truncate w-full text-center">
                      {t.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 Enterprise Divisions Interactive Cards */}
          <div className="space-y-2.5 mb-6">
            <div className="flex items-center justify-between text-[11px] font-tech uppercase tracking-widest text-slate-400 mb-1 px-1">
              <span>Wholesale Divisions</span>
              <span className="text-accent-secondary">4 Categories</span>
            </div>

            {Object.values(DIVISIONS).map((div) => {
              const Icon = DIVISION_ICONS[div.id as keyof typeof DIVISION_ICONS] || Layers;
              const isExpanded = expandedDivision === div.id;

              return (
                <div
                  key={div.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedDivision(isExpanded ? null : div.id)}
                    className="w-full p-3.5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl border border-accent-border bg-accent-surface text-accent-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-display font-bold text-white">
                          {div.shortName}
                        </h4>
                        <span className="text-[10px] font-tech text-slate-400">
                          {div.targetSectors[0]}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-accent-primary' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-3.5 pt-0 border-t border-white/5 space-y-3 bg-black/20">
                      <p className="text-[11px] font-body text-slate-300">
                        {div.tagline}
                      </p>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onRequestQuote(div.id);
                          }}
                          className="flex-1 py-2 px-3 rounded-xl text-xs font-tech font-bold bg-accent-surface border border-accent-border text-accent-primary hover:border-accent-primary flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Get Volume Rates</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-1.5 mb-6 p-3 rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-[10px] font-tech uppercase tracking-widest text-slate-500 mb-1 px-1">
              Quick Navigation
            </p>
            <a
              href="#workflow"
              onClick={onClose}
              className="flex items-center justify-between p-2 rounded-lg text-xs font-tech text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Direct Supply Chain Model</span>
              <span className="text-[10px] text-accent-secondary font-mono">01 → 04</span>
            </a>
            <a
              href="#sectors"
              onClick={onClose}
              className="flex items-center justify-between p-2 rounded-lg text-xs font-tech text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Industry Sectors</span>
              <span className="text-[10px] text-slate-500">Commercial / Hotel / Industrial</span>
            </a>
            <a
              href="#compliance"
              onClick={onClose}
              className="flex items-center justify-between p-2 rounded-lg text-xs font-tech text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>ASTM / EN Certification Registry</span>
              <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" />
            </a>
          </div>
        </div>

        {/* Bottom Action Suite */}
        <div className="relative z-10 pt-4 border-t border-white/10 space-y-2.5">
          {/* Fast Track Telemetry Strip */}
          <div className="flex items-center justify-between text-[10px] font-tech text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-accent-primary" />
              <span>Wholesale Rates:</span>
              <strong className="text-white">24H SLA</strong>
            </span>
            <span className="text-accent-secondary font-bold">Direct Factory Invoicing</span>
          </div>

          {/* Primary Request Quote CTA */}
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full py-3.5 rounded-xl font-bold text-xs font-tech tracking-wider uppercase text-black flex items-center justify-center gap-2 shadow-xl transition-transform active:scale-95"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            <Send className="w-3.5 h-3.5 text-black" />
            <span>Get Volume Pricing Quote</span>
          </button>

          {/* Product List Upload Quick Button */}
          <a
            href="#boq-uploader"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-tech font-medium text-slate-200 flex items-center justify-center gap-2 hover:border-accent-border hover:bg-white/10 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-accent-primary" />
            <span>Attach Requirement List (.xlsx / .pdf)</span>
          </a>

          {/* Wholesale Hotline */}
          <a
            href="tel:+18005550199"
            className="w-full py-1.5 text-center text-[11px] font-tech text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-accent-secondary" />
            <span>Direct Commercial Desk: +1 (800) 555-0199</span>
          </a>
        </div>
      </div>
    </div>
  );
}
