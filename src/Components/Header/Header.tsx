import imgLogo from '../../assets/Logo.svg'
import styles from "../Header/Header.module.css";
import Plus from "../../assets/Plus.svg";
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {

    const [title, setTitle] = useState("");


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={imgLogo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={onChangeTitle}
                    value={title}
                    required
                />

                <button> Criar <img src={Plus} /></button>
            </form>
        </header>
    )
}