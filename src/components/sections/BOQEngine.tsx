'use client';

import React, { useState } from 'react';
import { ScrollItemFade } from '@/components/core/ScrollItemFade';
import { 
  FileSpreadsheet, 
  UploadCloud, 
  ShieldCheck, 
  Clock, 
  Send, 
  Lock, 
  PhoneCall, 
  Headset, 
  Check,
  FileCheck2
} from 'lucide-react';

const DIVISIONS_OPTIONS = [
  { id: 'sanitary', label: 'Commercial Sanitaryware & Washroom Suites', code: 'DIV-01' },
  { id: 'hospitality', label: 'Hotel Amenities & Bulk Linen FF&E Supplies', code: 'DIV-02' },
  { id: 'entrance', label: 'Automated Entrance Portals & Access Control Gates', code: 'DIV-03' },
  { id: 'industrial', label: 'Industrial Equipment & Logistics Facilities MRO', code: 'DIV-04' },
  { id: 'turnkey', label: 'Full Multi-Category Bulk Purchase (All Divisions)', code: 'ALL-DIV' },
];

const TIMELINE_OPTIONS = [
  { id: 'immediate', label: 'Immediate Dispatch', sub: '1-2 Weeks' },
  { id: 'standard', label: 'Standard Project', sub: '1-3 Months' },
  { id: 'recurring', label: 'Scheduled Phased Supply', sub: '3-6+ Months' },
];

const VOLUME_OPTIONS = [
  { id: 'tier-1', label: 'Sample / Trial Batch', sub: 'Single Unit / Floor' },
  { id: 'tier-2', label: 'Medium Project Volume', sub: '$50K – $250K Scope' },
  { id: 'tier-3', label: 'Large Multi-Unit Bulk', sub: '$250K – $1M Scope' },
  { id: 'tier-4', label: 'Annual Master Supply', sub: '$1M+ Enterprise Contract' },
];

const SPECIALIST_DESKS = [
  { division: 'Sanitary & Commercial Bath', lead: 'Senior Plumbing Specifier', status: 'Online • 15m Response', phone: '+1 (800) 555-0191' },
  { division: 'Hospitality Amenities & Linen', lead: 'Bulk FF&E Supply Manager', status: 'Online • 20m Response', phone: '+1 (800) 555-0192' },
  { division: 'Entrance Portals & Access', lead: 'Commercial Access Engineer', status: 'Online • 10m Response', phone: '+1 (800) 555-0193' },
  { division: 'Industrial MRO & Dock Systems', lead: 'Industrial Logistics Consultant', status: 'Online • 25m Response', phone: '+1 (800) 555-0194' },
];

