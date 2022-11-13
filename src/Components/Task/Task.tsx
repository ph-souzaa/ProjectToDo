import style from '../Task/Task.module.css';
import CheckVetor from '../../assets/CheckVetor.svg';
import Trash from '../../assets/Trash.svg';
import { ITask } from '../../App';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {
    return (
        <div className={style.task}>
            <button className={style.checkContainer}>
                <img src={CheckVetor} />
            </button>

            <p>{task.title}</p>

            <button className={style.deleteButton} onClick={() => (onDelete(task.id))}>
                <img src={Trash} />
            </button>
        </div>
    )
}