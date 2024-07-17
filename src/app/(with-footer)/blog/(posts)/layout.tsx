import styles from "./layout.module.css"

export default function PostsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main>
			<article className={styles.article}>
				{children}
				<div className={styles.greetings}>Gracias por leer 💙</div>
			</article>
		</main>
	)
}