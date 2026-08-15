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
  React.useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" data-lenis-prevent="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div 
        data-lenis-prevent="true"
        className="fixed inset-y-0 right-0 w-full max-w-xl h-full h-[100dvh] bg-white border-l border-slate-200 text-[#0F172A] shadow-2xl shadow-slate-900/15 flex flex-col overflow-hidden backdrop-blur-2xl"
      >
        {/* Top Fixed Header Bar */}
            <div className="shrink-0 p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between z-20 bg-white/95 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
                <span className="text-xs font-tech font-bold uppercase tracking-wider text-accent-primary">
                  Technical Specification Sheet
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs font-tech text-slate-500 font-medium">{product.code}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
                aria-label="Close specification sheet"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-6 touch-pan-y"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Product Hero Photo */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
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
                  <span className="px-2.5 py-1 rounded-md bg-white backdrop-blur-md text-[11px] font-tech text-accent-primary border border-accent-border font-bold">
                    {product.code}
                  </span>
                </div>
              </div>

              {/* Title & Summary */}
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-body text-slate-600 leading-relaxed">
                  {product.summary}
                </p>
              </div>

              {/* Technical Data Grid */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-3">
                <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-slate-500">
                  Material & Engineering Specs
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-tech">
                  <div className="p-3 rounded-xl border border-slate-200 bg-white">
                    <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Base Material</span>
                    <span className="font-bold text-[#0F172A]">{product.material}</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-200 bg-white">
                    <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Finish Options</span>
                    <span className="font-bold text-[#0F172A]">{product.finish}</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-200 bg-white">
                    <span className="text-[10px] text-slate-500 uppercase block mb-0.5 flex items-center gap-1">
                      <Package className="w-3 h-3 text-accent-primary" />
                      <span>Wholesale MOQ</span>
                    </span>
                    <span className="font-bold text-accent-primary">{product.moq}</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-200 bg-white">
                    <span className="text-[10px] text-slate-500 uppercase block mb-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent-secondary" />
                      <span>Fulfillment SLA</span>
                    </span>
                    <span className="font-bold text-accent-secondary">{product.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Statutory Compliance Badges */}
              <div>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-500 block mb-2.5">
                  Verified Compliance Standards
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.compliance.map((comp) => (
                    <div
                      key={comp}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-tech text-slate-700 flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Applications */}
              <div>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-slate-500 block mb-2.5">
                  Approved Project Typologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <div 
                      key={app} 
                      className="px-3 py-1 rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-tech text-slate-600 flex items-center gap-1.5"
                    >
                      <Building className="w-3 h-3 text-accent-secondary" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Fixed Actions */}
            <div className="shrink-0 p-5 sm:p-6 pt-4 border-t border-slate-200 space-y-2.5 z-20 bg-white/95 backdrop-blur-md">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-xs font-tech tracking-wider uppercase text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95 hover:brightness-110"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>Request Bulk Volume Pricing</span>
              </button>

              <a
                href="#boq-uploader"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-tech font-semibold text-slate-700 flex items-center justify-center gap-2 hover:border-accent-border hover:bg-white transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-accent-primary" />
                <span>Download Engineering Submittal Sheet (PDF)</span>
              </a>
            </div>

      </div>
    </div>
  );
}
