"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Check, Loader2, Sparkles } from "lucide-react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/data/types";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type InquiryForm = z.infer<typeof inquirySchema>;

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  initialSize?: string | null;
}

export default function InquiryModal({
  isOpen,
  onClose,
  product,
  initialSize = null,
}: InquiryModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [selectedSize, setSelectedSize] = useState<string | null>(initialSize);

  // Sync with initialSize when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedSize(initialSize);
    }
  }, [isOpen, initialSize]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      message: `Hi, I'm interested in the ${product.name}. `,
    },
  });

  const onSubmit = async (data: InquiryForm) => {
    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Inquiry submitted:", { 
      ...data, 
      product: product.name,
      size: selectedSize 
    });
    
    setStatus("success");
    
    // Reset after delay
    setTimeout(() => {
      setStatus("idle");
      reset();
      setSelectedSize(null);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (status !== "loading") {
      setStatus("idle");
      reset();
      onClose();
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose} 
      title="Enquire About This Product"
      size="lg"
    >
      {status === "success" ? (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#2D5A3D] to-[#4A7C59] flex items-center justify-center shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            <Check className="w-10 h-10 text-white" strokeWidth={2.5} />
          </motion.div>
          <h3 className="font-heading text-2xl text-text-primary mb-3">
            Inquiry Sent Successfully!
          </h3>
          <p className="text-text-secondary font-body font-light max-w-sm mx-auto">
            Thank you for your interest. Our team will get back to you within 24-48 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Desktop: Two Column Layout */}
          <div className="lg:grid lg:grid-cols-5 lg:gap-8">
            
            {/* Left Column - Product Info (Desktop) */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-0 space-y-6">
                {/* Product Image */}
                <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
                  <Image
                    src={product.images[0] || "/images/products/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                    sizes="250px"
                  />
                  {/* Gold Corner Accent */}
                  <div className="absolute top-0 left-0 w-12 h-12">
                    <div className="absolute top-0 left-0 w-full h-px bg-gold" />
                    <div className="absolute top-0 left-0 h-full w-px bg-gold" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-gold" />
                    <div className="absolute bottom-0 right-0 h-full w-px bg-gold" />
                  </div>
                </div>

                {/* Product Details */}
                <div className="text-center">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-body mb-2">
                    {product.subtitle}
                  </p>
                  <h3 className="font-heading text-xl text-text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gold font-heading">
                    {formatPrice(product.price)}
                  </p>
                </div>

                {/* Selected Size Badge (Desktop) */}
                {selectedSize && (
                  <motion.div 
                    className="flex items-center justify-center gap-2 py-3 bg-maroon/5 border border-maroon/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Sparkles size={14} className="text-gold" />
                    <span className="text-sm text-text-primary font-body">
                      Size <span className="font-medium">{selectedSize}</span> selected
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3 space-y-5">
              
              {/* Mobile: Product Info Card */}
              <div className="lg:hidden p-4 bg-pearl border border-gold-light/30 flex items-center gap-4">
                <div className="relative w-16 h-20 bg-ivory shrink-0 overflow-hidden">
                  <Image
                    src={product.images[0] || "/images/products/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-body mb-0.5">Enquiring about:</p>
                  <p className="font-heading text-base text-text-primary">{product.name}</p>
                  <p className="text-sm text-gold">{formatPrice(product.price)}</p>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block mb-3 text-sm font-body font-medium tracking-wide text-text-primary">
                  Preferred Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <motion.button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                      className={cn(
                        "relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center",
                        "font-body text-sm md:text-base transition-all duration-300",
                        "border",
                        selectedSize === size
                          ? "bg-maroon text-text-light border-maroon shadow-md"
                          : "bg-pearl text-text-primary border-gold-light/50 hover:border-gold hover:bg-ivory"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {size}
                      {/* Selection Indicator */}
                      {selectedSize === size && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        >
                          <Check size={10} className="text-text-primary" strokeWidth={3} />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="mt-2 text-xs text-text-muted font-body">
                    Tap to select your preferred size
                  </p>
                )}
              </div>

              {/* Decorative Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold-light font-body">Your Details</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent" />
              </div>

              {/* Form Fields - Desktop: Two Columns */}
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    id="name"
                    {...register("name")}
                    error={errors.name?.message}
                    placeholder="Your full name"
                  />

                  <Input
                    label="Email Address"
                    id="email"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                    placeholder="your@email.com"
                  />
                </div>

                <Input
                  label="Phone (Optional)"
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+61 xxx xxx xxx"
                />

                <Textarea
                  label="Your Message"
                  id="message"
                  {...register("message")}
                  error={errors.message?.message}
                  placeholder="Tell us about your inquiry, any customization requests, or questions..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="filled"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
                <p className="mt-3 text-xs text-text-muted font-body text-center">
                  We&apos;ll respond within 24-48 hours • No obligation
                </p>
              </div>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
