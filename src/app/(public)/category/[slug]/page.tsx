// src/app/(public)/category/[slug]/page.tsx
'use client';

import { use } from 'react';
import { useState } from 'react';

import SidebarFilters from '@/components/Category/SidebarFilters';
import Banner from '@/components/Category/Banner';
import TopControls from '@/components/Category/TopControls';
import ProductGrid from '@/components/Category/ProductGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { slug } = use(params); // ✅ unwrap the Promise with use()

  const [showFilters, setShowFilters] = useState(true);
  const [sort, setSort] = useState("Default Sorting");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <>
      <Banner
        title="Shop"
        breadcrumb={['Home', 'Shop', slug]}
      />

      <div className="bg-white min-h-screen px-4 py-6 lg:px-12">
        <div className="container m-auto">
          <TopControls
            onToggleSidebar={() => setShowFilters(!showFilters)}
            sortOptions={["Default Sorting", "Price: Low to High", "Price: High to Low"]}
            currentSort={sort}
            onSortChange={setSort}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          <section className="flex flex-col md:flex-row py-8 gap-6">
            {showFilters && (
              <div className="w-full md:w-1/4 lg:w-1/5">
                <SidebarFilters />
              </div>
            )}

            <div className="flex-1">
              <ProductGrid
                viewMode={viewMode}
                sort={sort}
                categorySlug={slug}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
