import styles from './page.module.css';
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";

export const metadata = {
	title: "Max Comperatore - FAQ",
	description: "Frequently Asked Questions about Max Comperatore's career, interests, and experiences in programming and game development.",
};

export default function FAQ() {
	return (
		<div className={styles.container}>
			<ScrollToTopButton />
			<h1>FAQ</h1>
			<h2> Esta página está en construcción. Vuelve pronto. </h2>
		</div>
	);
}