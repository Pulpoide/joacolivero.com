"use client"

import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
	const [isSpanish, setIsSpanish] = useState(true);

	const handleOnClick = () => {
		setIsSpanish(!isSpanish);
		localStorage.setItem("language", isSpanish ? "en" : "es");
		// Reload the page to apply the new language. prefferably done live

	};

	return (
		<button
			className={styles.button}
			onClick={handleOnClick}
			title={`Cambiar a ${isSpanish ? "Inglés" : "Español"}`}
			aria-live="polite"
		>
			<img
				className={styles.flag}
				aria-hidden="true"
				src={isSpanish ? "/assets/icons/spain.png" : "/assets/icons/uk.png"}
				alt={`Switch to ${isSpanish ? "English" : "Spanish"}`}
			/>
		</button>
	)
}

export default ThemeSwitcher;