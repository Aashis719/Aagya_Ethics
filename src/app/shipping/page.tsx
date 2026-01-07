"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Truck, RefreshCcw, Package, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/TextReveal";

const shippingRates = [
  { region: "Metro Areas (Sydney, Melbourne, Brisbane)", standard: "$12", express: "$25", time: "3-5 days" },
  { region: "Regional Australia", standard: "$15", express: "$30", time: "5-7 days" },
  { region: "Remote Areas", standard: "$20", express: "$40", time: "7-10 days" },
  { region: "International", standard: "From $45", express: "Contact Us", time: "10-20 days" },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping within Australia typically takes 3-7 business days depending on your location. Express shipping is available for faster delivery (1-3 business days for metro areas).",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to select international destinations. International shipping times vary by location (typically 10-20 business days). Please contact us for specific rates and availability.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is dispatched, you will receive an email with your tracking number and a link to track your package. You can also contact us directly for order status updates.",
  },
  {
    question: "What if my item arrives damaged?",
    answer: "We take great care in packaging our products. However, if your item arrives damaged, please contact us within 48 hours of delivery with photos of the damage. We will arrange a replacement or refund.",
  },
  {
    question: "Can I change my delivery address after ordering?",
    answer: "Please contact us as soon as possible if you need to change your delivery address. We can update the address if your order has not been dispatched yet.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of delivery for unworn items in original condition with tags attached. Items must be returned in their original packaging. Please note that sale items are final sale.",
  },
];

const highlights = [
  { icon: Truck, title: "Australia Wide", description: "Shipping to all states and territories" },
  { icon: Package, title: "Secure Packaging", description: "Premium packaging to protect your order" },
  { icon: Clock, title: "Fast Processing", description: "Orders processed within 1-2 business days" },
  { icon: RefreshCcw, title: "Easy Returns", description: "14-day return policy on eligible items" },
];

export default function ShippingPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen bg-cream pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-pearl border-b border-gold-light/20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
                  Information
                </span>
              </FadeIn>

              <LineReveal as="h1" delay={0.1}>
                <span className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-text-primary">
                  Shipping & Returns
                </span>
              </LineReveal>

              <FadeIn direction="up" delay={0.2}>
                <p className="mt-8 text-lg text-text-secondary font-body font-light leading-relaxed">
                  Everything you need to know about getting your order delivered 
                  and our hassle-free return process.
                </p>
              </FadeIn>

              <FadeIn direction="none" delay={0.3}>
                <Divider withDiamond className="max-w-xs mx-auto mt-10" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-cream border-b border-gold-light/20">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {highlights.map((item, index) => (
                <FadeIn key={item.title} direction="up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-sm font-heading text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted font-body">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Shipping Rates */}
        <section className="section-padding">
          <Container>
            <div className="text-center mb-12">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
                  Delivery
                </span>
              </FadeIn>
              <LineReveal as="h2" delay={0.1}>
                <span className="font-heading text-2xl md:text-3xl tracking-wide text-text-primary">
                  Shipping Rates
                </span>
              </LineReveal>
            </div>

            <FadeIn direction="up" delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead>
                    <tr className="border-b border-gold-light">
                      <th className="py-4 px-4 text-left font-normal tracking-wide text-text-muted">
                        Region
                      </th>
                      <th className="py-4 px-4 text-center font-normal tracking-wide text-text-muted">
                        Standard
                      </th>
                      <th className="py-4 px-4 text-center font-normal tracking-wide text-text-muted">
                        Express
                      </th>
                      <th className="py-4 px-4 text-center font-normal tracking-wide text-text-muted">
                        Estimated Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {shippingRates.map((row, index) => (
                      <tr
                        key={row.region}
                        className={index % 2 === 0 ? "bg-pearl" : "bg-cream"}
                      >
                        <td className="py-4 px-4 text-text-primary">
                          {row.region}
                        </td>
                        <td className="py-4 px-4 text-center text-text-secondary">
                          {row.standard}
                        </td>
                        <td className="py-4 px-4 text-center text-text-secondary">
                          {row.express}
                        </td>
                        <td className="py-4 px-4 text-center text-text-muted">
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="mt-6 text-sm text-text-muted font-body text-center">
                * Free standard shipping on orders over $300 AUD within Australia
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* Returns Policy */}
        <section className="section-padding bg-pearl">
          <Container size="narrow">
            <div className="text-center mb-12">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
                  Our Guarantee
                </span>
              </FadeIn>
              <LineReveal as="h2" delay={0.1}>
                <span className="font-heading text-2xl md:text-3xl tracking-wide text-text-primary">
                  Returns Policy
                </span>
              </LineReveal>
            </div>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-cream p-8 md:p-12 border border-gold-light/30 space-y-6">
                <div>
                  <h3 className="font-heading text-lg text-text-primary mb-3">
                    14-Day Returns
                  </h3>
                  <p className="text-text-secondary font-body font-light leading-relaxed">
                    We want you to love your purchase. If you&apos;re not completely satisfied, 
                    you may return eligible items within 14 days of delivery for a full refund 
                    or exchange.
                  </p>
                </div>

                <Divider />

                <div>
                  <h3 className="font-heading text-lg text-text-primary mb-3">
                    Return Conditions
                  </h3>
                  <ul className="space-y-2 text-text-secondary font-body font-light">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 bg-gold rotate-45 flex-shrink-0" />
                      Items must be unworn, unwashed, and in original condition
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 bg-gold rotate-45 flex-shrink-0" />
                      All original tags must be attached
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 bg-gold rotate-45 flex-shrink-0" />
                      Items must be returned in original packaging
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 bg-gold rotate-45 flex-shrink-0" />
                      Sale items are final sale and cannot be returned
                    </li>
                  </ul>
                </div>

                <Divider />

                <div>
                  <h3 className="font-heading text-lg text-text-primary mb-3">
                    How to Return
                  </h3>
                  <ol className="space-y-2 text-text-secondary font-body font-light">
                    <li>1. Contact us at hello@aagyaethics.com.au to initiate your return</li>
                    <li>2. We&apos;ll provide you with a return shipping label</li>
                    <li>3. Pack your item securely and drop it off at the nearest post office</li>
                    <li>4. Once received and inspected, we&apos;ll process your refund within 5-7 business days</li>
                  </ol>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <Container size="narrow">
            <div className="text-center mb-12">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
                  Questions
                </span>
              </FadeIn>
              <LineReveal as="h2" delay={0.1}>
                <span className="font-heading text-2xl md:text-3xl tracking-wide text-text-primary">
                  Frequently Asked Questions
                </span>
              </LineReveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} direction="up" delay={index * 0.05}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gold-light/30 bg-pearl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-heading text-text-primary pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gold"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-text-secondary font-body font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

