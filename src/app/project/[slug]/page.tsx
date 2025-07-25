import React from "react";

import NextLink from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { Link } from "~/components/Ui/Link";
import { projects } from "~/data/projects";
import { getPrevAndNextProjectSlug, getProjectBySlug } from "~/helpers/get-projects";

import styles from "./page.module.css";


export const dynamic = "force-dynamic";

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	
	if (!project) {
		return notFound();
	}

	return {
		title: `Joaquín Olivero - Proyecto | ${project.name}`,
		description: project.description,
	};
}

export function generateStaticParams() {
	return projects.map(({ slug }) => ({
		params: { slug },
	}));
}

export default async function Project({ params }: Props) {
	const { slug } = await params;
	const project = getProjectBySlug(slug)!;

	const { index, name, description, mobileImages, desktopImages, links, tags } = project;

	const [prevProjectSlug, nextProjectSlug] = getPrevAndNextProjectSlug(index);
	const t = await getTranslations("ProjectsSection");

	const renderDescription = (text: string) => {
		return text.split("\n").map((item, key) => {
			return <React.Fragment key={key}>
				<div style={{ marginBottom: "0.75rem" }}>{item}</div>
			</React.Fragment>;
		});
	};

	return (
		<>
			<main className={styles.wrapper}>
				<Link href="/">{t("home")}</Link>
				<div className={styles.topWrapper}>
					<section className={styles.detailsSection}>
						<h1 className={styles.title}>{name}</h1>
						<div>{renderDescription(t(description))}</div>
						<div className={styles.tagsWrapper}>
							{tags.map((tag) => (
								<span key={tag} className={styles.tagPill}>
                                    {tag}
                                </span>
							))}
						</div>
						<div className={styles.linksWrapper}>
							{links.map(({ url, label }, index) => (
								<Link key={index} href={url} target="_blank">
									{t(label)}
								</Link>
							))}
						</div>
					</section>
					<section className={styles.mobileImages}>
						{mobileImages.map((url, index) => (
							<figure key={index}>
								<img
									className={styles.image}
									src={url}
									alt={`Captura de pantalla en móvil #${++index} de ${name}`}
									width={600}
									height={1123}
									loading="eager"
								/>
							</figure>
						))}
					</section>
				</div>
				<section className={styles.desktopImages}>
					{desktopImages.map((url, index) => (
						<figure key={index}>
							<img
								className={styles.image}
								src={url}
								alt={`Captura de pantalla en escritorio #${++index} de ${name}`}
								width={1400}
								height={787}
								loading="lazy"
								decoding="async"
							/>
						</figure>
					))}
				</section>
			</main>
			<nav className={styles.nav}>
				<NextLink
					data-text={t("previous")}
					className={styles.navLink}
					href={`/project/${prevProjectSlug}`}
				>
					{t("previous")}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M15 6l-6 6l6 6" />
					</svg>
				</NextLink>
				<NextLink
					data-text={t("next")}
					className={styles.navLink}
					href={`/project/${nextProjectSlug}`}
				>
					{t("next")}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M9 6l6 6l-6 6" />
					</svg>
				</NextLink>
			</nav>
		</>
	);
}
