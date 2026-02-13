import styles from './modal.module.css'
import { FaDownload } from 'react-icons/fa'
import TypedComand from './typedComand'
import { useState } from 'react'
export default function ConfirmDialog({ onClose }) {
    const [actions, setActions] = useState('')

    return (
        <>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.containerDialog} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.terminalHeader}>
                        <div className={styles.dotRed}></div>
                        <div className={styles.dotYellow}></div>
                        <div className={styles.dotGreen}></div>
                        <em>terminal</em>
                    </div>
                    <div className={styles.comand}>
                        <span>
                            {`>`}_~/user:
                        </span>
                        <TypedComand action={actions} onClose={onClose}/>
                    </div>
                    <h3>
                        <br />
                        Escolha o idioma do Currículo
                    </h3>
                    <div className={styles.btnsChoose}>

                        <button className={styles.btnPt} onClick={() => setActions('pt-br')}>
                            <FaDownload /> PT-BR
                        </button>
                        <button className={styles.btnEn} onClick={() => setActions('en')}>
                            <FaDownload />    EN
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}