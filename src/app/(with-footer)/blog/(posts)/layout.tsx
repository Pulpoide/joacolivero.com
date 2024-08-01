import Link from "next/link"
import styles from "./layout.module.css"
import React from "react"

export default function PostsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main>
			<article className={styles.article}>
				{children}
				<div className={styles.greetings}>Gracias por tu tiempo. Nos vemos en el próximo post!</div>
				<Link className={styles.goHomeLink} href="/blog">
					<i className="fas fa-book-open-reader"></i>
					Volver al Blog
				</Link>
			</article>
		</main>
	)
}