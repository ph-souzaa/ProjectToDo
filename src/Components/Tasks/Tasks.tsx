import { ITask } from "../../App";
import { Task } from "../Task/Task";
import Clipboard from "../../assets/Clipboard.svg";
import styles from "../Tasks/Tasks.module.css";

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;

}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {

    const taskCount = tasks.length;
    const taskCompleted = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{taskCount}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>{taskCompleted} de {taskCount} </span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onCompleted={onCompleted}
                    />
                ))}

                {
                    tasks.length <= 0 && (
                        <section className={styles.empty}>
                            <img src={Clipboard} />
                            <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        </section>
                    )
                }
            </div>
        </section>
    )
}