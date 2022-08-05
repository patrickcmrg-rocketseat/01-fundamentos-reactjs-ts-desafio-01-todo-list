import styles from './ListTasks.module.css'

import img_clipboard from '../assets/clipboard.svg'

import { Task } from './Task'
const task = [
    {
        id: '1',
        status: false,
        text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
        id: '2',
        status: false,
        text: ' neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
        id: '5',
        status: true,
        text: 'integer 2222.'
    },
    {
        id: '6',
        status: true,
        text: 'integer.'
    },
]

export function ListTasks() {

    //console.log(task)
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.infoName}>
                    <p>Tarefas Criadas</p><div>0</div>

                </div>
                <div className={styles.infoName}>

                    <div>0</div><p>Concluídas</p>
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
                                    status={t.status}
                                    text={t.text}
                                />
                            )
                        })}
                    </>
                }
            </div>
        </div>
    )
}