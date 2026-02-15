import { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import styles from './contact.module.css'
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [disabled, setDisabled] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (!name || !email || !message) {
            toast.error('Informe todos os campos')
            return
        }
        if(!email.endsWith('@gmail.com')){
            toast.warning('Email inválido')
        }
        setDisabled(true)
        emailjs.send(
            "service_keo39td",
            "template_auj3uaa",
            {
                name: name,
                email: email,
                message: message
            },
            "J3dQYKp8aqxXJXwMi"
        )
            .then(() => {
                toast.success('Mensagem enviada')
                setName('')
                setEmail('')
                setMessage('')
                setDisabled(false)
            })
            .catch(() => {
                toast.error('Erro no envio')
                setDisabled(false)
            })
    }
    return (
        <>
            <div className={styles.container} id='contact'>
                <main>
                    <header className={styles.containerHeader}>
                        <span className={styles.num}>
                                    //04
                        </span>
                        <h4>
                            Vamos <span>Conversar</span>:
                        </h4>
                    </header>
                </main>
                <div className={styles.content}>
                    <div className={styles.cta}>
                        <p>
                            Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia. Se voce tem uma ideia ou quer trabalhar junto, vamos conectar.
                        </p>
                        <div className={styles.terminal}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dotRed}></div>
                                <div className={styles.dotYellow}></div>
                                <div className={styles.dotGreen}></div>
                                <em>infos.bash</em>
                            </div>

                            <div className={styles.contentTerminal}>
                                <article>
                                    <span>const</span> <b>developerInfos = {`{`}</b><br />
                                    <div className={styles.row}>
                                        <b><BsGithub size={20} /> GitHub: </b>
                                        <a href="https://github.com/tulio-ferreira21">
                                            <span>'https://github.com/tulio-ferreira21'</span>
                                        </a>
                                    </div>
                                    <div className={styles.row}>
                                        <b><BsLinkedin size={20} />Linkedin: </b>
                                        <a href="www.linkedin.com/in/tuliodiego">
                                            <span>'www.linkedin.com/in/tuliodiego'</span>
                                        </a>
                                    </div>
                                    <div className={styles.row}>
                                        <b><TfiEmail size={20} /> Email: </b>
                                        <a href="mailto:tuliodiegodev@gmail.com?subject=Contato pelo Portffólio" target="_blank">
                                            <span>'tuliodiegodev@gmail.com'</span>
                                        </a>
                                    </div>
                                    <b>
                                        {`}`}
                                    </b>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <form className={styles.terminal} onSubmit={handleSubmit}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dotRed}></div>
                                <div className={styles.dotYellow}></div>
                                <div className={styles.dotGreen}></div>
                                <em>contact.bash</em>
                            </div>
                            <div className={styles.contentTerminal}>
                                <div className={styles.inputTerminal}>
                                    <sub>
                                        <span>const</span> nome =
                                    </sub>
                                    <input type="text" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className={styles.inputTerminal}>
                                    <sub>
                                        <span>const</span> email =
                                    </sub>
                                    <input type="email" value={email} placeholder="Endereço de email" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className={styles.inputTerminal}>
                                    <sub>
                                        <span>const</span> mensagem =
                                    </sub>
                                    <textarea type="text" value={message} placeholder="Mensagem..." onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <div className={styles.inputTerminal}>
                                    <button type="submit" disabled={disabled}
                                        style={{ backgroundColor: `${disabled ? `hsl(120, 93%, 38%)` : 'hsl(120 100% 50%)'}` }}
                                    >
                                        <FaPaperPlane size={20} />
                                        enviar_mensagem()
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}