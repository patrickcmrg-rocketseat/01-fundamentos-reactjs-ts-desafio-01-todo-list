import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Container.module.css'

import { ListTasks } from './ListTasks'

import svg_criar from '../assets/criar.svg'

export function Container() {
    const [newTask, setNewTask] = useState('');

    const [task, setTask] = useState([
        {
            id: 1,
            status: false,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
        },
        {
            id: 2,
            status: false,
            text: ' neque turpis turpis semper. Duis vel sed fames integer.'
        },
        {
            id: 3,
            status: true,
            text: 'integer 2222.'
        },
        {
            id: 4,
            status: true,
            text: 'integer.'
        },
    ]);

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleTaskAdd() {
        const t = {
            id: task.length + 1,
            status: false,
            text: newTask
        }
        setTask([t, ...task])
        setNewTask('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.newTask}>
                <input
                    placeholder='Adicione uma nova tarefa'
                    name="comment"
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <div
                    className={styles.botao}
                    onClick={() => handleTaskAdd()}
                >
                    <p>Criar</p>
                    <img src={svg_criar} />
                </div>

            </div>
            <ListTasks
                task={task}
                setTask={setTask}
            />
        </div>
    )
}