export function BOQEngine() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedDivisions, setSelectedDivisions] = useState<string[]>(['sanitary', 'turnkey']);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [selectedVolume, setSelectedVolume] = useState<string>('tier-3');
  
  // File upload state
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [requirementNotes, setRequirementNotes] = useState<string>('');
  
  // Contact state
  const [contactForm, setContactForm] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    roleTitle: '',
    deliveryLocation: '',
    phoneWhatsApp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);

  const toggleDivision = (id: string) => {
    setSelectedDivisions((prev) => 
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      setUploadedFile({ name: file.name, size: `${sizeMb} MB` });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      setUploadedFile({ name: file.name, size: `${sizeMb} MB` });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-speed inquiry token generation
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setSubmittedToken(`INQ-2026-${randomId}`);
    }, 850);
  };

  return (
    <section id="boq-uploader" className="perf-section-cv relative bg-[#F8FAFC] text-[#0F172A] px-4 sm:px-6 md:px-12 lg:px-20 py-24 arch-grid-light border-b border-slate-200 overflow-hidden">
      
      {/* Ambient Glow */}
      <div 
        className="pointer-events-none absolute -top-40 right-1/3 w-[650px] h-[450px] rounded-full blur-[140px] opacity-10"
        style={{ backgroundColor: 'var(--accent-primary)' }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header with Scroll Fade */}
        <ScrollItemFade className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-tech uppercase tracking-wider rounded-full border border-accent-border bg-accent-surface text-accent-primary font-semibold">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Fast Wholesale & Bulk Product Inquiry Desk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] tracking-tight leading-[1.12]">
            Request Instant Bulk Pricing &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-800 to-accent-primary">
              Wholesale Line-Card.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-body leading-relaxed">
            Submit your required product list or quantity breakdown. Our commercial supply desk provides direct volume rates and inventory availability within 24 hours.
          </p>
        </ScrollItemFade>

        {/* =========================================================================
            MAIN INQUIRY WIZARD CARD & SPECIALIST DESK SUITE
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Multi-Step Wizard (8 Cols) */}
          <div className="lg:col-span-8">
            <ScrollItemFade className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
            
            {/* Step Indicators */}
            {!submittedToken && (
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 text-xs font-tech">
                {[
                  { step: 1, label: 'Categories' },
                  { step: 2, label: 'Volume & Schedule' },
                  { step: 3, label: 'Product List' },
                  { step: 4, label: 'Business Details' },
                ].map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setCurrentStep(s.step)}
                    className={`flex items-center gap-2 transition-colors ${
                      currentStep === s.step 
                        ? 'text-accent-primary font-bold' 
                        : currentStep > s.step 
                        ? 'text-[#0F172A]' 
                        : 'text-slate-400'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                      currentStep === s.step 
                        ? 'bg-accent-primary text-white font-bold' 
                        : currentStep > s.step 
                        ? 'bg-accent-surface border border-accent-border text-accent-primary' 
                        : 'bg-slate-100 border border-slate-200 text-slate-500'
                    }`}>
                      {currentStep > s.step ? '✓' : s.step}
                    </span>
                    <span className="hidden sm:inline">{s.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* SUBMISSION CONFIRMATION RECEIPT */}
            {submittedToken ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full border-2 border-accent-border bg-accent-surface text-accent-primary mx-auto flex items-center justify-center shadow-sm">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div>
                  <span className="text-xs font-tech text-accent-primary uppercase font-bold tracking-widest block mb-1">
                    INQUIRY REGISTERED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A] mb-2">
                    Bulk Requirement Received Successfully
                  </h3>
                  <p className="text-sm font-body text-slate-600 max-w-md mx-auto">
                    Your product requirement list has been routed to our Commercial Supply Desk. A dedicated B2B Account Manager will dispatch your volume quote within 24 hours.
                  </p>
                </div>

                {/* Token Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-slate-200 bg-slate-50">
                  <span className="text-xs font-tech text-slate-500">Inquiry Tracking Token:</span>
                  <span className="text-base font-mono font-bold text-accent-primary tracking-wider">
                    {submittedToken}
                  </span>
                </div>

                {/* SLA Guarantee Banner */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 max-w-lg mx-auto flex items-center justify-between text-xs font-tech text-slate-600">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-primary" />
                    <span>Wholesale Pricing SLA:</span>
                    <strong className="text-[#0F172A]">Guaranteed 24 Hours</strong>
                  </span>
                  <span className="text-emerald-600 font-bold">Direct OEM Invoicing</span>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedToken(null);
                      setCurrentStep(1);
                    }}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-tech text-slate-700 transition-colors shadow-xs"
                  >
                    Submit Another Product Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: DIVISION SELECTION */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-display font-bold text-[#0F172A] mb-1">
                        Select Wholesale Product Categories
                      </h4>
                      <p className="text-xs font-body text-slate-600">
                        Choose single or multiple product divisions for consolidated wholesale pricing.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {DIVISIONS_OPTIONS.map((opt) => {
                        const isSelected = selectedDivisions.includes(opt.id);
                        return (
                          <div
                            key={opt.id}
                            onClick={() => toggleDivision(opt.id)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'border-accent-border bg-accent-surface/60 text-[#0F172A] shadow-xs'
                                : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-accent-primary border-accent-primary text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                              <span className="text-xs sm:text-sm font-display font-medium">
                                {opt.label}
                              </span>
                            </div>
                            <span className="text-[10px] font-tech text-slate-500 hidden sm:inline">
                              {opt.code}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-3 rounded-xl font-bold text-xs font-tech text-white flex items-center gap-2 shadow-xs transition-transform active:scale-95 uppercase tracking-wider"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      >
                        <span>Next: Volume & Schedule</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: TIMELINE & PROCUREMENT SCALE */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-base font-display font-bold text-[#0F172A] mb-1">
                        Estimated Purchase Volume & Dispatch Schedule
                      </h4>
                      <p className="text-xs font-body text-slate-600">
                        Enables our supply desks to apply the maximum tiered volume discount to your order.
                      </p>
                    </div>

                    {/* Timeline Selector */}
                    <div>
                      <span className="text-[11px] font-tech uppercase tracking-widest text-slate-500 block mb-2.5 font-semibold">
                        Target Delivery Schedule
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {TIMELINE_OPTIONS.map((t) => {
                          const isSelected = selectedTimeline === t.id;
                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => setSelectedTimeline(t.id)}
                              className={`p-3.5 rounded-2xl border text-left transition-all ${
                                isSelected
                                  ? 'border-accent-border bg-accent-surface text-[#0F172A] shadow-xs'
                                  : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                              }`}
                            >
                              <span className="text-xs font-display font-bold block">{t.label}</span>
                              <span className="text-[10px] font-tech text-accent-primary font-semibold">{t.sub}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Volume Scale */}
                    <div>
                      <span className="text-[11px] font-tech uppercase tracking-widest text-slate-500 block mb-2.5 font-semibold">
                        Estimated Order Volume
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {VOLUME_OPTIONS.map((v) => {
                          const isSelected = selectedVolume === v.id;
                          return (
                            <button
                              key={v.id}
                              type="button"
                              onClick={() => setSelectedVolume(v.id)}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? 'border-accent-border bg-accent-surface text-[#0F172A] shadow-xs'
                                  : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                              }`}
                            >
                              <span className="text-xs font-display font-bold block">{v.label}</span>
                              <span className="text-[9.5px] font-tech text-slate-500 block truncate">{v.sub}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-tech text-slate-700 hover:bg-slate-50 shadow-xs"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-6 py-3 rounded-xl font-bold text-xs font-tech text-white flex items-center gap-2 shadow-xs transition-transform active:scale-95 uppercase tracking-wider"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      >
                        <span>Next: Attach Product List</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: DIRECT PRODUCT LIST DROP */}
                {currentStep === 3 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-base font-display font-bold text-[#0F172A] mb-1">
                        Upload Product List, Bill of Materials, or Item Codes
                      </h4>
                      <p className="text-xs font-body text-slate-600">
                        Supports .xlsx, .pdf, .csv, .dwg, and .zip files up to 50MB.
                      </p>
                    </div>

                    {/* Drag & Drop Box */}
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleFileDrop}
                      className={`relative p-8 rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                        uploadedFile
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-300 bg-slate-50/60 hover:border-accent-border hover:bg-white'
                      }`}
                    >
                      <input
                        type="file"
                        onChange={handleFileInput}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        accept=".pdf,.xlsx,.xls,.csv,.dwg,.zip"
                      />

                      {uploadedFile ? (
                        <div className="space-y-2">
                          <div className="p-3 rounded-full bg-emerald-100 text-emerald-700 w-fit mx-auto">
                            <FileCheck2 className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-display font-bold text-[#0F172A] block">
                            {uploadedFile.name}
                          </span>
                          <span className="text-xs font-tech text-emerald-700 block font-semibold">
                            {uploadedFile.size} • Verified For Direct Quotation
                          </span>
                          <span className="text-[10px] font-tech text-slate-500 underline block">
                            Click to replace file
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="p-3 rounded-full bg-white border border-slate-200 text-accent-primary w-fit mx-auto shadow-xs">
                            <UploadCloud className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-display font-bold text-[#0F172A] block">
                            Drag & Drop Requirement List or <span className="text-accent-primary underline">Browse</span>
                          </span>
                          <span className="text-[11px] font-tech text-slate-500 block">
                            XLSX • PDF • CSV • DWG • ZIP (Up to 50 MB)
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Optional Brand Notes */}
                    <div>
                      <label className="text-[11px] font-tech uppercase tracking-widest text-slate-600 block mb-1.5 font-semibold">
                        Brand Model Numbers / Quantity Breakdown (Optional)
                      </label>
                      <textarea
                        value={requirementNotes}
                        onChange={(e) => setRequirementNotes(e.target.value)}
                        placeholder="e.g. Need Grohe concealed cisterns (150 units), Kohler touchless faucets (80 units), 400TC linen sets..."
                        rows={3}
                        className="w-full p-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-body text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-primary focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-tech text-slate-700 hover:bg-slate-50 shadow-xs"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="px-6 py-3 rounded-xl font-bold text-xs font-tech text-white flex items-center gap-2 shadow-xs transition-transform active:scale-95 uppercase tracking-wider"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      >
                        <span>Next: Business Contact Details</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: ENTERPRISE VERIFICATION & CREDENTIALS */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-display font-bold text-[#0F172A] mb-1">
                        Business Verification & Contact Details
                      </h4>
                      <p className="text-xs font-body text-slate-600">
                        Official wholesale quotation packages and price schedules are sent directly to your business inbox.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-tech">
                      <div>
                        <label className="text-slate-600 block mb-1 font-medium">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Vance"
                          value={contactForm.fullName}
                          onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-accent-primary focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-600 block mb-1 font-medium">Work / Corporate Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. d.vance@turner-construction.com"
                          value={contactForm.workEmail}
                          onChange={(e) => setContactForm({ ...contactForm, workEmail: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-accent-primary focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-600 block mb-1 font-medium">Company / Developer Firm *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Turner Construction / Marriott"
                          value={contactForm.companyName}
                          onChange={(e) => setContactForm({ ...contactForm, companyName: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-accent-primary focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-600 block mb-1 font-medium">Your Role / Designation</label>
                        <input
                          type="text"
                          placeholder="e.g. Lead MEP Engineer / Procurement CPO"
                          value={contactForm.roleTitle}
                          onChange={(e) => setContactForm({ ...contactForm, roleTitle: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-accent-primary focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-600 block mb-1 font-medium">Project Delivery City / State</label>
                        <input
                          type="text"
                          placeholder="e.g. Dubai / London / Singapore"
                          value={contactForm.deliveryLocation}
                          onChange={(e) => setContactForm({ ...contactForm, deliveryLocation: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-accent-primary focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-600 block mb-1 font-medium">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +1 (555) 019-2834"
                          value={contactForm.phoneWhatsApp}
                          onChange={(e) => setContactForm({ ...contactForm, phoneWhatsApp: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-accent-primary focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Trust Assurance Badge */}
                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2.5 text-[11px] font-tech text-slate-600">
                      <Lock className="w-4 h-4 text-accent-primary shrink-0" />
                      <span>Direct Institutional Pricing Guaranteed • OEM Authenticity Verified • Dedicated B2B Account Manager Assigned</span>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-tech text-slate-700 hover:bg-slate-50 shadow-xs"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 rounded-xl font-bold text-xs font-tech text-white flex items-center gap-2 shadow-sm transition-transform active:scale-95 uppercase tracking-wider hover:brightness-110"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      >
                        <Send className="w-4 h-4 text-white" />
                        <span>{isSubmitting ? 'Registering Requirement...' : 'Get Direct Volume Pricing (24h SLA)'}</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

            </ScrollItemFade>
          </div>

          {/* Specialist Desks & Direct Routing (4 Cols) with Scroll Fade */}
          <div className="lg:col-span-4">
            <ScrollItemFade className="space-y-4">
              {/* Direct Division Desks */}
              <div className="p-6 rounded-3xl border border-slate-200 bg-white space-y-4 shadow-xl shadow-slate-900/5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-tech">
                  <span className="flex items-center gap-1.5 text-[#0F172A] font-bold">
                    <Headset className="w-4 h-4 text-accent-primary" />
                    <span>Direct Commercial Desks</span>
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">LIVE</span>
                </div>

                <div className="space-y-2.5">
                  {SPECIALIST_DESKS.map((desk) => (
                    <div
                      key={desk.division}
                      className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-accent-border transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-display font-bold text-[#0F172A]">
                          {desk.division}
                        </span>
                        <span className="text-[9px] font-tech text-emerald-600 font-semibold">
                          {desk.status.split('•')[0]}
                        </span>
                      </div>
                      <span className="text-[10px] font-tech text-slate-500 block mb-1.5">
                        {desk.lead}
                      </span>
                      <a
                        href={`tel:${desk.phone}`}
                        className="text-[11px] font-tech text-accent-primary hover:underline flex items-center gap-1 font-semibold"
                      >
                        <PhoneCall className="w-3 h-3 text-accent-primary" />
                        <span>{desk.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Manufacturer Warranty Guarantee */}
              <div className="p-5 rounded-3xl border border-slate-200 bg-slate-50/80 space-y-2 text-xs font-tech text-slate-600">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold">
                  <ShieldCheck className="w-4 h-4 text-accent-primary" />
                  <span>100% Genuine OEM Supply</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  All delivered equipment and fixtures are sourced direct from manufacturer lines with full factory test certificates and multi-year warranties.
                </p>
              </div>
            </ScrollItemFade>
          </div>

        </div>

      </div>
    </section>
  );
}
