import { getPosts } from "~/helpers/get-posts"
import { sortPostsByDate } from "~/helpers/sort-posts"
import { PostCard } from "~/components/PostCard"
import styles from "./page.module.css"
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton"
import Link from "next/link"
import React from "react"

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
}

export default async function Blog() {
	const posts = await getPosts()
	const sortedPosts = sortPostsByDate({ posts })

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Blog</h1>
			<p className={styles.paragraph}>
				Artículos sobre desarrollo de software y videojuegos.
			</p>
			<Link className={styles.goHomeLink} href="/">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						 className="icon icon-tabler icons-tabler-outline icon-tabler-home">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
					<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
					<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
				</svg>
				Volver a la página principal
			</Link>
			<Link className={styles.goHomeLink} href="/faq">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						 className="lucide lucide-circle-help">
					<circle cx="12" cy="12" r="10" />
					<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
					<path d="M12 17h.01" />
				</svg>
				Ir al FAQ
			</Link>
			<div className={styles.postsWrapper}>
				{sortedPosts.map((post) => (
					<PostCard key={post.slug} {...post} />
				))}
			</div>
			<ScrollToTopButton />
		</main>
	)
}
