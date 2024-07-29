import { getPosts } from "~/helpers/get-posts";
import { sortPostsByDate } from "~/helpers/sort-posts";
import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import { coverProjects } from "~/data/otherprojects";
import { ProjectCard } from "~/components/OtherProjectCard";

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
};

export default async function Blog() {
	const posts = await getPosts();
	const sortedPosts = sortPostsByDate({ posts });

	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>Otros proyectos</h2>
			<div className={styles.projectsWrapper}>
				{coverProjects.map((project) => (
					<>
						<ProjectCard key={project.name} className={styles.cardStyle} {...project} />
						<ScrollToTopButton />
					</>
				))}
			</div>
		</section>
	);
}

