import { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import styles from "./contact.module.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error(t("contact.allFields"));
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      toast.warning(t("contact.invalidEmail"));
    }
    setDisabled(true);
    emailjs
      .send(
        "service_keo39td",
        "template_auj3uaa",
        {
          name: name,
          email: email,
          message: message,
        },
        "J3dQYKp8aqxXJXwMi",
      )
      .then(() => {
        toast.success(t("contact.sent"));
        setName("");
        setEmail("");
        setMessage("");
        setDisabled(false);
      })
      .catch(() => {
        toast.error(t("contact.error"));
        setDisabled(false);
      });
  }
  return (
    <>
      <div className={styles.container} id="contact">
        <main>
          <header className={styles.containerHeader}>
            <span className={styles.num}>//06</span>
            <h4>
              {t("contact.title")} <span>{t("contact.highlight")}</span>:
            </h4>
          </header>
        </main>
        <div className={styles.content}>
          <div className={styles.cta}>
            <p>
              {t("contact.description")}
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
                  <span>const</span> <b>developerInfos = {`{`}</b>
                  <br />
                  <div className={styles.row}>
                    <b>
                      <BsGithub size={20} /> GitHub:{" "}
                    </b>
                    <a href="https://github.com/tulio-ferreira21">
                      <span>'https://github.com/tulio-ferreira21'</span>
                    </a>
                  </div>
                  <div className={styles.row}>
                    <b>
                      <BsLinkedin size={20} />
                      Linkedin:{" "}
                    </b>
                    <a href="https://www.linkedin.com/in/tuliodiego/">
                      <span>'www.linkedin.com/in/tuliodiego'</span>
                    </a>
                  </div>
                  <div className={styles.row}>
                    <b>
                      <TfiEmail size={20} /> Email:{" "}
                    </b>
                    <a
                      href={`mailto:tuliodiegodev@gmail.com?subject=${encodeURIComponent(t("contact.subject"))}`}
                      target="_blank"
                    >
                      <span>'tuliodiegodev@gmail.com'</span>
                    </a>
                  </div>
                  <b>{`}`}</b>
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
                    <span>const</span> {t("contact.nameVariable")} =
                  </sub>
                  <input
                    type="text"
                    value={name}
                    placeholder={t("contact.name")}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputTerminal}>
                  <sub>
                    <span>const</span> {t("contact.emailVariable")} =
                  </sub>
                  <input
                    type="email"
                    value={email}
                    placeholder={t("contact.email")}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputTerminal}>
                  <sub>
                    <span>const</span> {t("contact.messageVariable")} =
                  </sub>
                  <textarea
                    type="text"
                    value={message}
                    placeholder={t("contact.message")}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className={styles.inputTerminal}>
                  <button
                    type="submit"
                    disabled={disabled}
                    style={{
                      backgroundColor: `${disabled ? `hsl(120, 93%, 38%)` : "hsl(120 100% 50%)"}`,
                    }}
                  >
                    <FaPaperPlane size={20} />
                    {disabled ? t("contact.sending") : t("contact.send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
