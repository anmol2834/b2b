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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="gpu-layer relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#12141A] text-white p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-[80px] opacity-30"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="p-4 rounded-full border border-accent-border bg-accent-surface text-accent-primary mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              RFQ Dispatched Successfully
            </h3>
            <p className="text-sm font-body text-slate-400 max-w-md">
              Our engineering specification team is reviewing your project requirements. A dedicated procurement specialist will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-tech font-semibold tracking-wider uppercase text-accent-primary">
                Direct Wholesale Inquiry • 24H SLA
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                Request Bulk Volume Pricing
              </h2>
              <p className="text-xs sm:text-sm font-body text-slate-400 mt-1">
                Direct factory-tier pricing, consolidated palletized delivery & manufacturer warranties.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Division Selector Tabs */}
              <div>
                <label className="block text-xs font-tech text-slate-400 uppercase mb-2">
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
                        className={`px-3 py-2 rounded-xl text-xs font-tech font-medium transition-all text-center border ${
                          active
                            ? 'border-accent-primary bg-accent-surface text-accent-primary font-bold shadow-sm'
                            : 'border-white/10 bg-white/5 text-slate-400 hover:text-slate-200 hover:border-white/20'
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
                  <label className="block text-xs font-tech text-slate-400 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-accent-primary" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-400 mb-1 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-accent-primary" /> Company / Project Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marriott Resort / General Contractor"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-400 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-accent-primary" /> Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-400 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-accent-primary" /> Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-tech text-slate-400 mb-1">
                  Required Items / Estimated Quantity
                </label>
                <textarea
                  rows={3}
                  placeholder="Paste brand model numbers, estimated quantities, or project timelines..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] font-tech text-slate-400">
                  <FileSpreadsheet className="w-4 h-4 text-accent-primary" />
                  <span>Attach requirement list directly</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-sm text-black flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <Send className="w-4 h-4" /> Request Volume Pricing
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
