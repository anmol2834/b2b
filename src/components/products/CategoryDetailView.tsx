'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  ChevronRight, 
  Plus,
  Minus,
  HelpCircle,
  Layers,
  X
} from 'lucide-react';
import { CategoryData } from '@/config/productsCatalog';
import { QuoteModal } from '@/components/navigation/QuoteModal';

interface CategoryDetailViewProps {
  category: CategoryData;
}

export function CategoryDetailView({ category }: CategoryDetailViewProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileCategoryModalOpen, setIsMobileCategoryModalOpen] = useState(false);
  const [selectedSubCat, setSelectedSubCat] = useState<string>('All');
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    brand: false,
    type: false,
    material: false,
    finish: false,
    price: false,
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

  // Subcategory filter pills
  const subCatPills = [
    { name: 'All', icon: '✨' },
    ...category.subCategories.map((sub, idx) => ({
      name: sub.name,
      icon: ['📦', '⚡', '💧', '🛡️', '⚙️', '✨', '🚿', '🚽'][idx % 8] || '🔹',
    })),
  ];

  // Filter products by selected subcategory
  const filteredProducts = (selectedSubCat && selectedSubCat !== 'All')
    ? category.products.filter(
        (p) => p.category === selectedSubCat || p.subCategory === selectedSubCat
      )
    : category.products;

  // Fallback to all products if filtered result is empty
  const displayedProducts = filteredProducts.length > 0 ? filteredProducts : category.products;

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
              <button
                type="button"
                onClick={() => {
                  setSelectedSubCat('All');
                  setIsMobileCategoryModalOpen(false);
                }}
                className={`w-full flex items-center justify-between text-xs font-body py-3 px-3 rounded-xs border transition-colors ${
                  selectedSubCat === 'All'
                    ? 'bg-[#FAF7F0] border-[#C59B27] text-[#141413] font-bold'
                    : 'bg-[#FAF9F6] border-gray-200 text-gray-700'
                }`}
              >
                <span className="font-bold text-sm font-serif text-[#141413]">All {category.title}</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </button>

              {category.subCategories.map((sub) => {
                const isActive = selectedSubCat === sub.name;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => {
                      setSelectedSubCat(sub.name);
                      setIsMobileCategoryModalOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-xs font-body py-3 px-3 rounded-xs border transition-colors ${
                      isActive
                        ? 'bg-[#FAF7F0] border-[#C59B27] text-[#141413] font-bold'
                        : 'bg-[#FAF9F6] border-gray-200 text-gray-700'
                    }`}
                  >
                    <span className="font-bold text-sm font-serif text-[#141413]">{sub.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <main className="pt-0 pb-20">
        
        {/* =========================================================================
            MAIN CONTENT AREA (Sidebar + Products View)
            ========================================================================= */}
        <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6 pt-6 pb-16">
          
          {/* Clean Light Top Bar: Back Button & Breadcrumbs / Phone Categories Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-xs font-tech text-[#141413] hover:text-[#C59B27] transition-colors py-1.5 px-3.5 bg-white border border-gray-300 rounded-xs shadow-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C59B27]" />
              <span>Back to All Products</span>
            </Link>

            <div className="flex items-center gap-3">
              {/* Highlighted Categories Button (Phone Screen Only) */}
              <button
                type="button"
                onClick={() => setIsMobileCategoryModalOpen(true)}
                className="sm:hidden px-3.5 py-1.5 bg-[#C59B27] hover:bg-[#d8aa2b] text-[#0D0E12] font-tech text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm flex items-center gap-1.5 border border-[#B3884D]"
              >
                <Layers className="w-3.5 h-3.5 text-[#0D0E12]" />
                <span>CATEGORIES</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs font-tech text-[#8E8981]">
                <Link href="/" className="hover:text-[#141413] transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
                <Link href="/products" className="hover:text-[#141413] transition-colors">Products</Link>
                <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
                <span className="text-[#141413] font-semibold">{category.breadcrumb}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ---------------------------------------------------------------------
                LEFT SIDEBAR (Hidden on phone devices, visible on desktop sm+)
                --------------------------------------------------------------------- */}
            <aside id="categories-sidebar" className="hidden sm:flex lg:col-span-3 bg-white p-5 rounded-xs border border-gray-200 shadow-xs space-y-6 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-hidden flex-col justify-between">
              
              {/* Categories Navigation */}
              <div className="flex-1 flex flex-col min-h-0">
                <span className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#141413] block mb-3 border-b border-gray-200 pb-2 shrink-0">
                  CATEGORIES
                </span>

                <div className="space-y-1.5 overflow-y-auto max-h-[55vh] pr-1">
                  <button
                    type="button"
                    onClick={() => setSelectedSubCat('All')}
                    className={`w-full flex items-center justify-between text-xs font-body py-2 px-2.5 rounded-xs transition-colors text-left ${
                      selectedSubCat === 'All'
                        ? 'bg-[#FAF7F0] text-[#141413] font-bold border-l-2 border-[#C59B27]'
                        : 'text-gray-600 hover:text-[#141413] hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">All {category.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${selectedSubCat === 'All' ? 'text-[#C59B27]' : 'text-gray-400'}`} />
                  </button>

                  {category.subCategories.map((sub) => {
                    const isActive = selectedSubCat === sub.name;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSelectedSubCat(sub.name)}
                        className={`w-full flex items-center justify-between text-xs font-body py-2 px-2.5 rounded-xs transition-colors text-left ${
                          isActive
                            ? 'bg-[#FAF7F0] text-[#141413] font-bold border-l-2 border-[#C59B27]'
                            : 'text-gray-600 hover:text-[#141413] hover:bg-gray-50'
                        }`}
                      >
                        <span className="truncate">{sub.name}</span>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#C59B27]' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* NEED HELP? Card */}
              <div className="bg-[#FAF7F0] border border-[#E5D8B6] p-4 rounded-xs text-xs shrink-0">
                <div className="flex items-center gap-2 text-[#C59B27] font-tech font-bold uppercase tracking-wider mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>NEED HELP?</span>
                </div>
                <p className="text-gray-600 font-body leading-relaxed mb-3 text-[11px]">
                  Our industry experts are here to help you find the right products for your project.
                </p>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="text-[11px] font-tech font-bold text-[#C59B27] hover:text-[#a8824c] flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>CONTACT OUR EXPERTS</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </aside>

            {/* ---------------------------------------------------------------------
                RIGHT MAIN CONTENT AREA (Unified Global Category Design)
                --------------------------------------------------------------------- */}
            <main className="lg:col-span-9 space-y-8">
              
              <div className="space-y-6">
                
                {/* Category Title & Intro Banner */}
                <div className="bg-white p-4 sm:p-5 border border-gray-200 rounded-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#141413]">
                      {category.title}
                    </h2>
                    {selectedSubCat && selectedSubCat !== 'All' && (
                      <span className="text-xs sm:text-sm font-tech text-[#C59B27] font-bold">
                        › {selectedSubCat}
                      </span>
                    )}
                  </div>

                  <p className="hidden sm:block mt-2 text-xs sm:text-sm font-body text-gray-600 leading-relaxed max-w-3xl">
                    {category.description}
                  </p>

                  {/* Quick Sub-Category Filter Pills (Hidden on Phone, visible on Desktop sm+) */}
                  <div className="hidden sm:flex mt-5 flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                    {subCatPills.map((pill, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedSubCat(pill.name)}
                        className={`flex items-center gap-2 px-3.5 py-2 text-xs font-body rounded-xs border transition-all ${
                          selectedSubCat === pill.name
                            ? 'bg-[#FAF7F0] border-[#C59B27] text-[#141413] font-bold shadow-xs'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <span>{pill.icon}</span>
                        <span>{pill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4-Column Product Cards Grid (Matching Sanitaryware Master Design) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {displayedProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/products/${category.id}/${prod.id}`}
                      prefetch={true}
                      className="bg-white border border-gray-200 rounded-xs overflow-hidden shadow-xs hover:shadow-md hover:border-[#C59B27] transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="relative w-full h-[200px] bg-gray-100 overflow-hidden">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-sm font-bold text-[#141413] group-hover:text-[#C59B27] transition-colors mb-1">
                            {prod.name}
                          </h3>
                          <p className="text-[11px] font-body text-gray-500 leading-relaxed">
                            {prod.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>

              {/* Bottom Multiple Brands Banner */}
              <div className="bg-white border border-gray-200 p-6 rounded-xs shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  <div className="lg:col-span-4 relative h-[140px] rounded-xs overflow-hidden border border-gray-200">
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#141413] mb-1">
                        Multiple Brands. Multiple Choices.
                      </h4>
                      <p className="text-xs font-body text-gray-500 leading-relaxed">
                        We source {category.title.toLowerCase()} from leading global and Indian brands to provide the right balance of quality, design and budget for your project.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-2 pt-2 border-t border-gray-100 text-center">
                      {category.stats.map((st, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="font-tech text-xs font-bold text-[#141413]">
                            {st.value}
                          </span>
                          <span className="text-[10px] font-body text-gray-500">
                            {st.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </main>

          </div>
        </div>

        {/* =========================================================================
            OUR SOURCING NETWORK LOGOS
            ========================================================================= */}
        <div className="w-full bg-[#FAF9F6] border-t border-gray-200 py-8">
          <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6">
            <div className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-2">
              OUR SOURCING NETWORK
            </div>
            <p className="text-xs font-body text-gray-500 mb-6 max-w-2xl">
              We work with leading brands and manufacturers to source the right products for your project.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 py-2">
              {category.sourcingBrands.map((b, i) => (
                <span
                  key={i}
                  className={`text-base sm:text-xl text-gray-700 hover:text-[#141413] transition-colors ${
                    b.isBold ? 'font-bold' : 'font-medium'
                  }`}
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
