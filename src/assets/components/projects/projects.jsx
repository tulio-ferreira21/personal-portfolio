import styles from './project.module.css'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

export default function Projects() {
    const Projects = [
        {
            name: 'Catálogo B&B',
            description: 'Catálogo web para exposição de produtos com integração ao Supabase.',
            techs: ['HTML', 'CSS', 'JavaScript', 'Git & GitHub', 'VSCode', 'Supabase'],
            href: 'https://catalogo-b-b.vercel.app/',
            repo: null
        },
        {
            name: 'Pokemon Search',
            description: 'App que consome a PokéAPI para busca e exibição de Pokémon.',
            techs: ['HTML', 'SASS', 'JavaScript', 'Git & GitHub', 'VSCode'],
            href: 'https://vercel.com/diegotulio27-2508s-projects/pokemon-search',
            repo: 'https://github.com/tulio-ferreira21/pokemon-search'
        },
        {
            name: 'Birthday Organization',
            description: 'SPA para organização e controle financeiro de eventos com dashboard de gráficos.',
            techs: ['React', 'JavaScript', 'CSS', 'Git & GitHub', 'VSCode'],
            href: 'https://birthday-organization-ivory.vercel.app',
            repo: 'https://github.com/tulio-ferreira21/birthday-organization'
        },
        {
            name: 'World Countries',
            description: 'App em React que consome API para listar países com mapa interativo.',
            techs: ['React', 'JavaScript', 'CSS', 'Git & GitHub', 'VSCode'],
            href: 'https://world-countries-explorer-iota.vercel.app/',
            repo: 'https://github.com/tulio-ferreira21/world-countries-explorer'
        },
        {
            name: 'GateBoard',
            description: 'Plataforma Kanban com autenticação frontend e persistência via localStorage.',
            techs: ['React', 'TypeScript', 'CSS', 'Git & GitHub', 'VSCode'],
            href: 'https://gateboard.vercel.app',
            repo: 'https://github.com/tulio-ferreira21/GateBoard'
        },
        {
            name: 'Portfólio Pessoal',
            description: 'Portfólio em React com layout responsivo e estrutura modular.',
            techs: ['React', 'JavaScript', 'CSS', 'Git & GitHub', 'VSCode'],
            href: 'https://portfolio-tulio-sand.vercel.app/',
            repo: 'https://github.com/tulio-ferreira21/personal-portfolio'
        }
    ]

    return (
        <>
            <div className={styles.container} id='projects'>
                <main>
                    <header className={styles.containerHeader}>
                        <span className={styles.num}>
                                    //03
                        </span>
                        <h4>
                            Meus <span>Projetos</span>
                        </h4>
                    </header>
                    <div className={styles.wrapper}>
                        <span>$</span> ls -l projects/
                        <section className={styles.projects}>
                            {Projects.map(project => (
                                <div className={styles.cardProject}>
                                    <header>
                                        <h3>{project.name}</h3>
                                        <div className={styles.links}>
                                            <a href={project.repo} target='_blank' title='Ir ao repositório'>
                                                <SiGithub size={30} />
                                            </a>
                                            <a href={project.href} target='_blank' title='Ir ao site'>
                                                <FiExternalLink size={30} />
                                            </a>
                                        </div>
                                    </header>
                                    <p>
                                        {project.description}
                                    </p>
                                    <div className={styles.techs}>
                                        {project.techs.map(tech => (
                                            <div className={styles.tech}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}