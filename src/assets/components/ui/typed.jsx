import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Typing() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Desenvolvedor Front-End",
                "React (Vite e CRA)",
                "HTML e CSS",
                "Bootstrap e SASS",
                "JavaScript e TypeScript",
            ],
            typeSpeed: 18,
            backSpeed: 20,
            backDelay: 5000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el}></span>;
}
