import React from 'react';
import styles from './page.module.css';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
import Link from 'next/link';
import TextDecorator from '~/components/TextDecorator/TextDecorator';

export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Preguntas personales para reflexionar, y practicar para entrevistas de trabajo.',
};

const FAQ = () => {
  return (
    <div className={styles.container}>
      <ScrollToTopButton />

      <h1 className={styles.title}>FAQ - Preguntas Frecuentes</h1>

      <Link className={styles.goHomeLink} href="/">
        ← Volver a la página principal
      </Link>

      <Link className={styles.goHomeLink} href="/blog">
        ← Ir al Blog
      </Link>

      <section className={styles.section}>
        <h2 className={styles.title}>Recorrido en Programación</h2>
        <p className={styles.paragraph}>
          Mi camino en la programación comenzó en 2021, impulsado por mi interés por los videojuegos. Empecé con cursos
          básicos y bootcamps de desarollo web, y consolidé mi entusiasmo al colaborar en la aplicación de Android "War Report for
          Clash of Clans". Esta experiencia reforzó mi decisión de seguir una carrera en programación.
        </p>
        <p className={styles.paragraph}>
          Actualmente, estoy cursando el segundo semestre de la carrera de Desarrollo de Juegos, con un enfoque
          particular en gráficos por computadora y backend. Mi objetivo es colaborar con personas que compartan
          intereses similares, inspirar a otros y contribuir de manera positiva al mundo a través de la tecnología.
          Tengo 19 años, pero ya estoy dedicado al aprendizaje continuo y en busca de oportunidades para mejorar y
          colaborar en proyectos significativos.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Motivaciones para Estudiar Programación</h2>
        <p className={styles.paragraph}>
          Siempre me ha fascinado transformar ideas abstractas en soluciones prácticas a través del código.
          La programación combina técnica y creatividad, y ver cómo mi
          trabajo se convierte en software que resuelve necesidades reales es extremadamente gratificante.
        </p>
        <p className={styles.paragraph}>
          La posibilidad de contribuir a proyectos innovadores y en constante
          evolución me inspira profundamente. Además, valoro mucho el carácter colaborativo de la comunidad de
          desarrolladores, donde nunca dejas de aprender y siempre encuentras personas amables y dispuestas a ayudar.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Frontend o Backend?</h2>
        <p className={styles.paragraph}>
          Me especializo en el desarrollo backend, aunque también tengo la capacidad de trabajar en frontend cuando es
          necesario.
        </p>
        <p className={styles.paragraph}>
          Disfruto particularmente del desarrollo del lado del servidor,
          donde enfrento problemas complejos con un enfoque en la eficiencia y la seguridad.
          La gestión de bases de datos, el diseño y mantenimiento de APIs,
          y la mejora continua del rendimiento son aspectos que encuentro fascinantes, ya
          que contribuyen a la creación de aplicaciones robustas y escalables.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Cómo te Ves en 5 Años?</h2>
        <p className={styles.paragraph}>
          En cinco años, me visualizo como un experto en backend y desarrollo de juegos, liderando equipos de alto
          rendimiento y compartiendo mi conocimiento como mentor. Aspiro a contribuir al avance de tecnologías de
          vanguardia, optimizar procesos complejos y desarrollar soluciones escalables y seguras.
        </p>
        <p className={styles.paragraph}>
          En lo personal, busco mantener un equilibrio saludable entre mi vida profesional y personal, disfrutando de
          mis pasatiempos y participando en proyectos innovadores que generen un impacto positivo en la sociedad.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Qué Buscas en un Nuevo Trabajo?</h2>
        <p className={styles.paragraph}>
          Busco un entorno colaborativo donde pueda trabajar junto a profesionales competentes y comprometidos.
        </p>
        <p className={styles.paragraph}>
          Me interesa participar en proyectos que aprovechen al máximo mis habilidades y conocimientos. Valoro
          especialmente los lugares que promuevan el crecimiento personal y profesional, respaldados por una
          comunicación efectiva y un sólido apoyo mutuo.
        </p>
        <p className={styles.paragraph}>
          Estoy entusiasmado por asumir nuevos desafíos y responsabilidades en un entorno que favorezca el aprendizaje
          continuo y la evolución profesional.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Qué Aprendiste Recientemente?</h2>
        <p className={styles.paragraph}>
          Recientemente, he estado explorando la creación de aplicaciones web con React y Next.js, y he profundizado en
          el desarrollo de APIs RESTful con Node.js y Express.
        </p>
        <p className={styles.paragraph}>
          También he estado investigando sobre gráficos por
          computadora y aprendiendo a optimizar el rendimiento de aplicaciones en Unity y Unreal Engine. Y SQL, mucho SQL.
        </p>
        <p className={styles.paragraph}>
          Además, he estado practicando la resolución de problemas con algoritmos y estructuras de datos en leetcode, y he
          mejorado mi habilidad para trabajar en equipo y comunicarme de manera efectiva con mis compañeros de
          proyecto.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Recursos Educativos Recomendados</h2>
        <ul>
          <li>
            <TextDecorator
              color="skyblue"
              isUnderlined={true}
              style={{ fontSize: "18px" }}
            >
              <a href="https://gist.github.com/pyoneerC/423ec3e9371fae255091d703e5dcc86c" target="_blank"
                 rel="noopener noreferrer">
                Computer Graphics Resources
              </a>
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="skyblue"
              isUnderlined={true}
              style={{ fontSize: "18px" }}
            >
              <a href={"https://gist.github.com/pyoneerC/a9f9132ce2a57db5331a8cd95ca45b8e"} target="_blank" rel="noopener noreferrer">
                Comunidades de Discord
              </a>
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="skyblue"
              isUnderlined={true}
              style={{ fontSize: "18px" }}
            >
              <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
                Roadmap.sh
              </a>
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="orange"
              isUnderlined={false}
              style={{ fontSize: "18px" }}
            >
              Reddit
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="white"
              isUnderlined={false}
              style={{ fontSize: "18px" }}
            >
              Documentación Oficial (de cualquier tecnología)
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="skyblue"
              isUnderlined={true}
              style={{ fontSize: "18px" }}
            >
              <a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">
                Fullstack Open
              </a>
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="skyblue"
              isUnderlined={true}
              style={{ fontSize: "18px" }}
            >
              <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer">
                Learn CPP
              </a>
            </TextDecorator>
          </li>
          <li>
            <TextDecorator
              color="skyblue"
              isUnderlined={true}
              style={{ fontSize: "18px" }}
            >
              <a href="https://www.bigocheatsheet.com" target="_blank" rel="noopener noreferrer">
                Big O Cheat Sheet
              </a>
            </TextDecorator>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "16px" }}
              >
                <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer">
                  Microsoft Learn
                </a>
              </TextDecorator>
            </li>

            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "16px" }}
              >
                <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">
                  Perplexity
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "16px" }}
              >
                <a href="https://trello.com" target="_blank" rel="noopener noreferrer">
                  Trello
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                draw.io
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                Khan Academy
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub FOSS Source Code Repos
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                ChatGPT
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                Wikipedia y Libros
              </TextDecorator>
            </li>
          </li>
        </ul>
      </section>


      <br />

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Mantenerse Actualizado</h2>
        <p className={styles.paragraph}>
          Para estar al tanto de las últimas tendencias y tecnologías sigo canales como <TextDecorator color="skyblue" isUnderlined={false}>Midudev</TextDecorator> y <TextDecorator color="skyblue" isUnderlined={false}>FireShip</TextDecorator>, y los canales oficiales de
          <TextDecorator color="skyblue" isUnderlined={false}> Unity</TextDecorator> y <TextDecorator color="skyblue" isUnderlined={false}>
          Unreal Engine</TextDecorator> para avances en gráficos por computadora y desarrollo de juegos. Y tambien <TextDecorator color="skyblue" isUnderlined={false}>gamedeveloper.com</TextDecorator> para noticias de la industria del gaming.
          Y aveces le doy una mirada a <TextDecorator color="skyblue" isUnderlined={false}>Discord</TextDecorator> y <TextDecorator color="skyblue" isUnderlined={false}>Reddit</TextDecorator> para ver de que se habla en la comunidad de desarrollo.
        </p>
        <p className={styles.paragraph}>
        También sigo algunas Top Voices en LinkedIn y veo conferencias como
        la GDC y Microsoft Build. Reviso repositorios en GitHub y consulto Product Hunt para novedades tecnológicas.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Hobbies y Pasatiempos</h2>
        <p className={styles.paragraph}>
          En mi tiempo libre, me dedico a desarrollar proyectos y colaborar activamente con la comunidad de desarrollo. Disfruto correr, ver videos de analisis de videojuegos,
          y soy un entusiasta de las películas animadas.
        </p>
        <p className={styles.paragraph}>
          Además, me apasiona jugar a juegos indie en Steam.
          También valoro la experiencia de andar en moto, explorar lugares abandonados para disfrutar de asados en la montaña, y descubrir nueva música.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Preguntas Conductuales</h2>
        <ul className={styles.paragraph}>
            <li><strong>Lo más innovador que ha hecho y por qué lo considera innovador?</strong></li>
            <p>
              Definitivamente, la creación de la aplicación "Mercado Libre Price Chart" fue un proyecto innovador para mí.
              Resuleve un problema común de los usuarios de Mercado Libre y Argentina en general, que es la falta de información sobre la distribución de precios de un producto
              en una economía particularmente extraña.
            </p>
          <br/>
            <li><strong>Un momento en el que no sabías qué hacer o cómo resolver un problema difícil. ¿Cómo lo resolviste?</strong></li>
            <p>
              Durante la creación de este portfolio, no sabía cómo hacer para traducir el contenido de todas las páginas a inglés.
              Investigué y pregunté a Santiago Ariel, que me enseñó a hacerlas con Next.js y React-i18n. Un grande. (WIP)
            </p>
          <br/>
            <li><strong>Un objetivo que te llevó mucho tiempo alcanzar y por el que aún estás trabajando?</strong></li>
            <p>
              Ser un experto en backend y desarrollo de juegos. Aún estoy en el camino, pero cada día me acerco más a mi objetivo.
            </p>
          <br/>
            <li><strong>Un momento en el que tuviste que aprender algo nuevo rápidamente?</strong></li>
            <p>
              Quería hacer una API de dolares en Argentina similar a la DolarAPI, no sabia como hacerlo, pero con FastAPI y unos
              web scrappers, pude hacerlo con éxito. Esta API es consumida por mi otro projecto, "Mercado Libre Price Chart".
            </p>
          <br/>
            <li><strong>Un proyecto que le gustaría hacer en el futuro?</strong></li>
              <blockquote>
              Un motor de juegos propio, escrito en raw DX12. Y contrubir a open source, y hacer APIS copadas (WIP)
              </blockquote>
          <br/>
            <li><strong>Una ocasión en la que apoyó o capacitó a otra persona de su equipo para mejorar su rendimiento</strong></li>
            <p>
              Durante una game jam (hackaton pero enfocada a desarollo de juegos), un compañero no sabía muy bien como hacer Blueprints en Unreal Engine.
              Le enseñé, resolvimos problemas, revisamos todo codigo juntos y logramos terminar el proyecto a tiempo.
            </p>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Mentores y Colaboradores</h2>
        <p className={styles.paragraph}>
          Colin Schmale, Franco Yudica y Enzo Notario han sido claves en mi carrera, brindándome consejos,
          orientación y apoyo. Sin ellos, no estaría donde estoy hoy. (bue)
        </p>
        <p className={styles.paragraph}>
          Quiero agradecer mis compañeros de equipo en proyectos de la Universidad, que me han enseñado mucho y me han apoyado en todo momento.
        </p>
        <p className={styles.paragraph}>
          Finalmente, agradezco a los usuarios de varios discord de programacion en espanol, siempre dispuestos a ayudar, apoyar, y dar feedback. Gracias de verdad.
          Aspiro a ser como estas figuras, y ayudar a otros como ellos me ayudaron a mi.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2>Experiencias Clave</h2>
        <p className={styles.paragraph}>
        S T A R R APPROACH
          Situation
          Task
          Action
          Result
          Reflection
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Canciones Favoritas</h2>
        <ul>
          <li>Runaway (U & I) - Galantis</li>
          <li>Good 4 Me - Vindata</li>
          <li>Cutting Shapes - Don Diablo</li>
          <li>Play - Tokyo Machine</li>
          <li>The Nights - Avicii</li>
          <li>She Wants Me Dead - CAZZETTE</li>
          <li>Sillhouette (Feed Me Remix)</li>
          <li>Overkill - RIOT</li>
        </ul>
      </section>
      <br/>
      <img  src="https://cdn2.unrealengine.com/hlod-water-support-in-unreal-engine-5-1-1920x1080-e402b5c30a87.jpg?resize=1&w=1920" alt="Max Comperatore"/>
    </div>
  );
};

export default FAQ;