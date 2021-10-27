import React from "react";
import styles from './HeaderAndSectionBackground.module.css'

export default function HeaderAndSectionBackground (props) {
    return (
        <div className={styles.background}>
            {props.children}
        </div>
    )
}