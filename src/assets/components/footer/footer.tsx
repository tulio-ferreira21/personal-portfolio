import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h3>
            Túlio<span>.</span>
          </h3>

          <p>
            Desenvolvedor Fullstack focado no desenvolvimento completo de plataformas e sites modernos
          </p>
        </div>

        <div className={styles.links}>
          <h4>Navegação</h4>

          <a href="#aboutme">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Tecnologias</a>
          <a href="#contact">Contato</a>
        </div>

        <div className={styles.social}>
          <h4>Conecte-se</h4>

          <div>
            <a href="https://github.com/tulio-ferreira21" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/tuliodiego" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © Túlio Diego. {new Date().getFullYear()}. Todos os direitos
          reservados
        </span>
      </div>
    </footer>
  );
}
