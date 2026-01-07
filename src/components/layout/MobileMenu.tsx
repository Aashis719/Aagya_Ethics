"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Mail, ArrowRight, Music2 } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: MobileMenuProps) {
  // Lock body scroll when menu is open
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-[#1A1412]/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Panel - Slides from RIGHT */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-[#EDE8E0] lg:hidden shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#A17F4A]/15">
              <div className="flex items-center gap-0">
                {/* Kurtha Logo */}
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/hero/aagyaaa.svg"
                    alt="Aagya Ethics"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-lg tracking-[0.05em] text-[#1A1412] font-medium leading-tight">
                    AAGYA
                  </span>
                  <span className="text-[0.45rem] tracking-[0.5em] text-[#A17F4A] font-body font-medium uppercase">
                    ETHICS
                  </span>
                </div>
              </div>
              <motion.button
                className="p-2 text-[#5A524C] hover:text-[#722F37] transition-colors"
                onClick={onClose}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Navigation */}
            <motion.nav
              className="p-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { type: "spring", stiffness: 100, damping: 15 },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-4 font-heading text-2xl tracking-wide text-[#1A1412] hover:text-[#722F37] transition-colors duration-200 group border-b border-[#A17F4A]/10"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-5 h-5 text-[#A17F4A] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-[#A17F4A]/15 bg-[#E0D8CC]">
              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#A17F4A]/30 text-[#5A524C] hover:border-[#A17F4A] hover:text-[#A17F4A] transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@aagya.ethics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#A17F4A]/30 text-[#5A524C] hover:border-[#A17F4A] hover:text-[#A17F4A] transition-all"
                >
                  <Music2 size={18} />
                </a>
                <a
                  href="mailto:hello@aagyaethics.com.au"
                  className="w-10 h-10 flex items-center justify-center border border-[#A17F4A]/30 text-[#5A524C] hover:border-[#A17F4A] hover:text-[#A17F4A] transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
              
              <p className="text-sm text-[#3D3530] font-body font-light">
                Australian Owned & Operated
              </p>
              <p className="mt-1 text-xs text-[#7A726C] font-body">
                Premium Ethnic Wear
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
