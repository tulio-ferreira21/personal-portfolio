import styles from './about.module.css'
import imgOwner from '../../../../public/foto-tulio.png'
export default function About() {
    return (
        <>
            <div className={styles.container} id='aboutme'>
                <div className={styles.content}>
                    <header className={styles.containerHeader}>
                        <span className={styles.num}>
                            //01
                        </span>
                        <h4>
                            Sobre <span>mim</span>
                        </h4>
                    </header>
                    <section className={styles.gridInfos}>
                        <div className={styles.text}>

                            <p>
                                Me chamo <b>Túlio Diego</b>, sou <span>Desenvolvedor Front-end</span> com 1 ano de estudo e foco na construção de
                                interfaces modernas, responsivas e funcionais. Tenho experiência no desenvolvimento de aplicações
                                Multi-Page (MPA) utilizando <span>HTML5</span> e <span>CSS3</span>,
                                além da criação de Single-Page Applications (SPA) com
                                <span> React</span> e <span> TypeScript</span>. <br /> <br />

                                Trabalho com consumo de <span>APIs REST</span> e integração com <span>Supabase</span>,
                                aplicando boas práticas de componentização e organização de código. <br /> <br />

                                Tenho familiaridade com <span>Git</span> e <span>GitHub</span>.
                                Atualmente, busco minha <span>primeira oportunidade de estágio</span>
                                para evoluir tecnicamente e contribuir com soluções reais.

                                Possuo nível intermediário de inglês (B1).
                            </p>


                        </div>

                        <figure className={styles.cards}>
                            <div className={styles.imgOwner}>
                                <img src={imgOwner} alt="Imagem do criador - Túlio Diego" />
                            </div>
                        </figure>
                    </section>

                </div>

                <div className={styles.gridTerminal}>
                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.dotRed}></div>
                            <div className={styles.dotYellow}></div>
                            <div className={styles.dotGreen}></div>
                            <em>infos.bash</em>
                        </div>
                        <div className={styles.contentTerminal}>
                            <div className={styles.headerTerminal}>
                                <span>$~/user:</span> <b>cat</b> -u tulio info.json
                            </div>
                            <br />
                            <p>
                                <b>localizacao: </b> 'Pernambuco, Brasil' <br />
                                <b>experiencia: </b> '+1 ano' <br />
                                <b>foco: </b> 'Desenvolvimento Front-End' <br />
                                <b>idiomas: </b> 'PT-BR, EN'
                            </p>
                        </div>
                    </div>

                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.dotRed}></div>
                            <div className={styles.dotYellow}></div>
                            <div className={styles.dotGreen}></div>
                            <em>educations.ssh</em>
                        </div>
                        <div className={styles.contentTerminal}>
                            <div className={styles.headerTerminal}>
                                <span>$</span> <b>cd</b> education/ <br />
                                <span>$ ~/user/education: </span> <b>vim.tiny</b> education.json
                            </div>
                            <br />
                            <p>
                                <b>escola: </b> 'Instituto Federal de Pernambuco' <br />
                                <b>formacao: </b> 'Técnico em Informática para Internet' <br />
                                <b>tempo: </b> 'janeiro/2023 - dezembro/2025' <br />
                                <b>nivel: </b> 'Médio - Técnico'
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}