import styles from './TextAndImage.module.css';
import React, {useState} from "react";

export default function TextAndImage (props) {


    return (
        <div className={styles.mainWrapper}>
            <div className={`${props.rtl ? styles.innerWrapperRtl: styles.innerWrapper}`}>
            <div className={`${props.rtl ? styles.textContainerRtl: styles.textContainer}`}>
                <div className={styles.title}>
                    {props.title}
                </div>
                    <div className={styles.text}>
                        {props.text}
                    </div>
            </div>
            <div className={styles.mediaContainer}>
                <img className={styles.image} src={props.img}/>
                <video className={styles.video} src={props.media} autoPlay muted loop playsInline/>
            </div>
            </div>
        </div>
    )
}