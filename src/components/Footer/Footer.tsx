import { ReactElement } from "react";

import { GithubIcon } from "~/components/Svg/GithubIcon";
import { LinkedInIcon } from "~/components/Svg/LinkedInIcon";
import { Link } from "~/components/Ui/Link";
import { socialMediaLinks, IconKey } from "~/data/links";

import styles from "./Footer.module.css";


const iconComponents: Record<IconKey, ReactElement> = {
	LinkedInIcon: < LinkedInIcon />,
	GithubIcon: < GithubIcon />,
};

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<span className={styles.year}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor"
						d="M10 16h4q.425 0 .713-.288T15 15v-2h-2v1h-2v-4h2v1h2V9q0-.425-.288-.712T14 8h-4q-.425 0-.712.288T9 9v6q0 .425.288.713T10 16m2 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
					{currentYear} - Joaquín Olivero
				</span>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ id, url, label, icon, className }) => (
						<Link key={id} className={`${styles.link} ${styles[className]}`} href={url} target="_blank">
							<span className={styles.icon}>
								{iconComponents[icon]}
							</span>
							{label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};
