'use client';

import React from 'react';
import Image from 'next/image';
import { ProductSpecItem } from '@/config/divisions';
import { 
  X, 
  ShieldCheck, 
  Send, 
  Clock, 
  Package, 
  Download,
  Building
} from 'lucide-react';

interface SpecDrawerProps {
  product: ProductSpecItem | null;
  onClose: () => void;
  onRequestQuote: (divisionId?: string) => void;
}

export function SpecDrawer({ product, onClose, onRequestQuote }: SpecDrawerProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="gpu-layer fixed inset-y-0 right-0 w-full max-w-xl bg-[#0A0B0E]/98 border-l border-white/15 text-white p-6 sm:p-8 shadow-2xl shadow-black/95 overflow-y-auto flex flex-col justify-between backdrop-blur-2xl">
        
        {/* Ambient Top Glow */}
        <div 
          className="pointer-events-none absolute -top-24 right-0 w-80 h-48 rounded-full blur-[100px] opacity-25"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />

        <div className="relative z-10 space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-xs font-tech font-bold uppercase tracking-wider text-accent-primary">
                Technical Specification Sheet
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-tech text-slate-400">{product.code}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Close specification sheet"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Product Hero Photo */}
          <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 550px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-tech text-white border border-white/10 font-bold">
                {product.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-accent-surface backdrop-blur-md text-[11px] font-tech text-accent-primary border border-accent-border font-bold">
                {product.code}
              </span>
            </div>
          </div>

          {/* Title & Summary */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 leading-tight">
              {product.name}
            </h3>
            <p className="text-sm font-body text-slate-300 leading-relaxed">
              {product.summary}
            </p>
          </div>

          {/* Technical Data Grid */}
          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
            <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-slate-400">
              Material & Engineering Specs
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-tech">
              <div className="p-3 rounded-xl border border-white/5 bg-black/40">
                <span className="text-slate-500 block text-[10px] uppercase mb-0.5">Material Composition</span>
                <span className="text-slate-200 font-semibold">{product.material}</span>
              </div>

              <div className="p-3 rounded-xl border border-white/5 bg-black/40">
                <span className="text-slate-500 block text-[10px] uppercase mb-0.5">Finish / Coatings</span>
                <span className="text-slate-200 font-semibold">{product.finish}</span>
              </div>

              <div className="p-3 rounded-xl border border-white/5 bg-black/40">
                <span className="text-slate-500 block text-[10px] uppercase mb-0.5 flex items-center gap-1">
                  <Package className="w-3 h-3 text-accent-primary" /> Minimum Project Order (MOQ)
                </span>
                <span className="text-white font-bold">{product.moq}</span>
              </div>

              <div className="p-3 rounded-xl border border-white/5 bg-black/40">
                <span className="text-slate-500 block text-[10px] uppercase mb-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent-secondary" /> Lead Time SLA
                </span>
                <span className="text-accent-primary font-bold">{product.leadTime}</span>
              </div>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div>
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-400 block mb-2.5">
              Verified Compliance Standards
            </span>
            <div className="flex flex-wrap gap-2">
              {product.compliance.map((comp) => (
                <div 
                  key={comp} 
                  className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-tech text-slate-200 flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Applications */}
          <div>
            <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-400 block mb-2.5">
              Approved Project Typologies
            </span>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <div 
                  key={app} 
                  className="px-3 py-1 rounded-lg border border-white/5 bg-black/30 text-[11px] font-tech text-slate-400 flex items-center gap-1.5"
                >
                  <Building className="w-3 h-3 text-accent-secondary" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="relative z-10 pt-6 mt-6 border-t border-white/10 space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full py-3.5 rounded-xl font-bold text-xs font-tech tracking-wider uppercase text-black flex items-center justify-center gap-2 shadow-xl transition-all duration-200 active:scale-95 hover:brightness-110"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            <Send className="w-3.5 h-3.5 text-black" />
            <span>Request Bulk Volume Pricing</span>
          </button>

          <a
            href="#compliance"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-white/15 bg-white/5 hover:border-accent-border text-xs font-tech font-medium text-slate-300 flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-accent-primary" />
            <span>Download CAD / BIM Package (.dwg / .rfa)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
