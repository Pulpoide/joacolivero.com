"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

import styles from "./TypewriterQuote.module.css";

type Quote = { text: string; author: string };

type Phase = "typing" | "waiting" | "exiting";

const TYPING_SPEED = 70;
const WAIT_DURATION = 5000;
const EXIT_DURATION = 300;

export const TypewriterQuote = () => {
  const locale = useLocale();
  const t = useTranslations("HeroSection");
  const quotes = t.raw("quotes") as Quote[];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [authorVisible, setAuthorVisible] = useState(false);
  const [announcedText, setAnnouncedText] = useState("");

  const textRef = useRef<HTMLSpanElement>(null);
  const charIndexRef = useRef(0);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const waitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!quotes.length) return;

    const quote = quotes[currentQuoteIndex];
    if (!quote) return;

    charIndexRef.current = 0;

    if (textRef.current) {
      textRef.current.textContent = "";
    }

    setPhase("typing");
    setAuthorVisible(false);

    typingIntervalRef.current = setInterval(() => {
      if (charIndexRef.current < quote.text.length) {
        if (textRef.current) {
          textRef.current.textContent += quote.text[charIndexRef.current];
        }
        charIndexRef.current += 1;
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }

        setPhase("waiting");
        setAuthorVisible(true);
        setAnnouncedText(quote.text);

        waitTimeoutRef.current = setTimeout(() => {
          setPhase("exiting");
          setAuthorVisible(false);

          exitTimeoutRef.current = setTimeout(() => {
            setCurrentQuoteIndex(
              (prev) => (prev + 1) % quotes.length,
            );
          }, EXIT_DURATION);
        }, WAIT_DURATION);
      }
    }, TYPING_SPEED);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      if (waitTimeoutRef.current) {
        clearTimeout(waitTimeoutRef.current);
      }
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- quotes is derived from t.raw() which is stable per locale; adding it to deps would re-run every render since t.raw() returns a new reference
  }, [currentQuoteIndex, locale]);

  if (!quotes.length) return null;

  const currentQuote = quotes[currentQuoteIndex];
  if (!currentQuote) return null;

  return (
    <div
      className={clsx(
        styles.container,
        phase === "exiting" && styles.exiting,
      )}
    >
      <p className={styles.text}>
        <span ref={textRef} /><span className={styles.cursor} aria-hidden="true">|</span>
      </p>

      <span className={styles.srOnly} aria-live="polite">
        {announcedText}
      </span>

      <div
        className={clsx(
          styles.authorWrapper,
          authorVisible ? styles.authorVisible : styles.authorHidden,
        )}
      >
        <p className={styles.author}>
          — {currentQuote.author}
        </p>
      </div>
    </div>
  );
};
