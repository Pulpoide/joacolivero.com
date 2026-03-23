"use client";
import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "framer-motion";

import styles from "./GradualSpacing.module.css";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  ...props
}: GradualSpacingProps) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <div className={clsx(styles.container, className)} {...props}>
      <AnimatePresence>
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className={styles.word}>
            {word.split("").map((char) => {
              const i = charIndex++;
              return (
                <motion.span
                  key={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: i * delayMultiple }}
                  {...{ className: styles.char } as { className: string }}
                >
                  {char}
                </motion.span>
              );
            })}
            {/* Account for the space character index */}
            {wordIdx < words.length - 1 && void charIndex++}
          </span>
        ))}
      </AnimatePresence>
    </div>
  );
}