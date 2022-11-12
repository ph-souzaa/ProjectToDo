import style from '../Task/Task.module.css';
import CheckVetor from '../../assets/CheckVetor.svg';
import Trash from '../../assets/Trash.svg';

export function Task() {
    return (
        <div className={style.task}>
            <button className={style.checkContainer}>
                <img src={CheckVetor} />
            </button>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

            <button className={style.deleteButton}>
                <img src={Trash} />
            </button>
        </div>
    )
}