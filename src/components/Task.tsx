import styles from './Task.module.css'

import img_trash from '../assets/trash.svg'
import offCheck from '../assets/offCheck.svg'
import onCheck from '../assets/onCheck.svg'

interface Task {
    id: number,
    status: boolean,
    text: string,
    onHandleTaskChange: (taskId: number) => void;
    onHandleTaskDelete: (taskId: number) => void;
}

export function Task(task: Task) {
    return (
        <div className={styles.container}>
            {task.status
                ? <img
                    src={onCheck}
                    onClick={() => task.onHandleTaskChange(task.id)}
                />
                : <img
                    src={offCheck}
                    onClick={() => task.onHandleTaskChange(task.id)}
                />
            }
            {task.status
                ? <p><s>{task.text}</s></p>
                : <p>{task.text} </p>
            }
            <img
                src={img_trash}
                onClick={() => task.onHandleTaskDelete(task.id)}
            />
        </div>
    )
}