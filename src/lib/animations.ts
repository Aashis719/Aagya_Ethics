// ===== AAGYA ETHICS - Luxury Animation System =====
// Physics-based motion for a premium, refined feel

import type { Variants, Transition } from "framer-motion";

// ===== Spring Configurations =====
export const luxurySpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 25,
  mass: 1.2,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

// ===== Ease Configurations =====
export const gentleEase: Transition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.8,
};

export const luxuryEase: Transition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 1,
};

export const smoothEase: Transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.6,
};

// ===== Container Variants =====
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ===== Fade Variants =====
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxurySpring,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxurySpring,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: luxurySpring,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: luxurySpring,
  },
};

// ===== Text Reveal Variants =====
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxurySpring,
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ===== Image Reveal Variants =====
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export const imageZoom: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ===== Card Variants =====
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 4px 20px rgba(114, 47, 55, 0.08)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 50px rgba(114, 47, 55, 0.15)",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  tap: {
    y: -4,
    scale: 0.99,
    transition: {
      duration: 0.1,
    },
  },
};

// ===== Button Variants =====
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.1,
    },
  },
};

// ===== Navigation Variants =====
export const navItemHover: Variants = {
  initial: { opacity: 0.7 },
  hover: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const navUnderline: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// ===== Page Transition Variants =====
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// ===== Modal Variants =====
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: luxurySpring,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 },
  },
};

// ===== Scroll Indicator =====
export const scrollIndicator: Variants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: [0.4, 1, 0.4],
    y: [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ===== Menu Variants =====
export const menuSlide: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const menuItemStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const menuItem: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// ===== Shimmer Effect (for buttons) =====
export const shimmer: Variants = {
  initial: { x: "-100%" },
  hover: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// ===== Parallax Helper =====
export const createParallaxVariant = (offset: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y: offset,
    transition: {
      type: "tween",
      ease: "linear",
    },
  },
});

// ===== Viewport Animation Settings =====
export const viewportOnce = {
  once: true,
  margin: "-100px",
};

export const viewportRepeat = {
  once: false,
  margin: "-50px",
  amount: 0.3,
};

