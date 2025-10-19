"use client";

import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface MotionDivProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
      return (
        <div ref={ref} className={props.className}>
          {children}
        </div>
      );
    }

    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = "MotionDiv";

export const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.7,
    type: "spring",
    stiffness: 120,
    damping: 18,
  },
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.2 },
  transition: {
    staggerChildren: 0.1,
  },
};

export const hoverScale = {
  scale: 1.05,
  y: -5,
  transition: { duration: 0.3 },
};
