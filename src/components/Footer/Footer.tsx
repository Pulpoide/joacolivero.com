import { socialMediaLinks } from "~/data/links";
import { Link } from "~/components/Ui/Link";
import styles from "./Footer.module.css";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<span className={styles.year}>Inspirado en el portfolio de <Link href="https://www.dresan.dev"
																																			target={"_blank"}>Dresan</Link>
				</span>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label }) => (
						<Link key={url} className={styles.link} href={url} target="_blank">
							{label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}