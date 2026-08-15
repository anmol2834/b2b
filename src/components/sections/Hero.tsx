'use client';

import React, { useState } from 'react';
import { HeroImageShowcase } from '@/components/hero/HeroImageShowcase';
import { QuoteModal } from '@/components/navigation/QuoteModal';
import { ScrollItemFade } from '@/components/core/ScrollItemFade';
import { 
  Send, 
  FileSpreadsheet, 
  Sparkles, 
  Droplet, 
  DoorOpen, 
  Factory
} from 'lucide-react';

const DIVISION_TABS = [
  { id: 'sanitary', name: 'Sanitary & Bath', icon: Droplet },
  { id: 'hospitality', name: 'Hospitality', icon: Sparkles },
  { id: 'entrance', name: 'Entrance', icon: DoorOpen },
  { id: 'industrial', name: 'Industrial', icon: Factory },
];

export function Hero() {
  const [activeDivision, setActiveDivision] = useState('sanitary');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteForDivision = (divId?: string) => {
    if (divId) setActiveDivision(divId);
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-[88vh] bg-[#F8FAFC] text-[#0F172A] px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-12 arch-grid-light flex flex-col justify-center border-b border-slate-200 overflow-hidden">
        
        {/* Dynamic Ambient Radial Glow */}
        <div 
          className="pointer-events-none absolute -top-40 left-1/3 -translate-x-1/2 w-[650px] h-[400px] rounded-full blur-[130px] opacity-15 transition-all duration-700"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* =========================================================================
                LEFT COLUMN: LEAN, AUTHORITATIVE VALUE PROPOSITION (6 Cols)
                ========================================================================= */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
              <ScrollItemFade>
                {/* Master Headline (Natural Flow & Balanced Typesetting) */}
                <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-bold tracking-tight text-[#0F172A] mb-4 leading-[1.2] text-balance break-normal hyphens-none">
                  Direct Multi-Brand Bulk Supply for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-800 to-accent-primary">
                    Commercial, Hospitality & Industrial.
                  </span>
                </h1>

                {/* Punchy Sub-headline */}
                <p className="text-slate-600 text-sm sm:text-base max-w-xl font-body leading-relaxed mb-6">
                  Access factory-direct volume pricing across leading brands. Unified invoicing, consolidated warehouse dispatch, and manufacturer-backed warranties for hotels, commercial towers, and industrial facilities.
                </p>

                {/* Clean Action Matrix */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Primary CTA */}
                  <button
                    type="button"
                    onClick={() => openQuoteForDivision()}
                    className="px-5 py-3 rounded-xl font-bold text-xs font-tech text-white flex items-center gap-2 shadow-sm transition-all duration-200 transform active:scale-95 hover:brightness-110 tracking-wider uppercase"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Get Bulk Volume Pricing</span>
                  </button>

                  {/* Requirement List Drop Target */}
                  <a
                    href="#boq-uploader"
                    className="px-4 py-3 rounded-xl font-semibold text-xs font-tech border border-dashed border-slate-300 hover:border-accent-primary hover:bg-white text-slate-700 bg-slate-50/80 transition-all duration-200 flex items-center gap-2 shadow-xs"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-accent-primary" />
                    <span>Attach Requirement List</span>
                  </a>
                </div>
              </ScrollItemFade>
            </div>

            {/* =========================================================================
                RIGHT COLUMN: IMAGE-FIRST CINEMATIC SPECIFICATION SHOWCASE (6 Cols)
                ========================================================================= */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <ScrollItemFade className="w-full max-w-2xl flex flex-col items-center">
                {/* Image-First Showcase Container */}
                <HeroImageShowcase 
                  activeCategory={activeDivision} 
                  onRequestQuote={openQuoteForDivision}
                />

                {/* Dynamic Division Category Switcher */}
                <div className="mt-3.5 p-1 rounded-2xl border border-slate-200 bg-white shadow-md grid grid-cols-2 sm:grid-cols-4 gap-1 w-full z-20">
                  {DIVISION_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeDivision === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveDivision(tab.id)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-tech font-semibold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap ${
                          isActive
                            ? 'border border-accent-border bg-accent-surface text-accent-primary shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span>{tab.name}</span>
                      </button>
                    );
                  })}
                </div>
              </ScrollItemFade>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Modal Flyout Mount */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={activeDivision}
      />
    </>
  );
}
