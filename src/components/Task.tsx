import styles from './Task.module.css'

import img_trash from '../assets/trash.svg'
import offCheck from '../assets/offCheck.svg'
import onCheck from '../assets/onCheck.svg'

interface Task {
    status: boolean,
    text: string
}

export function Task(task: Task) {
    return (
        <div className={styles.container}>
            {task.status
                ? <img src={onCheck} />
                : <div
                    className={styles.checkbox}
                    style={{
                        border: '2px solid red',

                    }} />
            }
            {task.status
                ? <p><s>{task.text}</s></p>
                : <p>{task.text} </p>
            }
            <img src={img_trash} />
        </div>
    )
}