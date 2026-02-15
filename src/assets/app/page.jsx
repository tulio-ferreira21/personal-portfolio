import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";
import TechStack from "../components/techStack/techStack";
import MatrixRainComponent from "../components/ui/MatrixRain";
import styles from './page.module.css'
export default function Page() {
    return (

        <>
            <MatrixRainComponent />
            <Header />
            <Hero />
            <div className={styles.content}>
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </div>
        </>
    )
}