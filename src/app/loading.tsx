"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <span className="font-heading text-2xl tracking-[0.3em] text-text-primary">
            AAGYA
          </span>
          <span className="text-[0.65rem] tracking-[0.35em] text-gold font-body font-normal uppercase">
            Ethics
          </span>
        </div>

        {/* Loading Animation */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-gold rounded-full"
              animate={{
                y: [-4, 4, -4],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

