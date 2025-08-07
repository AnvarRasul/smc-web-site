import React from "react";
import styles from "./styles.module.scss"
import Header from "../../components/layouts/Header/Header"
import HeroSection from "../../components/layouts/HeroSection/HeroSection";

function HomePage() {
return (
    <div>
        <div className={styles.home_body}>
            <Header/>
            <HeroSection/>
        </div>
    </div>
    );
}

export default HomePage;