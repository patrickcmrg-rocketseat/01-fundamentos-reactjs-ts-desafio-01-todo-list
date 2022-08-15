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

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        console.log(event.target)
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        console.log('AQUI')
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleTaskAdd() {
        const t = {
            id: task.length + 1,
            status: false,
            text: newTask
        }

        let tasks = [t, ...task]
        const taskTrue = tasks.filter((t) => { return t.status === true })
        const taskFalse = tasks.filter((t) => { return t.status === false })
        setTask([...taskFalse, ...taskTrue])
        setNewTask('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.newTask}>
                <textarea
                    name="comment"
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
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