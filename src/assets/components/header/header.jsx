import { FaBars } from 'react-icons/fa'
import styles from './header.module.css'
import { useState } from 'react'
export default function Header() {
    const [displayNavMobile, setDisplayNavMobile] = useState(false)
    return (
        <>
            <header className={styles.header}>
                <div className={styles.dev}>
                    {`>`}_ ~/dev
                </div>
                <div className={styles.nav}>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        sobre( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        skills( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        projetos( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        xp( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        contato( )
                    </a>
                </div>

                <div className={styles.navMobile}>
                    <FaBars color='hsl(120 100% 50%)' size={38} onClick={() =>
                        displayNavMobile ? setDisplayNavMobile(false) : setDisplayNavMobile(true)} />
                </div>
            </header>
            {
                displayNavMobile && <div className={styles.contentMobile}>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        sobre( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        skills( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        projetos( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        xp( )
                    </a>
                    <a href="" className={styles.link}>
                        <span className={styles.path}>
                            $
                        </span>
                        contato( )
                    </a>
                </div>
            }
        </>
    )
}