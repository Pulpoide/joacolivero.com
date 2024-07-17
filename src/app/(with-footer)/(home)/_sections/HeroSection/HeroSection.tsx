import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ArrowDown } from "~/components/Svg/ArrowDown";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
 return (
  <section className={styles.section}>
   <h1 className={`text-gradient ${styles.title}`}>
    Maximo Comperatore, Desarrollador Backend y de Videojuegos
   </h1>
   <div className={styles.buttonContainer}>
    <Button rounded="full" size="small" asChild>
      <NextLink
        href="https://www.linkedin.com/in/maximo-comperatore-74399b278"
        target="_blank"
        rel="noopener"
      >
        Disponible para trabajar <span className={styles.availableCircle}></span>
      </NextLink>
    </Button>
   </div>
   <p className={styles.introSubtitle}>
    Hago que tu proyecto <strong>destaque</strong> con la{" "}
    <strong>elegancia</strong> y la <strong>calidad</strong> que merece.
   </p>
   <p className={styles.introSubtitle}>
    Además, me apasiona el desarrollo de <strong>aplicaciones móviles</strong>.
   </p>
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
		<p className={styles.introSubtitle}>
			Agregar flechas handrawn y underline a los links y esas cosas. Ver otras fonts. Poner seccion con spotify. Poner ubicacion en algun lado. Seccion de experiencia profesional y el mucho texto colin parte. Poner cada seccion en algun boton para darle click e ir a la #parte esa. hacer uun translation switch ingles espanol portuges o algo asi. Certification section
      9:39 AM
      Backend section and games
      9:51 AM
      .net developer portfolio
      9:52 AM
      Put .net in portfolio


      What your role was at team rejects
      1:46 AM
      Projects
      1:46 AM
      Code for fun
      1:46 AM
      Custom cursor website black
      1:49 AM
      Live link/repo
      1:50 AM
      Cuando sea ssr cambiar de portfolio osea a los 24 para siempre al edu calvo. El de ahora es good enough para primer trabajos y an̈os de xp
      2:00 AM
      Github headline. Game & Backdnd Development. Also mobile
      2:02 AM
      With strong interest in mobile
      2:02 AM

      Get in touch form at the end
      12:38 AM
      Foto de projectos en both web y mobile como hacer todos
      12:39 AM
      Put your face in your portfolio about me section
      12:45 AM
      Testimonials section
      12:56 AM
      Showcase/other projects
      1:37 AM
      change the readme

      meterle algo 3d al portfolio. plenear disen̈o
      July 16 at 7:04 PM
      Currently. Ongoing projects
      July 16 at 7:05 PM
      Should I put my pfp in my portfolio?
      July 16 at 7:09 PM
      Argentina cv con cara?
      July 16 at 7:10 PM
      Put good stylized illustrations in site?
      July 16 at 7:19 PM
      Delete available upon request quien verga te crees qie sos
      July 16 at 7:23 PM
      https://thegounis.com/ life illusrrated. Unity?
      July 16 at 7:28 PM
      Sqlite
      July 16 at 7:33 PM
      Disen̈ar sitio y sqlite
      July 16 at 7:42 PM
      Forkeado de x.com 💗
      12:12 AM
      Linktree matarlo con portfolio youtube abajo ya no mas amonimatos
      put timezone 7:32  AM, CET Italy

      specialized in frontend technologies...backedn...games, divide the tech stack in this sections.
		</p>
  </section>
 );
};