import React, { FC } from 'react';
import cn from './task.module.scss';
import withTask from './withTask';

interface ITaskProps {
  /** Текст задачи */
  text: string
  /** Функция удаления задачи */
  deleteTask: (id: string) => void
  /** Идентификатор задачи */
  id: string
}

const Task: FC<ITaskProps> = ({ text, deleteTask, id }) => {
  return (
    <div className={cn.task}>
      <label className={cn.label}>
        <input type="checkbox" className={cn.checkbox} />
        <span className={cn.fake}></span>
      </label>
      <p className={cn.text}>{text}</p>
      <div className={cn.btn_container}>
        <button className={cn.edit}></button>
        <button
          className={cn.delete}
          onClick={() => {
            deleteTask(id)
          }}
        ></button>
      </div>
    </div>
  )
}

export default withTask(Task)