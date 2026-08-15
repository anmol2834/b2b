'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, FileSpreadsheet, Send, Building2, Phone, Mail, User, ShieldCheck } from 'lucide-react';
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
    if (defaultDivision) {
      setSelectedDivision(defaultDivision);
    }
  }, [defaultDivision]);

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
        className="fixed inset-0 bg-[#141413]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain bg-[#FAF9F5] border border-[#E5E0D5] text-[#141413] p-6 sm:p-10 shadow-2xl z-10 touch-pan-y"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8E8981] hover:text-[#141413] transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 border border-[#A8824C] flex items-center justify-center text-[#A8824C] mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#141413] mb-2">
              Inquiry Dispatched
            </h3>
            <p className="text-sm font-body text-[#5C5852] max-w-md">
              Our wholesale supply desk will review your specifications and furnish a bulk contract quotation within 24 business hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-8 border-b border-[#E5E0D5] pb-6">
              <div className="flex items-center gap-2 text-[10px] font-tech font-semibold tracking-widest uppercase text-[#A8824C] mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Wholesale B2B Supply Desk • 24H SLA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#141413] tracking-tight">
                Request B2B Bulk Quotation
              </h2>
              <p className="text-xs sm:text-sm font-body text-[#5C5852] mt-1.5">
                Direct manufacturer-tier wholesale pricing, consolidated billing, and project specification support.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Division Selector Tabs */}
              <div>
                <label className="block text-[11px] font-tech text-[#5C5852] uppercase tracking-wider mb-2 font-medium">
                  Primary Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.values(DIVISIONS).map((div) => {
                    const active = selectedDivision === div.id;
                    return (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => setSelectedDivision(div.id)}
                        className={`py-2 px-3 text-xs font-tech transition-all text-left truncate ${
                          active
                            ? 'border border-[#141413] bg-[#141413] text-[#FAF9F5] font-semibold'
                            : 'border border-[#E5E0D5] bg-white text-[#5C5852] hover:border-[#141413]'
                        }`}
                      >
                        {div.shortName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-tech text-[#5C5852] uppercase tracking-wider mb-1">
                    Contact Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-[#5C5852] uppercase tracking-wider mb-1">
                    Company / Firm *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Foster & Partners / Hilton"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-[#5C5852] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. m.vance@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-[#5C5852] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-[11px] font-tech text-[#5C5852] uppercase tracking-wider mb-1">
                  BOQ Summary / Product Codes / Quantity Estimates
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention product codes, finishes, project timeline, or paste your requirements list here..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-white border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] font-tech text-[#5C5852] flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#A8824C]" />
                  <span>Confidential RFQ • Direct OEM Pricing</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto py-3 px-8 bg-[#141413] text-[#FAF9F5] font-semibold text-xs font-tech tracking-widest uppercase hover:bg-[#A8824C] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Sourcing Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
