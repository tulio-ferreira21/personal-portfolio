import styles from "./project.module.css";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { allProjects } from "./data";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [projectsVisible, setProjectsVisible] = useState(
    allProjects.length / 2,
  );
  const { t } = useTranslation();
  const translatedDescriptions = t("projects.items", { returnObjects: true });
  return (
    <>
      <div className={styles.container} id="projects">
        <main>
          <header className={styles.containerHeader}>
            <span className={styles.num}>//04</span>
            <h4>
              {t("projects.title")} <span>{t("projects.highlight")}</span>
            </h4>
          </header>
          <div className={styles.wrapper}>
            <section className={styles.projects}>
              <aside>
                <span>$~/user:</span> {t("projects.command")}
              </aside>
              <div className={styles.gridProjects}>
                {allProjects.slice(0, projectsVisible).map((project, index) => (
                  <div key={index} className={styles.cardProject}>
                    <img
                      src={project.img}
                      alt={t("projects.imageAlt", { name: project.name })}
                      title={t("projects.imageAlt", { name: project.name })}
                    />
                    <header>
                      <h3>{project.name}</h3>
                      <div className={styles.links}>
                        {project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            title={t("projects.repoTitle")}
                          >
                            <SiGithub size={30} />
                          </a>
                        ) : (
                          ""
                        )}
                        <a
                          href={project.href}
                          target="_blank"
                          title={t("projects.siteTitle")}
                        >
                          <FiExternalLink size={30} />
                        </a>
                      </div>
                    </header>
                    <p>{translatedDescriptions[index]}</p>
                    <div className={styles.techs}>
                      {project.techs.map((tech) => (
                        <div className={styles.tech}>{tech}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.showMoreButton}
                  onClick={() =>
                    setProjectsVisible(
                      projectsVisible >= allProjects.length
                        ? Math.ceil(allProjects.length / 2)
                        : allProjects.length,
                    )
                  }
                >
                  {projectsVisible >= allProjects.length ? (
                    <>
                      {t("projects.less")} <FaChevronUp />
                    </>
                  ) : (
                    <>
                      {t("projects.more")} <FaChevronDown />
                    </>
                  )}
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
