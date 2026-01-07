"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn, formatPrice } from "@/lib/utils";
import { cardHover, imageZoom, fadeInUp } from "@/lib/animations";
import type { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      className="group"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/product/${product.slug}`}>
        <motion.div
          className="bg-[#F3EDE4] overflow-hidden border border-[#A17F4A]/15 hover:border-[#A17F4A]/30 transition-colors duration-500"
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E2D8]">
            {/* Placeholder shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8E2D8] via-[#EDE8E0] to-[#E8E2D8] animate-pulse" />
            )}
            
            <motion.div
              className="relative w-full h-full"
              variants={imageZoom}
            >
              <Image
                src={product.images[0] || "/images/products/placeholder.svg"}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-opacity duration-500",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>

            {/* New Badge */}
            {product.new && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 text-[0.65rem] tracking-[0.12em] uppercase bg-[#722F37] text-[#FFFDF9] font-body font-medium">
                  New
                </span>
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Product Info */}
          <div className="p-5 md:p-6 text-center bg-[#F3EDE4]">
            <h3 className="font-heading text-lg md:text-xl tracking-wide text-[#1A1412] mb-1 group-hover:text-[#722F37] transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-xs text-[#5A524C] tracking-wide mb-3 font-body">
              {product.subtitle}
            </p>
            <p className="text-sm text-[#A17F4A] font-body font-medium">
              From {formatPrice(product.price)}
            </p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="w-8 h-px bg-[#A17F4A]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#A17F4A]" />
              <span className="w-8 h-px bg-[#A17F4A]" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
