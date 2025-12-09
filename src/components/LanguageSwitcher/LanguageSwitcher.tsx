"use client";

import { useEffect, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { setUserLocale } from "~/services/locale";
import { locales, defaultLocale, type Locale } from "~/config"; 

import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [locale, setLocale] = useState<Locale>(defaultLocale);
    const t = useTranslations("LanguageSwitcher");

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const browserLang = window.navigator.language;
        let detectedFormat: Locale = defaultLocale;

        if (browserLang.startsWith("en")) {
            detectedFormat = "en";
        } else if (browserLang.startsWith("pt")) {
            detectedFormat = "pt-BR";
        } else if (browserLang.startsWith("es")) {
            detectedFormat = "es";
        }

        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get("lang");
        
        const finalLocale = (urlLang && locales.includes(urlLang as any)) 
            ? (urlLang as Locale) 
            : detectedFormat;

        setLocale(finalLocale);
        setUserLocale(finalLocale); 
        
    }, [mounted]);

    const handleOnClick = () => {
        startTransition(() => {
            const currentIndex = locales.indexOf(locale);
            const nextIndex = (currentIndex + 1) % locales.length;
            const newLocale = locales[nextIndex];

            setUserLocale(newLocale).then(() => setLocale(newLocale));
        });
    };

    if (!mounted) return null;

    return (
        <button
            className={styles.button}
            onClick={handleOnClick}
            title={t("switchLanguage")}
            aria-live="polite"
            disabled={isPending}
        >
            <img
                className={styles.flag}
                aria-hidden="true"
                src={
                    locale === "es" 
                        ? "/assets/flags/spain.avif" 
                        : locale === "en" 
                            ? "/assets/flags/uk.avif" 
                            : "/assets/flags/brazil.avif"
                }
                alt={`Switch language (Current: ${locale})`}
                height={24}
                width={24}
            />
        </button>
    );
};

export default LanguageSwitcher;