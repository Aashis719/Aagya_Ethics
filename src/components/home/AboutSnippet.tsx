"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import Divider from "@/components/ui/Divider";
import { imageReveal, viewportOnce } from "@/lib/animations";

export default function AboutSnippet() {
  return (
    <section className="section-padding bg-[#EDE8E0] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-xs tracking-[0.3em] uppercase text-[#A17F4A] font-body mb-4 block">
              Our Story
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide text-[#1A1412] mb-6">
              About Aagya Ethics
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-[#3D3530] font-body font-light max-w-2xl mx-auto leading-relaxed">
              Where tradition meets elegance, and every thread tells a story 
              of craftsmanship, heritage, and modern sophistication.
            </p>
          </FadeIn>
          
          <FadeIn direction="none" delay={0.3}>
            <Divider withDiamond className="max-w-xs mx-auto mt-8" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <motion.div
              className="relative aspect-[4/5] bg-[#E0D8CC] overflow-hidden"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Image
                src="/images/hero/hero-about-aagya-ethics.png"
                alt="The essence of Aagya Ethics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-[#A17F4A]/30 pointer-events-none" />
            </motion.div>
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeIn direction="up">
              <h3 className="font-heading text-2xl md:text-3xl tracking-wide text-[#1A1412] mb-6">
                Where Tradition Meets Elegance
              </h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="text-[#3D3530] font-body font-light leading-relaxed mb-4">
                At Aagya Ethics, we believe in the power of thoughtfully curated 
                fashion. Each piece in our collection is selected with care, 
                ensuring exceptional quality and timeless design.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-[#3D3530] font-body font-light leading-relaxed mb-8">
                Based in Melbourne, Australia, we bring you premium ethnic wear 
                that celebrates the rich heritage of traditional craftsmanship 
                while embracing modern sensibilities.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mb-10">
                <Link href="/about">
                  <Button variant="primary" size="md" className="cursor-pointer">
                    Discover Our Story
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="up" delay={0.4}>
              <div className="pt-8 border-t border-[#A17F4A]/20 grid grid-cols-3 gap-8">
                <div>
                  <span className="block font-heading text-2xl md:text-3xl text-[#A17F4A]">
                    100%
                  </span>
                  <span className="text-xs text-[#5A524C] tracking-wide uppercase font-body">
                    Premium Quality
                  </span>
                </div>
                <div>
                  <span className="block font-heading text-2xl md:text-3xl text-[#A17F4A]">
                    AU
                  </span>
                  <span className="text-xs text-[#5A524C] tracking-wide uppercase font-body">
                    Based
                  </span>
                </div>
                <div>
                  <span className="block font-heading text-2xl md:text-3xl text-[#A17F4A]">
                    ♡
                  </span>
                  <span className="text-xs text-[#5A524C] tracking-wide uppercase font-body">
                    Curated
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
