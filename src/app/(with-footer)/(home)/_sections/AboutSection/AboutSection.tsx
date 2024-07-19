import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className="section-wrapper">
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.aboutMeWrapper}>
        <p>
          Conoce a Maximo Comperatore, especializado en desarrollo Backend con .NET y desarrollo de videojuegos.

          Actualmente, estudio Desarrollo de Videojuegos en la Universidad de Mendoza,
          preparándome para un futuro profesional en tecnología. Mis aspiraciones son trabajar en proyectos
          útiles y desafiantes, que me permitan crecer y aprender en el campo de la tecnología.
        </p>
        <p>
          Busco siempre ampliar mi conocimiento y contribuir a proyectos que me apasionan.
          Estoy comprometido con mi desarrollo profesional,
          buscando oportunidades para crecer en el campo de la tecnología y el desarrollo de software.
        </p>
      </div>
    </section>
  );
};