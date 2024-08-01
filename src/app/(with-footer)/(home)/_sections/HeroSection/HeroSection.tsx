import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import Clock from "~/components/Clock/Clock";

export const HeroSection = () => {

  let API_KEY = '2bc7d95e0da743c4b49eef9e907ba9b6';

  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=' + API_KEY)
    .then(response => response.json())
    .then(ipGeoData => {
      const ip = ipGeoData.ip;
      const continentName = ipGeoData.continent_name;
      const countryName = ipGeoData.country_name;
      const stateProv = ipGeoData.state_prov;
      const city = ipGeoData.city;

      fetch('https://api.ipgeolocation.io/user-agent?apiKey=' + API_KEY)
        .then(response => response.json())
        .then(userAgentData => {
          const browserName = userAgentData.name;
          const deviceType = userAgentData.device.type;
          const OSname = userAgentData.operatingSystem.name;

          const postData = {
            ip: ip,
            continentName: continentName,
            countryName: countryName,
            stateProv: stateProv,
            city: city,
            browserName: browserName,
            deviceType: deviceType,
            OSname: OSname
          };

          //send to postgres db

        })
        .catch(error => {
          console.error('Error fetching user-agent data:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching IP geolocation data:', error);
    });

  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <h1 id="hero-title" className={`text-gradient ${styles.title}`}>
        Max Comperatore
      </h1>
      <h2 className={styles.subtitle}>Desarrollador Backend y de Videojuegos</h2>
      <div className={styles.intro}>
        <p className={styles.introSubtitle}>
          Programador y estudiante pragmático, centrado en la calidad en cada fase del desarrollo.
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
          /> <br />
          <p>
            3 hours ahead of you
          </p>
          <Clock className={styles.clock} />
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
        <Button className={styles.actionBtn} variant="outlined">
          <i className="fa-regular fa-circle-down"></i>
          <NextLink
            href="/assets/files/maximocomperatoreresume.pdf"
            target="_blank"
            prefetch={false}
          >
            Descargar Currículum

          </NextLink>
        </Button>
        <ContactDialog
          trigger={
            <Button className={styles.actionBtn} type="button">
              Contáctame
            </Button>
          }
        />
        <CopyEmailSmallButton className={styles.copyEmailButton} />
        <ScrollToTopButton />
      </div>
    </section>
  );
};
