import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Send, 
  Clock, 
  Package, 
  FileSpreadsheet, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Download,
  Layers,
  ChevronRight
} from 'lucide-react';
import { getProductById, getAllProducts } from '@/config/divisions';
import { Header } from '@/components/navigation/Header';
import { ArchitecturalFooter } from '@/components/sections/ArchitecturalFooter';
import { ProductQuoteForm } from '@/app/products/[id]/ProductQuoteForm';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = product.division.products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141413] font-body selection:bg-[#B3884D] selection:text-white flex flex-col justify-between overflow-x-clip">
      
      {/* Sticky Clean Header */}
      <Header />

      <main className="pt-28 pb-20 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-tech text-[#8E8981] mb-8 pt-4">
            <Link 
              href="/" 
              className="hover:text-[#141413] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Overview</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
            <Link 
              href="/#categories" 
              className="hover:text-[#141413] transition-colors uppercase tracking-wider"
            >
              {product.division.shortName}
            </Link>
            <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
            <span className="text-[#141413] font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.code}
            </span>
          </div>

          {/* Master Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* =========================================================================
                LEFT COLUMN: MUSEUM-GRADE PHOTOGRAPHY (6 Cols)
                ========================================================================= */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full h-[340px] sm:h-[480px] lg:h-[540px] bg-[#EBE6DC] border border-[#E5E0D5] overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                
                <div className="absolute top-4 left-4 bg-[#141413] text-[#FAF9F5] px-3 py-1 text-[11px] font-tech font-bold uppercase tracking-wider shadow-sm">
                  {product.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-tech bg-black/60 backdrop-blur-md text-white px-3.5 py-2 border border-white/10">
                  <span className="font-semibold">{product.code}</span>
                  <span className="text-slate-300 truncate ml-2">Direct Manufacturer SLA</span>
                </div>
              </div>

              {/* Division Guarantee Box */}
              <div className="p-5 bg-white border border-[#E5E0D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[#A8824C] flex items-center justify-center text-[#A8824C] shrink-0 bg-[#F3EFE6]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-display font-bold text-[#141413] block">
                      Direct Manufacturer Warranty
                    </span>
                    <span className="text-[11px] font-tech text-[#5C5852]">
                      Genuine OEM Spare Parts & Institutional Wholesale Pricing
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-tech text-[#A8824C] font-semibold whitespace-nowrap">
                  {product.leadTime}
                </span>
              </div>
            </div>

            {/* =========================================================================
                RIGHT COLUMN: EDITORIAL SPECIFICATIONS & INQUIRY (6 Cols)
                ========================================================================= */}
            <div className="lg:col-span-6 space-y-8 min-w-0">
              
              {/* Product Header */}
              <div className="border-b border-[#E5E0D5] pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-[#A8824C]" />
                  <span className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C]">
                    {product.division.name}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-display font-bold text-[#141413] tracking-tight leading-tight break-words">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base font-body text-[#5C5852] mt-3 leading-relaxed break-words">
                  {product.summary}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-[#E5E0D5] bg-white divide-y divide-[#E5E0D5]">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-tech">
                  <span className="text-[#8E8981] uppercase tracking-wider">Material Grade</span>
                  <span className="text-[#141413] font-semibold sm:text-right break-words">{product.material}</span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-tech">
                  <span className="text-[#8E8981] uppercase tracking-wider">Finish Options</span>
                  <span className="text-[#141413] font-semibold sm:text-right break-words">{product.finish}</span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-tech">
                  <span className="text-[#8E8981] uppercase tracking-wider">Wholesale MOQ</span>
                  <span className="text-[#141413] font-semibold sm:text-right">{product.moq}</span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-tech">
                  <span className="text-[#8E8981] uppercase tracking-wider">Production Lead Time</span>
                  <span className="text-[#141413] font-semibold sm:text-right">{product.leadTime}</span>
                </div>
              </div>

              {/* Compliance Badges */}
              <div>
                <div className="text-xs font-tech font-bold uppercase tracking-widest text-[#141413] mb-3">
                  OEM Compliance & Certification Standards
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.compliance.map((cert) => (
                    <div
                      key={cert}
                      className="px-3 py-1.5 border border-[#E5E0D5] bg-white text-xs font-tech text-[#141413] flex items-center gap-1.5 shadow-xs"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#A8824C] shrink-0" />
                      <span className="break-words">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Project Applications */}
              <div>
                <div className="text-xs font-tech font-bold uppercase tracking-widest text-[#141413] mb-3">
                  Typical Project Applications
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app) => (
                    <div
                      key={app}
                      className="p-3 bg-[#F3EFE6] border border-[#E5E0D5] flex items-center gap-2 text-xs font-body text-[#141413]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#A8824C] shrink-0" />
                      <span className="truncate">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Sourcing RFQ Desk for This Specific SKU */}
              <div className="p-6 sm:p-8 bg-white border border-[#141413] space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-4">
                  <div>
                    <span className="text-[10px] font-tech text-[#A8824C] font-bold uppercase tracking-widest">
                      INSTITUTIONAL PRICING INQUIRY
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#141413]">
                      Request Volume Quotation for {product.code}
                    </h3>
                  </div>
                  <span className="text-xs font-tech text-[#8E8981] hidden sm:inline">24H SLA</span>
                </div>

                <ProductQuoteForm 
                  productCode={product.code} 
                  productName={product.name} 
                  divisionId={product.division.id}
                />
              </div>

            </div>

          </div>

          {/* =========================================================================
              RELATED PRODUCTS FROM THE SAME DIVISION
              ========================================================================= */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 sm:mt-32 pt-16 border-t border-[#E5E0D5]">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="text-[10px] font-tech text-[#A8824C] font-bold uppercase tracking-widest mb-1">
                    SAME DIVISION SPECIFICATIONS
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#141413]">
                    Explore Related {product.division.shortName} Products
                  </h3>
                </div>
                <Link
                  href="/#categories"
                  className="text-xs font-tech text-[#141413] hover:text-[#A8824C] flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>All Divisions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.id}`}
                    className="group border border-[#E5E0D5] bg-white p-5 hover:border-[#141413] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative w-full h-48 bg-[#EBE6DC] overflow-hidden border border-[#E5E0D5] mb-4">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-[#141413] text-[#FAF9F5] px-2 py-0.5 text-[9px] font-tech font-bold uppercase tracking-wider">
                          {rel.category}
                        </div>
                      </div>

                      <div className="text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                        {rel.code} • {rel.moq}
                      </div>
                      <h4 className="text-base font-display font-bold text-[#141413] mb-1.5 group-hover:text-[#A8824C] transition-colors leading-snug">
                        {rel.name}
                      </h4>
                      <p className="text-xs font-body text-[#5C5852] line-clamp-2 leading-relaxed">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech font-semibold text-[#141413] group-hover:text-[#A8824C] transition-colors">
                      <span>View Specification →</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Luxury Footer */}
      <ArchitecturalFooter />

    </div>
  );
}
