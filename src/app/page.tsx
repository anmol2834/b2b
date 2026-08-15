'use client';

import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Hero } from '@/components/sections/Hero';
import { BrandTicker } from '@/components/sections/BrandTicker';
import { TelemetryMatrix } from '@/components/sections/TelemetryMatrix';
import { DivisionsMatrix } from '@/components/sections/DivisionsMatrix';
import { SectorsMatrix } from '@/components/sections/SectorsMatrix';
import { BOQEngine } from '@/components/sections/BOQEngine';
import { 
  ShieldCheck, 
  Receipt, 
  Truck, 
  Headset, 
  Search, 
  CheckCircle2, 
  Award
} from 'lucide-react';

export default function DualToneEnterprisePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Global High-Precision Floating Telemetry Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION: IMAGE-FIRST CINEMATIC WHOLESALE SHOWCASE (PHASE 04)
          ========================================================================= */}
      <Hero />

      {/* =========================================================================
          MULTI-BRAND TRUST STRIP: HARDWARE INFINITE MARQUEE RAIL (PHASE 05)
          ========================================================================= */}
      <BrandTicker />

      {/* =========================================================================
          ASYMMETRICAL DUAL-AXIS SCROLL TELEMETRY MATRIX (PHASE 05)
          ========================================================================= */}
      <TelemetryMatrix />

      {/* =========================================================================
          FOUR CORE DIVISIONS SHOWCASE & SPECIFICATION MATRIX (PHASE 06)
          ========================================================================= */}
      <DivisionsMatrix />

      {/* =========================================================================
          SECTOR CAPABILITY MATRIX & CROSS-DIVISION SUPPLY BUNDLES (PHASE 08)
          ========================================================================= */}
      <SectorsMatrix />

      {/* =========================================================================
          BOTTOM HALF: THE 4S SUPPLY CHAIN MODEL & OEM COMPLIANCE (#FFF / #F8FAFC)
          ========================================================================= */}
      <section className="perf-section-cv relative bg-[#FFFFFF] text-[#0F172A] px-4 sm:px-6 md:px-12 lg:px-20 py-24 arch-grid-light border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          
          {/* 4S Supply Model Header */}
          <div id="workflow" className="max-w-4xl mb-16 pt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-tech uppercase tracking-wider rounded-full border border-accent-border bg-accent-surface text-accent-primary font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" />
              The 4S Direct Supply Chain Model
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#0F172A] mb-4">
              Multi-Brand Inventory to On-Site Palletized Dispatch
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-body leading-relaxed">
              Every shipment is backed by direct manufacturer distribution contracts, regional bonded warehousing, and OEM warranty coverage.
            </p>
          </div>

          {/* 4S Framework Matrix Cards on Light Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                step: '01',
                title: 'Source',
                icon: Search,
                desc: 'Direct access to multi-brand production lines across 50,000+ SKUs with institutional volume pricing.',
                metric: '50,000+ SKUs',
              },
              {
                step: '02',
                title: 'Quote',
                icon: Receipt,
                desc: 'Instant wholesale volume pricing and brand cross-matching tailored to your project scale.',
                metric: '24h Volume SLA',
              },
              {
                step: '03',
                title: 'Supply',
                icon: Truck,
                desc: 'Consolidated bonded warehousing, palletized logistics, and scheduled on-site delivery milestones.',
                metric: '99.4% On-Time SLA',
              },
              {
                step: '04',
                title: 'Support',
                icon: Headset,
                desc: 'Direct manufacturer warranty facilitation, genuine OEM spare parts stocking, and after-sales service coordination.',
                metric: 'Direct OEM Warranty',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="gpu-layer b2b-card-hover group relative p-7 rounded-2xl border border-slate-200 bg-white shadow-b2b-card-light hover:border-accent-borderHover hover:shadow-b2b-glow transition-all duration-200 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-2xl font-tech font-bold text-slate-300 group-hover:text-accent-primary transition-colors">
                        {item.step}
                      </span>
                      <div className="p-2.5 rounded-xl border border-accent-border bg-accent-surface text-accent-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-body text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-tech font-semibold text-accent-primary">
                      {item.metric}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-accent-secondary" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance Registry Section */}
          <div id="compliance" className="p-8 rounded-3xl border border-slate-200 bg-[#F8FAFC]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-tech text-accent-primary font-bold uppercase">
                  <Award className="w-4 h-4 text-accent-primary" />
                  <span>ASTM / EN Factory Certification Standards</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mt-1">
                  Authorized Multi-Brand Certification Registry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-body">
                  All delivered commercial items carry certified factory test submittals (EN 16005, LEED v4.1, WRAS, ADA, ATEX, OSHA).
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-tech font-semibold text-slate-700">
                  EN 16005
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-tech font-semibold text-slate-700">
                  LEED v4.1
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-tech font-semibold text-slate-700">
                  ISO 9001
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAST B2B QUOTATION & BULK INQUIRY ENGINE (PHASE 09)
          ========================================================================= */}
      <BOQEngine />

      {/* Footer Milestone Strip */}
      <footer className="w-full py-8 bg-[#0E1015] border-t border-white/10 text-center text-xs font-tech text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-slate-300 font-bold">VERTEX.B2B</span>
            <span className="text-slate-600">• Authorised Commercial Master Distributor & Bulk Supply Partner</span>
          </div>
          <span>DIRECT WHOLESALE DISTRIBUTION • FACTORY-TIER PRICING ACTIVE</span>
        </div>
      </footer>
    </main>
  );
}
