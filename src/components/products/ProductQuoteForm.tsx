'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Building, Mail, Phone } from 'lucide-react';

interface ProductQuoteFormProps {
  productCode: string;
  productName: string;
  divisionId: string;
}

export function ProductQuoteForm({
  productCode,
  productName,
  divisionId,
}: ProductQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center bg-[#FAF9F5] border border-[#E5E0D5] p-6">
        <div className="w-10 h-10 border border-[#A8824C] text-[#A8824C] flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h4 className="text-lg font-display font-bold text-[#141413] mb-1">
          Quotation Request Dispatched
        </h4>
        <p className="text-xs font-tech text-[#A8824C] font-semibold mb-2">
          SKU Reference: {productCode}
        </p>
        <p className="text-xs font-body text-[#5C5852] max-w-sm mx-auto">
          Our wholesale supply desk will prepare volume pricing and deliver the submittal packet within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs font-tech text-[#141413] hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
          <input
            type="text"
            required
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
          />
        </div>

        <div className="relative">
          <Building className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
          <input
            type="text"
            required
            placeholder="Company / Architecture Firm *"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
          <input
            type="email"
            required
            placeholder="Work Email *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
          <input
            type="tel"
            required
            placeholder="Phone / WhatsApp *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Estimated Project Quantity (e.g. 50 units)"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
        />

        <input
          type="text"
          placeholder="Finish / Custom Spec Details"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-bold uppercase tracking-widest hover:bg-[#A8824C] transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Request Tiered Pricing for {productCode}</span>
      </button>
    </form>
  );
}
