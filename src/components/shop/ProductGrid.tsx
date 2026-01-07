"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import type { Product } from "@/data/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary font-body">
          No products found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      viewport={viewportOnce}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </motion.div>
  );
}

