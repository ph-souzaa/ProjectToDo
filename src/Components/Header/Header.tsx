import imgLogo from '../../assets/Logo.svg'
import styles from "../Header/Header.module.css";
import Plus from "../../assets/Plus.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={imgLogo} />

            <form className={styles.newTaskForm}>
                <input type="text" />

                <button> Criar <img src={Plus} /></button>
            </form>
        </header>
    )
}