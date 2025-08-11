// import { useState, useRef, useEffect } from "react";
import React from "react";
import styles from "./styles.module.scss";
import elipseSatellite from "../../../assets/images/elipse_satellite.webp"
import elipseManagment from "../../../assets/images/managment.webp"
import elipseWater from "../../../assets/images/water_monitoring.webp"
import elipseGis from "../../../assets/images/gis_platform.webp"
import elipseWeb from "../../../assets/images/web.webp"
import elipseDatabase from "../../../assets/images/database.webp"
import elipseAI from "../../../assets/images/artificial.webp"
import elipseBoundary from "../../../assets/images/boundary.webp"
import linkArrow from "../../../assets/images/link.svg"

const services = [
    {
        tag: "#satellite",
        title: "SATELLITE MONITORING",
        description: "High-precision satellite imagery for rapid change analysis",
        image: elipseSatellite,
    },
    {
        tag: "#automation",
        title: "MANAGEMENT SYSTEMS",
        description: "Integrated solutions for process control and optimization",
        image: elipseManagment,
    },
    {
        tag: "#water Analysis",
        title: "WATER MONITORING",
        description: "Monitoring water level fluctuations and early warning of emergencies",
        image: elipseWater,
    },
    {
        tag: "#cartography",
        title: "GIS PLATFORM",
        description: "Visualization and analysis of spatial data for effective decision-making",
        image: elipseGis,
    },
    {
        tag: "#digital",
        title: "WEB DEVELOPMENT",
        description: "Development of specialized platforms for working with geospatial data",
        image: elipseWeb,
    },
    {
        tag: "#storage",
        title: "DATABASE",
        description: "Development and maintenance of data storage and processing systems",
        image: elipseDatabase,
    },
    {
        tag: "#ai Solutions",
        title: "ARTIFICIAL INTELLIGENCE",
        description: "Automated satellite imagery analysis and change forecasting",
        image: elipseAI,
    },
    {
        tag: "#geodata",
        title: "BOUNDARY DETECTION",
        description: "Automated satellite imagery analysis and change forecasting",
        image: elipseBoundary,
    },
];

function OurServices() {
    return (
        <section className={styles.services_section}>
            <h1 className={styles.services_title}>OUR SERVICES</h1>
            <div className={styles.services_list}>
                {services.map((services, image) => (
                <div className={styles.service_item}>
                    <div className={styles.service_tag}>
                        <span className={styles.hash_name}>{services.tag}</span>
                    </div>

                    <div className={styles.service_content}>
                        <img
                            src={services.image}
                            alt="satellite img"
                            className={styles.service_image}
                        />
                    </div>

                    <div className={styles.service_name}>
                        <h3 className={styles.name}>
                            {services.title}
                        </h3>
                        <span className={styles.service_desc}>
                            {services.description}
                        </span>
                    </div>

                    <div className={styles.link}>
                        <img
                            src={linkArrow}
                            alt="satellite img"
                            className={styles.service_link}
                        />
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default OurServices;