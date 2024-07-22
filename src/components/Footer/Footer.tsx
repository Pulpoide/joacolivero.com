import { socialMediaLinks } from "~/data/links";
import { Link } from "~/components/Ui/Link";
import styles from "./Footer.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
        <span className={styles.year}>
          &copy; {currentYear} - Máximo Comperatore
        </span>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label, icon, className }) => (
						<Link key={url} className={`${styles.link} ${styles[className]}`} href={url} target="_blank">
							<i className={icon} aria-hidden="true"></i> {label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
