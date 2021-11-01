import styles from './GetStarted.module.css';
import React, {useEffect, useRef} from "react";
import emailjs from 'emailjs-com';


export default function GetStarted (props) {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_i4der7p', 'template_v8kqkis', inputRef.current, 'user_aqgO4YEjCnCEkIn71mgwi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className={styles.title}>Ready to watch? Enter your email to create or restart your membership.</div>
                <form className={props.smallPadding? styles.secondFormContainer : styles.formContainer} ref={inputRef}>
                <div>
                    <li className={styles.formLi}>
                        <input className={styles.input} type="email" name="to_name" placeholder="Email address">
                        </input>
                    </li>
                </div>
                <div>
                    <input type="submit" value="Get Started" onClick={handleSubmit} className={styles.formButton} />
                </div>
                </form>
        </>
    )
}