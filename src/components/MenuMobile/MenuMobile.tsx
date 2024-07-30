"use client"

import { useState } from "react"
import clsx from "clsx"
import { APP_ROUTES } from "~/constants"
import { toggleBodyOverflow } from "~/utils"
import { useOnPathnameChange } from "~/hooks/use-on-pathname-change"
import { Link } from "~/components/Ui/Link"
import { Button } from "~/components/Ui/Button"
import { LanguageSwitcher } from "~/components/LanguageSwitcher"
import { ContactDialog } from "~/components/ContactDialog"
import { ThemeSwitcher } from "../ThemeSwitcher"
import styles from "./MenuMobile.module.css"
import { track } from '@vercel/analytics'

export const MenuMobile = () => {
	const [open, setOpen] = useState(false)

	useOnPathnameChange(() => {
		setOpen(false)
		toggleBodyOverflow(false)
	})

	const handleOnClick = () => {
		const newOpenState = !open
		setOpen(newOpenState)
		toggleBodyOverflow(newOpenState)

		document.documentElement.setAttribute('data-feature-flag-menu', newOpenState ? 'open' : 'closed')
		track('Menu Toggle', {}, { flags: [newOpenState ? 'menu-open' : 'menu-closed'] })
	}

	return (
		<>
			<button
				className={clsx(styles.button, { [styles.open]: open })}
				aria-label={`${open ? "Cerrar" : "Abrir"} menú`}
				type="button"
				onClick={handleOnClick}
			>
				<span className={styles.buttonLine}></span>
				<span className={styles.buttonLine}></span>
			</button>
			<div className={clsx(styles.menu, { [styles.open]: open })}>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						{APP_ROUTES.map(({ href, label }) => (
							<li key={href}>
								<Link className={styles.navLink} href={href}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<ContactDialog
						trigger={
							<Button className={styles.contactButton} size="medium" type="button">
								Contactar
							</Button>
						}
					/>
					<div className={styles.themeWrapper}>
						<span>Tema </span> <ThemeSwitcher />
					</div>
					<div className={styles.themeWrapper}>
						<span>Idioma </span> <LanguageSwitcher />
					</div>
				</div>
			</div>
		</>
	)
}
