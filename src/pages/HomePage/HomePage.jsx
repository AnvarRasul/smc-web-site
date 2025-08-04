import React from "react";
import styles from "./styles.module.scss"
import HeroSection from "../../components/layouts/HeroSection/HeroSection";

function HomePage() {
return (
    <div>
        <div className={styles.home_body}>
            <HeroSection/>
        </div>
    </div>
    );
}

export default HomePage;