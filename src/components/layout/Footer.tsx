"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Music2  } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=kurtha", label: "Kurthas" },
    { href: "/shop?new=true", label: "New Arrivals" },
  ],
  company: [
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact Us" },
    { href: "/shipping", label: "Shipping & Returns" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#722F37] text-[#FFFDF9]">
      {/* Main Footer */}
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <FadeIn direction="up" className="lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-heading text-2xl tracking-[0.25em] text-[#FFFDF9] font-medium">
                AAGYA
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] text-[#C9A962] font-body font-normal uppercase -mt-0.5">
                Ethics
              </span>
            </div>
            <p className="mt-6 text-sm text-[#FFFDF9]/80 font-body font-light leading-relaxed max-w-xs">
              Elegance woven in every thread. Premium ethnic wear curated for
              the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={18} />}
                label="Instagram"
              />
              <SocialLink
                href="https://www.tiktok.com/@aagya.ethics"
                icon={<Music2 size={18} />}
                label="Tiktok"
              />
              <SocialLink
                href="mailto:hello@aagyaethics.com.au"
                icon={<Mail size={18} />}
                label="Email"
              />
            </div>
          </FadeIn>

          {/* Shop Links */}
          <FadeIn direction="up" delay={0.1}>
            <h3 className="text-sm tracking-[0.18em] uppercase text-[#C9A962] font-body font-medium mb-6">
              SHOP
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Company Links */}
          <FadeIn direction="up" delay={0.2}>
            <h3 className="text-sm tracking-[0.18em] uppercase text-[#C9A962] font-body font-medium mb-6">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="up" delay={0.3}>
            <h3 className="text-sm tracking-[0.18em] uppercase text-[#C9A962] font-body font-medium mb-6">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#FFFDF9]/80">
                <MapPin size={16} className="mt-1 shrink-0 text-[#C9A962]" />
                <span>Rockdale , Sydney<br />Australia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#FFFDF9]/80">
                <Mail size={16} className="shrink-0 text-[#C9A962]" />
                <a
                  href="mailto:hello@aagyaethics.com.au"
                  className="hover:text-[#C9A962] transition-colors"
                >
                  hello@aagyaethics.com.au
                </a>
              </li>
            </ul>
          </FadeIn>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-[#FFFDF9]/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#FFFDF9]/50 font-body">
              © 2025 Aagya Ethics. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#FFFDF9]/50 hover:text-[#C9A962] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[#FFFDF9]/80 hover:text-[#C9A962] transition-colors duration-200 font-body font-light"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center border border-[#FFFDF9]/20 text-[#FFFDF9]/80 hover:border-[#C9A962] hover:text-[#C9A962] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
