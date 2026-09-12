import { FaBars, FaLanguage } from "react-icons/fa";
import styles from "./header.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Header() {
  const [displayNavMobile, setDisplayNavMobile] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => i18n.changeLanguage(event.target.value);

  const links = [
    ["aboutme", "nav.about"],
    ["stacks", "nav.skills"],
    ["projects", "nav.projects"],
    ["achievements", "nav.achievements"],
    ["contact", "nav.contact"],
  ];

  const languageSelector = (
    <label className={styles.language}>
      <FaLanguage
        className={styles.languageIcon}
        aria-hidden="true"
      />

      <select
        value={i18n.language}
        onChange={changeLanguage}
        aria-label={t("language.label")}
      >
        <option value="pt-BR">{t("language.pt")}</option>
        <option value="en">{t("language.en")}</option>
        <option value="es">{t("language.es")}</option>
      </select>
    </label>
  ); u

  const navigationLinks = links.map(([href, label]) => (
    <a href={`#${href}`} className={styles.link} key={href}>
      <span className={styles.path}>$</span>{t(label)}
    </a>
  ));

  return (
    <>
      <header className={styles.header}>
        <div className={styles.dev}>{`>`}_ ~/td_server</div>
        <div className={styles.nav}>{navigationLinks}</div>
        <div className={styles.languageSelector}>
          {languageSelector}
        </div>

        <div className={styles.navMobile}>
          <FaBars
            color="hsl(120 100% 50%)"
            size={38}
            onClick={() => {
              return displayNavMobile
                ? setDisplayNavMobile(false)
                : setDisplayNavMobile(true);
            }}
          />
        </div>
      </header>
      {displayNavMobile && (
        <div className={styles.contentMobile}>
          {navigationLinks}
          {languageSelector}
        </div>
      )}
    </>
  );
}
