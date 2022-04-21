import styles from "../styles/Presente.module.css";

export default function Presente(){

    return(
        <div className={styles.presente}>
            <div className={styles.tampa}> Tampa </div>
            <div className={styles.corpo}> Corpo </div>
            <div className={styles.laco1}></div>
            <div className={styles.laco2}></div>
        </div>
    )
}