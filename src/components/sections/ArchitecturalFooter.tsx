'use client';

import React from 'react';

interface ArchitecturalFooterProps {
  onRequestQuote?: (divisionId?: string) => void;
}

export function ArchitecturalFooter({ onRequestQuote }: ArchitecturalFooterProps) {
  return (
    <footer className="py-20 sm:py-24 bg-[#FAF9F5] text-[#141413]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E5E0D5]">
          
          {/* Brand Info & Statement (5 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 border border-[#141413] flex items-center justify-center bg-[#141413] text-[#FAF9F5]">
                <span className="font-display font-bold text-xs">V</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-[#141413]">
                VERTEX
              </span>
            </div>

            <p className="text-xs sm:text-sm font-body text-[#5C5852] max-w-sm leading-relaxed">
              B2B wholesale distributor supplying premium branded products directly to hospitality, commercial, and industrial businesses.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-tech text-[#8E8981] uppercase tracking-widest block">
                DIRECT WHOLESALE CHANNELS • CONSOLIDATED BRAND SUPPLY
              </span>
            </div>
          </div>

          {/* Columns (7 Cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: PRODUCTS */}
            <div>
              <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#141413] mb-4">
                Products
              </div>
              <ul className="space-y-2.5 text-xs font-body text-[#5C5852]">
                <li><a href="#categories" className="hover:text-[#141413] transition-colors">Sanitary</a></li>
                <li><a href="#categories" className="hover:text-[#141413] transition-colors">Hospitality</a></li>
                <li><a href="#categories" className="hover:text-[#141413] transition-colors">Entrance</a></li>
                <li><a href="#categories" className="hover:text-[#141413] transition-colors">Industrial</a></li>
              </ul>
            </div>

            {/* Column 2: SOLUTIONS */}
            <div>
              <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#141413] mb-4">
                Solutions
              </div>
              <ul className="space-y-2.5 text-xs font-body text-[#5C5852]">
                <li><a href="#industries" className="hover:text-[#141413] transition-colors">Hospitality</a></li>
                <li><a href="#industries" className="hover:text-[#141413] transition-colors">Commercial</a></li>
                <li><a href="#industries" className="hover:text-[#141413] transition-colors">Industrial</a></li>
                <li><a href="#supply-chain" className="hover:text-[#141413] transition-colors">Supply Chain</a></li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div>
              <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#141413] mb-4">
                Company
              </div>
              <ul className="space-y-2.5 text-xs font-body text-[#5C5852]">
                <li><a href="#why-us" className="hover:text-[#141413] transition-colors">About</a></li>
                <li><a href="#supply-chain" className="hover:text-[#141413] transition-colors">Sourcing</a></li>
                <li><a href="#solutions" className="hover:text-[#141413] transition-colors">Brands</a></li>
                <li><a href="#boq-uploader" className="hover:text-[#141413] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: RESOURCES */}
            <div>
              <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#141413] mb-4">
                Resources
              </div>
              <ul className="space-y-2.5 text-xs font-body text-[#5C5852]">
                <li><a href="#boq-uploader" className="hover:text-[#141413] transition-colors">Catalogues</a></li>
                <li><a href="#supply-chain" className="hover:text-[#141413] transition-colors">Submittals</a></li>
                <li><a href="#solutions" className="hover:text-[#141413] transition-colors">Guides</a></li>
                <li><a href="#why-us" className="hover:text-[#141413] transition-colors">FAQs</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-[#8E8981]">
          <div>
            © {new Date().getFullYear()} VERTEX WHOLESALE B2B SUPPLY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#141413] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#141413] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#141413] transition-colors">OEM Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
