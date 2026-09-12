import { useState } from "react";
import { FaArrowDown, FaAws, FaGithub, FaReact } from "react-icons/fa";
import { TbBrandTypescript, TbBrandVscode, TbWorld } from "react-icons/tb";

import Typing from "../ui/typed";
import ConfirmDialog from "../ui/confirmDialog/confirmDialog";

import styles from "./hero.module.css";
import { SiExpress, SiNestjs } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [confirmDialog, setConfirmDialog] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {confirmDialog && (
        <ConfirmDialog onClose={() => setConfirmDialog(false)} />
      )}

      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.blur1}></div>
        <div className={styles.blur2}></div>

        <div className={styles.content}>
          <h1>
            {t("hero.greeting")}
            <br />
            <span>Túlio Diego</span>
          </h1>

          <div className={styles.typing}>
            <span>{">"}</span>
            <Typing />
          </div>

          <p>
            {t("hero.description")}
          </p>

          <div className={styles.stack}>
            <span>
              <FaReact />
              React
            </span>

            <span>
              <TbBrandTypescript />
              TypeScript
            </span>
            <span>
              <SiNestjs />
              Nest.js
            </span>
            <span>
              <FaAws />
              AWS
            </span>
          </div>

          <div className={styles.buttons}>
            <a href="#projects">
              <button>{t("hero.viewProjects")}</button>
            </a>

            <button onClick={() => setConfirmDialog(true)}>{t("hero.downloadCv")}</button>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.glow}></div>

          <div className={styles.imageWrapper}>
            <img src="/foto-tulio.png" alt={t("hero.imageAlt")} title={t("hero.imageTitle")} />
          </div>

          <div className={`${styles.techBadge} ${styles.react}`}>
            <FaReact />
            React
          </div>

          <div className={`${styles.techBadge} ${styles.typescript}`}>
            <TbBrandTypescript />
            TypeScript
          </div>

          <div className={`${styles.techBadge} ${styles.express}`}>
            <SiExpress />
            Express
          </div>

          <div className={`${styles.techBadge} ${styles.nest}`}>
            <SiNestjs />
            NestJS
          </div>

          <div className={`${styles.techBadge} ${styles.aws}`}>
            <FaAws />
            AWS
          </div>
        </div>
      </section>
    </>
  );
}
