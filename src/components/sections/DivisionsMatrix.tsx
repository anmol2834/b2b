'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DIVISIONS, ProductSpecItem } from '@/config/divisions';
import { SpecDrawer } from '@/components/divisions/SpecDrawer';
import { QuoteModal } from '@/components/navigation/QuoteModal';
import { ScrollItemFade } from '@/components/core/ScrollItemFade';
import { 
  Droplet, 
  Sparkles, 
  DoorOpen, 
  Factory, 
  ShieldCheck, 
  ArrowUpRight, 
  Download, 
  FileSpreadsheet, 
  Plus, 
  Check,
  FileText
} from 'lucide-react';

const DIVISION_ICONS = {
  sanitary: Droplet,
  hospitality: Sparkles,
  entrance: DoorOpen,
  industrial: Factory,
};

export function DivisionsMatrix() {
  const [activeDivisionId, setActiveDivisionId] = useState<string>('sanitary');
  const [selectedProduct, setSelectedProduct] = useState<ProductSpecItem | null>(null);
  const [estimatedItems, setEstimatedItems] = useState<Record<string, boolean>>({});
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const division = DIVISIONS[activeDivisionId] || DIVISIONS.sanitary;
  const Icon = DIVISION_ICONS[division.id as keyof typeof DIVISION_ICONS] || Droplet;

  const toggleEstimatedItem = (code: string) => {
    setEstimatedItems((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  const openQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <section id="divisions" className="relative bg-[#FFFFFF] text-[#0F172A] px-4 sm:px-6 md:px-12 lg:px-20 py-24 border-b border-slate-200 overflow-hidden">
        
        {/* Ambient Glow */}
        <div 
          className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[400px] rounded-full blur-[140px] opacity-10 transition-all duration-700"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />

        <div className="mx-auto max-w-7xl">
          
          {/* Section Master Header with Scroll Fade */}
          <ScrollItemFade className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-tech uppercase tracking-wider rounded-full border border-accent-border bg-accent-surface text-accent-primary font-semibold">
                  <Icon className="w-3.5 h-3.5" />
                  <span>Direct Master Wholesale Divisions</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
                  Four Core Wholesale Product Divisions
                </h2>
                <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 font-body">
                  Direct manufacturer-authorized multi-brand supply for commercial real estate, hotels, and industrial plants.
                </p>
              </div>

              {/* Quick Action Download Linecard */}
              <a
                href="#compliance"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-accent-border text-xs font-tech text-slate-700 transition-colors shadow-xs w-fit shrink-0 font-medium"
              >
                <Download className="w-4 h-4 text-accent-primary" />
                <span>{division.specSheetDoc}</span>
              </a>
            </div>
          </ScrollItemFade>

          {/* Master Division Navigation Rail with Scroll Fade */}
          <ScrollItemFade className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-xs">
              {Object.values(DIVISIONS).map((div) => {
                const DivIcon = DIVISION_ICONS[div.id as keyof typeof DIVISION_ICONS] || Droplet;
                const isActive = activeDivisionId === div.id;

                return (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setActiveDivisionId(div.id)}
                    className={`py-3 px-3 sm:px-4 rounded-xl text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? 'border border-accent-border bg-white text-accent-primary shadow-xs'
                        : 'border border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <DivIcon className={`w-4 h-4 ${isActive ? 'text-accent-primary' : 'text-slate-500'}`} />
                        <span className="font-display font-bold text-xs sm:text-sm truncate">
                          {div.shortName}
                        </span>
                      </div>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-primary animate-pulse shrink-0" />
                      )}
                    </div>
                    <span className="text-[10px] font-tech text-slate-500 block truncate">
                      {div.skuCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollItemFade>

          {/* Directional Split-Screen Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* =========================================================================
                LEFT TRACK: FIXED TECHNICAL SPECS & DIVISION DETAILS (4 Cols)
                ========================================================================= */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <ScrollItemFade>
                {/* Division Summary Card */}
                <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50/70 space-y-5 shadow-lg shadow-slate-900/5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-tech text-accent-primary font-bold uppercase tracking-wider">
                        {division.id.toUpperCase()} WHOLESALE INVENTORY
                      </span>
                      <span className="text-[10.5px] font-tech text-slate-500">
                        {division.skuCount}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                      {division.name}
                    </h3>

                    <p className="text-xs font-body text-slate-600 leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  {/* Capabilities Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <span className="text-[10px] font-tech uppercase tracking-widest text-slate-500 block font-semibold">
                      Product Categories
                    </span>
                    {division.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs font-tech text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compliance Badges */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <span className="text-[10px] font-tech uppercase tracking-widest text-slate-500 block font-semibold">
                      Direct OEM Certifications
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {division.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-2 py-0.5 rounded-md border border-slate-200 bg-white text-[10px] font-tech text-slate-700 flex items-center gap-1 shadow-xs"
                        >
                          <ShieldCheck className="w-3 h-3 text-accent-primary" />
                          <span>{cert}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary Quote CTA Button */}
                  <button
                    type="button"
                    onClick={openQuote}
                    className="w-full py-3 rounded-xl font-bold text-xs font-tech tracking-wider uppercase text-white flex items-center justify-center gap-2 shadow-xs transition-all duration-200 active:scale-95 hover:brightness-110"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                    <span>Request {division.shortName} Volume Pricing</span>
                  </button>
                </div>
              </ScrollItemFade>
            </div>

            {/* =========================================================================
                RIGHT TRACK: 4 INTERACTIVE PRODUCT SPECIFICATION CARDS (8 Cols)
                ========================================================================= */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {division.products.map((prod) => {
                const isAdded = estimatedItems[prod.code];

                return (
                  <ScrollItemFade key={prod.id} scaleEffect>
                    <div
                      className="gpu-layer b2b-card-hover group relative rounded-3xl border border-slate-200 bg-white p-5 flex flex-col justify-between hover:border-accent-borderHover hover:shadow-lg transition-all duration-300 shadow-sm h-full"
                    >
                      <div>
                        {/* Product Image */}
                        <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-slate-200 mb-4 bg-slate-100">
                          <Image
                            src={prod.image}
                            alt={prod.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-tech text-white border border-white/10 font-bold">
                              {prod.code}
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                            <span className="text-[10px] font-tech text-accent-primary font-bold uppercase">
                              {prod.category}
                            </span>
                            <span className="text-[9.5px] font-tech text-slate-200">
                              {prod.leadTime}
                            </span>
                          </div>
                        </div>

                        {/* Title & Short Summary */}
                        <h4 className="text-base font-display font-bold text-[#0F172A] mb-1.5 group-hover:text-accent-primary transition-colors leading-snug">
                          {prod.name}
                        </h4>
                        <p className="text-xs font-body text-slate-600 line-clamp-2 mb-3">
                          {prod.summary}
                        </p>

                        {/* Inline Specs */}
                        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-[11px] font-tech text-slate-700 space-y-1 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500 text-[10px]">MATERIAL</span>
                            <span className="text-slate-900 truncate max-w-[160px] font-medium">{prod.material}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500 text-[10px]">COMPLIANCE</span>
                            <span className="text-accent-primary truncate max-w-[160px] font-bold">{prod.compliance[0]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleEstimatedItem(prod.code)}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-tech font-bold flex items-center justify-center gap-1.5 transition-all ${
                            isAdded
                              ? 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                              : 'border border-slate-200 bg-slate-50 hover:border-accent-border hover:bg-white text-slate-700'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>In Inquiry</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-accent-primary" />
                              <span>Inquire Bulk</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedProduct(prod)}
                          className="py-2 px-3 rounded-xl border border-accent-border bg-accent-surface text-accent-primary hover:border-accent-primary text-xs font-tech font-bold flex items-center gap-1 transition-colors"
                          title="View Technical Product Sheet"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Product Sheet</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </ScrollItemFade>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Specification Sheet Drawer */}
      <SpecDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={openQuote}
      />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={activeDivisionId}
      />
    </>
  );
}
