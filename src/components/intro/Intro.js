import React from "react";
import styles from './Intro.module.css';

export default function Intro () {
    return (
        <div className={styles.intro}>
            <h1 className={styles.introHeader}>Unlimited movies, TV shows, and more.</h1>
            <p className={styles.introSubheader}>Watch anywhere. Cancel anytime.</p>
        </div>
    )
}