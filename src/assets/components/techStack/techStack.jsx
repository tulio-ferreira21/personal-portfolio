import { useState } from "react";
import styles from "./techStack.module.css";
import { techs, files } from "./data";
export default function TechStack() {
  const [activeFile, setActiveFile] = useState("Language");
  const currentTechs = techs.filter((tech) => tech.type === activeFile);

  return (
    <div className={styles.container} id="stacks">
      <main>
        <header className={styles.containerHeader}>
          <span className={styles.num}>//03</span>

          <h4>
            Tech <span>Stack</span>
          </h4>
        </header>

        <section className={styles.ide}>
          <header className={styles.ideHeader}>
            <div className={styles.windowButtons}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>

            <div className={styles.windowTitle}>portfolio.code-workspace</div>
          </header>
          <div className={styles.ideBody}>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarTitle}>Explorer</div>

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
                <span className={styles.comment}>// {activeFile} Stack</span>
                <br />
                <br />
                <span className={styles.keyword}>export const</span>{" "}
                <span className={styles.variable}>stack</span> <b>= [</b>
                <div className={styles.gridStacks}>
                  {currentTechs.map((tech) => (
                    <div key={tech.name} className={styles.cardTech}>
                      <tech.Icon size={48} />

                      <p>{tech.name}</p>
                    </div>
                  ))}
                </div>
                <br />
                <b>]</b>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
