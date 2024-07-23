import React from 'react';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section className="section-wrapper">
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.aboutMeContainer}>
        <div className={styles.photoWrapper}>
          <img src="/assets/images/maximo_comperatore.jpg" alt="Maximo Comperatore" className={styles.photo} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.paragraph}>
            Soy Máximo Comperatore, un aspirante a desarrollador especializado en Backend con .NET y desarrollo de videojuegos.
          </p>
          <p className={styles.paragraph}>
            Actualmente, estoy cursando estudios en Desarrollo de Videojuegos en la Universidad de Mendoza, con el objetivo de prepararme para una carrera profesional en el sector tecnológico.
          </p>
          <p className={styles.paragraph}>
            Me destaco por ser una persona atenta al detalle, organizada, puntual y agradable. Además, soy un trabajador perseverante y miembro colaborativo de equipo, siempre dispuesto a aprender y mejorar mis habilidades.
          </p>
          <p className={styles.paragraph}>
            Mis aspiraciones profesionales incluyen trabajar en proyectos innovadores y desafiantes que me permitan crecer y desarrollar mis competencias, al mismo tiempo que potencie a quienes me rodean. Estoy constantemente buscando ampliar mi conocimiento, contribuyendo a iniciativas que se alineen con mis intereses y valores.
          </p>
          <p className={styles.paragraph}>
            Comprometido con mi desarrollo profesional, estoy en la búsqueda de oportunidades que me permitan avanzar en el campo de la tecnología y el desarrollo de software, aportando mi dedicación y entusiasmo en cada proyecto que emprendo.
          </p>
        </div>
      </div>
    </section>
  );
};
