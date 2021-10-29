import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/main_page/Netflix_logo.png';

export default function Header() {

    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.netflixLogo}>
                    <img className={styles.netflixImg} src={logo} alt="Netflix logo"/>
                </div>
                <div className={styles.languageSwitcher}>English</div>
                <div className={styles.signInButton}>
                    <a href="#" className={styles.a}>Sign In</a>
                </div>
            </div>
        </div>
    )
}