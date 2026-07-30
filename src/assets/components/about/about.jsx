import styles from "./about.module.css";
import imgOwner from "../../../../public/foto-tulio.png";

import {
  FaUser,
  FaLaptopCode,
  FaBullseye,
  FaMapMarkerAlt,
  FaRocket,
  FaTerminal,
  FaCloud,
  FaBookOpen,
} from "react-icons/fa";
import { LuFocus } from "react-icons/lu";

export default function About() {
  return (
    <div className={styles.container} id="aboutme">
      <div className={styles.content}>
        <header className={styles.containerHeader}>
          <span className={styles.num}>//01</span>

          <h4>
            Sobre <span>mim</span>
          </h4>
        </header>

        <section className={styles.gridInfos}>
          <div className={styles.text}>
            <p>
              Me chamo <b>Túlio Diego</b>, sou{" "}
              <span>Desenvolvedor Front-end</span> apaixonado por criar
              interfaces modernas, responsivas e intuitivas. Tenho experiência
              no desenvolvimento de aplicações utilizando <span>React</span>,
              <span> TypeScript</span>, <span>HTML5</span> e <span>CSS3</span>,
              sempre buscando escrever código limpo, reutilizável e de fácil
              manutenção.
              <br />
              <br />
              Também trabalho com integração de <span>APIs REST</span>,{" "}
              <span>Supabase</span> e versionamento com <span>Git/GitHub</span>.
              <br />
              <br />
              Atualmente estou aprofundando meus conhecimentos em{" "}
              <span>AWS</span>, <span>NestJS</span>,<span> Docker</span> e
              arquitetura de software, buscando evoluir para o desenvolvimento
              Full Stack.
              <br />
              <br />
              Meu objetivo é conquistar minha primeira oportunidade como
              desenvolvedor e contribuir com projetos que gerem impacto real.
            </p>

            <blockquote className={styles.quote}>
              "Acredito que tecnologia é mais do que código: é a capacidade de
              transformar problemas em soluções simples e úteis."
            </blockquote>
          </div>
        </section>

        <section className={styles.gridTerminal}>
          <article className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.dotRed}></div>
              <div className={styles.dotYellow}></div>
              <div className={styles.dotGreen}></div>

              <em>developer-profile</em>
            </div>

            <div className={styles.contentTerminal}>
              <p>
                <FaUser /> <span>Nome:</span> <b>Túlio Diego</b>
              </p>

              <p>
                <FaLaptopCode /> <span>Cargo:</span> <b>Front-end Developer</b>
              </p>

              <p>
                <FaMapMarkerAlt /> <span>Local:</span> <b>Pernambuco, Brasil</b>
              </p>

              <p>
                <FaBullseye /> <span>Objetivo:</span>{" "}
                <b>Estágio / Desenvolvedor Júnior</b>
              </p>

              <p>
                <FaBookOpen /> <span>Inglês:</span> <b>B1 - Intermediário</b>
              </p>
            </div>
          </article>
          <article className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.dotRed}></div>
              <div className={styles.dotYellow}></div>
              <div className={styles.dotGreen}></div>

              <em>current-status</em>
            </div>

            <div className={styles.contentTerminal}>
              <p>
                <FaRocket /> <span>Status:</span> <b>Disponível para estágio</b>
              </p>

              <p>
                <FaCloud /> <span>Estudando:</span> <b>AWS Cloud Computing</b>
              </p>

              <p>
                <FaBookOpen /> <span>Aprendendo:</span>{" "}
                <b>NestJS • Docker • Arquitetura</b>
              </p>

              <p>
                <LuFocus /> <span>Foco:</span> <b>Desenvolvimento Fullstack</b>
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
