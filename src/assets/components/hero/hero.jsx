import { useState } from 'react';
import Typing from '../ui/typed';
import Terminal from '../ui/typedStacks';
import styles from './hero.module.css';
import ConfirmDialog from '../ui/confirmDialog/confirmDialog';
export default function Hero() {
    const [confirmDialog, setConfirmDialog] = useState(false);

    return (
        <>
            {confirmDialog && <ConfirmDialog onClose={() => setConfirmDialog(false)} />}


            <div className={styles.hero}>
                <div className={styles.status}>
                    <div className={styles.dot}></div>
                    STATUS: DISPONÍVEL PARA PROJETOS
                </div>
                <div className={styles.main}>
                    <span className={styles.keys}>{`{`}</span>
                    Túlio Diego
                    <span className={styles.keys}>{`}`}</span>
                </div>
                <div className={styles.typing}>
                    <b className={styles.type}>{`>`}</b>
                    <Typing />
                </div>
                <div className={styles.cta}>
                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.dotRed}></div>
                            <div className={styles.dotYellow}></div>
                            <div className={styles.dotGreen}></div>
                            <em>terminal</em>
                        </div>
                        <div className={styles.contentTerminal}>
                            <Terminal />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <a href="#projects">
                            <button className={styles.btnProjects}>
                                ver_projetos()
                            </button>
                        </a>

                        <button className={styles.btnContact} onClick={() => setConfirmDialog(true)}>
                            baixar_cv()
                        </button>
                    </div>
                </div>
                <a href="#aboutme" style={{textDecoration: 'none'}}>
                    <div className={styles.scroll}>
                        scroll()
                    </div>
                </a>
            </div>
        </>
    );
}
