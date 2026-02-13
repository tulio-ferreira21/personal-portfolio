import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Terminal() {
    const el = useRef(null);

    useEffect(() => {
        if (!el.current) return;

        const typed = new Typed(el.current, {
            strings: [`
<span>const</span> <b>developer</b> = {<br/>
&nbsp;&nbsp;name: <span>"Túlio Diego"</span>,<br/>
&nbsp;&nbsp;stackLang: <span>["JavaScript", "TypeScript"]</span>,<br/>
&nbsp;&nbsp;stackLangMarq: <span>["HTML", "CSS", "Bootstrap", "SASS"]</span><br/>
&nbsp;&nbsp;stackFrameWork: <span>['React']</span><br/>
&nbsp;&nbsp;stackOthers: <span>["Supabase", "SQL", "Git & GitHub"]</span>,<br/>
&nbsp;&nbsp;objective: <span>""</span>
}
      `],
            typeSpeed: 18,
            showCursor: true,
            cursorChar: "|",
            loop: false,
            contentType: "html"
        });

        return () => typed.destroy();
    }, []);

    return (

        <pre ref={el}></pre>

    );
}
