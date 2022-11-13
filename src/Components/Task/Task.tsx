import style from '../Task/Task.module.css';
import CheckVetor from '../../assets/CheckVetor.svg';
import Completed from '../../assets/Completed.svg';
import Trash from '../../assets/Trash.svg';
import { ITask } from '../../App';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Task({ task, onDelete, onCompleted }: Props) {
    return (
        <div className={style.task}>
            <button className={style.checkContainer} onClick={() => (onCompleted(task.id))}>
                {task.isCompleted ? <img src={Completed} /> : <img src={CheckVetor} />}
            </button>

            <p className={task.isCompleted ? style.taskCompleted : ""}>{task.title}</p>

            <button className={style.deleteButton} onClick={() => (onDelete(task.id))}>
                <img src={Trash} />
            </button>
        </div>
    )
}