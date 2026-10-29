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
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className={styles.container} id="aboutme">
      <div className={styles.content}>
        <header className={styles.containerHeader}>
          <span className={styles.num}>//01</span>

          <h4>
            {t("about.title")} <span>{t("about.highlight")}</span>
          </h4>
        </header>

        <section className={styles.gridInfos}>
          <div className={styles.text}>
            <p>
              {t("about.intro")}
              <br />
              <br />
              {t("about.api")}
              <br />
              <br />
              {t("about.cloud")}
              <br />
              <br />
              {t("about.objective")}
            </p>

            <blockquote className={styles.quote}>
              {t("about.quote")}
            </blockquote>
          </div>
        </section>

        <section className={styles.gridTerminal}>
          <article className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.dotRed}></div>
              <div className={styles.dotYellow}></div>
              <div className={styles.dotGreen}></div>

              <em>{t("about.profile")}</em>
            </div>

            <div className={styles.contentTerminal}>
              <p>
                <FaUser /> <span>{t("about.fields.name")}</span> <b>Túlio Diego</b>
              </p>

              <p>
                <FaLaptopCode /> <span>{t("about.fields.role")}</span> <b>{t("about.values.role")}</b>
              </p>

              <p>
                <FaMapMarkerAlt /> <span>{t("about.fields.location")}</span> <b>Pernambuco, Brasil</b>
              </p>

              <p>
                <FaBullseye /> <span>{t("about.fields.objective")}</span>{" "}
                <b>{t("about.values.objective")}</b>
              </p>

              <p>
                <FaBookOpen /> <span>{t("about.fields.english")}</span> <b>{t("about.values.english")}</b>
              </p>
            </div>
          </article>
          <article className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.dotRed}></div>
              <div className={styles.dotYellow}></div>
              <div className={styles.dotGreen}></div>

              <em>{t("about.status")}</em>
            </div>

            <div className={styles.contentTerminal}>
              <p>
                <FaRocket /> <span>{t("about.fields.status")}</span> <b>{t("about.values.status")}</b>
              </p>

              <p>
                <FaCloud /> <span>{t("about.fields.studying")}</span> <b>{t("about.values.studying")}</b>
              </p>

              <p>
                <FaBookOpen /> <span>{t("about.fields.learning")}</span>{" "}
                <b>{t("about.values.learning")}</b>
              </p>

              <p>
                <LuFocus /> <span>{t("about.fields.focus")}</span> <b>{t("about.values.focus")}</b>
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
