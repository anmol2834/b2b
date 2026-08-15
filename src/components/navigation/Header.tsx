'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  ChevronDown, 
  Send, 
  Menu, 
  Clock, 
  PhoneCall, 
  Hexagon
} from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { QuoteModal } from './QuoteModal';
import { ThemeSelector } from '@/components/ui/ThemeSelector';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeModalDivision, setActiveModalDivision] = useState<string | undefined>();

  const headerRef = useRef<HTMLElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);
  const { scrollY } = useScroll();

  // High-performance scroll direction tracker for zero-lag compositor transitions
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastScrollYRef.current;
    const diff = latest - previous;

    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Scroll Down -> Hide Header, Scroll Up -> Reveal Header
    if (latest > 120 && diff > 8 && !isMegaMenuOpen) {
      setIsHidden(true);
    } else if (diff < -6 || latest <= 40) {
      setIsHidden(false);
    }

    lastScrollYRef.current = latest;
  });

  // Persistent hover intent logic: maintains menu when moving cursor between trigger and menu
  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  }, []);

  // Click outside and Escape key listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const openQuoteForDivision = (divisionId?: string) => {
    setActiveModalDivision(divisionId);
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`gpu-layer fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Floating Docked Bar */}
        <div
          className={`w-full border-b transition-[background-color,border-color,box-shadow,padding] duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-2xl border-slate-200/80 shadow-md shadow-slate-900/5 py-2.5 sm:py-3'
              : 'bg-white/70 backdrop-blur-md border-slate-200/50 py-3 sm:py-4 shadow-none'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              
              {/* ============================================================
                  ZONE 1 (LEFT): BRAND IDENTITY
                  ============================================================ */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a href="#" className="flex items-center gap-2 group whitespace-nowrap">
                  <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-accent-border bg-accent-surface text-accent-primary group-hover:scale-105 transition-transform shrink-0">
                    <Hexagon className="w-4 h-4 sm:w-5 sm:h-5 fill-accent-primary/20 stroke-accent-primary" />
                    <span className="absolute font-display font-extrabold text-[11px] sm:text-xs text-accent-primary">V</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#0F172A] group-hover:text-accent-primary transition-colors leading-none">
                      VERTEX<span className="text-accent-primary">.B2B</span>
                    </span>
                    <span className="hidden xl:inline text-[8.5px] font-tech text-slate-500 tracking-wider uppercase mt-1">
                      Direct Master Distributor
                    </span>
                  </div>
                </a>
              </div>

              {/* ============================================================
                  ZONE 2 (CENTER): DESKTOP NAVIGATION PILL
                  ============================================================ */}
              <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full border border-slate-200 bg-white/90 shadow-sm backdrop-blur-md shrink-0">
                {/* Divisions Mega-Menu Trigger */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMegaMenuOpen((prev) => !prev);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-tech font-medium flex items-center gap-1.5 transition-all whitespace-nowrap ${
                      isMegaMenuOpen
                        ? 'bg-accent-surface border border-accent-border text-accent-primary font-semibold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    aria-expanded={isMegaMenuOpen}
                  >
                    <span>Bulk Divisions</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isMegaMenuOpen ? 'rotate-180 text-accent-primary' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                <a
                  href="#sectors"
                  className="px-3.5 py-1.5 rounded-full text-xs font-tech font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
                >
                  Sectors
                </a>

                <a
                  href="#workflow"
                  className="px-3.5 py-1.5 rounded-full text-xs font-tech font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
                >
                  Supply Model
                </a>

                <a
                  href="#boq-uploader"
                  className="px-3.5 py-1.5 rounded-full text-xs font-tech font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
                >
                  Bulk Inquiry
                </a>
              </nav>

              {/* ============================================================
                  ZONE 3 (RIGHT): TELEMETRY, THEME & CALL-TO-ACTION
                  ============================================================ */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                {/* Fast Track SLA Indicator */}
                <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 bg-white shadow-xs text-[11px] font-tech text-slate-700 whitespace-nowrap shrink-0">
                  <Clock className="w-3 h-3 text-accent-primary" />
                  <span>Wholesale Rates:</span>
                  <span className="font-bold text-accent-primary">24h</span>
                </div>

                {/* Direct Sourcing Desk Hotline (Wide Screens) */}
                <a
                  href="tel:+18005550199"
                  title="Direct Commercial Desk: +1 (800) 555-0199"
                  className="hidden 2xl:flex p-1.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-accent-border transition-colors shrink-0 shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-accent-secondary" />
                </a>

                {/* Embedded Compact Theme Selector */}
                <div className="hidden sm:block shrink-0">
                  <ThemeSelector />
                </div>

                {/* Primary High-Contrast Quote CTA Button */}
                <button
                  type="button"
                  onClick={() => openQuoteForDivision()}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-tech font-bold text-white flex items-center gap-1.5 shadow-sm transition-all duration-200 transform active:scale-95 hover:brightness-110 shrink-0 whitespace-nowrap tracking-wider uppercase"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <Send className="w-3 h-3 text-white" />
                  <span className="hidden xs:inline">Get Volume Quote</span>
                  <span className="xs:hidden">Quote</span>
                </button>

                {/* Mobile Menu Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileNavOpen(true)}
                  className="lg:hidden flex items-center justify-center p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:border-accent-border transition-all shrink-0 shadow-xs"
                  aria-label="Open mobile navigation"
                >
                  <Menu className="w-4 h-4 text-accent-primary" />
                </button>
              </div>

            </div>
          </div>

          {/* Mega-Menu Dropdown Mount with shared hover bridge handlers */}
          <MegaMenu
            isOpen={isMegaMenuOpen}
            onClose={() => setIsMegaMenuOpen(false)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onRequestQuote={openQuoteForDivision}
          />
        </div>
      </motion.header>

      {/* Luxury Mobile Drawer Mount */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onRequestQuote={openQuoteForDivision}
      />

      {/* Quote Modal Flyout Mount */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={activeModalDivision}
      />
    </>
  );
}
