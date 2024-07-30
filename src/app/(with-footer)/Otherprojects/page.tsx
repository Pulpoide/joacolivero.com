import styles from "./page.module.css"
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton"
import { coverProjects } from "~/data/otherprojects"
import { ProjectCard } from "~/components/OtherProjectCard"

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
};

export default async function Blog() {

	return (
		<section className={styles.projectsWrapper}>
			<h2 className={styles.title}>Otros proyectos</h2>
			<div className={styles.projectsWrapper}>
				{coverProjects.map((project) => (
					<>
						<ProjectCard key={project.name}  {...project} />
						<ScrollToTopButton />
					</>
				))}
			</div>
		</section>
	)
}
