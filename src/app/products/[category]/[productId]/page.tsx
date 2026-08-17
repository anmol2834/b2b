import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Package, 
  FileSpreadsheet, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Download,
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { getProductById, getAllProducts } from '@/config/divisions';
import { CATEGORIES_DATA } from '@/config/productsCatalog';
import { ArchitecturalFooter } from '@/components/sections/ArchitecturalFooter';
import { ProductQuoteForm } from '@/components/products/ProductQuoteForm';

interface NestedProductPageProps {
  params: Promise<{ category: string; productId: string }>;
}

export async function generateStaticParams() {
  const routes: { category: string; productId: string }[] = [];
  
  Object.values(CATEGORIES_DATA).forEach((cat) => {
    cat.products.forEach((prod) => {
      routes.push({ category: cat.id, productId: prod.id });
    });
  });

  return routes;
}

export default async function NestedProductDetailPage({ params }: NestedProductPageProps) {
  const { category: categorySlug, productId } = await params;

  const parentCategory = CATEGORIES_DATA[categorySlug];
  
  // Find product inside parent category or fallback
  let catalogProduct = parentCategory?.products.find(
    (p) => p.id === productId || p.code.toLowerCase() === productId.toLowerCase()
  );

  // If not found in parent category, search all categories
  if (!catalogProduct) {
    for (const cat of Object.values(CATEGORIES_DATA)) {
      const found = cat.products.find((p) => p.id === productId || p.code.toLowerCase() === productId.toLowerCase());
      if (found) {
        catalogProduct = found;
        break;
      }
    }
  }

  // Fallback to division product
  const divProduct = getProductById(productId);

  if (!catalogProduct && !divProduct) {
    notFound();
  }

  // Normalize product attributes
  const name = catalogProduct?.name || divProduct?.name || 'Product Specification';
  const code = catalogProduct?.code || divProduct?.code || 'SPEC-01';
  const categoryName = catalogProduct?.category || divProduct?.category || 'Architecture';
  const image = catalogProduct?.image || divProduct?.image || '/senitary bath/sink-faucet.jpg';
  const summary = catalogProduct?.description || divProduct?.summary || '';
  const material = catalogProduct?.material || divProduct?.material || 'High-grade Specifications';
  const finish = catalogProduct?.finish || divProduct?.finish || 'Architectural Grade';
  const moq = catalogProduct?.moq || divProduct?.moq || 'Contact Supply Desk';
  const leadTime = catalogProduct?.leadTime || divProduct?.leadTime || '5-10 Days';
  const compliance = divProduct?.compliance || ['ISO 9001', 'LEED Compliant'];
  const divisionName = parentCategory?.title || divProduct?.division.name || 'Wholesale Sourcing';
  const categoryPath = parentCategory?.id || categorySlug || 'sanitary';

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141413] font-body selection:bg-[#B3884D] selection:text-white flex flex-col justify-between overflow-x-clip">
      
      <main className="pt-6 sm:pt-8 pb-20 sm:pb-32">
        <div className="mx-auto max-w-[1680px] px-3 sm:px-4 lg:px-6">
          
          {/* Top Bar: Back Button & Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link 
              href={`/products/${categoryPath}`} 
              className="inline-flex items-center gap-2 text-xs font-tech text-gray-700 hover:text-[#C59B27] transition-colors py-1.5 px-3.5 bg-white border border-gray-300 rounded-xs shadow-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C59B27]" />
              <span>Back to {parentCategory?.title || 'Category'}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-xs font-tech text-[#8E8981]">
              <Link href="/" className="hover:text-[#141413] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
              <Link href="/products" className="hover:text-[#141413] transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
              <Link href={`/products/${categoryPath}`} className="hover:text-[#141413] transition-colors uppercase tracking-wider">
                {divisionName}
              </Link>
              <ChevronRight className="w-3 h-3 text-[#D8D2C5]" />
              <span className="text-[#141413] font-semibold truncate max-w-[200px] sm:max-w-none">
                {code}
              </span>
            </div>
          </div>

          {/* Repositioned Header Block (Above Product Image) */}
          <div className="mb-8 border-b border-[#E5E0D5] pb-6">
            <div className="mb-1.5">
              <span className="text-[11px] font-tech text-[#A8824C] font-semibold tracking-widest uppercase">
                {divisionName} • WHOLESALE SUPPLY
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#141413] leading-tight mb-3">
              {name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-tech text-[#8E8981]">
              <span>SKU Code: <strong className="text-[#141413] font-semibold">{code}</strong></span>
              <span>•</span>
              <span>MOQ: <strong className="text-[#141413] font-semibold">{moq}</strong></span>
              <span>•</span>
              <span>Lead Time: <strong className="text-[#141413] font-semibold">{leadTime}</strong></span>
            </div>
          </div>

          {/* Master Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: PHOTOGRAPHY */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full h-[340px] sm:h-[480px] lg:h-[540px] bg-[#EBE6DC] border border-[#E5E0D5] overflow-hidden group rounded-xs shadow-md">
                <Image
                  src={image}
                  alt={name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                
                <div className="absolute top-4 left-4 bg-[#141413] text-[#FAF9F5] px-3 py-1 text-[11px] font-tech font-bold uppercase tracking-wider shadow-sm">
                  {categoryName}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-tech bg-black/60 backdrop-blur-md text-white px-3.5 py-2 border border-white/10">
                  <span className="font-semibold">{code}</span>
                  <span className="text-slate-300 truncate ml-2">Direct Manufacturer SLA</span>
                </div>
              </div>

              {/* Submittal Notice Bar */}
              <div className="bg-[#EBE6DC]/60 border border-[#E5E0D5] p-4 flex items-center justify-between text-xs font-tech text-[#5C5852]">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#A8824C]" />
                  <span>CAD / BIM Data & Submittal Specs</span>
                </div>
                <span className="font-semibold text-[#141413] underline cursor-pointer hover:text-[#A8824C]">
                  Request PDF
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT DETAILS & QUOTE FORM */}
            <div className="lg:col-span-6 flex flex-col">

              {/* Summary Description */}
              <p className="text-sm font-body text-[#5C5852] leading-relaxed my-6">
                {summary}
              </p>

              {/* Specs Grid */}
              <div className="bg-white border border-[#E5E0D5] p-5 mb-8 space-y-3 shadow-xs">
                <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#141413] pb-2 border-b border-[#E5E0D5]">
                  MATERIAL & FINISH SPECIFICATIONS
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-body">
                  <div>
                    <span className="text-[#8E8981] font-tech block text-[10px] uppercase">Base Material</span>
                    <span className="font-semibold text-[#141413]">{material}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8981] font-tech block text-[10px] uppercase">Surface Finish</span>
                    <span className="font-semibold text-[#141413]">{finish}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5E0D5]/60 flex flex-wrap gap-2">
                  {compliance.map((c, i) => (
                    <span key={i} className="text-[10px] font-tech bg-[#FAF9F5] border border-[#E5E0D5] text-[#5C5852] px-2 py-0.5">
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote Request Form */}
              <div className="bg-white border border-[#E5E0D5] p-6 shadow-sm">
                <h3 className="text-sm font-tech font-bold uppercase tracking-wider text-[#141413] mb-1">
                  Request Wholesale Volume Pricing
                </h3>
                <p className="text-xs font-body text-[#8E8981] mb-5">
                  Submit project quantities for official quote and lead-time confirmation.
                </p>

                <ProductQuoteForm
                  productCode={code}
                  productName={name}
                  divisionId={categoryPath}
                />
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
