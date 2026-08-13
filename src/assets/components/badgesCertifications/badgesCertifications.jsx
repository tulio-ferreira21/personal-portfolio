import { useEffect, useState } from "react";
import styles from "./achievements.module.css";
import { BiFile, BiBadge, BiCertification } from "react-icons/bi";
import { VscVerifiedFilled, VscWorkspaceTrusted } from "react-icons/vsc";
import { badges, certificates } from "./data";
import { createPortal } from "react-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function Achievements() {
  const [activeFile, setActiveFile] = useState("Badges");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [achievementsVisible, setachievementsVisible] = useState(
    Math.ceil(certificates.length / 2),
  );
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
            Achieve<span>ments</span>
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
              <div className={styles.sidebarTitle}>Explorer</div>

              <div className={styles.folder}>
                <BiFile /> achievements
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
                <span className={styles.comment}>// {activeFile}</span>
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
                    .map((item) => (
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
                              title="Imagem do certificado"
                            />
                          ) : (
                            <div className={styles.placeholder}>🏅</div>
                          )}
                        </div>

                        <div className={styles.cardContent}>
                          <h3>{item.title}</h3>

                          <p>{item.issuer}</p>

                          <small>Emitido em {item.issued}</small>

                          {"workload" in item && (
                            <small>• {item.workload}</small>
                          )}

                          <a
                            onClick={(e) => e.stopPropagation()}
                            href={item.credential}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ver credencial ↗
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
                          Ver menos <FaChevronUp />
                        </>
                      ) : (
                        <>
                          Ver mais <FaChevronDown />
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
                      title={`Imagem do certificado: ${selectedAchievement.title}`}
                    />
                  </div>

                  <div className={styles.modalInfo}>
                    <span className={styles.modalTag}>
                      {activeFile === "Badges" ? (
                        <>
                          <BiBadge size={20} />
                          Badge
                        </>
                      ) : (
                        <>
                          <BiCertification size={20} />
                          Certicação
                        </>
                      )}
                    </span>

                    <h2>{selectedAchievement.title}</h2>

                    <h4>{selectedAchievement.issuer}</h4>

                    <div className={styles.modalMeta}>
                      <span>
                        <strong>Emitido:</strong> {selectedAchievement.issued}
                      </span>

                      {"workload" in selectedAchievement && (
                        <span>
                          <strong>Carga horária:</strong>{" "}
                          {selectedAchievement.workload}
                        </span>
                      )}
                    </div>

                    <p>{selectedAchievement.description}</p>

                    <a
                      href={selectedAchievement.credential}
                      target="_blank"
                      rel="noreferrer"
                      style={{ cursor: "pointer" }}
                    >
                      <button className={styles.modalButton}>
                        Ver credencial ↗
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
