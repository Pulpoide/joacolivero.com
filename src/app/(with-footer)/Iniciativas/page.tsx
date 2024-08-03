import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import { coverProjects } from "~/data/otherprojects";
import { ProjectCard } from "~/components/OtherProjectCard";

export const metadata = {
	title: "Max Comperatore - Otros proyectos",
	description: "Proyectos personales de Max Comperatore."
}

export default function Blog() {
	return (
		<section className={styles.projectsWrapper}>
			<h2 className={styles.title}>Otros proyectos</h2>
			<p className={styles.paragraph}>
				Algunos proyectos personales que he desarrollado en mi tiempo libre.
			</p>

			<div className={styles.projectsGrid}>
				{coverProjects.map((project) => (
					<div key={project.name} className={styles.projectCard}>
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							<ProjectCard {...project} />
						</a>
						<div className={styles.tags}>
							{project.tags?.map((tag) => (
								<span key={tag} className={styles.tag}>{tag}</span>
							))}
						</div>
					</div>
				))}
			</div>
			<ScrollToTopButton />
		</section>
	);
}
