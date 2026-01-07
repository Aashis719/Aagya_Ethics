"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInDown } from "@/lib/animations";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidBg = variant === "solid" || isScrolled;

  return (
    <>
      {/* Header - Fully transparent when not scrolled */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          showSolidBg
            ? "bg-[#EDE8E0]/95 backdrop-blur-md shadow-sm md:w-[76%]  mx-auto md:mt-2 md:rounded-lg "
            : "md:bg-transparent bg-[#EDE8E0]/65  w-[95%] md:w-full mx-auto md:rounded-none rounded-lg mt-2 md:mt-0"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <nav className="container-luxury container-navbar">
          <div className="flex items-center justify-between h-16 lg:h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                className="flex items-center gap-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-8 h-8 lg:w-9 lg:h-9 md:w-10 md:h-10 cursor-pointer">
                  <Image
                    src="/images/hero/aagyaaa.svg"
                    alt="Aagya Ethics"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm lg:text-base md:text-lg tracking-[0em] text-[#1A1412] font-medium leading-tight">
                    AAGYA
                  </span>
                  <span className="text-[0.4rem] lg:text-[0.45rem] md:text-[0.5rem] tracking-[0.4em] text-[#A17F4A] font-body font-medium uppercase">
                    ETHICS
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Center */}
            <motion.ul
              className="hidden lg:flex items-center gap-8 xl:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.href} variants={fadeInDown}>
                  <NavLink href={item.href} isScrolled={showSolidBg}>{item.label}</NavLink>
                </motion.li>
              ))}
            </motion.ul>

            {/* Right Actions */}
            <div className="flex items-center gap-0.5">
              {/* Search Button */}
              <motion.button
                className={cn(
                  "relative p-2 lg:p-2.5 rounded-full transition-all duration-300 cursor-pointer",
                  showSolidBg 
                    ? "text-[#1A1412] hover:text-[#A17F4A]"
                    : "text-[#1A1412] md:text-white hover:text-[#A17F4A]",
                  "hover:bg-[#A17F4A]/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={18} className="lg:w-5 lg:h-5" strokeWidth={2} />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className={cn(
                  "lg:hidden p-2 lg:p-2.5 rounded-full transition-all duration-300",
                  showSolidBg
                    ? "text-[#1A1412] hover:text-[#A17F4A]"
                    : "text-[#1A1412] md:text-white hover:text-[#A17F4A]",
                  "hover:bg-[#A17F4A]/10"
                )}
                onClick={() => setIsMobileMenuOpen(true)}
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Menu size={20} className="lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
              </motion.button>
            </div>
          </div>
        </nav>
        
        {/* Subtle bottom accent when scrolled */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500",
          "bg-gradient-to-r from-transparent via-[#A17F4A]/25 to-transparent",
          showSolidBg ? "opacity-100" : "opacity-0"
        )} />
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

// Navigation Link with underline animation
function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <Link href={href} className="group relative py-2">
      <span className={cn(
        "text-[0.75rem]  uppercase font-body font-medium transition-colors duration-300  tracking-wide leading-[1.2] ",
        isScrolled 
          ? "text-[#1A1412] group-hover:text-[#C9A962]"
          : "text-white group-hover:text-[#C9A962] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      )}>
        {children}
      </span>
      {/* Animated underline */}
      <span className="absolute bottom-0 left-0 w-full h-px bg-[#C9A962] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
    </Link>
  );
}
