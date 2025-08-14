import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
    {
        num: "01",
        title: "ВЫСОКАЯ ТОЧНОСТЬ",
        text: "Достоверные данные с минимальной погрешностью",
    },
    {
        num: "02",
        title: "ОПЕРАТИВНОСТЬ",
        text: "Современное предоставление актуальной информации",
    },
    {
        num: "03",
        title: "НАДЕЖНОСТЬ",
        text: "Строгая структура и прозрачная аналитика",
    },
    {
        num: "04",
        title: "ИННОВАЦИОННОСТЬ",
        text: "Использование передовых технологий и алгоритмов",
    },
    {
        num: "05",
        title: "ЭКОНОМИЯ",
        text: "Снижение затрат за счет автоматизации процессов",
    },
];

export default function AdvantagesSection() {
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((item, i) => {
            gsap.fromTo(
                item,
                { opacity:0, x: -50},
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

return (
    <section className={styles.advantages_section}>
        <h2 className={styles.section_title}>
            НАШИ ПРЕИМУЩЕСТВА
        </h2>
        <div className={styles.line}></div>
        <div className={styles.advantages_list}>
            {advantages.map((adv, i) => (
                <div
                    className={styles.advantages_item}
                    key={i}
                    ref={(el) => (itemsRef.current[i] = el)}
                >
                <div>
                    <div className={styles.num}>{adv.num}</div>
                    
                    <div className={styles.content}>
                        <h3 className={styles.content_title}>{adv.title}</h3>
                        <p className={styles.content_desc}>{adv.text}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </section>
);
}