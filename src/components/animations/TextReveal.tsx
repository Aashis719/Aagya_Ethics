"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { textReveal, viewportOnce } from "@/lib/animations";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  splitBy?: "word" | "line";
}

export default function TextReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  splitBy = "word",
}: TextRevealProps) {
  const items =
    splitBy === "word" ? children.split(" ") : children.split("\n");

  return (
    <motion.div
      className={cn("overflow-visible", className)}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={textReveal}
        >
          <motion.span className="inline-block">
            {item}
            {splitBy === "word" && index < items.length - 1 && "\u00A0"}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
}

// Simpler version for single line reveals - Fixed to not clip descenders
export function LineReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "h4" | "span";
  delay?: number;
}) {
  return (
    <div className="py-1">
      <motion.div
        className={className}
        variants={{
          hidden: { 
            opacity: 0, 
            y: 30,
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
