"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { lineReveal, viewportOnce } from "@/lib/animations";

interface DividerProps {
  className?: string;
  withDiamond?: boolean;
}

export default function Divider({
  className,
  withDiamond = false,
}: DividerProps) {
  if (withDiamond) {
    return (
      <div className={cn("flex items-center gap-4 text-[#A17F4A]", className)}>
        <motion.span
          className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C9A962]/60 to-[#C9A962]/60 origin-left"
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        />
        <motion.span
          className="w-2 h-2 rotate-45 bg-[#A17F4A]"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.3 }}
        />
        <motion.span
          className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C9A962]/60 to-[#C9A962]/60 origin-right"
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "h-[1px] bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent",
        className
      )}
      variants={lineReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    />
  );
}
