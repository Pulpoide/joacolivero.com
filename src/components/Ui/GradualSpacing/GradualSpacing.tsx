// GradualSpacing.tsx
"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import clsx from "clsx";
import { forwardRef } from "react";

import styles from "./GradualSpacing.module.css";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export const GradualSpacing = forwardRef<HTMLDivElement, GradualSpacingProps>(
  (
    {
      text,
      duration = 0.5,
      delayMultiple = 0.04,
      framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      },
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={clsx(styles.container, className)} {...props}>
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={styles.char}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

GradualSpacing.displayName = "GradualSpacing";