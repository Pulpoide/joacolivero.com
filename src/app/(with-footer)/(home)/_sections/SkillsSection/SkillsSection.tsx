"use client";

import { SetStateAction, useState, useRef, useEffect, useLayoutEffect, FC } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { SkillCard } from "~/components/SkillCard";
import { skills, CATEGORIES, SkillCategory } from "~/data/skills";

import styles from "./SkillsSection.module.css";


gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: FC = () => {
	const t = useTranslations("SkillsSection");
	const tc = useTranslations("Common");
	const [currentTooltip, setCurrentTooltip] = useState<string>("");
	const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");
	const [filteredSkills, setFilteredSkills] = useState(skills);
	const [visibleCount, setVisibleCount] = useState(4);

	const hasMountedRef = useRef(false);

	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const categoryWrapperRef = useRef<HTMLDivElement>(null);
	const skillWrapperRef = useRef<HTMLDivElement>(null);
	const arrowwaveRef = useRef<HTMLDivElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);

	const handleMouseEnter = (tooltip: SetStateAction<string>) => {
		setCurrentTooltip(tooltip);
	};

	const handleMouseLeave = () => {
		setCurrentTooltip("");
	};

	const handleShowMore = () => {
		setVisibleCount((prev) => Math.min(prev + 8, filteredSkills.length));
	};

	const handleCategoryChange = (category: SkillCategory | "All") => {
		if (category === activeCategory) return;

		const newSkills = category === "All" ? skills : skills.filter((s) => s.category === category);

		if (skillWrapperRef.current) {
			gsap.killTweensOf(skillWrapperRef.current.children);

			gsap.to(skillWrapperRef.current.children, {
				opacity: 0,
				y: 20,
				scale: 0.95,
				duration: 0.25,
				stagger: 0.03,
				ease: "power2.in",
				onComplete: () => {
					setActiveCategory(category);
					setFilteredSkills(newSkills);
					setVisibleCount(4);
				},
			});
		} else {
			setActiveCategory(category);
			setFilteredSkills(newSkills);
			setVisibleCount(4);
		}
	};

	useLayoutEffect(() => {
		if (!hasMountedRef.current) {
			hasMountedRef.current = true;
			return;
		}

		if (skillWrapperRef.current?.children.length) {
			gsap.fromTo(
				skillWrapperRef.current.children,
				{ opacity: 0, y: 20, scale: 0.95 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.04, ease: "power2.out" }
			);
		}
	}, [filteredSkills]);

	useEffect(() => {
		if (
			!sectionRef.current ||
			!titleRef.current ||
			!skillWrapperRef.current ||
			!arrowwaveRef.current ||
			!descriptionRef.current
		) {
			console.warn("GSAP Aborted: One or more refs not available.");
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100",
			}
		});

		const skillChildren = skillWrapperRef.current.children;

		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
			.fromTo(categoryWrapperRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
			.fromTo(skillChildren, { y: 30, opacity: 0, stagger: 0.1 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }, "-=0.4")
			.fromTo(arrowwaveRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
			.fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<section id="tech" className="section-wrapper" ref={sectionRef}>
			<h2 className={styles.title} ref={titleRef}>
				{t("title")}
			</h2>

			<div className={styles.categoryWrapper} ref={categoryWrapperRef}>
				<button
					className={`${styles.categoryBtn} ${activeCategory === "All" ? styles.active : ""}`}
					onClick={() => handleCategoryChange("All")}
				>
					All
				</button>
				{CATEGORIES.map((cat) => (
					<button
						key={cat}
						className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ""}`}
						onClick={() => handleCategoryChange(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			<div className={styles.skillWrapper} ref={skillWrapperRef}>
				{filteredSkills.slice(0, visibleCount).map((skill) => (
					<SkillCard
						key={skill.name}
						{...skill}
						onMouseEnter={() => handleMouseEnter(skill.tooltip || t(skill.name))}
						onMouseLeave={handleMouseLeave}
					/>
				))}
			</div>

			<p className={styles.description} ref={descriptionRef} aria-live="polite">
				{currentTooltip || t("defaultDescription")}
			</p>

			{filteredSkills.length > visibleCount && (
				<div className={styles.showMoreWrapper}>
					<button className={styles.showMoreBtn} onClick={handleShowMore}>
						{tc("showMore")}
					</button>
				</div>
			)}
			<div className={styles.container} ref={arrowwaveRef} aria-hidden="true">
				<div className={styles.arrowwave}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
