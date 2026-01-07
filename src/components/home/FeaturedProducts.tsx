"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import ProductCard from "@/components/shop/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/TextReveal";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import productsData from "@/data/products.json";
import type { Product } from "@/data/types";

export default function FeaturedProducts() {
  const featuredProducts = (productsData.products as Product[]).filter(
    (p) => p.featured
  );

  return (
    <section className="section-padding bg-[#E8E2D8]">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn direction="up">
            <span className="text-xs tracking-[0.25em] uppercase text-[#A17F4A] font-body font-medium mb-4 block">
              Curated Collection
            </span>
          </FadeIn>
          
          <LineReveal as="h2" delay={0.1}>
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide text-[#1A1412]">
              Featured Pieces
            </span>
          </LineReveal>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-[#3D3530] font-body font-light max-w-2xl mx-auto leading-relaxed">
              Discover our most coveted designs, each piece a testament to 
              exceptional craftsmanship and timeless elegance.
            </p>
          </FadeIn>
          
          <FadeIn direction="none" delay={0.3}>
            <Divider withDiamond className="max-w-xs mx-auto mt-8" />
          </FadeIn>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <FadeIn direction="up" delay={0.4} className="text-center mt-14 md:mt-20 cursor-pointer">
          <Link href="/shop">
            <Button variant="primary" size="md" className="cursor-pointer">
              View All Collection
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
