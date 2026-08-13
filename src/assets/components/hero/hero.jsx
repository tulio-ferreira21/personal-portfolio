import { useState } from "react";
import { FaArrowDown, FaAws, FaGithub, FaReact } from "react-icons/fa";
import { TbBrandTypescript, TbBrandVscode, TbWorld } from "react-icons/tb";

import Typing from "../ui/typed";
import ConfirmDialog from "../ui/confirmDialog/confirmDialog";

import styles from "./hero.module.css";
import { SiExpress, SiNestjs } from "react-icons/si";

export default function Hero() {
  const [confirmDialog, setConfirmDialog] = useState(false);

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
            Olá, eu sou
            <br />
            <span>Túlio Diego</span>
          </h1>

          <div className={styles.typing}>
            <span>{">"}</span>
            <Typing />
          </div>

          <p>
            Desenvolvedor Fullstack apaixonado por criar sistemas com interfaces
            modernas, responsivas e funcionais utilizando React, TypeScript,
            Express.js, Nest.js e tecnologias de Cloud.
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
              <button>ver_projetos()</button>
            </a>

            <button onClick={() => setConfirmDialog(true)}>baixar_cv()</button>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.glow}></div>

          <div className={styles.imageWrapper}>
            <img src="/foto-tulio.png" alt="Túlio Diego" title="Imagem do proprietário: Túlio Diego" />
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
