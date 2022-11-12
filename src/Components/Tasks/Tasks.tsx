import { Task } from "../Task/Task";
import styles from "../Tasks/Tasks.module.css";

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>2 de 5 </span>
                </div>
            </header>

            <div>
                <Task />
            </div>
        </section>
    )
}