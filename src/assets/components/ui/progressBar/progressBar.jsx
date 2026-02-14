import styles from './progressBar.module.css'

export default function ProgressBar({ level }) {

    const getLevelLabel = () => {
        if (level < 40) return "Iniciante"
        if (level < 80) return "Intermediário"
        return "Avançado"
    }

    return (
        <div className={styles.wrapper}>
            <span>
                Level: <b>{level}%</b> — {getLevelLabel()}
            </span>

            <div className={styles.Barwrapper}>
                <div
                    className={styles.bar}
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    )
}
