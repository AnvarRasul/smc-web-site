import React, {useEffect, useRef} from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss";
import globe from "./../../../assets/images/globe.webp"

function Organizations() {
    return (
        <section className={styles.organizations_section}>
            <div className={styles.organizations_title}>
                <h2>ДЛЯ КОГО ЭТО РЕШЕНИЕ</h2>
            </div>
            <div className={styles.organizations_content}>
                <div className={styles.left_content}>
                <div className={`${styles.item} ${styles["top-left"]}`}>
                    <div className={styles.box}>
                        <h3>ЭКОЛОГИЧЕСКИЕ ОРГАНИЗАЦИИ</h3>
                        <p>Для контроля и мониторинга экологических рисков</p>
                    </div>
                    <span className="line"></span>
                </div>

                <div className={`${styles.item} ${styles["mid-left"]}`}>
                    <div className={styles.box}>
                        <h3>АГРАРНЫЙ СЕКТОР</h3>
                        <p>Для сельхозкомпаний, заинтересованных в анализе посевов</p>
                    </div>
                    <span className="line"></span>
                </div>

                <div className={`${styles.item} ${styles["bottom-left"]}`}>
                    <div className={styles.box}>
                        <h3>КАДАСТРОВЫЕ СЛУЖБЫ</h3>
                        <p>Для точного определения и учёта земельных участков</p>
                    </div>
                    <span className="line"></span>
                </div>
            </div>

            <div className={styles.globe}>
                <img src={globe} alt="Globe"/>
            </div>

                <div className={styles.rigth_content}>
                <div className={`${styles.item} ${styles["top-rigth"]}`}>
                    <div className={styles.box}>
                        <h3>ГОССТРУКТУРЫ</h3>
                        <p> Для органов власти, которым необходим оперативный контроль</p>
                    </div>
                    <span className="line"></span>
                </div>

                <div className={`${styles.item} ${styles["mid-rigth"]}`}>
                    <div className={styles.box}>
                        <h3>НАУЧНЫЕ ИНСТИТУТЫ</h3>
                        <p>Для проведения исследований с использованием спутниковых данных</p>
                    </div>
                    <span className="line"></span>
                </div>

                <div className={`${styles.item} ${styles["bottom-rigth"]}`}>
                    <div className={styles.box}>
                        <h3>ИНВЕСТИЦИОННЫЕ КОМПАНИИ</h3>
                        <p>Для оценки рисков и планирования инвестиций</p>
                    </div>
                    <span className="line"></span>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Organizations;