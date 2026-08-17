'use client';

import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Search, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown,
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDivision, setQuoteDivision] = useState<string | undefined>();
  const [activeTab, setActiveTab] = useState('HOME');

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  const openQuote = (divisionId?: string) => {
    setQuoteDivision(divisionId);
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'HOME', href: '/', hasDropdown: false },
    { label: 'PRODUCTS', href: '/products', hasDropdown: true },
    { label: 'SOLUTIONS', href: '/#solutions', hasDropdown: true },
    { label: 'INDUSTRIES', href: '/#industries', hasDropdown: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-b border-[#22252C] py-3 shadow-lg shadow-black/50'
            : 'bg-[#0B0C0E] py-4 border-b border-white/10'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: BRAND LOGO (VERONA style) */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <div className="w-8 h-8 rounded-xs bg-[#C59B27] flex items-center justify-center text-[#0B0C0E] font-serif font-black text-base shadow-sm group-hover:scale-105 transition-transform shrink-0">
                V
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-bold text-lg sm:text-xl tracking-[0.18em] text-white leading-none">
                    VERONA
                  </span>
                </div>
                <span className="hidden sm:block text-[8px] sm:text-[8.5px] font-tech text-[#C59B27] tracking-[0.2em] font-medium uppercase mt-1 whitespace-nowrap">
                  PRODUCTS • SOLUTIONS • PROCUREMENT
                </span>
              </div>
            </a>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveTab(item.label)}
                    className={`text-[11px] font-tech font-semibold tracking-[0.14em] uppercase transition-all duration-200 flex items-center gap-1 py-1.5 relative ${
                      isActive 
                        ? 'text-[#C59B27] border-b-2 border-[#C59B27]' 
                        : 'text-gray-300 hover:text-[#C59B27]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-3 h-3 opacity-70 transition-transform group-hover:rotate-180" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: REQUEST A QUOTE Button */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">

              {/* REQUEST A QUOTE (Solid Gold Amber Button) */}
              <button
                type="button"
                onClick={() => openQuote()}
                className="px-4 sm:px-5 py-2.5 bg-[#C59B27] hover:bg-[#d8aa2b] text-[#0B0C0E] text-[11px] sm:text-xs font-tech font-bold tracking-widest uppercase transition-all duration-200 shadow-md shadow-[#C59B27]/20 active:scale-95 whitespace-nowrap shrink-0 rounded-xs"
              >
                Request a Quote
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xs transition-colors shrink-0"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-[#22252C] bg-[#0B0C0E] px-4 py-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-xs font-tech uppercase tracking-widest text-gray-200 hover:text-[#C59B27] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="https://wa.me/?text=Hello%20Verona%20Team%2C%20I%20have%20a%20procurement%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-tech uppercase tracking-wider border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => openQuote()}
                className="w-full py-3 bg-[#C59B27] text-[#0B0C0E] text-xs font-tech font-bold uppercase tracking-widest hover:bg-[#d8aa2b] transition-colors text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={quoteDivision}
      />
    </>
  );
}
