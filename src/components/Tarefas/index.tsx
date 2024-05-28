import React from "react";
import Tarefa from "./Tarefa";
import style from './Tarefas.module.scss';
import ITarefa from "../../types/tarefas";

interface Props {
    tarefas: ITarefa[]
    selecionarTarefa: (tarefa: ITarefa) => void
    cronometroAtivo: boolean
}

export default function Tarefas({ tarefas, selecionarTarefa, cronometroAtivo }: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Tarefas do Dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Tarefa
                        selecionarTarefa={selecionarTarefa}
                        key={tarefa.id}
                        cronometroAtivo={cronometroAtivo}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}