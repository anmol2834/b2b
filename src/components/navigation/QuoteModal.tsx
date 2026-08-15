'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, FileSpreadsheet, Send, Building2, Phone, Mail, User } from 'lucide-react';
import { DIVISIONS } from '@/config/divisions';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivision?: string;
}

export function QuoteModal({ isOpen, onClose, defaultDivision }: QuoteModalProps) {
  const [selectedDivision, setSelectedDivision] = useState<string>(defaultDivision || 'sanitary');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectScope: 'Commercial Tower',
    estimatedBudget: '$50k - $250k',
    notes: '',
  });

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" data-lenis-prevent="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-3xl border border-slate-200 bg-white text-[#0F172A] p-6 sm:p-8 shadow-2xl shadow-slate-900/15 z-10 touch-pan-y"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="p-4 rounded-full border border-accent-border bg-accent-surface text-accent-primary mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-2">
              Inquiry Dispatched Successfully
            </h3>
            <p className="text-sm font-body text-slate-600 max-w-md">
              Our commercial supply desk is reviewing your requirements. A dedicated wholesale account manager will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-tech font-semibold tracking-wider uppercase text-accent-primary">
                Direct Wholesale Inquiry • 24H SLA
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A] mt-1">
                Request Bulk Volume Pricing
              </h2>
              <p className="text-xs sm:text-sm font-body text-slate-600 mt-1">
                Direct factory-tier pricing, consolidated palletized delivery & manufacturer warranties.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Division Selector Tabs */}
              <div>
                <label className="block text-xs font-tech text-slate-600 uppercase mb-2 font-medium">
                  Target Wholesale Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.values(DIVISIONS).map((div) => {
                    const active = selectedDivision === div.id;
                    return (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => setSelectedDivision(div.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-tech font-medium transition-all text-left truncate ${
                          active
                            ? 'border border-accent-border bg-accent-surface text-accent-primary font-bold shadow-xs'
                            : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {div.shortName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-tech text-slate-600 uppercase mb-1">
                    Contact Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs font-body text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-600 uppercase mb-1">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Turner Construction"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs font-body text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-600 uppercase mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. d.vance@turner.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs font-body text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-600 uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs font-body text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-xs font-tech text-slate-600 uppercase mb-1">
                  Product Item Codes / Quantities / Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Paste item codes, specifications or estimated quantities here..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs font-body text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-primary focus:bg-white transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="text-[11px] font-tech text-slate-500 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-accent-primary" />
                  <span>24-Hour SLA Direct Quote</span>
                </div>

                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl font-bold text-xs font-tech tracking-wider uppercase text-white flex items-center gap-2 shadow-sm transition-all transform active:scale-95 hover:brightness-110"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Submit Volume Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
