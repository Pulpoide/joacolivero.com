"use client";

import { forwardRef } from "react";
import clsx from "clsx";

import styles from "./RainbowButton.module.css";

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export const RainbowButton = forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.rainbowButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";