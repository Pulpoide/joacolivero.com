import React from 'react';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section className="section-wrapper">
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.aboutMeContainer}>
        <div className={styles.photoWrapper}>
          <img
            src="/assets/images/maximo_comperatore.jpg"
            alt="Maximo Comperatore"
            className={styles.photo}
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.paragraph}>
            Conoce a Máximo Comperatore, un aspirante a desarrollador especializado en Backend con .NET y desarrollo de videojuegos.
          </p>
          <p className={styles.paragraph}>
            Actualmente, estoy cursando estudios en Desarrollo de Videojuegos en la Universidad de Mendoza, con el objetivo de forjar una carrera profesional sólida en el sector tecnológico.
          </p>
          <p className={styles.paragraph}>
            Destaco por ser una persona atenta al detalle, organizada, puntual y agradable. Además, soy un trabajador perseverante y miembro colaborativo de equipo, siempre dispuesto a aprender y mejorar mis habilidades.
          </p>
          <p className={styles.paragraph}>
            Busco involucrarme en proyectos innovadores y desafiantes que me permitan expandir mis competencias y, al mismo tiempo, potenciar a quienes trabajan a mi alrededor.
          </p>
        </div>
      </div>
    </section>
  );
};
