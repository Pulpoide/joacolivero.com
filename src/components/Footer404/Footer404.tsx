import { socialMediaLinks } from "~/data/links"
import { Link } from "~/components/Ui/Link"
import styles from "./Footer404.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export const Footer404 = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label, icon, className }) => (
						<Link key={url} className={`${styles.link} ${styles[className]}`} href={url} target="_blank">
							<i className={icon} aria-hidden="true"></i> {label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
