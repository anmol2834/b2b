'use client';

import React, { useState } from 'react';
import { HeroImageShowcase } from '@/components/hero/HeroImageShowcase';
import { QuoteModal } from '@/components/navigation/QuoteModal';
import { 
  Send, 
  PhoneCall, 
  FileSpreadsheet, 
  Sparkles, 
  Droplet, 
  DoorOpen, 
  Factory,
  Cpu
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
      <section className="relative min-h-[88vh] bg-[#0A0B0E] text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-12 arch-grid-dark flex flex-col justify-center border-b border-white/[0.06] overflow-hidden">
        
        {/* Dynamic Ambient Radial Glow */}
        <div 
          className="pointer-events-none absolute -top-40 left-1/3 -translate-x-1/2 w-[650px] h-[400px] rounded-full blur-[130px] opacity-25 transition-all duration-700"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* =========================================================================
                LEFT COLUMN: LEAN, AUTHORITATIVE VALUE PROPOSITION (6 Cols)
                ========================================================================= */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
              
              {/* Minimal Telemetry Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-tech tracking-wider uppercase rounded-full border border-accent-border bg-accent-surface text-accent-primary shadow-sm backdrop-blur-md w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-primary animate-pulse" />
                <Cpu className="w-3 h-3 text-accent-primary" />
                <span>Authorised Master Distributor</span>
                <span className="text-slate-500">• Volume B2B Supply</span>
              </div>

              {/* Master Headline (Refined Architectural Scale) */}
              <h1 className="text-xl sm:text-3xl lg:text-[36px] font-display font-bold tracking-tight text-white mb-3.5 leading-[1.16]">
                Direct Multi-Brand Bulk Supply for{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent-primary mt-1">
                  Commercial, Hospitality & Industrial.
                </span>
              </h1>

              {/* Punchy Sub-headline */}
              <p className="text-slate-400 text-sm sm:text-base max-w-xl font-body leading-relaxed mb-6">
                Access factory-direct volume pricing across leading brands. Unified invoicing, consolidated warehouse dispatch, and manufacturer-backed warranties for hotels, commercial towers, and industrial facilities.
              </p>

              {/* Clean Action Matrix */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => openQuoteForDivision()}
                  className="px-5 py-3 rounded-xl font-bold text-xs font-tech text-black flex items-center gap-2 shadow-lg transition-all duration-200 transform active:scale-95 hover:brightness-110 tracking-wider uppercase"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <Send className="w-3.5 h-3.5 text-black" />
                  <span>Get Bulk Volume Pricing</span>
                </button>

                {/* Secondary CTA */}
                <a
                  href="tel:+18005550199"
                  className="px-4 py-3 rounded-xl font-medium text-xs font-tech border border-white/15 hover:border-accent-border hover:bg-white/5 text-slate-200 transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-accent-secondary" />
                  <span>Talk to Bulk Supply Desk</span>
                </a>

                {/* Requirement List Drop Target */}
                <a
                  href="#boq-uploader"
                  className="px-4 py-3 rounded-xl font-medium text-xs font-tech border border-dashed border-white/20 hover:border-accent-primary hover:bg-accent-surface text-slate-300 transition-all duration-200 flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Attach Requirement List</span>
                </a>
              </div>

              {/* Minimal Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/10 text-xs font-tech">
                <div>
                  <span className="text-slate-500 block text-[9.5px] uppercase">Catalog Scope</span>
                  <span className="text-white font-bold text-sm">50,000+ Stock SKUs</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9.5px] uppercase">Delivered</span>
                  <span className="text-white font-bold text-sm">1,200+ Projects</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9.5px] uppercase">Wholesale SLA</span>
                  <span className="text-accent-primary font-bold text-sm">24h Response</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9.5px] uppercase">Billing</span>
                  <span className="text-accent-secondary font-bold text-sm">Direct Factory Tier</span>
                </div>
              </div>

            </div>

            {/* =========================================================================
                RIGHT COLUMN: IMAGE-FIRST CINEMATIC SPECIFICATION SHOWCASE (6 Cols)
                ========================================================================= */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              
              {/* Image-First Showcase Container */}
              <HeroImageShowcase 
                activeCategory={activeDivision} 
                onRequestQuote={openQuoteForDivision}
              />

              {/* Dynamic Division Category Switcher */}
              <div className="mt-3.5 p-1 rounded-2xl border border-white/10 bg-[#12141A]/90 backdrop-blur-xl grid grid-cols-2 sm:grid-cols-4 gap-1 w-full shadow-lg z-20">
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
                          ? 'border border-accent-border bg-accent-surface text-accent-primary shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Quote Modal Mount */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={activeDivision}
      />
    </>
  );
}
