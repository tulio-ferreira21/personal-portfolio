import styles from "./project.module.css";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { allProjects } from "./data";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Projects() {
  const [projectsVisible, setProjectsVisible] = useState(
    allProjects.length / 2,
  );
  return (
    <>
      <div className={styles.container} id="projects">
        <main>
          <header className={styles.containerHeader}>
            <span className={styles.num}>//04</span>
            <h4>
              Meus <span>Projetos</span>
            </h4>
          </header>
          <div className={styles.wrapper}>
            <section className={styles.projects}>
              <aside>
                <span>$~/user:</span> ls -l projects/
              </aside>
              <div className={styles.gridProjects}>
                {allProjects.slice(0, projectsVisible).map((project, index) => (
                  <div key={index} className={styles.cardProject}>
                    <img src={project.img} />
                    <header>
                      <h3>{project.name}</h3>
                      <div className={styles.links}>
                        {project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            title="Ir ao repositório"
                          >
                            <SiGithub size={30} />
                          </a>
                        ) : (
                          ""
                        )}
                        <a
                          href={project.href}
                          target="_blank"
                          title="Ir ao site"
                        >
                          <FiExternalLink size={30} />
                        </a>
                      </div>
                    </header>
                    <p>{project.description}</p>
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
                      Ver menos <FaChevronUp />
                    </>
                  ) : (
                    <>
                      Ver mais <FaChevronDown />
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
