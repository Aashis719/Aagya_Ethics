"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover, shimmer } from "@/lib/animations";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "filled";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-body font-normal tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A17F4A] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-transparent border-2 border-[#A17F4A] text-[#A17F4A] hover:bg-[#A17F4A]/5 hover:shadow-[0_4px_20px_rgba(161,127,74,0.25)]",
      secondary:
        "bg-transparent border-none text-[#4A3F3A] border-b border-transparent hover:border-b-[#A17F4A] pb-1",
      filled:
        "bg-[#722F37] border-2 border-[#722F37] text-[#FFFDF9] hover:bg-[#5A252C] hover:border-[#5A252C] shadow-lg hover:shadow-xl",
    };

    const sizes = {
      sm: "px-6 py-3 text-[0.65rem]",
      md: "px-10 py-4 text-[0.72rem]",
      lg: "px-12 py-5 text-[0.78rem]",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        variants={buttonHover}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {/* Shimmer effect for primary variant */}
        {variant === "primary" && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A17F4A]/20 to-transparent"
            variants={shimmer}
            initial="initial"
          />
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
