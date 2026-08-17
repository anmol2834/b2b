import React from 'react';
import { notFound } from 'next/navigation';
import { CATEGORIES_DATA } from '@/config/productsCatalog';
import { CategoryDetailView } from '@/components/products/CategoryDetailView';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES_DATA).map((catId) => ({
    category: catId,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const categoryData = CATEGORIES_DATA[categorySlug];

  if (!categoryData) {
    notFound();
  }

  return <CategoryDetailView category={categoryData} />;
}
