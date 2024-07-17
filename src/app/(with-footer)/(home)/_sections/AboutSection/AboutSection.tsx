import styles from "./AboutSection.module.css";

export const AboutSection = () => {
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>Un poco sobre mí</h2>
			<div className={styles.aboutMeWrapper}>
				<p>Hola, hola 👋🏻, me llamo Maximo Comperatore, pero puedes decirme Dresan.</p>
				<p>
					Soy desarrollador de software especializado en Backend y desarrollo de videojuegos.
					Tengo un gran interés en el desarrollo de aplicaciones móviles y siempre estoy buscando
					aprender nuevas tecnologías y mejorar mis habilidades.
				</p>
				<p>
					Disfruto explorando diferentes etapas del desarrollo de software y manteniéndome al día
					con los avances tecnológicos en la industria.
				</p>
				<p>
					Actualmente, me encuentro profundizando mis conocimientos en el desarrollo backend y
					la creación de videojuegos, sin perder de vista las oportunidades en el ámbito del
					desarrollo móvil.
				</p>
			</div>
		</section>
	);
};
