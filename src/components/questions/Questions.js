import React, {useState} from "react";
import styles from './Questions.module.css';

export default function Questions(props) {
    const [showAnswer, setShowAnswer] = useState(null);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.InnerWrapper}>
                <h1 className={styles.title}>{props.title}
                </h1>
                <ul className={styles.questionsWrapper}>
                    {props.questions.map(el =>
                            <li key={el.answer} className={styles.question}>
                            <button onClick={() => {
                                if (showAnswer) {
                                    setShowAnswer(null)
                                } else {
                                    setShowAnswer(el.answer)
                                }
                            }}
                                    className={styles.button}>{el.singleQuestion}
                                <svg id="thin-x" viewBox="0 0 26 26" className={showAnswer === el.answer ? styles.svgOpened : styles.svgClosed}
                                     focusable="true">
                                    <path
                                        d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"> </path>
                                </svg>
                            </button>
                            <div className={showAnswer === el.answer ? styles.answersOpened : styles.answersClosed}>
                                <span className={styles.answerText}>{el.answer}</span>
                            </div>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    )
}