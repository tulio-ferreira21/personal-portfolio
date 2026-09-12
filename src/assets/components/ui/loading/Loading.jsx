import styles from "./loading.module.css";
import { useTranslation } from "react-i18next";

export default function Loading() {
  const { t } = useTranslation();
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
            <span>$</span> {t("loading.initializing")}
          </p>

          <div className={styles.loader}>
            <div className={styles.bar}></div>
          </div>

          <p className={styles.status}>
            {t("loading.components")}
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
