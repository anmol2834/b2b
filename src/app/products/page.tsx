'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  ArrowRight, 
  ArrowLeft,
  Grid, 
  List, 
  ChevronDown, 
  ChevronRight,
  ChevronUp, 
  Plus, 
  Minus,
  Package,
  Layers,
  ShieldCheck,
  Award,
  Clock,
  Headphones,
  CheckCircle2,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { Header } from '@/components/navigation/Header';
import { ArchitecturalFooter } from '@/components/sections/ArchitecturalFooter';
import { QuoteModal } from '@/components/navigation/QuoteModal';
import { MAIN_CATEGORY_CARDS } from '@/config/productsCatalog';

export default function AllProductsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileCategoryModalOpen, setIsMobileCategoryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    type: false,
    brand: false,
    price: false,
    finish: false,
    application: false,
  });

  // Lock background body scroll when mobile category modal is open
  useEffect(() => {
    if (isMobileCategoryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileCategoryModalOpen]);

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const trustMetrics = [
    { icon: Package, count: '5000+', label: 'Products' },
    { icon: Layers, count: 'Multiple', label: 'Brands' },
    { icon: ShieldCheck, count: 'Best Price', label: 'Guaranteed' },
    { icon: Award, count: 'Quality', label: 'Assured' },
    { icon: Clock, count: 'On-time', label: 'Delivery' },
    { icon: Headphones, count: 'Expert', label: 'Support' },
  ];

  const sourcingBrands = [
    { name: 'KOHLER', font: 'font-bold tracking-widest' },
    { name: 'Jaquar', font: 'font-semibold tracking-wider' },
    { name: 'GROHE', font: 'font-extrabold tracking-widest' },
    { name: 'hindware', font: 'font-medium tracking-normal' },
    { name: 'dormakaba', font: 'font-bold tracking-tight' },
    { name: '3M', font: 'font-black tracking-tighter' },
    { name: 'STANLEY', font: 'font-bold tracking-widest' },
  ];

  const filteredCategories = MAIN_CATEGORY_CARDS.filter((cat) => {
    if (selectedCategoryFilter && cat.slug !== selectedCategoryFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return cat.title.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141413] font-body selection:bg-[#B3884D] selection:text-white flex flex-col justify-between overflow-x-clip">
      
      {/* Mobile Top Category Selection Modal */}
      {isMobileCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start sm:hidden">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileCategoryModalOpen(false)}
          />

          {/* Top Modal Card */}
          <div className="relative w-full bg-white border-b border-gray-300 shadow-2xl p-5 z-10 max-h-[85vh] flex flex-col animate-in slide-in-from-top duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3 shrink-0">
              <span className="font-tech text-xs font-bold uppercase tracking-widest text-[#141413]">
                SELECT CATEGORY
              </span>
              <button 
                type="button"
                onClick={() => setIsMobileCategoryModalOpen(false)}
                className="p-1 text-gray-500 hover:text-[#141413] transition-colors rounded-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Vertically Scrollable Categories List (overscroll-contain prevents body scroll) */}
            <div className="overflow-y-auto max-h-[65vh] pr-1 space-y-2 overscroll-contain">
              {MAIN_CATEGORY_CARDS.map((cat) => (
                <Link 
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  onClick={() => setIsMobileCategoryModalOpen(false)}
                  className="flex items-center justify-between text-xs font-body text-gray-700 hover:text-[#C59B27] py-3 px-3 bg-[#FAF9F6] border border-gray-200 rounded-xs transition-colors"
                >
                  <span className="font-bold text-sm font-serif text-[#141413]">{cat.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="pt-0 pb-20">
        
        {/* =========================================================================
            HERO SEARCH BANNER (Touches Top - No Header)
            ========================================================================= */}
        <section className="relative w-full bg-[#0D0E12] text-white pt-8 sm:pt-10 pb-14 sm:pb-16 overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C59B27]/10 via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6 relative z-10">
            
            {/* Top Bar: Back to Home Button & Mobile Categories Button (Opposite side) */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-xs font-tech text-gray-300 hover:text-[#C59B27] transition-colors py-1.5 px-3.5 bg-white/5 border border-white/10 rounded-xs group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C59B27]" />
                <span>Back to Home</span>
              </Link>

              {/* Mobile Categories Button on Top Right opposite Back Button */}
              <button
                type="button"
                onClick={() => setIsMobileCategoryModalOpen(true)}
                className="sm:hidden px-3.5 py-1.5 bg-[#C59B27] hover:bg-[#d8aa2b] text-[#0D0E12] font-tech text-xs font-bold uppercase tracking-wider rounded-xs shadow-md flex items-center gap-1.5 border border-[#B3884D]"
              >
                <Layers className="w-3.5 h-3.5 text-[#0D0E12]" />
                <span>CATEGORIES</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Search */}
              <div className="lg:col-span-7 flex flex-col">
                <span className="text-[#C59B27] font-tech text-xs tracking-[0.25em] font-bold uppercase mb-3">
                  PRODUCTS
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.12] mb-4 text-white">
                  Explore our <br />
                  <span className="text-[#C59B27] italic font-semibold">complete range.</span>
                </h1>

                <p className="text-sm sm:text-base font-body text-gray-300 max-w-lg mb-8 leading-relaxed">
                  Thousands of products across multiple categories. One destination for all your project needs.
                </p>

                {/* Search Input Bar */}
                <div className="flex items-center w-full max-w-xl bg-white rounded-xs p-1 shadow-xl">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products, categories, brands..."
                    className="w-full px-4 py-3 text-xs sm:text-sm text-[#141413] bg-transparent outline-none placeholder:text-gray-400 font-body"
                  />
                  <button
                    type="button"
                    className="px-5 py-3 bg-[#C59B27] hover:bg-[#d8aa2b] text-[#0D0E12] font-tech text-xs font-bold uppercase tracking-wider transition-colors rounded-xs flex items-center gap-2 shrink-0"
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">SEARCH</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Architectural Showcase Photo */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-xs overflow-hidden border border-white/15 shadow-2xl">
                  <Image
                    src="/verona_hero_bathroom.jpg"
                    alt="Verona Complete Range Sourcing"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            MAIN CONTENT AREA (Sidebar + 8 Category Cards Grid)
            ========================================================================= */}
        <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6 pt-6 sm:pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ---------------------------------------------------------------------
                LEFT SIDEBAR (Hidden on mobile phone devices, visible on desktop sm+)
                --------------------------------------------------------------------- */}
            <aside id="categories-sidebar" className="hidden sm:flex lg:col-span-3 bg-white p-5 rounded-xs border border-gray-200 shadow-xs space-y-6 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-hidden flex-col justify-between">
              
              {/* Filter Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 shrink-0">
                <span className="text-xs font-tech font-bold uppercase tracking-wider text-[#141413]">
                  CATEGORIES
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategoryFilter(null);
                    setSearchQuery('');
                  }}
                  className="text-[11px] font-tech text-gray-400 hover:text-[#C59B27] transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Categories Radio List (Scrollable Y-Axis if many categories) */}
              <div className="flex-1 overflow-y-auto max-h-[60vh] pr-1 space-y-2">
                {[
                  { name: 'Sanitary & Bathroom Solutions', slug: 'sanitary' },
                  { name: 'Hotel Amenities & Hospitality Supplies', slug: 'hospitality' },
                  { name: 'Entrance Solutions', slug: 'entrance' },
                  { name: 'Industrial Solutions', slug: 'industrial' },
                  { name: 'Faucets & Taps', slug: 'sanitary' },
                  { name: 'Showers & Bath Systems', slug: 'sanitary' },
                  { name: 'Commercial Washroom Accessories', slug: 'sanitary' },
                  { name: 'Air Curtains & Climate Doors', slug: 'industrial' },
                  { name: 'PVC Strip Curtains & Barriers', slug: 'industrial' },
                  { name: 'Turnstiles & Access Control', slug: 'entrance' },
                ].map((cat, idx) => (
                  <Link
                    key={`${cat.slug}-${idx}`}
                    href={`/products/${cat.slug}`}
                    className="flex items-center justify-between text-xs font-body text-gray-600 hover:text-[#C59B27] transition-colors group py-1"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-gray-300 rounded-xs group-hover:border-[#C59B27] flex items-center justify-center shrink-0">
                        {selectedCategoryFilter === cat.slug && (
                          <div className="w-2 h-2 bg-[#C59B27] rounded-xs" />
                        )}
                      </div>
                      <span className="truncate">{cat.name}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>

            </aside>

            {/* ---------------------------------------------------------------------
                RIGHT MAIN CONTENT GRID (8 Category Cards)
                --------------------------------------------------------------------- */}
            <main className="lg:col-span-9 space-y-6">
              
              {/* 8 Main Category Cards Grid (4 Columns x 2 Rows) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredCategories.map((card) => (
                  <Link
                    key={card.id}
                    href={`/products/${card.slug}`}
                    prefetch={true}
                    className="bg-white border border-gray-200 rounded-xs overflow-hidden shadow-xs hover:shadow-md hover:border-[#C59B27] transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Category Image */}
                    <div className="relative w-full h-[180px] bg-gray-100 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>

                    {/* Category Info */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Icon Badge */}
                        <div className="w-7 h-7 rounded-full bg-[#FAF7F0] border border-[#E5D8B6] flex items-center justify-center mb-2.5">
                          <span className="font-serif text-xs font-bold text-[#C59B27]">V</span>
                        </div>

                        <h3 className="font-serif text-base font-bold text-[#141413] group-hover:text-[#C59B27] transition-colors leading-tight mb-1">
                          {card.title}
                        </h3>

                        <p className="text-xs font-body text-gray-500 leading-relaxed line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </main>

          </div>
        </div>

        {/* =========================================================================
            BOQ BANNER CALLOUT (Image 1 Bottom Callout)
            ========================================================================= */}
        <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6 my-8">
          <div className="bg-[#0B0C0E] rounded-xs border border-white/10 p-6 sm:p-8 text-white overflow-hidden relative shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Photo & Text */}
              <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-24 h-24 rounded-xs overflow-hidden shrink-0 hidden sm:block border border-white/20">
                  <Image
                    src="/verona_hero_bathroom.jpg"
                    alt="BOQ Sourcing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    Can't find what you need?
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-gray-300 leading-relaxed">
                    Upload your BOQ or product list and we'll source the best options for your project.
                  </p>
                </div>
              </div>

              {/* Action Button & Features */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-6">
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-6 py-3.5 bg-[#C59B27] hover:bg-[#d8aa2b] text-[#0D0E12] text-xs font-tech font-bold uppercase tracking-wider transition-all rounded-xs shadow-md whitespace-nowrap"
                >
                  UPLOAD BOQ / PRODUCT LIST →
                </button>

                <div className="hidden xl:flex items-center gap-4 text-[10px] font-tech text-gray-300">
                  <div className="flex flex-col items-center text-center">
                    <ShieldCheck className="w-4 h-4 text-[#C59B27] mb-1" />
                    <span>Best Options</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Award className="w-4 h-4 text-[#C59B27] mb-1" />
                    <span>Competitive</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Clock className="w-4 h-4 text-[#C59B27] mb-1" />
                    <span>On-time</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            OUR SOURCING NETWORK LOGOS BAR
            ========================================================================= */}
        <div className="w-full bg-[#FAF9F6] border-t border-gray-200 py-8">
          <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6">
            <div className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-2">
              OUR SOURCING NETWORK
            </div>
            <p className="text-xs font-body text-gray-500 mb-6 max-w-2xl">
              We source across an extensive network of established brands and manufacturers to provide the right options for your project, every time.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 py-2">
              {sourcingBrands.map((b, i) => (
                <span
                  key={i}
                  className={`text-base sm:text-xl text-gray-700 hover:text-[#141413] transition-colors ${b.font}`}
                >
                  {b.name}
                </span>
              ))}
              <span className="text-xs font-tech text-gray-400 border border-gray-200 px-3 py-1.5 rounded-xs">
                & Many More
              </span>
            </div>
          </div>
        </div>

      </main>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
