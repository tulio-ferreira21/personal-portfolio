import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h3>
            Túlio<span>.</span>
          </h3>

          <p>
            {t("footer.description")}
          </p>
        </div>

        <div className={styles.links}>
          <h4>{t("footer.navigation")}</h4>

          <a href="#aboutme">{t("nav.about")}</a>
          <a href="#projects">{t("nav.projects")}</a>
          <a href="#stacks">{t("footer.technologies")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </div>

        <div className={styles.social}>
          <h4>{t("footer.connect")}</h4>

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
          © Túlio Diego. {new Date().getFullYear()}. {t("footer.rights")}
        </span>
      </div>
    </footer>
  );
}
