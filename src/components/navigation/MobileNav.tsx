'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DIVISIONS } from '@/config/divisions';
import { useTheme, ThemeType } from '@/components/core/ThemeProvider';
import { ScrollEngine } from '@/engine/ScrollEngine';
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
  Hexagon,
  Building2,
  ChevronRight,
  Compass
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
  { id: 'enterprise-light', name: 'Electric Sky', colors: ['#F8FAFC', '#0284C7', '#38BDF8'] },
  { id: 'titanium-dark', name: 'Titanium Gold', colors: ['#FFFFFF', '#B48C1C', '#0284C7'] },
  { id: 'emerald-forest', name: 'Neon Emerald', colors: ['#F0FDF4', '#059669', '#10B981'] },
  { id: 'sunset-ochre', name: 'Sunset Ochre', colors: ['#FFFBEB', '#D97706', '#EA580C'] },
  { id: 'cyber-industrial', name: 'Cyber Indigo', colors: ['#EEF2FF', '#4F46E5', '#DC2626'] },
];

const QUICK_NAV_LINKS = [
  {
    href: '#workflow',
    label: 'Supply Chain Model',
    subLabel: '01. Source → 04. Support',
    icon: Compass,
    badge: '4S Flow',
  },
  {
    href: '#sectors',
    label: 'Industry Sectors',
    subLabel: '6 Enterprise Project Verticals',
    icon: Building2,
    badge: '6 Sectors',
  },
  {
    href: '#compliance',
    label: 'Compliance Registry',
    subLabel: 'ASTM • EN 16005 • LEED • ISO',
    icon: ShieldCheck,
    badge: 'Verified',
  },
  {
    href: '#boq-uploader',
    label: 'Bulk Quotation Desk',
    subLabel: 'Upload Product List & Bill of Materials',
    icon: FileSpreadsheet,
    badge: '24h SLA',
  },
];

