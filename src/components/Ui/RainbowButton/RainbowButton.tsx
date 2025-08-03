"use client";
import React, { forwardRef } from "react";

import clsx from "clsx";

import styles from "./RainbowButton.module.css";

export const RainbowButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
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