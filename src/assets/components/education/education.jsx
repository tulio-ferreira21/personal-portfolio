import { useState } from "react";

import styles from "./education.module.css";

import { BiFile, BiBook, BiTime, BiCheckCircle } from "react-icons/bi";

import { education } from "./data";
import { useTranslation } from "react-i18next";

export default function Education() {
  const [activeFile] = useState("education");
  const { t } = useTranslation();
  const translatedItems = t("education.items", { returnObjects: true });

  const files = [
    {
      name: "education.ts",
      icon: BiBook,
    },
  ];

  return (
    <section className={styles.container} id="education">
      <main>
        <header className={styles.containerHeader}>
          <span className={styles.num}>//02 </span>

          <h4>
            {t("education.title")}<span>{t("education.highlight")}</span>
          </h4>
        </header>

        <section className={styles.ide}>
          <header className={styles.ideHeader}>
            <div className={styles.windowButtons}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>

            <div className={styles.windowTitle}>education.code-workspace</div>
          </header>

          <div className={styles.ideBody}>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarTitle}>{t("education.explorer")}</div>

              <div className={styles.folder}>
                <BiFile />
                {t("education.folder")}
              </div>

              {files.map((file) => {
                const Icon = file.icon;

                return (
                  <button
                    key={file.name}
                    className={`${styles.fileButton} ${styles.active}`}
                  >
                    <Icon size={18} />
                    <span>{file.name}</span>
                  </button>
                );
              })}
            </aside>

            <section className={styles.editor}>
              <div className={styles.editorTab}>{activeFile}.ts</div>

              <div className={styles.codeArea}>
                <span className={styles.comment}>// {t("education.comment")}</span>
                <br />
                <br />
                <span className={styles.keyword}>export const</span>{" "}
                <span className={styles.variable}>education</span> <b>= [</b>
                <div className={styles.timeline}>
                  {education.map((item, index) => (
                    <article className={styles.educationCard} key={item.title}>
                      <div className={styles.icon}>
                        <img src={item.image} alt={item.institution} title={t("education.imageTitle", { institution: item.institution })} />
                      </div>

                      <div className={styles.content}>
                        <h3>{translatedItems[index].title}</h3>

                        <h4>{item.institution}</h4>

                        <div className={styles.meta}>
                          <span>
                            <BiTime />
                            {item.period}
                          </span>

                          <span>
                            {item.status === "Concluído" ? (
                              <>
                                <BiCheckCircle />
                                {t("education.statusDone")}
                              </>
                            ) : (
                              <>
                                <BiTime />
                                {t("education.statusCurrent")}
                              </>
                            )}
                          </span>

                          {item.workload && <span>{item.workload}</span>}
                        </div>

                        <p>{translatedItems[index].description}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <br />
                <b>]</b>
              </div>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
}
