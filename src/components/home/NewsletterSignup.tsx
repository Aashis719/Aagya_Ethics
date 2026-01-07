"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="section-padding bg-maroon relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container size="narrow" className="relative z-10">
        <div className="text-center">
          <FadeIn direction="up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
              Stay Connected
            </span>
          </FadeIn>

          <LineReveal as="h2" delay={0.1}>
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide text-text-light">
              Join Our World
            </span>
          </LineReveal>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-text-light/70 font-body font-light max-w-md mx-auto">
              Be the first to discover new arrivals, exclusive offers, and 
              styling inspiration delivered to your inbox.
            </p>
          </FadeIn>

          {/* Newsletter Form */}
          <FadeIn direction="up" delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={cn(
                    "w-full px-6 py-4 pr-14 bg-transparent border font-body font-light text-text-light",
                    "placeholder:text-text-light/40 transition-all duration-300",
                    "focus:outline-none ",
                    status === "success"
                      ? "border-green-400"
                      : "border-gold/50 focus:border-gold "
                  )}
                  disabled={status === "loading" || status === "success"}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 p-3",
                    "text-gold hover:text-text-light transition-colors duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer "
                  )}
                  aria-label="Subscribe"
                >
                  {status === "success" ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Check size={20} className="text-green-400" />
                    </motion.span>
                  ) : status === "loading" ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send size={20} />
                    </motion.span>
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <motion.p
                  className="mt-4 text-sm text-green-400 font-body"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Welcome to Aagya Ethics! Check your inbox soon.
                </motion.p>
              )}
            </form>
          </FadeIn>

          {/* Privacy Note */}
          <FadeIn direction="up" delay={0.4}>
            <p className="mt-6 text-xs text-text-light/40 font-body">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

