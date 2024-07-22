import { getPosts } from "~/helpers/get-posts"
import { sortPostsByDate } from "~/helpers/sort-posts"
import { PostCard } from "~/components/PostCard"
import styles from "./page.module.css"

export const metadata = {
	title: "Maximo Comperatore - Blog",
	description: "Tutoriales simples sobre desarrollo de software y videojuegos.",
}

export default async function Blog() {
	const posts = await getPosts()
	const sortedPosts = sortPostsByDate({ posts })

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Blog</h1>
			<div className={styles.postsWrapper}>
				{sortedPosts.map((post) => (
					<PostCard key={post.slug} {...post} />
				))}
			</div>
		</main>
	)
}
