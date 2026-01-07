"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const promises = [
  {
    title: "Ethically Curated",
    description: "Carefully selected from artisans who share our values",
  },
  {
    title: "Premium Quality",
    description: "Only the finest fabrics and craftsmanship",
  },
  {
    title: "Australian Owned",
    description: "Proudly serving from Melbourne, Australia",
  },
];

export default function BrandPromise() {
  return (
    <section className="py-16 md:py-20 bg-[#E0D8CC] border-y border-[#A17F4A]/15">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {promises.map((promise) => (
            <motion.div
              key={promise.title}
              className="text-center"
              variants={fadeInUp}
            >
              {/* Decorative Diamond */}
              <div className="flex justify-center mb-5">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#A17F4A]" />
              </div>
              
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#1A1412] font-body font-medium mb-2">
                {promise.title}
              </h3>
              <p className="text-sm text-[#3D3530] font-body font-light leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
