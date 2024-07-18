import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ArrowDown } from "~/components/Svg/ArrowDown";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <h1 id="hero-title" className={`text-gradient ${styles.title}`}>
        Máximo Comperatore, Desarrollador Backend y de Videojuegos
      </h1>
      <div className={styles.buttonContainer}>
        <Button rounded="full" size="small" asChild>
          <NextLink
            href="https://www.linkedin.com/in/maximo-comperatore-74399b278"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disponible para trabajar <span className={styles.availableCircle}></span>
          </NextLink>
        </Button>
      </div>
      <div className={styles.intro}>
        <p className={styles.introSubtitle}>
          Hago que tu proyecto <strong>destaque</strong> con la <strong>elegancia</strong> y la <strong>calidad</strong> que merece.
        </p>
        <p className={styles.introSubtitle}>
          Además, me apasiona el desarrollo de <strong>aplicaciones móviles</strong>.
        </p>
        <p className={styles.introSubtitle}>
          Me encuentro en Mendoza, Argentina.
        </p>
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
      </div>
    </section>
  );
};