export function MobileNav({ isOpen, onClose, onRequestQuote }: MobileNavProps) {
  const [expandedDivision, setExpandedDivision] = useState<string | null>('sanitary');
  const { theme, setTheme } = useTheme();

  // Prevent background body and Lenis scrolling when mobile drawer is open
  React.useEffect(() => {
    let lenis: ReturnType<typeof ScrollEngine.getInstance>['lenis'] | null = null;
    try {
      lenis = ScrollEngine.getInstance().getLenis();
    } catch {
      // ignore
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden overflow-hidden flex justify-end"
          data-lenis-prevent="true"
        >
          {/* Dimming Backdrop with Smooth Fade */}
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Container with Fixed Viewport Bounds */}
          <motion.aside
            key="mobile-nav-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
              mass: 0.85,
            }}
            data-lenis-prevent="true"
            className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] h-[100dvh] max-h-[100dvh] bg-white border-l border-slate-200 text-[#0F172A] shadow-2xl shadow-slate-900/15 flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Top Fixed Header Bar */}
            <div className="shrink-0 px-5 sm:px-6 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-md flex items-center justify-between z-20">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl border border-accent-border bg-accent-surface text-accent-primary shadow-xs">
                  <Hexagon className="w-4 h-4 fill-accent-primary/20 stroke-accent-primary" />
                  <span className="absolute font-display font-bold text-[11px] text-accent-primary">V</span>
                </div>
                <div>
                  <span className="font-display font-bold text-sm tracking-tight text-[#0F172A] block leading-tight">
                    VERTEX<span className="text-accent-primary">.B2B</span>
                  </span>
                  <span className="text-[9px] font-tech text-slate-500 tracking-wider uppercase">
                    Direct Master Distributor
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-95"
                aria-label="Close mobile navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Inner Content Area */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5 space-y-5 touch-pan-y"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Theme Palette Switcher Section */}
              <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] font-tech text-slate-600 uppercase tracking-wider flex items-center gap-1.5 font-medium">
                    <Palette className="w-3.5 h-3.5 text-accent-primary" />
                    <span>Accent Theme</span>
                  </span>
                  <span className="text-[9.5px] font-tech text-accent-primary font-bold uppercase">
                    {THEMES.find((t) => t.id === theme)?.name}
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-1.5">
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
                            ? 'border-accent-primary bg-white shadow-xs'
                            : 'border-slate-200/80 bg-white/70 hover:border-slate-300'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full overflow-hidden flex transform -rotate-45 shadow-xs border border-slate-200">
                          <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[0] }} />
                          <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[1] }} />
                          <span className="w-1/3 h-full" style={{ backgroundColor: t.colors[2] }} />
                        </div>
                        <span className="text-[8px] font-tech text-slate-500 truncate w-full text-center">
                          {t.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4 Enterprise Divisions Interactive Accordion */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10.5px] font-tech uppercase tracking-widest text-slate-500 mb-1 px-1 font-medium">
                  <span>Wholesale Line-Cards</span>
                  <span className="text-accent-primary font-bold">4 Divisions</span>
                </div>

                {Object.values(DIVISIONS).map((div) => {
                  const Icon = DIVISION_ICONS[div.id as keyof typeof DIVISION_ICONS] || Layers;
                  const isExpanded = expandedDivision === div.id;

                  return (
                    <div
                      key={div.id}
                      className={`rounded-2xl border transition-all ${
                        isExpanded 
                          ? 'border-accent-border bg-accent-surface/30' 
                          : 'border-slate-200/80 bg-slate-50/50'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedDivision(isExpanded ? null : div.id)}
                        className="w-full p-3 flex items-center justify-between text-left hover:bg-white transition-colors rounded-2xl"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="p-2 rounded-xl border border-accent-border bg-accent-surface text-accent-primary shrink-0 shadow-xs">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-display font-bold text-[#0F172A] truncate">
                              {div.shortName}
                            </h4>
                            <span className="text-[9.5px] font-tech text-slate-500 block truncate">
                              {div.targetSectors[0]}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                            isExpanded ? 'rotate-180 text-accent-primary' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-3 pt-0 border-t border-slate-100 space-y-2.5 bg-white rounded-b-2xl">
                          <p className="text-[10.5px] font-body text-slate-600 leading-relaxed pt-2">
                            {div.tagline}
                          </p>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                onClose();
                                onRequestQuote(div.id);
                              }}
                              className="w-full py-2 px-3 rounded-xl text-xs font-tech font-bold bg-accent-surface border border-accent-border text-accent-primary hover:border-accent-primary flex items-center justify-center gap-1.5 transition-colors"
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

              {/* REFINED QUICK NAVIGATION SECTION */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10.5px] font-tech uppercase tracking-widest text-slate-500 px-1 font-medium">
                  <span>Quick Navigation</span>
                  <span className="text-slate-400 font-mono text-[9.5px]">Direct Jump</span>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-1.5 space-y-1">
                  {QUICK_NAV_LINKS.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all hover:shadow-xs"
                      >
                        {/* Left Icon + Text Block */}
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-7 h-7 rounded-lg border border-slate-200 bg-white group-hover:border-accent-border group-hover:bg-accent-surface text-slate-500 group-hover:text-accent-primary flex items-center justify-center shrink-0 transition-colors shadow-xs">
                            <LinkIcon className="w-3.5 h-3.5" />
                          </div>
                          
                          <div className="min-w-0">
                            <span className="text-xs font-display font-semibold text-[#0F172A] group-hover:text-accent-primary block truncate leading-tight">
                              {link.label}
                            </span>
                            <span className="text-[9.5px] font-tech text-slate-500 group-hover:text-slate-600 block truncate mt-0.5">
                              {link.subLabel}
                            </span>
                          </div>
                        </div>

                        {/* Right Badge + Chevron Indicator */}
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          <span className="text-[9px] font-tech text-accent-primary bg-accent-surface border border-accent-border/40 px-1.5 py-0.5 rounded-md hidden sm:inline-block font-semibold">
                            {link.badge}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent-primary group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Fixed Action Suite */}
            <div className="shrink-0 px-5 sm:px-6 py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md space-y-2.5 z-20">
              {/* Fast Track Telemetry Strip */}
              <div className="flex items-center justify-between text-[10px] font-tech text-slate-600 px-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent-primary" />
                  <span>Wholesale Rates:</span>
                  <strong className="text-[#0F172A]">24H SLA</strong>
                </span>
                <span className="text-accent-primary font-bold">Direct Factory Invoicing</span>
              </div>

              {/* Primary Request Quote CTA */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="w-full py-3 rounded-xl font-bold text-xs font-tech tracking-wider uppercase text-white flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 hover:brightness-110"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>Get Volume Pricing Quote</span>
              </button>

              {/* Product List Upload Quick Button */}
              <a
                href="#boq-uploader"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-tech font-semibold text-slate-700 flex items-center justify-center gap-2 hover:border-accent-border hover:bg-white transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-accent-primary" />
                <span>Attach Requirement List (.xlsx / .pdf)</span>
              </a>

              {/* Wholesale Authentication Badge */}
              <div className="w-full py-1 text-center text-[10px] font-tech text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-accent-primary" />
                <span>Authorized Multi-Brand Master Distributor</span>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
