import styles from './terminal.module.css'
export default function TerminalBody({ Component }) {
    return (
        <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
                <div className={styles.dotRed}></div>
                <div className={styles.dotYellow}></div>
                <div className={styles.dotGreen}></div>
                <em>terminal</em>
            </div>
            <div className={styles.contentTerminal}>
                <Component />
            </div>
        </div>
    )
}