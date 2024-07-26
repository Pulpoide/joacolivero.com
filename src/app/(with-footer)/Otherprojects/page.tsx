import { getPosts } from "~/helpers/get-posts"
import { sortPostsByDate } from "~/helpers/sort-posts"
import { PostCard } from "~/components/PostCard"
import styles from "./page.module.css"
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton"
import Link from "next/link"

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
}

export default async function Blog() {
	const posts = await getPosts()
	const sortedPosts = sortPostsByDate({ posts })

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Otros proyectos (EN CONSTRUCCION)</h1>
			<Link className={styles.goHomeLink} href="/">
				← Volver a la página principal
			</Link>
			<p>
				note: (wip, esto va al lado del ultimo project card), hacerla pagina standalone igual y sacar el link del menu y que click en el boton al final de los proyectos traiga aca y listo
			</p>
			- rendimientos mercado pago
			- unreal engine project cleaner
			- The great chocolate caper
			- hangman
			- array utils
			- the dungeon
			- pixelated drift
			- foss (free open source software) (nada todavia)

			ponerle tags a los proyectos, y un boton para ver todos los proyectos con ese tag filter thingy
			sin animo de lucro poner. fafafear.
			Este mismo portfolio esta hecho de manera responsive para cualquier dispositivo, con un diseño minimalista y elegante, hecho a codigo limpio y con ayuda de TailwindCSS optimized. 98 page speed. 100 seo.
			<ScrollToTopButton />
		</main>
	)
}
