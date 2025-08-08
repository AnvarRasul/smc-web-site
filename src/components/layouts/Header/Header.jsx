import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import logoWhite from "../../../assets/images/SMC_logo_white.svg";
import languageGlobe from "../../../assets/images/globeLanguage.svg";
import searchButton from "../../../assets/images/searchButton.svg";


function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const languageButtonRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageButtonRef.current &&
                !languageButtonRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
            setShowDropdown(false);
    }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
       <header>
            <div className={styles.header}>
                <div className={styles.left_side}>
                    <ul className={styles.navList}>
                        <li className={styles.about}>
                            <span>ABOUT US</span>
                        </li>
                        <li className={styles.portfolio}>
                            <span>PORTFOLIO</span>
                        </li>
                        <li className={styles.services}>
                            <span>SERVICES</span>
                        </li>
                        <li className={styles.spheres}>
                            <span>SPHERES</span>
                        </li>
                        <li className={styles.resources}>
                            <span>RESOURCES</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.logo}>
                    <img
                        src={logoWhite}
                        alt="SMC logo"
                        className={styles.logoImage}
                    />
                </div>

                <div className={styles.right_side}>
                    <ul className={styles.navList}  >
                        <li className={styles.more}>
                            <span>MORE</span>
                        </li>
                        <li className={styles.contacts}>
                            <span>CONTACTS</span>
                        </li>
                    </ul>
                        <div className={styles.language_container}>
                            <button 
                                className={styles.language_button}
                                onClick={toggleDropdown}
                                ref={languageButtonRef}
                            >
                                <img 
                                    src={languageGlobe}
                                    className={styles.globe_icon}
                                    alt="Language"
                                />
                                <span className={styles.language_text}>EN</span>
                            </button>

                            {showDropdown && (
                                <> 
                                <div className={styles.overlay}/>
                                    <div className={styles.language_dropdown} ref={dropdownRef}> 
                                        <ul className={styles.language_list}>
                                            <li>RU</li>
                                            <li>O'Z</li>
                                            <li>ЎЗ</li>
                                        </ul>
                                    </div>
                                </>
                                
                            )} 
                        </div>

                        <div className={styles.search_button}>
                            <img
                                src={searchButton}
                                alt="search button"
                                className={styles.search_image}
                            />
                            <ul className={styles.navList}  >
                                <li className={styles.search}>
                                    <span>SEARCH</span>
                                </li>
                            </ul>                                
                        </div>
                </div>

            </div>
       </header> 
    )
}

export default Header;