import React from 'react'
import styles from './AboutSection.module.css'

export const AboutSection = () => {
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>Sobre mí</h2>
			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper}>
					<img
						src="/assets/images/maximo_comperatore.avif"
						alt="Maximo Comperatore"
						className={styles.photo}
						loading="lazy"
						width={300}
						height={300}
					/>
				</div>
				<div className={styles.textWrapper}>
					<p className={styles.paragraph}>
						Conoce a <strong>Máximo Comperatore</strong>, aspirante a desarrollador con especialización
						en <strong>Backend</strong> y <strong>Desarrollo de Videojuegos</strong>.
					</p>
					<p className={styles.paragraph}>
						Actualmente, estoy cursando estudios en <strong>Desarrollo de Videojuegos en la Universidad de
						Mendoza</strong> y también soy <strong>autodidacta</strong>, buscando constantemente nuevas formas de
						expandir mis conocimientos y habilidades.
					</p>
					<p className={styles.paragraph}>
						Me caracterizo por ser <strong>meticuloso, organizado y cordial</strong>, siempre dispuesto a aprender y a colaborar en
						equipo.
					</p>
					<p className={styles.paragraph}>
						Busco participar en proyectos que potencien mis habilidades y contribuyan al desarrollo profesional de los
						equipos, manteniendo una<strong> mentalidad proactiva, resolutiva y enfocada en la optimización del software</strong>.
					</p>
				</div>
			</div>
		</section>
	)
}
