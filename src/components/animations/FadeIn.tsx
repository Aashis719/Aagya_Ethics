"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  viewportOnce,
} from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const directionVariants: Record<Direction, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  none: fadeIn,
};

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration,
  once = true,
}: FadeInProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, margin: "-50px" }}
      transition={{
        delay,
        ...(duration && { duration }),
      }}
    >
      {children}
    </motion.div>
  );
}

