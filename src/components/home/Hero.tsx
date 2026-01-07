"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  staggerContainer,
  textReveal,
  imageReveal,
} from "@/lib/animations";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen md:min-h-screen lg:min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[110%]"
        style={{ y: imageY, scale: imageScale }}
      >
        <motion.div
          className="relative w-full h-full"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/hero/aagya-ethics.png"
            alt="Elegant model wearing premium kurtha from Aagya Ethics"
            fill
            priority
            quality={95}
            className="object-cover object-[center_10%]"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Gradient Overlays - Subtle and balanced */}
      {/* Desktop: Minimal left gradient - just enough for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EDE8E0]/95 via-[#6b6864]/25 via-30% to-transparent hidden lg:block" />
      
      {/* Desktop: Very subtle top gradient for navbar */}
      <div className="absolute hidden md:block inset-0 bg-gradient-to-b from-[#6f6c68]/35 via-transparent via-15% to-transparent lg:block" />
      <div className="absolute md:hidden  inset-0 bg-gradient-to-b from-[white]/95  via-15% via-transparent to-transparent lg:hidden" />
      
      {/* Mobile: Stronger bottom gradient for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/85 via-[#1A1412]/35 via-50% to-transparent lg:hidden" />
      
      {/* Mobile: Top gradient for navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1412]/60 via-transparent via-20% to-transparent lg:hidden" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end lg:justify-center">
        {/* Main Content */}
        <div className="pb-16 lg:pb-0 pt-24 lg:pt-20">
          <div className="container-luxury w-full">
            <motion.div
              className="max-w-md lg:max-w-lg mb-15 md:mb-0"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Tagline with refined styling - removed dash */}
              <motion.div
                className="mb-6 lg:mb-8 md:mb-10"
                variants={textReveal}
                transition={{ delay: 0.4 }}
              >
                <h1 className="relative">
                  {/* Main heading */}
                  <span className="block font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-[1.1] italic mb-2 lg:mb-3 text-white lg:text-[#1A1412]">
                    Elegance Woven
                  </span>
                  
                  {/* Subtitle with gold accent and decorative element */}
                  <span className="block font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-[1.1] italic">
                    <span className="relative inline-block">
                      <span className="text-[#C9A962] md:text-[#722f37]">in Every Thread</span>
                      {/* Small decorative dot */}
                      <motion.span
                        className="absolute -right-3 top-0 w-1.5 h-1.5 bg-[#C9A962] rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      />
                    </span>
                  </span>
                </h1>
              </motion.div>

              {/* Description - tighter spacing */}
              <motion.p
                className="text-sm md:text-base lg:text-lg font-body font-light leading-relaxed mb-6 lg:mb-8 md:mb-10 max-w-sm text-white/90 lg:text-[#4A3F3A]"
                variants={textReveal}
                transition={{ delay: 0.6 }}
              >
                Premium ethnic wear curated for the modern woman. 
                Discover our collection of exquisitely crafted kurthas.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-row items-center gap-2.5 md:gap-4"
                variants={textReveal}
                transition={{ delay: 0.75 }}
              >
                <Link href="/shop" className="flex-1 hidden md:block sm:flex-none">
                  <motion.button
                    className="w-full sm:w-auto px-4 sm:px-7 md:px-8 py-3 md:py-3.5 lg:py-4 bg-[#722F37]  cursor-pointer text-white text-[0.65rem] sm:text-xs md:text-sm tracking-[0.1em] uppercase font-body font-medium transition-all duration-300 hover:bg-[#5A252C] shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Collection
                  </motion.button>
                </Link>
                <Link href="/shop" className="flex-1 sm:flex-none md:hidden">
                  <motion.button
                    className="w-full sm:w-auto px-4 sm:px-7 md:px-8 py-3 md:py-3.5 lg:py-4 border-[0.3px] border-[#722F37] hover:border-[#5A252C] bg-[#722F37] cursor-pointer text-white text-[0.65rem] sm:text-xs md:text-sm tracking-[0.1em] uppercase font-body font-medium transition-all duration-300 hover:bg-[#5A252C] shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore
                  </motion.button>
                </Link>
                
                <Link href="/about" className="flex-1 sm:flex-none">
                  <motion.button
                    className="w-full sm:w-auto group flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-7 md:px-8 py-3 md:py-3.5 lg:py-4 border-[0.3px] border-white lg:border-[#722F37] cursor-pointer backdrop-blur-sm text-[0.65rem] sm:text-xs md:text-sm tracking-[0.1em] uppercase font-body font-medium transition-all duration-300 hover:shadow-md text-white lg:text-[#1A1412] lg:hover:text-white hover:bg-[#722F37] lg:hover:bg-[#722F37]"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="whitespace-nowrap">Our Story</span>
                    <ArrowRight size={12} className="text-[#C9A962] group-hover:text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Gold Line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A17F4A]/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      />
    </section>
  );
}
