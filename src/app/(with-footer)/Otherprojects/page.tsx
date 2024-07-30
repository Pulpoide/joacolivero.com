import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import { coverProjects } from "~/data/otherprojects";
import { ProjectCard } from "~/components/OtherProjectCard";

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
}

export default function Blog() {
	return (
		<section className={styles.projectsWrapper}>
			<h2 className={styles.title}>Otros proyectos</h2>
			<p className={styles.description}>
				Estos son algunos de los proyectos que he desarrollado en mi tiempo libre.
			</p>

			<div className={styles.projectsGrid}>
				{coverProjects.map((project) => (
					<div key={project.name} className={styles.projectCard}>
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							<ProjectCard {...project} />
							<div className={styles.tags}>
								{project.tags?.map((tag) => (
									<span key={tag} className={styles.tag}>{tag}</span>
								))}
							</div>
						</a>
					</div>
				))}
			</div>
			<ScrollToTopButton />
		</section>
	);
}
