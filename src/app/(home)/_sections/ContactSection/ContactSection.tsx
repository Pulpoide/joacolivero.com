import { CopyEmailButton } from "~/components/CopyEmailButton"
import styles from "./ContactSection.module.css"

export const ContactSection = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>
				<span>¿Quieres iniciar</span>
				<span>un proyecto?</span>
			</h2>
			<CopyEmailButton />
		</section>
	)
}
