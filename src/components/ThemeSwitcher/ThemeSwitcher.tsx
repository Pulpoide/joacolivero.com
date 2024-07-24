"use client"

import { useTheme } from "next-themes"
import styles from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()
	const isLightMode = theme === "light"
	const oppositeThemeName = isLightMode ? "oscuro" : "claro"

	const handleOnClick = () => {
		const oppositeTheme = isLightMode ? "dark" : "light"
		setTheme(oppositeTheme)
	}

	return (
		<button
			className={styles.button}
			onClick={handleOnClick}
			title={`Cambiar a ${oppositeThemeName}`}
			aria-live="polite"
		>
			<img
				className={styles.flag}
				aria-hidden="true"
				src="\assets\icons\spain.png"
				alt="Switch Theme"
			/>
		</button>
	)
}
