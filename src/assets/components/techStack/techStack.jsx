import styles from './techStack.module.css'
import {
    SiHtml5,
    SiCss3,
    SiReact,
    SiBootstrap,
    SiSass,
    SiTypescript,
    SiJavascript,
    SiGit,
    SiGithub,
    SiSupabase,
    SiNotion,
    SiSqlite
} from 'react-icons/si'

import { VscVscode } from 'react-icons/vsc'
import ProgressBar from '../ui/progressBar/progressBar'
export default function TechStack() {
    const techs = [
        { name: 'HTML5', Icon: SiHtml5, type: 'langMark' },
        { name: 'CSS3', Icon: SiCss3, type: 'langMark' },
        { name: 'JavaScript', Icon: SiJavascript, type: 'lang' },
        { name: 'TypeScript', Icon: SiTypescript, type: 'lang' },
        { name: 'SQL', Icon: SiSqlite, type: 'lang' },

        { name: 'React', Icon: SiReact, type: 'framework' },
        { name: 'Bootstrap', Icon: SiBootstrap, type: 'framework' },
        { name: 'Sass', Icon: SiSass, type: 'framework' },

        { name: 'Git', Icon: SiGit, type: 'tool' },
        { name: 'GitHub', Icon: SiGithub, type: 'tool' },
        { name: 'Supabase', Icon: SiSupabase, type: 'tool' },
        { name: 'VS Code', Icon: VscVscode, type: 'tool' },
        { name: 'Notion', Icon: SiNotion, type: 'tool' },
    ]

    const techsTools = techs.filter(tech => tech.type === 'tool')
    const techsFramLib = techs.filter(tech => tech.type === 'framework')
    const techsLang = techs.filter(tech => tech.type === 'lang' || tech.type === 'langMark')

    return (

        <>
            <div className={styles.container} id='stacks'>
                <main>
                    <header className={styles.containerHeader}>
                        <span className={styles.num}>
                        //02
                        </span>
                        <h4>
                            Tech <span>Stack</span>
                        </h4>
                    </header>
                    <section className={styles.content}>
                        <div className={styles.terminal}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dotRed}></div>
                                <div className={styles.dotYellow}></div>
                                <div className={styles.dotGreen}></div>
                                <em>languages.bash</em>
                            </div>
                            <div className={styles.contentTerminal}>
                                <span>$ ~/user: </span>  <b>cd</b> stacks/langs <br />
                                <span>$ ~/user/stacks/langs: </span> <b>ls -s</b> <br />
                                <br />
                                ------ langs :
                                <section className={styles.gridStacks}>
                                    {techsLang.map((tech, index) => (
                                        <>
                                            <div key={index} className={styles.cardTech}>
                                                <figure>
                                                    <tech.Icon size={50} color='hsl(120 100% 50%)' />
                                                </figure>
                                                <p>{tech.name}</p>
                                            </div>
                                        </>
                                    ))}
                                </section>
                                <ProgressBar level={75} />

                            </div>
                        </div>

                        <div className={styles.terminal}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dotRed}></div>
                                <div className={styles.dotYellow}></div>
                                <div className={styles.dotGreen}></div>
                                <em>frameworks.bash</em>
                            </div>
                            <div className={styles.contentTerminal}>
                                <span>$ ~/user:</span>  <b>cd</b> stacks/langs/frameworks <br />
                                <span>$ ~/user/stacks/langs/frameworks:</span> <b>ls -s</b> <br />
                                <br />
                                ------ frameworks and libs   :
                                <section className={styles.gridStacks}>
                                    {techsFramLib.map((tech, index) => (
                                        <>
                                            <div key={index} className={styles.cardTech}>
                                                <figure>
                                                    <tech.Icon size={55} color='hsl(120 100% 50%)' />
                                                </figure>
                                                <p>{tech.name}</p>
                                            </div>
                                        </>
                                    ))}
                                </section>
                                <ProgressBar level={50} />
                            </div>
                        </div>

                        <div className={styles.terminal}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dotRed}></div>
                                <div className={styles.dotYellow}></div>
                                <div className={styles.dotGreen}></div>
                                <em>tools.bash</em>
                            </div>
                            <div className={styles.contentTerminal}>
                                <span>$ ~/user: </span>  <b>cd</b> stacks/tools <br />
                                <span>$ ~/user/stacks/tools: </span> <b>ls -s</b> <br />
                                <br />
                                ------ tools :
                                <section className={styles.gridStacks}>
                                    {techsTools.map((tech, index) => (
                                        <>
                                            <div key={index} className={styles.cardTech}>
                                                <figure>
                                                    <tech.Icon size={50} color='hsl(120 100% 50%)' />
                                                </figure>
                                                <p>{tech.name}</p>
                                            </div>
                                        </>
                                    ))}
                                </section>
                                <ProgressBar level={60} />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>

    )
}