import { useEffect, useState } from "react";

import About from "../components/about/about";
import Achievements from "../components/badgesCertifications/badgesCertifications";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";
import TechStack from "../components/techStack/techStack";
import MatrixRainComponent from "../components/ui/MatrixRain";
import Loading from "../components/ui/loading/Loading";
import Education from "../components/education/education";

import styles from "./page.module.css";

import { getFps } from "../services/getPerformanceTier";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initPage() {
      await getFps();
      setIsLoading(false);
    }

    initPage();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <MatrixRainComponent />
      <Header />
      <Hero />
      <div className={styles.content}>
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
