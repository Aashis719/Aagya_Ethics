"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setImageLoaded(false);
    setActiveIndex((prev) => {
      const newIndex = prev + newDirection;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="space-y-4">
      {/* Main Image - Constrained height for desktop */}
      <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-auto lg:h-[65vh] lg:max-h-[600px] lg:min-h-[450px] bg-[#E8E2D8] overflow-hidden">
        {/* Loading shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E2D8] via-[#EDE8E0] to-[#E8E2D8] animate-pulse" />
        )}
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex] || "/images/products/placeholder.svg"}
              alt={`${productName} - Image ${activeIndex + 1}`}
              fill
              className={cn(
                "object-cover object-top transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority={activeIndex === 0}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => navigate(-1)}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#EDE8E0]/90 backdrop-blur-sm text-[#1A1412] hover:bg-[#EDE8E0] hover:text-[#722F37] transition-all duration-300 border border-[#A17F4A]/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#EDE8E0]/90 backdrop-blur-sm text-[#1A1412] hover:bg-[#EDE8E0] hover:text-[#722F37] transition-all duration-300 border border-[#A17F4A]/20"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 px-3 py-1.5 bg-[#EDE8E0]/90 backdrop-blur-sm text-xs text-[#5A524C] font-body tracking-wider border border-[#A17F4A]/20">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 md:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setImageLoaded(false);
                setActiveIndex(index);
              }}
              className={cn(
                "relative w-16 h-20 md:w-20 md:h-24 bg-[#E8E2D8] overflow-hidden transition-all duration-300",
                activeIndex === index
                  ? "ring-2 ring-[#A17F4A]"
                  : "ring-1 ring-[#A17F4A]/20 hover:ring-[#A17F4A]/50"
              )}
            >
              <Image
                src={image || "/images/products/placeholder.svg"}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
