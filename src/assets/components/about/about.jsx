import styles from './about.module.css'
import {
    FaHandshake,
    FaLightbulb,
    FaCode,
    FaBook
} from "react-icons/fa";

export default function About() {
    const cardsQualitys = [
        {
            icon: <FaHandshake color='hsl(120 60% 40%)' size={38} />,
            name: 'Vontade de aprender',
            description: 'Não é possível evoluir se nem sequer tens a vontade de aprender.',
        },
        {
            icon: <FaLightbulb color='hsl(120 60% 40%)' size={38} />,
            name: 'Comprometimento',
            description: 'Valorizo responsabilidade, disciplina e foco em entregar soluções funcionais e bem estruturadas.'
        },
        {
            icon: <FaCode color='hsl(120 60% 40%)' size={38} />,
            name: 'Código Organizado',
            description: 'Sempre prezando pelas boas maneiras da programação e pelo código limpo e intuitivo '
        },
        {
            icon: <FaBook color='hsl(120 60% 40%)' size={38} />,
            name: 'Inovação',
            description: 'Sempre buscando aprender as novas tecnologias e inovar em minhas aplicações'
        }
    ]
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

                        <div className={styles.cards}>
                            {cardsQualitys.map((card, index) => (
                                <div key={index} className={styles.card}>
                                    <figure>
                                        {card.icon}
                                    </figure>
                                    <b>
                                        {card.name}
                                    </b>
                                    <p>
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
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
                                <span>$</span> <b>cat</b> -u tulio info.json
                            </div>
                            <br />
                            <p>
                                <b>localizacao: </b> 'Brasil' <br /> <br />
                                <b>experiencia: </b> '+1 ano' <br /> <br />
                                <b>foco: </b> 'Desenvolvimento Front-End' <br /> <br />
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