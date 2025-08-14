import React from "react";
import styles from "./styles.module.scss";
import Header from "../../components/layouts/Header/Header";
import HeroSection from "../../components/layouts/HeroSection/HeroSection";
import OurServices from '../../components/layouts/OurServices/OurServices';
import AdvantagesSection from '../../components/layouts/Benefits/Benefits';
import Organizations from "../../components/layouts/OrganizationsSection/OrganizationsSection";

function HomePage() {
return (
    <div>
        <div className={styles.home_body}>
            <Header/>
            <HeroSection/>
            <OurServices/>
            <AdvantagesSection/>
            <Organizations/>
        </div>
    </div>
    );
}

export default HomePage;