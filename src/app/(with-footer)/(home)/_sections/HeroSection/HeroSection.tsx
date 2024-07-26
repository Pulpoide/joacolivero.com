import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ArrowDown } from "~/components/Svg/ArrowDown";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import Clock from "~/components/Clock/Clock";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <h1 id="hero-title" className={`text-gradient ${styles.title}`}>
        Maximo Comperatore, Desarrollador Backend y de Videojuegos
      </h1>
      <div className={styles.intro}>
        <p className={styles.introSubtitle}>
          Desarrollador y estudiante pragmático, centrado en la calidad en cada fase del desarrollo.
        </p>
        <p className={styles.introSubtitle}>
          Me encuentro en Mendoza, Argentina.
          <img
            className={styles.flag}
            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            alt="Argentina Flag"
            width="30"
            height="20"
            loading="lazy"
          /> <br/> <Clock className={styles.clock} />
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button rounded="full" size="small" asChild className={styles.button}>
          <NextLink
            href="https://www.linkedin.com/in/maximo-comperatore-74399b278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.availableCircle}></span>
            Disponible para nuevos proyectos
          </NextLink>
        </Button>
      </div>
      <div className={styles.actions}>
        <ContactDialog
          trigger={
            <Button className={styles.actionBtn} type="button">
              Contáctame
            </Button>
          }
        />
        <Button className={styles.actionBtn} variant="outlined" asChild>
          <NextLink
            href="/assets/files/maximocomperatoreresume.pdf"
            target="_blank"
            prefetch={false}
          >
            Descargar Curriculum <ArrowDown />
          </NextLink>
        </Button>
        <CopyEmailSmallButton className={styles.copyEmailButton} />
        <ScrollToTopButton />
      </div>
    </section>
  );
};
