import { getPosts } from "~/helpers/get-posts";
import { sortPostsByDate } from "~/helpers/sort-posts";
import { PostCard } from "~/components/PostCard";
import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import Link from "next/link";

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
};

export default async function Blog() {
	const posts = await getPosts();
	const sortedPosts = sortPostsByDate({ posts });

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Otros proyectos (EN CONSTRUCCION)</h1>
			<Link href="/" className={styles.goHomeLink}>
				← Volver a la página principal
			</Link>
			<p className={styles.note}>
				Note: Esta sección aún está en desarrollo. Pronto podrás acceder directamente desde el botón al final de los proyectos principales sin necesidad de pasar por el menú principal.
			</p>
			<ul className={styles.projectList}>
				<li>Rendimientos Mercado Pago</li>
				<li>Unreal Engine Project Cleaner</li>
				<li>The Great Chocolate Caper</li>
				<li>Hangman</li>
				<li>Array Utils</li>
				<li>The Dungeon</li>
				<li>Pixelated Drift</li>
				<li>FOSS (Free Open Source Software) - en desarrollo</li>
			</ul>
			<div className={styles.projectFeatures}>
				<p>Añade tags a los proyectos para filtrarlos por categorías y usa el botón para explorar todos los proyectos con un tag específico.</p>
				<p>Esta sección es sin ánimo de lucro.</p>
			</div>
			<div className={styles.performance}>
				Este portfolio está optimizado para cualquier dispositivo con un diseño minimalista, limpio y elegante, utilizando TailwindCSS. Puntuaciones de PageSpeed: 98 en velocidad de página y 100 en SEO.
			</div>
			<ScrollToTopButton />
		</main>
	);
}
