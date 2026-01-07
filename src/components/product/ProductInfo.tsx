"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import InquiryModal from "./InquiryModal";
import SizeGuide from "./SizeGuide";
import FadeIn from "@/components/animations/FadeIn";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/data/types";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <FadeIn direction="up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-2 block">
              {product.subtitle}
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide text-text-primary">
              {product.name}
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-2xl text-gold font-heading">
              {formatPrice(product.price)}
            </p>
          </FadeIn>
        </div>

        <Divider />

        {/* Description */}
        <FadeIn direction="up" delay={0.3}>
          <p className="text-text-secondary font-body font-light leading-relaxed">
            {product.description}
          </p>
        </FadeIn>

        {/* Details */}
        <FadeIn direction="up" delay={0.4}>
          <div>
            <h3 className="text-sm tracking-[0.15em] uppercase text-text-primary font-body mb-4">
              Details
            </h3>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-text-secondary font-body font-light"
                >
                  <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <Divider />

        {/* Size Selection */}
        <FadeIn direction="up" delay={0.5}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm tracking-[0.15em] uppercase text-text-primary font-body">
                Select Size
              </h3>
              <button
                onClick={() => setShowSizeGuide(true)}
                className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors"
              >
                <Ruler size={16} />
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <motion.button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-14 h-14 flex items-center justify-center font-body text-sm transition-all duration-200",
                    selectedSize === size
                      ? "bg-maroon text-text-light border-maroon"
                      : "bg-transparent text-text-primary border border-gold-light/50 hover:border-gold"
                  )}
                  whileTap={{ scale: 0.95 }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" delay={0.6}>
          <div className="space-y-4 pt-4">
            <Button
              variant="filled"
              size="lg"
              className="w-full"
              onClick={() => setShowInquiry(true)}
            >
              Enquire About This Product
            </Button>
            <p className="text-xs text-text-muted font-body text-center">
              We&apos;ll respond within 24-48 hours
            </p>
          </div>
        </FadeIn>

        {/* Trust Badges */}
        <FadeIn direction="up" delay={0.7}>
          <div className="pt-8 border-t border-gold-light/30 grid grid-cols-2 gap-4 text-center">
            <div className="p-4">
              <span className="block text-gold font-heading text-lg mb-1">✓</span>
              <span className="text-xs text-text-muted font-body">Premium Quality</span>
            </div>
            <div className="p-4">
              <span className="block text-gold font-heading text-lg mb-1">✈</span>
              <span className="text-xs text-text-muted font-body">Australia Wide Shipping</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Modals */}
      <InquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        product={product}
        initialSize={selectedSize}
      />
      <SizeGuide
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />
    </>
  );
}

