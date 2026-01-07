"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { imageReveal, viewportOnce } from "@/lib/animations";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  delay?: number;
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  containerClassName,
  sizes,
  delay = 0,
}: ImageRevealProps) {
  return (
    <motion.div
      className={cn("overflow-hidden", containerClassName)}
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    </motion.div>
  );
}

// Parallax image variant
export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  parallaxOffset = 50,
}: {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  parallaxOffset?: number;
}) {
  return (
    <div className={cn("overflow-hidden", containerClassName)}>
      <motion.div
        className="w-full h-[120%] -mt-[10%]"
        initial={{ y: -parallaxOffset }}
        whileInView={{ y: parallaxOffset }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          type: "tween",
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}

