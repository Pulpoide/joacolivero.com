import React from 'react';
import styles from './page.module.css';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
import Link from 'next/link';

export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Preguntas personales para reflexionar, y practicar para entrevistas de trabajo.',
};

const FAQ = () => {
  return (
    <div className={styles.container}>
      <ScrollToTopButton />

      <h1 className={styles.title}>FAQ - Preguntas Frecuentes (EN CONSTRUCCION)</h1>

      <Link className={styles.goHomeLink} href="/">
        ← Volver a la página principal
      </Link>

      <Link className={styles.goHomeLink} href="/blog">
        ← Ir al Blog
      </Link>

      <section className={styles.section}>
        <h2 className={styles.title}>Recorrido en Programación</h2>
        <p className={styles.paragraph}>
          Mi interés en la programación comenzó en 2022, impulsado por mi pasión por los videojuegos. Empecé con cursos
          básicos y un bootcamp, y consolidé mi entusiasmo al colaborar en la aplicación de Android "War Report for
          Clash of
          Clans". Esta experiencia reforzó mi decisión de seguir una carrera en programación.
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
          Siempre me ha fascinado transformar ideas abstractas en soluciones prácticas a través del código. Mi interés
          en videojuegos ha sido una gran motivación. La programación combina técnica y creatividad, y ver cómo mi
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
        <h2 className={styles.title}>Desafíos y Soluciones</h2>
        <ul>
          <li>
            <h3>Problemas con Modelos de Juego</h3>
            <p>
              <strong>Situación:</strong> En "Pixelated Drift", los edificios pesaban un gigabyte cada uno, impidiendo
              el empaquetado.
            </p>
            <p>
              <strong>Acción:</strong> Intenté reducir los polígonos en Blender sin éxito.
            </p>
            <p>
              <strong>Resultado:</strong> Subí el juego a itch.io y el editor a Google Drive, permitiendo a los usuarios
              jugar.
            </p>
            <p>
              <strong>Reflexión:</strong> Persistir y mantener una mentalidad abierta es clave para encontrar soluciones
              alternativas.
            </p>
          </li>
          <li>
            <h3>Expiración de Funciones Serverless</h3>
            <p>
              <strong>Situación:</strong> La función en el proyecto MercadoLibre Price Chart expiraba debido a tiempos
              de respuesta largos.
            </p>
            <p>
              <strong>Acción:</strong> Implementé Fly.io para manejar tareas asincrónicas y reescribí el código en Flask
              y FastAPI.
            </p>
            <p>
              <strong>Resultado:</strong> Las búsquedas se completaron sin problemas y los cuadros de precios se
              mostraron correctamente.
            </p>
            <p>
              <strong>Reflexión:</strong> Aprender nuevas tecnologías y pedir ayuda a la comunidad son fundamentales
              para resolver problemas.
            </p>
          </li>
          <li>
            <h3>Creación de un Portafolio Profesional</h3>
            <p>
              <strong>Situación:</strong> Quería crear un portafolio impresionante con pocos recursos.
            </p>
            <p>
              <strong>Acción:</strong> Forkee el portafolio de DRESAN, optimizándolo y adaptándolo a mis necesidades.
            </p>
            <p>
              <strong>Resultado:</strong> Creé un portafolio destacado, aprendiendo y adaptando lo que otros habían
              hecho.
            </p>
            <p>
              <strong>Reflexión:</strong> Observar y adaptar el trabajo de otros es una excelente manera de mejorar.
            </p>
          </li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Recursos Educativos Recomendados</h2>
        <ul>
          <li><a href="https://gist.github.com/pyoneerC/423ec3e9371fae255091d703e5dcc86c" target="_blank"
                 rel="noopener noreferrer">Computer Graphics</a></li>
          <li><a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">Roadmap.sh</a></li>
          <li>Comunidades de Discord, usa discord. Mucha gente te ayuda gratis y quiere verte triunfar.</li>
          <li>Reddit</li>
          <li>Documentación Oficial</li>
          <li><a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">Fullstack Open</a></li>
          <li><a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer">Learn CPP</a></li>
          <li><a href="https://www.bigocheatsheet.com" target="_blank" rel="noopener noreferrer">Big O Cheat Sheet</a>
          </li>
          <li><a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer">Microsoft Learn</a></li>
          <li>draw.io</li>
          <li>Khan Academy</li>
          <li>ChatGPT</li>
          <li>Wikipedia y Libros</li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">Perplexity</a></li>
          <li><a href="https://trello.com" target="_blank" rel="noopener noreferrer">Trello</a></li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Mantenerse Actualizado</h2>
        <p className={styles.paragraph}>
          Para estar al tanto de las últimas tendencias y tecnologías, sigo blogs de tecnología, tutoriales, y
          comunidades en Discord y Reddit. Sigo canales como Midudev y Fireship, y los canales oficiales de Unity y
          Unreal para avances en gráficos. También sigo a personas relevantes en LinkedIn y veo conferencias como
          la GDC y Microsoft Build. Reviso repositorios en GitHub y consulto Product Hunt para novedades tecnológicas.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Hobbies y Pasatiempos</h2>
        <p className={styles.paragraph}>
          En mi tiempo libre, disfruto desarrollando proyectos y colaborando con la comunidad de desarrollo.
          Me apasiona correr, ver videos de bromas en YouTube, disfrutar de películas animadas y jugar a juegos indie en
          Steam.
          También valoro andar en moto, explorar lugares abandonados para disfrutar de asados en la montaña, y descubrir
          nueva música :).
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Preguntas Conductuales</h2>
        <ul className={styles.paragraph}>
          <li>Un momento en el que no sabías qué hacer o cómo resolver un problema difícil. ¿Cómo lo resolviste?</li>
          <li>Un objetivo que le llevó mucho tiempo alcanzar y por el que aún está trabajando.</li>
          <li>Un proyecto del que está especialmente orgulloso y por qué.</li>
          <li>Un momento en el que tuvo que aprender algo nuevo rápidamente.</li>
          <li>Un proyecto que le gustaría hacer en el futuro.</li>
          <li>Una ocasión en la que apoyó o capacitó a otra persona de su equipo para mejorar su rendimiento.</li>
          <li>Lo más interesante que ha aprendido por su cuenta y que le ha ayudado a desempeñar mejor su trabajo.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Mentores y Colaboradores</h2>
        <p className={styles.paragraph}>
          Colin Schmale, Franco Yudica y Enzo Notario han sido fundamentales en mi carrera, brindándome consejos y
          orientación. Sin ellos, no estaría donde estoy hoy. También agradezco a mis compañeros de equipo en proyectos.
          Aspiro a insipirar a otros y que me tengan como yo tengo a estos grandes mentores hoy en día.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2>Experiencias Clave</h2>
        <ul>
          <li>
            <h3>Resolución de Problemas con Soluciones Simples</h3>
            <p>
              <strong>Situación:</strong> Necesitaba iconos para mi portafolio y links del footer.
            </p>
            <p>
              <strong>Acción:</strong> Utilicé la biblioteca de Awesome Fonts en lugar de descargar SVGs de cada logo.
            </p>
            <p>
              <strong>Resultado:</strong> Ahorro de tiempo y solución eficiente.
            </p>
          </li>
          <li>
            <h3>Recibir Retroalimentación Crítica</h3>
            <p>
              <strong>Situación:</strong> Críticas sobre la presentación del portafolio.
            </p>
            <p>
              <strong>Acción:</strong> Implementé cambios sugeridos y optimicé el diseño.
            </p>
            <p>
              <strong>Resultado:</strong> Mejora en la presentación.
            </p>
          </li>
          <li>
            <h3>Apoyo a Compañeros</h3>
            <p>
              <strong>Situación:</strong> Compañero con dificultades en Blueprints durante una game jam.
            </p>
            <p>
              <strong>Acción:</strong> Le enseñé y ayudé a resolver problemas.
            </p>
            <p>
              <strong>Resultado:</strong> Mejora en su comprensión y rendimiento del proyecto.
            </p>
          </li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Lo más innovador que ha hecho y por qué lo considera innovador</h2>
        <p>
          <strong>Situación:</strong> Proyecto MercadoLibre Price Charts, resolviendo la pregunta "¿Cuánto sale esto en
          internet?".
        </p>
        <p>
          <strong>Resultado:</strong> Solución efectiva para la visualización de precios en línea en Argentina.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Logros Destacados</h2>
        <p className={styles.paragraph}> WIP </p>
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
          <li>Sillhouette (Feed Me Remix) - Owl City</li>
          <li>Overkill - RIOT</li>
        </ul>
      </section>
    </div>
  );
};

export default FAQ;