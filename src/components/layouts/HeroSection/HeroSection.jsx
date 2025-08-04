import React from 'react'
import styles from "./styles.module.scss"


function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero_section}>
                <h1>
                    <span className={styles.centre}>ЦЕНТР</span> <br/> 
                    <span className={styles.space}>КОСМИЧЕСКОГО</span> <br/> 
                    <span className={styles.monitoring}>МОНИТОРИНГА</span>
                </h1>
            </div>

            <div className={styles.description}>
                <p>
                    Передовые решения спутникового мониторинга, ГИС и ИИ обеспечивают точные 
                    данные в реальном времени, позволяя органам власти, аграрным и экологическим 
                    организациям принимать обоснованные решения, оптимизировать управление и 
                    снижать риски
                </p>
            </div>
            
        </section>
    );
}

export default HeroSection;