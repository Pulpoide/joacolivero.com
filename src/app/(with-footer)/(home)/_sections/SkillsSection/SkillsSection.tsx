import { skills } from "~/data/skills";
import { SkillCard } from "~/components/SkillCard";
import styles from "./SkillsSection.module.css";

export const SkillsSection = () => {
  // Suponiendo que ya tienes los subarreglos divididos manualmente
  const tecnologias = skills.filter(skill => "Tecnologías");
  const backend = skills.filter(skill =>  "Backend");
  const juegos = skills.filter(skill => "Desarrollo de Juegos");
  const movil = skills.filter(skill => "Desarrollo Móvil");

  return (
		<section className={styles.sectionWrapper}>
			<h2 className={styles.title}>Tecnologías</h2>
			<div className={styles.skillWrapper}>
				{tecnologias.map(skill => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>

			<br /><br /><br /><br />
			<h2 className={styles.title}>Tecnologías Backend</h2>
			<div className={styles.skillWrapper}>
				{backend.map(skill => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>

			<br /><br /><br /><br />
			<h2 className={styles.title}>Desarrollo de Juegos</h2>
			<div className={styles.skillWrapper}>
				{juegos.map(skill => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>

			<br /><br /><br /><br />
			<h2 className={styles.title}>Desarrollo Móvil</h2>
			<div className={styles.skillWrapper}>
				{movil.map(skill => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
		</section>
	);
};