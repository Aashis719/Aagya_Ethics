"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import productsData from "@/data/products.json";
import type { Product } from "@/data/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = ["Silk Kurtha", "Velvet", "Embroidered", "Wedding"];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Memoized search results - no setState in effect
  const results = useMemo(() => {
    if (query.length < 2) return [];
    
    const searchQuery = query.toLowerCase();
    const filtered = (productsData.products as Product[]).filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.subtitle.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );
    return filtered.slice(0, 4);
  }, [query]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
      onClose();
      setQuery("");
    }
  };

  const handleProductClick = () => {
    onClose();
    setQuery("");
  };

  return (
    <AnimatePresence onExitComplete={() => setQuery("")}>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-[#1A1412]/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-3xl mx-4 mt-[12vh] md:mt-[15vh]"
            initial={{ opacity: 0, y: -40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30,
              delay: 0.05 
            }}
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-px bg-gradient-to-b from-[#A17F4A]/40 via-[#A17F4A]/20 to-[#A17F4A]/40 rounded-sm" />
            
            {/* Main Modal */}
            <div className="relative bg-[#EDE8E0] shadow-2xl overflow-hidden rounded-sm">
              {/* Search Header */}
              <form onSubmit={handleSubmit}>
                <div className="relative flex items-center">
                  {/* Search Icon with glow */}
                  <div className="absolute left-6 pointer-events-none">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      <Search className="w-5 h-5 text-[#A17F4A]" strokeWidth={2} />
                    </motion.div>
                  </div>
                  
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search our collection..."
                    className="w-full pl-14 pr-14 py-6 bg-transparent text-[#1A1412] font-heading text-xl md:text-2xl placeholder:text-[#7A726C]/60 focus:outline-none tracking-wide"
                  />
                  
                  {/* Close Button */}
                  <motion.button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 p-2 text-[#5A524C] hover:text-[#722F37] transition-colors rounded-full hover:bg-[#722F37]/5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={22} strokeWidth={1.5} />
                  </motion.button>
                </div>
                
                {/* Decorative Line */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#A17F4A]/50 to-transparent" />
              </form>

              {/* Content Area */}
              <div className="max-h-[55vh] overflow-y-auto">
                {/* Search Results */}
                <AnimatePresence mode="wait">
                  {results.length > 0 && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-6"
                    >
                      <div className="mb-5">
                        <h3 className="text-xs tracking-[0.2em] uppercase text-[#A17F4A] font-body font-medium">
                          Results
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        {results.map((product, index) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.08 }}
                          >
                            <Link
                              href={`/product/${product.slug}`}
                              onClick={handleProductClick}
                              className="flex items-center gap-5 p-4 -mx-2 rounded-sm hover:bg-[#722F37]/5 transition-all duration-300 group border border-transparent hover:border-[#A17F4A]/20"
                            >
                              <div className="relative w-20 h-24 bg-[#E0D8CC] shrink-0 overflow-hidden rounded-sm">
                                <Image
                                  src={product.images[0] || "/images/products/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                  sizes="80px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-heading text-lg text-[#1A1412] group-hover:text-[#722F37] transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-[#5A524C] font-body mt-0.5">
                                  {product.subtitle}
                                </p>
                                <p className="text-base text-[#A17F4A] font-heading mt-2">
                                  {formatPrice(product.price)}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-[#A17F4A] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* View All Button */}
                      <motion.button
                        onClick={handleSubmit}
                        className="mt-6 w-full py-4 text-center text-sm tracking-[0.15em] uppercase text-[#722F37] hover:text-[#FFFDF9] font-body font-medium transition-all border border-[#722F37]/20 hover:bg-[#722F37] hover:border-[#722F37]"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        View all results
                      </motion.button>
                    </motion.div>
                  )}

                  {/* No Results */}
                  {query.length >= 2 && results.length === 0 && (
                    <motion.div
                      key="no-results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-10 text-center"
                    >
                      <p className="text-[#3D3530] font-heading text-lg">
                        No products found
                      </p>
                      <p className="text-sm text-[#7A726C] font-body mt-2">
                        Try a different search term
                      </p>
                    </motion.div>
                  )}

                  {/* Default State - Popular & Quick Links */}
                  {query.length < 2 && (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-6"
                    >
                      {/* Popular Searches */}
                      <div className="mb-8">
                        <h3 className="text-xs tracking-[0.2em] uppercase text-[#A17F4A] font-body font-medium mb-4">
                          Popular Searches
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {popularSearches.map((term, index) => (
                            <motion.button
                              key={term}
                              onClick={() => setQuery(term)}
                              className="px-5 py-2.5 text-sm font-body text-[#3D3530] bg-[#E0D8CC] hover:bg-[#722F37] hover:text-[#FFFDF9] transition-all duration-300 rounded-sm"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 + 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {term}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#A17F4A]/30 to-transparent mb-8" />

                      {/* Quick Links */}
                      <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-[#A17F4A] font-body font-medium mb-4">
                          Quick Links
                        </h3>
                        <div className="space-y-1">
                          {[
                            { href: "/shop", label: "Browse All Products" },
                            { href: "/shop?new=true", label: "New Arrivals" },
                            { href: "/about", label: "Our Story" },
                          ].map((link, index) => (
                            <motion.div
                              key={link.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 + 0.2 }}
                            >
                              <Link
                                href={link.href}
                                onClick={handleProductClick}
                                className="flex items-center justify-between py-3 px-4 -mx-4 text-[#3D3530] hover:text-[#722F37] hover:bg-[#722F37]/5 transition-all group rounded-sm"
                              >
                                <span className="font-heading text-base">{link.label}</span>
                                <ArrowRight className="w-4 h-4 text-[#A17F4A] group-hover:translate-x-2 transition-transform" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gradient-to-r from-[#E0D8CC] via-[#E0D8CC] to-[#E0D8CC] border-t border-[#A17F4A]/10">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#7A726C] font-body">
                    Press <kbd className="px-2 py-1 mx-1 bg-[#EDE8E0] text-[#5A524C] text-[10px] tracking-wider border border-[#A17F4A]/20 rounded">ESC</kbd> to close
                  </p>
                  <p className="text-xs text-[#A17F4A] font-body tracking-wide">
                    Aagya Ethics
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
