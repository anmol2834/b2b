'use client';

import React from 'react';
import { DIVISIONS } from '@/config/divisions';
import { 
  ArrowUpRight, 
  Download, 
  ShieldCheck, 
  Layers, 
  Droplet, 
  Sparkles, 
  DoorOpen, 
  Factory, 
  PackageCheck,
  X
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onRequestQuote: (divisionId?: string) => void;
}

const DIVISION_ICONS = {
  sanitary: Droplet,
  hospitality: Sparkles,
  entrance: DoorOpen,
  industrial: Factory,
};

export function MegaMenu({ 
  isOpen, 
  onClose, 
  onMouseEnter, 
  onMouseLeave, 
  onRequestQuote 
}: MegaMenuProps) {
  const divisionList = Object.values(DIVISIONS);

  return (
    <div
      className={`gpu-layer absolute top-full left-0 right-0 w-full pt-2 transition-all duration-300 transform z-50 ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto visible'
          : 'opacity-0 -translate-y-2 pointer-events-none invisible'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/98 text-[#0F172A] shadow-2xl shadow-slate-900/10 backdrop-blur-2xl overflow-hidden p-6 sm:p-8 relative">
          
          {/* Close Button on Top Right */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
            aria-label="Close divisions menu"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Quadrant Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6 pr-8">
            <div className="flex items-center gap-2 text-xs font-tech text-slate-700">
              <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="uppercase tracking-wider font-semibold text-accent-primary">
                Direct Wholesale Inventory & Line-Cards
              </span>
              <span className="text-slate-400">• 4 Commercial Divisions</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs font-tech text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" /> Direct Master Distributor
              </span>
              <span className="flex items-center gap-1">
                <PackageCheck className="w-3.5 h-3.5 text-accent-secondary" /> Factory-Direct Palletized Supply
              </span>
            </div>
          </div>

          {/* 4-Quadrant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisionList.map((div) => {
              const Icon = DIVISION_ICONS[div.id as keyof typeof DIVISION_ICONS] || Layers;
              return (
                <div
                  key={div.id}
                  className="group relative p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-accent-borderHover hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Quadrant Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl border border-accent-border bg-accent-surface text-accent-primary group-hover:scale-105 transition-transform shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-tech px-2 py-0.5 rounded border border-slate-200 bg-white text-slate-600 font-medium">
                        {div.targetSectors[0]}
                      </span>
                    </div>

                    {/* Division Title */}
                    <h4 className="text-base font-display font-bold text-[#0F172A] mb-1.5 group-hover:text-accent-primary transition-colors">
                      {div.name}
                    </h4>
                    <p className="text-xs font-body text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {div.tagline}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-1.5 mb-6">
                      {div.capabilities.slice(0, 4).map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs font-body text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quadrant Action Footer */}
                  <div className="pt-3 border-t border-slate-200/70 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onRequestQuote(div.id);
                      }}
                      className="w-full py-1.5 px-3 rounded-lg text-xs font-tech font-semibold flex items-center justify-between border border-accent-border bg-accent-surface text-accent-primary hover:border-accent-primary transition-colors"
                    >
                      <span>Get Volume Pricing</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`#${div.id}`}
                      onClick={onClose}
                      className="text-[11px] font-tech text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors px-1"
                    >
                      <Download className="w-3 h-3 text-accent-primary" />
                      <span className="truncate">{div.specSheetDoc}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
