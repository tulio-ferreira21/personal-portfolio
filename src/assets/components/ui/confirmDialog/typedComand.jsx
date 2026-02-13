import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedComand({ action, onClose }) {
    const el = useRef(null);

    useEffect(() => {
        if (!el.current) return;

        let text = `
running download_cv()...
select language:
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
                        el.current.innerHTML += "\ndownload done! ✓";

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
    }, [action]);

    return (
        <div>
            <pre ref={el}></pre>
        </div>
    );
}
