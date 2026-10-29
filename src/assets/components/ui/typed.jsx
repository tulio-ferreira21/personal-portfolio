import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Typing() {
    const el = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                ...t("hero.typing", { returnObjects: true }),
            ],
            typeSpeed: 18,
            backSpeed: 20,
            backDelay: 5000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, [i18n.language, t]);

    return <span ref={el}></span>;
}
