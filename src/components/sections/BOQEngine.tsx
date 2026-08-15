'use client';

import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  UploadCloud, 
  ShieldCheck, 
  Check,
  FileCheck2,
  Boxes,
  FileText,
  Globe2,
  TrendingDown,
  Send,
  Building,
  Mail,
  User,
  Phone
} from 'lucide-react';

const DIVISIONS_OPTIONS = [
  { id: 'sanitary', label: 'Commercial Sanitaryware & Washroom Suites', code: '01' },
  { id: 'hospitality', label: 'Hotel Amenities & Bulk Linen FF&E Supplies', code: '02' },
  { id: 'entrance', label: 'Automated Entrance Portals & Access Control Gates', code: '03' },
  { id: 'industrial', label: 'Industrial Equipment & Logistics Facilities MRO', code: '04' },
  { id: 'all', label: 'Complete Multi-Category Turnkey Procurement', code: 'ALL' },
];

export function BOQEngine() {
  const [selectedDivisions, setSelectedDivisions] = useState<string[]>(['sanitary']);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [requirementNotes, setRequirementNotes] = useState<string>('');
  
  const [contactForm, setContactForm] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
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
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setSubmittedToken(`BOQ-2026-${randomId}`);
    }, 700);
  };

  return (
    <section id="boq-uploader" className="py-28 bg-[#FAF9F5] border-t border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-tech uppercase tracking-widest text-[#A8824C] font-semibold mb-3">
            Project Procurement Desk
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.1]">
            Submit your Bill of Quantities.
          </h2>
          <p className="text-sm sm:text-base font-body text-[#5C5852] mt-4 leading-relaxed">
            Attach your BOQ spreadsheet, specification schedule, or item list. We consolidate product identification, direct pricing, and timeline estimates into a single formal response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 bg-white border border-[#E5E0D5] p-6 sm:p-10 shadow-xs">
            {submittedToken ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 border border-[#A8824C] text-[#A8824C] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#141413] mb-2">
                  BOQ Dossier Received
                </h3>
                <p className="text-xs font-tech text-[#A8824C] font-semibold uppercase tracking-wider mb-3">
                  Tracking Reference: {submittedToken}
                </p>
                <p className="text-sm font-body text-[#5C5852] max-w-md mx-auto">
                  Our specification team has queued your requirement. A preliminary line-item feasibility and pricing schedule will be delivered to your inbox within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedToken(null);
                    setUploadedFile(null);
                  }}
                  className="mt-8 px-6 py-2.5 bg-[#141413] text-[#FAF9F5] text-xs font-tech uppercase tracking-widest hover:bg-[#A8824C] transition-colors"
                >
                  Submit Another BOQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Category Selection */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#141413] font-semibold mb-3">
                    01. Select Relevant Procurement Divisions
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {DIVISIONS_OPTIONS.map((item) => {
                      const isSelected = selectedDivisions.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleDivision(item.id)}
                          className={`p-3.5 border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#141413] bg-[#F3EFE6] text-[#141413]'
                              : 'border-[#E5E0D5] bg-[#FAF9F5] text-[#5C5852] hover:border-[#141413]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-tech text-[#8E8981]">{item.code}</span>
                            <span className="text-xs font-body font-medium">{item.label}</span>
                          </div>
                          {isSelected && <span className="w-2 h-2 bg-[#141413]" />}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Drag & Drop BOQ File Zone */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#141413] font-semibold mb-3">
                    02. Upload BOQ, Specification Sheet or Tender File
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleFileDrop}
                    className={`border-2 border-dashed p-8 text-center transition-all ${
                      uploadedFile
                        ? 'border-[#141413] bg-[#F3EFE6]'
                        : 'border-[#D8D2C5] bg-[#FAF9F5] hover:border-[#141413]'
                    }`}
                  >
                    {uploadedFile ? (
                      <div className="flex flex-col items-center">
                        <FileCheck2 className="w-8 h-8 text-[#A8824C] mb-2" />
                        <span className="text-sm font-display font-semibold text-[#141413]">{uploadedFile.name}</span>
                        <span className="text-xs font-tech text-[#8E8981] mt-1">{uploadedFile.size} • Attached</span>
                        <button
                          type="button"
                          onClick={() => setUploadedFile(null)}
                          className="mt-3 text-xs font-tech text-[#A8824C] hover:underline"
                        >
                          Remove file
                        </button>
                      </div>
                    ) : (
                      <div>
                        <UploadCloud className="w-8 h-8 text-[#8E8981] mx-auto mb-3" />
                        <p className="text-xs sm:text-sm font-body text-[#141413] font-medium">
                          Drag and drop your Excel / CSV / PDF document here
                        </p>
                        <p className="text-[11px] font-tech text-[#8E8981] mt-1">
                          Supports .xlsx, .xls, .pdf, .csv up to 50MB
                        </p>
                        <label className="mt-4 inline-block px-4 py-2 bg-white border border-[#E5E0D5] text-xs font-tech text-[#141413] hover:border-[#141413] cursor-pointer transition-colors">
                          Browse Local Files
                          <input
                            type="file"
                            className="hidden"
                            accept=".xlsx,.xls,.csv,.pdf,.doc,.docx"
                            onChange={handleFileInput}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Requirement Notes */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#141413] font-semibold mb-2">
                    03. Notes / Specific Brands / Target Deadlines
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide additional details regarding brand specifications, handover milestones, or logistics delivery location..."
                    value={requirementNotes}
                    onChange={(e) => setRequirementNotes(e.target.value)}
                    className="w-full p-3.5 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
                  />
                </div>

                {/* 4. Contact Details */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#141413] font-semibold mb-3">
                    04. Enterprise Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={contactForm.fullName}
                        onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
                      />
                    </div>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                      <input
                        type="text"
                        required
                        placeholder="Company / Architecture Firm *"
                        value={contactForm.companyName}
                        onChange={(e) => setContactForm({ ...contactForm, companyName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                      <input
                        type="email"
                        required
                        placeholder="Official Work Email *"
                        value={contactForm.workEmail}
                        onChange={(e) => setContactForm({ ...contactForm, workEmail: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-[#8E8981]" />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp Number *"
                        value={contactForm.phoneWhatsApp}
                        onChange={(e) => setContactForm({ ...contactForm, phoneWhatsApp: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-body text-[#141413] placeholder-[#8E8981] focus:outline-none focus:border-[#141413]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] font-tech text-[#5C5852]">
                    <ShieldCheck className="w-4 h-4 text-[#A8824C]" />
                    <span>Direct OEM Margin Pass-Through & 24h Turnaround</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto py-3.5 px-8 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-bold tracking-widest uppercase hover:bg-[#A8824C] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Processing Dossier...' : 'Submit BOQ for Evaluation'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Track */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#F3EFE6] border border-[#E5E0D5]">
              <h3 className="text-base font-display font-bold text-[#141413] mb-3">
                Consolidated Procurement Service
              </h3>
              <p className="text-xs font-body text-[#5C5852] leading-relaxed mb-6">
                Replace fragmented vendor negotiations with a single contractual partner. We align factory production lines directly to your project&apos;s installation timeline.
              </p>

              <div className="space-y-4 text-xs font-tech border-t border-[#E5E0D5] pt-4">
                <div className="flex items-start gap-2.5">
                  <Boxes className="w-4 h-4 text-[#A8824C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141413] block">Multi-Brand Consolidations</strong>
                    <span className="text-[#5C5852]">Unified billing and single palletized dispatch.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#A8824C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141413] block">Architectural Submittals</strong>
                    <span className="text-[#5C5852]">EN/ASTM compliance test reports & BIM data.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe2 className="w-4 h-4 text-[#A8824C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141413] block">Bonded Warehousing</strong>
                    <span className="text-[#5C5852]">60-day buffer storage before on-site installation.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E5E0D5]">
              <div className="text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                Direct Contact
              </div>
              <div className="text-sm font-display font-bold text-[#141413]">
                Commercial Sourcing Team
              </div>
              <p className="text-xs font-body text-[#5C5852] mt-2 leading-relaxed">
                Need immediate phone consultation for an urgent tender? Reach our senior procurement desk directly.
              </p>
              <div className="mt-4 pt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech">
                <span className="text-[#5C5852]">WhatsApp Active:</span>
                <a 
                  href="https://wa.me/?text=Hello%20Vertex%20Commercial%20Desk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-[#A8824C] hover:underline"
                >
                  +1 (800) VERTEX-B2B
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
