import styles from './Container.module.css'

import { ListTasks } from './ListTasks'

import svg_criar from '../assets/criar.svg'

export function Container() {
    return (
        <div className={styles.container}>
            <div className={styles.newTask}>
                <input  
                    placeholder='Adicione uma nova tarefa'
                />
                <div
                    className={styles.botao}
                    onClick={() => alert('CRIAR')}
                >
                    <text>Criar</text>
                    <img src={svg_criar} />
                </div>

            </div>
            <ListTasks />
        </div>
    )
}