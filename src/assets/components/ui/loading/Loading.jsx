import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.green}></span>
        </div>

        <div className={styles.content}>
          <p>
            <span>$</span> initializing_td_server...
          </p>

          <div className={styles.loader}>
            <div className={styles.bar}></div>
          </div>

          <p className={styles.status}>
            Loading components
            <span className={styles.dots}>
              <i>.</i>
              <i>.</i>
              <i>.</i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
