import { socialMediaLinks } from "~/data/links"
import { Link } from "~/components/Ui/Link"
import styles from "./Footer.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import { LinkedInIcon } from "~/components/Svg/LinkedInIcon"
import { GithubIcon } from "~/components/Svg/GithubIcon"
import { EmailIcon } from "~/components/Svg/EmailIcon"
import { YoutubeIcon } from "~/components/Svg/YoutubeIcon"
import { ItchioIcon } from "~/components/Svg/ItchioIcon"

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<span className={styles.year}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
							 className="icon icon-tabler icons-tabler-outline icon-tabler-copyright"><path stroke="none"
																																														 d="M0 0h24v24H0z"
																																														 fill="none" /><path
						d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path
						d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" /></svg>{currentYear} - Maximo Comperatore
        </span>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label, icon, className }) => (
						<Link key={url} className={`${styles.link} ${styles[className]}`} href={url} target="_blank">
							<i className={icon} aria-hidden="true"></i> {label}
							<LinkedInIcon />
							<GithubIcon />
							<EmailIcon />
							<YoutubeIcon />
							<ItchioIcon />
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
