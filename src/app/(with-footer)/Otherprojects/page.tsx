import { getPosts } from "~/helpers/get-posts";
import { sortPostsByDate } from "~/helpers/sort-posts";
import { PostCard } from "~/components/PostCard";
import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import Link from "next/link";
import { coverProjects } from "~/data/otherprojects";
import { ProjectCard } from "~/components/ProjectCard";

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
					<><ProjectCard key={project.name} {...project} /><ScrollToTopButton /></>
				))}
			</div>
		</section>
	);
}
