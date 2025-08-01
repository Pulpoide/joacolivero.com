"use client";

import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import ArgentinaFlag from "~/components/Svg/ArgentinaFlag";
import { Button } from "~/components/Ui/Button";

import styles from "./HeroSection.module.css";


export const HeroSection = () => {
	const t = useTranslations("HeroSection");

	const positions = [
		t("position"),
		t("position2"),
		t("position3"),
		t("position4"),
	];

	const [positionIndex, setPositionIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPositionIndex((prevIndex: number) => (prevIndex + 1) % positions.length);
		}, 7000);

		return () => clearInterval(interval);
	}, [positions.length]);

	const sectionRef = useRef<HTMLElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const subtitleRef = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<SVGSVGElement | null>(null);
	const languageRef = useRef<HTMLParagraphElement | null>(null);
	const introRef = useRef<HTMLDivElement | null>(null);
	const buttonContainerRef = useRef<HTMLDivElement | null>(null);
	const actionsRef = useRef<HTMLDivElement | null>(null);
	const arrowwaveRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (
			!sectionRef.current ||
			!titleRef.current ||
			!subtitleRef.current ||
			!arrowRef.current ||
			!languageRef.current ||
			!introRef.current ||
			!buttonContainerRef.current ||
			!actionsRef.current ||
			!arrowwaveRef.current
		) {
			console.warn("GSAP Aborted: One or more refs not available.");
			return;
		}

		const tl = gsap.timeline();

		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }) // Fade in section
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6") // Title slide up and fade in
			.fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4") // Subtitle slide up and fade in
			.fromTo(arrowRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.3") // Arrow scale up and fade in
			.fromTo(languageRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.5") // Language slide in from left
			.fromTo(introRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.2 }, "-=0.4") // Intro subtitles stagger fade in and slide up
			.fromTo(buttonContainerRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3") // Button container scale up and fade in
			.fromTo(actionsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4") // Actions button slide up and fade in
			.fromTo(arrowwaveRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4"); // Arrowwave slide up and fade in

		return () => {
			tl.kill();
		};
	}, [t]);

	return (
		<section aria-labelledby="hero-title" className={styles.section} ref={sectionRef}>
			<h1 id="hero-title" className={`text-gradient ${styles.title}`} ref={titleRef}>
				Joaquín Olivero
			</h1>
			<h2 className={styles.subtitle} ref={subtitleRef}>
				{positions[positionIndex]}
			</h2>

			<svg className={styles.arrow} width="144" height="141" viewBox="0 0 144 141" fill="none"
				xmlns="http://www.w3.org/2000/svg" ref={arrowRef}>
				<path fillRule="evenodd" clipRule="evenodd"
					d="M129.189 0.0490494C128.744 0.119441 126.422 0.377545 124.03 0.635648C114.719 1.6446 109.23 2.4893 108.058 3.09936C107.119 3.56864 106.674 4.34295 106.674 5.44576C106.674 6.71281 107.424 7.51058 109.043 7.97986C110.403 8.37875 110.825 8.42567 118.87 9.52847C121.778 9.92736 124.288 10.3028 124.475 10.3732C124.663 10.4436 122.951 11.1006 120.676 11.8749C110.028 15.4414 100.412 20.7677 91.7339 27.9242C88.38 30.7164 81.6957 37.4271 79.2096 40.5009C73.8387 47.2116 69.6874 54.8139 66.5681 63.7302C65.9348 65.4665 65.3484 66.8978 65.2546 66.8978C65.1374 66.8978 63.7771 66.7336 62.2291 66.5693C52.9649 65.5134 43.1847 68.1649 34.1316 74.2186C24.7735 80.46 18.5349 87.7338 10.5371 101.742C2.53943 115.726 -1.0959 127.482 0.287874 135.014C0.89767 138.463 2.0469 140.035 3.97011 140.082C5.28352 140.105 5.37733 139.659 4.20465 139.049C3.05541 138.463 2.6567 137.9 2.32835 136.281C0.616228 128.021 6.24512 113.028 17.4325 96.1104C23.2725 87.241 28.362 81.9147 35.5622 77.1046C43.8649 71.5437 52.7069 69.033 61.1737 69.8308C64.9967 70.1828 64.6917 69.9247 64.1992 72.4822C62.2525 82.5013 63.8005 92.6378 67.9753 97.354C73.1116 103.079 81.9771 102 85.0027 95.2657C86.3395 92.2858 86.3864 87.7103 85.1434 83.9796C83.1498 78.0901 80.007 73.8197 75.4335 70.8163C73.8152 69.7604 70.4848 68.1883 69.875 68.1883C69.359 68.1883 69.4294 67.6487 70.2268 65.3257C72.3377 59.2486 75.457 52.7021 78.4122 48.244C83.2436 40.9232 91.4524 32.5701 99.1687 27.103C105.806 22.4102 113.241 18.5386 120.512 16.0045C123.772 14.8548 129.87 13.1889 130.081 13.3766C130.128 13.447 129.541 14.362 128.791 15.4414C124.78 21.0258 122.716 26.0706 122.388 30.998C122.224 33.7198 122.341 34.588 122.88 34.2595C122.998 34.1891 123.678 32.969 124.405 31.5611C126.281 27.8069 131.722 20.6738 139.579 11.6402C141.127 9.85697 142.652 7.86254 143.027 7.08823C144.552 4.03792 143.52 1.48035 140.377 0.471397C139.439 0.166366 138.102 0.0490408 134.584 0.0255769C132.074 -0.021351 129.635 0.00212153 129.189 0.0490494ZM137.117 4.92955C137.187 5.0234 136.718 5.63346 136.061 6.29045L134.865 7.48712L131.042 6.73627C128.931 6.33739 126.727 5.9385 126.14 5.8681C124.827 5.68039 124.123 5.32843 124.968 5.28151C125.296 5.28151 126.868 5.11725 128.486 4.953C131.3 4.64797 136.812 4.62451 137.117 4.92955ZM71.5168 72.5292C76.2075 74.899 79.4441 78.8175 81.3204 84.355C83.6189 91.1361 81.2266 96.8378 76.0433 96.8847C73.3227 96.9082 70.9773 95.2188 69.5936 92.2389C68.2802 89.4232 67.6938 86.5606 67.5765 82.1259C67.4593 78.3248 67.6 76.4242 68.2333 72.7403L68.4912 71.2856L69.359 71.5906C69.8515 71.7548 70.8132 72.1772 71.5168 72.5292Z"
					fill="currentColor" />
			</svg>

			<p className={styles.language} ref={languageRef}>
				{t("language")}
			</p>

			<div className={styles.buttonContainer} ref={buttonContainerRef}>
				<Button rounded="full" size="small" asChild className={styles.button}>
					<NextLink
						href="https://www.linkedin.com/in/joaquinolivero/"
						target="_blank"
						rel="noopener"
					>
						<span className={styles.availableCircle}></span>
						{t("availability")}
					</NextLink>
				</Button>
			</div>

			<div className={styles.intro} ref={introRef}>
				<p className={styles.introSubtitle}>
					{t.rich("subtitle", {
						em: (children) => <strong>{children}</strong>,
					})}
				</p>
				<p className={styles.author}>
					— {t("author")}
				</p>

				<p className={styles.introSubtitle}>
					<a href="https://www.google.com/maps/place/Villa+Carlos+Paz,+Córdoba,+Argentina/" target="_blank" rel="noopener noreferrer"
						className={styles.link}>
						{t("location")}
					</a>
					<ArgentinaFlag className={styles.flag} />
				</p>
			</div>

			<div className={styles.actions} ref={actionsRef}>
				<NextLink
					href="https://drive.google.com/file/d/1rNXZtcN3vtu76RrbPCILsKad2ujhB8qJ/view?usp=sharing"
					target="_blank"
					prefetch={true}
					passHref
				>
					<Button className={styles.actionBtn} variant="outlined">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="icon icon-tabler icons-tabler-outline icon-tabler-file-download"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M14 3v4a1 1 0 0 0 1 1h4" />
							<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
							<path d="M12 17v-6" />
							<path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
						</svg>
						{t("download")}
					</Button>
				</NextLink>
			</div>
			<CopyEmailSmallButton className={styles.copyEmailButton} />

			<div className={styles.arrowwave} ref={arrowwaveRef}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<ScrollToTopButton />
		</section>
	);
};