'use client';

import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  MessageSquare, 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDivision, setQuoteDivision] = useState<string | undefined>();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30);
  });

  const openQuote = (divisionId?: string) => {
    setQuoteDivision(divisionId);
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Products', href: '#categories' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Supply Chain', href: '#supply-chain' },
    { label: 'About', href: '#why-us' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5E0D5] py-3 shadow-xs'
            : 'bg-transparent py-4 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Left: LOGO */}
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#141413] flex items-center justify-center bg-[#141413] text-[#FAF9F5] group-hover:bg-[#A8824C] group-hover:border-[#A8824C] transition-colors shrink-0">
                <span className="font-display font-bold text-xs tracking-wider">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-lg tracking-tight text-[#141413] leading-none">
                  VERTEX
                </span>
                <span className="text-[8.5px] sm:text-[9px] font-tech text-[#8E8981] tracking-widest uppercase mt-0.5 whitespace-nowrap">
                  Wholesale B2B Supply
                </span>
              </div>
            </a>

            {/* Center: Minimal Navigation */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-tech tracking-wider uppercase text-[#5C5852] hover:text-[#141413] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141413] hover:after:w-full after:transition-all whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
              {/* WhatsApp / Contact Trigger */}
              <a
                href="https://wa.me/?text=Hello%20Vertex%20Supply%20Team%2C%20I%20have%20a%20bulk%20supply%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-tech tracking-wider uppercase text-[#5C5852] hover:text-[#141413] transition-colors px-2 py-1 whitespace-nowrap"
                title="Contact via WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA: REQUEST A QUOTE (Single line, no word break) */}
              <button
                type="button"
                onClick={() => openQuote()}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#141413] text-[#FAF9F5] text-[10.5px] sm:text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#A8824C] transition-all duration-200 shadow-xs active:scale-95 whitespace-nowrap shrink-0"
              >
                Request a Quote
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-[#141413] hover:bg-[#EBE6DC] transition-colors shrink-0"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[#E5E0D5] bg-[#FAF9F5] px-4 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-tech uppercase tracking-wider text-[#141413] py-2 border-b border-[#E5E0D5]/50 flex items-center justify-between whitespace-nowrap"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8981]" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/?text=Hello%20Vertex%20Supply%20Team%2C%20I%20have%20a%20bulk%20supply%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-tech uppercase tracking-wider border border-[#E5E0D5] text-[#141413] flex items-center justify-center gap-2 hover:bg-[#EBE6DC] transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => openQuote()}
                className="w-full py-3 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-semibold uppercase tracking-widest hover:bg-[#A8824C] transition-colors text-center whitespace-nowrap"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={quoteDivision}
      />
    </>
  );
}
