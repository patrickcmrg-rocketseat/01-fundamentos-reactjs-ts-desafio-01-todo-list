import styles from './Container.module.css'

import { ListTasks } from './ListTasks'

export function Container() {
    return (
        <div className={styles.container}>
            <div className={styles.newTask}>
                <input></input>
                <button>Criar</button>
            </div>
            <ListTasks />
        </div>
    )
}