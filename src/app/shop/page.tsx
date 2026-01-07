"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import ProductGrid from "@/components/shop/ProductGrid";
import Filters from "@/components/shop/Filters";
import FadeIn from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/TextReveal";
import productsData from "@/data/products.json";
import type { Product } from "@/data/types";

// Get all unique sizes from products
const allSizes = Array.from(
  new Set(
    (productsData.products as Product[]).flatMap((p) => p.sizes)
  )
).sort((a, b) => {
  const order = ["XS", "S", "M", "L", "XL", "XXL"];
  return order.indexOf(a) - order.indexOf(b);
});

export default function ShopPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const showNew = searchParams.get("new") === "true";
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // Sync local search with URL params
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const filteredAndSortedProducts = useMemo(() => {
    let products = productsData.products as Product[];

    // Filter by search query
    if (localSearchQuery) {
      const query = localSearchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Filter by new arrivals
    if (showNew) {
      products = products.filter((p) => p.new);
    }

    // Filter by size
    if (selectedSize) {
      products = products.filter((p) => p.sizes.includes(selectedSize));
    }

    // Sort
    switch (sortBy) {
      case "newest":
        products = [...products].sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case "price-low":
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case "featured":
      default:
        products = [...products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return products;
  }, [localSearchQuery, showNew, selectedSize, sortBy]);

  const clearSearch = () => {
    setLocalSearchQuery("");
    // Update URL without search param
    window.history.pushState({}, "", "/shop");
  };

  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen bg-[#EDE8E0] pt-24 md:pt-28">
        {/* Page Header */}
        <section className="py-12 md:py-20 bg-[#E0D8CC] border-b border-[#A17F4A]/15">
          <Container>
            <div className="text-center">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-[#A17F4A] font-body mb-4 block">
                  {localSearchQuery ? "Search Results" : showNew ? "New Arrivals" : "Our Collection"}
                </span>
              </FadeIn>

              <LineReveal as="h1" delay={0.1}>
                <span className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#1A1412]">
                  {localSearchQuery ? `"${localSearchQuery}"` : showNew ? "New Arrivals" : "Shop"}
                </span>
              </LineReveal>

              <FadeIn direction="up" delay={0.2}>
                <p className="mt-6 text-[#3D3530] font-body font-light max-w-xl mx-auto">
                  {localSearchQuery 
                    ? `Showing results for your search`
                    : showNew
                    ? "Discover our latest additions to the collection"
                    : "Explore our curated collection of premium ethnic wear. Each piece tells a story of craftsmanship and elegance."}
                </p>
              </FadeIn>

              <FadeIn direction="none" delay={0.3}>
                <Divider withDiamond className="max-w-xs mx-auto mt-8" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Products Section */}
        <section className="section-padding">
          <Container>
            {/* Active Search Badge */}
            {localSearchQuery && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#722F37]/10 border border-[#722F37]/20 text-[#722F37]">
                  <span className="text-sm font-body">
                    Search: <span className="font-medium">{localSearchQuery}</span>
                  </span>
                  <button
                    onClick={clearSearch}
                    className="p-0.5 hover:bg-[#722F37]/10 rounded-full transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Filters */}
            <Filters
              sizes={allSizes}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {/* Product Count */}
            <div className="py-6">
              <p className="text-sm text-[#5A524C] font-body">
                {filteredAndSortedProducts.length === 0
                  ? "No products found"
                  : `Showing ${filteredAndSortedProducts.length} ${filteredAndSortedProducts.length === 1 ? "product" : "products"}`}
              </p>
            </div>

            {/* Products Grid or Empty State */}
            {filteredAndSortedProducts.length > 0 ? (
              <ProductGrid products={filteredAndSortedProducts} />
            ) : (
              <div className="text-center py-16">
                <p className="font-heading text-2xl text-[#1A1412] mb-4">
                  No products found
                </p>
                <p className="text-[#5A524C] font-body font-light mb-8">
                  {localSearchQuery 
                    ? `We couldn't find any products matching "${localSearchQuery}"`
                    : "Try adjusting your filters"}
                </p>
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 border border-[#A17F4A] text-[#A17F4A] hover:bg-[#A17F4A] hover:text-[#FFFDF9] transition-colors font-body text-sm tracking-wider uppercase"
                >
                  View All Products
                </button>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
