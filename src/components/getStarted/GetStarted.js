import styles from './GetStarted.module.css';

export default function GetStarted () {
    return (
        <>
            <div className={styles.title}>Ready to watch? Enter your email to create or restart your membership.</div>
            <div className={styles.formContainer}>
                <div>
                    <li className={styles.formLi}>
                        <input className={styles.input} type="email" placeholder="Email address"/>
                    </li>
                </div>
                <div>
                    <button className={styles.formButton}>Get Started</button>
                </div>
            </div>
        </>
    )
}