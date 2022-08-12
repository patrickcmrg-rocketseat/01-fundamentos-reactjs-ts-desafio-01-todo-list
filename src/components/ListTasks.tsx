import { useState } from "react";

import styles from './ListTasks.module.css'
import img_clipboard from '../assets/clipboard.svg'

import { Task } from './Task'

interface Task {
    id: number,
    status: boolean,
    text: string,
}

interface Taskprops {
    task: Array<Task>;
    setTask: (taskId: Array<Task>) => void
}

export function ListTasks({ task, setTask }: Taskprops) {

    const taskLenght = task.length
    const taskCompleted = (task.filter((t) => { return t.status === true })).length
    console.log(taskCompleted)

    function handleTaskChange(taskId: number) {
        const taskEdit = task.filter((t) => {
            if (t.id === taskId) {
                t.status = !t.status
            }
            return t;
        });
        setTask(taskEdit)
    }

    function handleTaskDelete(taskId: number) {
        const taskEdit = task.filter((t) => { return t.id != taskId });
        setTask(taskEdit)
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.infoCriada}>
                    <p>Tarefas Criadas</p>
                    <div>
                        <p>{task.length}</p>
                    </div>
                </div>
                <div className={styles.infoConcluida}>
                    <p>Concluídas</p>
                    {taskLenght > 0
                        ? <div>
                            <p>{taskCompleted} de {taskLenght}</p>
                        </div>
                        : <div>
                            <p>{taskLenght}</p>
                        </div>
                    }

                </div>
            </div>
            <div className={styles.empty}>
                {!task.length ?
                    <div className={styles.noTask}>
                        <img src={img_clipboard}></img>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                    : <>
                        {task.map(t => {
                            return (
                                <Task
                                    key={t.id}
                                    id={t.id}
                                    status={t.status}
                                    text={t.text}
                                    onHandleTaskChange={handleTaskChange}
                                    onHandleTaskDelete={handleTaskDelete}
                                />
                            )
                        })}
                    </>
                }
            </div>
        </div>
    )
}