import React from "react";
import styles from "./styles.module.scss";
import Header from "../../components/layouts/Header/Header";
import HeroSection from "../../components/layouts/HeroSection/HeroSection";
import OurServices from '../../components/layouts/OurServices/OurServices';

function HomePage() {
return (
    <div>
        <div className={styles.home_body}>
            <Header/>
            <HeroSection/>
            <OurServices/>
        </div>
    </div>
    );
}

export default HomePage;