import styles from './TextAndImage.module.css';
import React from "react";

export default function TextAndImage(props) {


    return (
        <div className={styles.mainWrapper}>
            <div className={`${props.rtl ? styles.innerWrapperRtl : styles.innerWrapper}`}>
                <div className={`${props.rtl ? styles.textContainerRtl : styles.textContainer}`}>
                    <div className={styles.title}>
                        {props.title}
                    </div>
                    <div className={styles.text}>
                        {props.text}
                    </div>
                </div>
                <div className={styles.mediaContainer}>
                    <img className={styles.image} style={props.downloadingApp ? {zIndex: '0'} : null} src={props.img}/>
                    {props.video ?
                        //put video tag if there is video prop
                        <video className={`${props.videoMac ? styles.videoMac
                            : styles.video}`}
                               src={props.video}
                               autoPlay muted loop playsInline/> :
                        props.downloadingApp ?
                        //otherwise put div
                        <div className={styles.gifWrapper}>
                            <div className={styles.gifImgWrapper}>
                                <img className={styles.gifImg} src={props.gifImg} alt=""/>
                            </div>
                            <div className={styles.gifTextWrapper}>
                                <div className={styles.text0}>Stranger Things</div>
                                <div className={styles.text1}>Downloading...</div>
                            </div>
                        </div> :
                            null
                    }
                </div>
            </div>
        </div>
    )
}