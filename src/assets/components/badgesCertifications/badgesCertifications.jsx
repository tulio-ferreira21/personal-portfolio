import { useEffect, useState } from "react";
import styles from "./achievements.module.css";
import { BiFile, BiBadge, BiCertification } from "react-icons/bi";
import { VscVerifiedFilled, VscWorkspaceTrusted } from "react-icons/vsc";
import { badges, certificates } from "./data";
import { createPortal } from "react-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Achievements() {
  const [activeFile, setActiveFile] = useState("Badges");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [achievementsVisible, setachievementsVisible] = useState(
    Math.ceil(certificates.length / 2),
  );
  const { t } = useTranslation();
  const translatedItems = t("achievements.items", { returnObjects: true });
  const files = [
    {
      name: "badges.ts",
      type: "Badges",
      icon: VscWorkspaceTrusted,
    },
    {
      name: "certificates.ts",
      type: "Certificates",
      icon: VscVerifiedFilled,
    },
  ];

  const currentItems = activeFile === "Badges" ? badges : certificates;
  const selectedIndex = certificates.indexOf(selectedAchievement);
  const selectedTranslation = translatedItems[selectedIndex] || selectedAchievement || {};
  useEffect(() => {
    if (selectedAchievement) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [selectedAchievement]);
  return (
    <section className={styles.container} id="achievements">
      <main>
        <header className={styles.containerHeader}>
          <span className={styles.num}>//05</span>

          <h4>
            {t("achievements.title")}<span>{t("achievements.highlight")}</span>
          </h4>
        </header>

        <section className={styles.ide}>
          <header className={styles.ideHeader}>
            <div className={styles.windowButtons}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>

            <div className={styles.windowTitle}>
              achievements.code-workspace
            </div>
          </header>
          <div className={styles.ideBody}>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarTitle}>{t("achievements.explorer")}</div>

              <div className={styles.folder}>
                <BiFile /> {t("achievements.folder")}
              </div>

              {files.map((file) => {
                const Icon = file.icon;

                return (
                  <button
                    key={file.name}
                    onClick={() => setActiveFile(file.type)}
                    className={`${styles.fileButton} ${
                      activeFile === file.type ? styles.active : ""
                    }`}
                  >
                    <Icon size={18} />

                    <span>{file.name}</span>
                  </button>
                );
              })}
            </aside>

            <section className={styles.editor}>
              <div className={styles.editorTab}>
                {activeFile.toLowerCase()}.ts
              </div>

              <div className={styles.codeArea}>
                <span className={styles.comment}>// {t("achievements.comment")}</span>
                <br />
                <br />
                <span className={styles.keyword}>export const</span>{" "}
                <span className={styles.variable}>achievements</span> <b>= [</b>
                <div className={styles.cards}>
                  {currentItems
                    .slice(
                      0,
                      activeFile === "Certificates"
                        ? achievementsVisible
                        : currentItems.length,
                    )
                    .map((item, index) => (
                      <article
                        key={item.title}
                        className={styles.card}
                        onClick={() => setSelectedAchievement(item)}
                      >
                        <div className={styles.cardImage}>
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              title={t("achievements.imageTitle")}
                            />
                          ) : (
                            <div className={styles.placeholder}>🏅</div>
                          )}
                        </div>

                        <div className={styles.cardContent}>
                          <h3>{activeFile === "Certificates" ? translatedItems[index].title : item.title}</h3>

                          <p>{activeFile === "Certificates" ? translatedItems[index].issuer : item.issuer}</p>

                          <small>{t("achievements.issued")} {item.issued}</small>

                          {"workload" in item && (
                            <small>• {item.workload}</small>
                          )}

                          <a
                            onClick={(e) => e.stopPropagation()}
                            href={item.credential}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("achievements.credential")}
                          </a>
                        </div>
                      </article>
                    ))}
                </div>
                {activeFile === "Certificates" && (
                  <div className={styles.buttonContainer}>
                    <button
                      className={styles.showMoreButton}
                      onClick={() =>
                        setachievementsVisible(
                          achievementsVisible >= certificates.length
                            ? Math.ceil(certificates.length / 2)
                            : certificates.length,
                        )
                      }
                    >
                      {achievementsVisible >= certificates.length ? (
                        <>
                          {t("achievements.less")} <FaChevronUp />
                        </>
                      ) : (
                        <>
                          {t("achievements.more")} <FaChevronDown />
                        </>
                      )}
                    </button>
                  </div>
                )}
                <br />
                <b>]</b>
              </div>
            </section>
          </div>
        </section>
        {selectedAchievement &&
          createPortal(
            <div
              className={styles.modalOverlay}
              onClick={() => setSelectedAchievement(null)}
            >
              <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.closeButton}
                  onClick={() => setSelectedAchievement(null)}
                >
                  ✕
                </button>

                <div className={styles.modalContent}>
                  <div className={styles.modalImage}>
                    <img
                      src={selectedAchievement.image}
                      alt={selectedAchievement.title}
                      title={`${t("achievements.imageTitle")}: ${selectedAchievement.title}`}
                    />
                  </div>

                  <div className={styles.modalInfo}>
                    <span className={styles.modalTag}>
                      {activeFile === "Badges" ? (
                        <>
                          <BiBadge size={20} />
                          {t("achievements.badge")}
                        </>
                      ) : (
                        <>
                          <BiCertification size={20} />
                          {t("achievements.certificate")}
                        </>
                      )}
                    </span>

                    <h2>{selectedTranslation.title}</h2>

                    <h4>{selectedTranslation.issuer}</h4>

                    <div className={styles.modalMeta}>
                      <span>
                        <strong>{t("achievements.issued")}:</strong> {selectedAchievement.issued}
                      </span>

                      {"workload" in selectedAchievement && (
                        <span>
                          <strong>{t("achievements.workload")}</strong>{" "}
                          {selectedAchievement.workload}
                        </span>
                      )}
                    </div>

                    <p>{selectedTranslation.description}</p>

                    <a
                      href={selectedAchievement.credential}
                      target="_blank"
                      rel="noreferrer"
                      style={{ cursor: "pointer" }}
                    >
                      <button className={styles.modalButton}>
                        {t("achievements.credential")}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </main>
    </section>
  );
}
