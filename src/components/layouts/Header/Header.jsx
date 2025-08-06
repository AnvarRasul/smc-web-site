import  { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import logoWhite from "../../../assets/images/SMC_logo_white.svg";


function Header() {
    return (
       <header>
            <div className={styles.header}>
                <div className={styles.left-side}>
                    <ul>
                        <li className={isActiveRoute("/courses") ? styles.active : undefined }>
                            <NavLink to="/courses"></NavLink>
                        </li>
                    </ul>
                </div>

                <div className={styles.logo}>
                    <img
                        onClick={() => navigate("/")}
                        src="logoWhite"
                        alt="SMC logo"
                        className={styles.logoImage}
                    />
                </div>

                <div className={styles.right-side}>

                </div>

            </div>
       </header> 
    )
}

export default Header;