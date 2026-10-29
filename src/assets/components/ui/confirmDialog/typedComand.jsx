import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function TypedComand({ action, onClose }) {
    const el = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (!el.current) return;

        let text = `
    ${t("cv.running")}
    ${t("cv.select")}
> ${action === 'pt-br'
                ? 'pt-br\n sudo apt install curriculo\ninstalling...'
                : action === 'en'
                    ? 'english\n sudo apt install curriculumVita \ninstalling...'
                    : ''
            }
`;

        const typed = new Typed(el.current, {
            strings: [text],
            typeSpeed: 18,
            showCursor: true,
            cursorChar: "|",
            loop: false,
            onComplete: () => {
                if (action) {
                    setTimeout(() => {
                        el.current.innerHTML += `\n${t("cv.done")}`;

                        const link = document.createElement('a')
                        link.href = action === 'pt-br' ?
                            '/curriculo-pt.pdf' : '/curriculumvitae-en.pdf'
                        link.download = ''
                        link.click();
                    }, 2000);

                    setTimeout(() => {
                        onClose()
                    }, 3500)
                }
            }
        });

        return () => typed.destroy();
    }, [action, i18n.language, t, onClose]);

    return (
        <div>
            <pre ref={el}></pre>
        </div>
    );
}
