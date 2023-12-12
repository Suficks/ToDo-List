import React, { FC } from 'react';
import cn from './task.module.scss';

import withTask from './withTask';
import { TCurrentTaskProgress, TEditableComment } from "../../Redux/tasks/actions";

interface ITaskProps {
  /** Текст задачи */
  text: string
  /** Функция удаления задачи */
  deleteTask: (id: string) => void
  /** Идентификатор задачи */
  id: string
  /** Открытие модального окна для редактирования задачи*/
  onModalToggle: () => void
  /** Передать текст и индекс редактируемой задачи */
  setEditableComment: (editableComment: TEditableComment) => void
  /** Изменение прогресса задачи (выполнена/невыполнена) */
  changeTaskProgress: (progress: TCurrentTaskProgress) => void
  /** Прогресс по  задачи: выполнена или нет */
  progress: 'complete' | 'incomplete'
  /** Записать значение инпута с текстом редактируемой задачей */
  setInputValue: (value: string) => void
}

const Task: FC<ITaskProps> = ({ text, deleteTask, id, onModalToggle, setEditableComment, changeTaskProgress, progress, setInputValue }) => {
  const isTaskComplete = (progress === 'complete');

  const handleTaskEdit = () => {
    setInputValue(text)
    setEditableComment({ id, text })
    onModalToggle()
  }

  const handleCheckbox = () => {
    if (isTaskComplete) changeTaskProgress({ id, progress: 'incomplete' })
    else changeTaskProgress({ id, progress: 'complete' })
  }

  return (
    <div className={cn.task}>
      <label className={cn.label}>
        <input
          type="checkbox"
          checked={isTaskComplete}
          className={cn.checkbox}
          onChange={handleCheckbox}
        />
        <span className={cn.fake}></span>
      </label>
      <p
        className={isTaskComplete ? cn.text_checked : cn.text}>{text}</p>
      <div className={cn.btn_container}>
        <button
          className={cn.edit}
          onClick={handleTaskEdit}></button>
        <button
          className={cn.delete}
          onClick={() => { deleteTask(id) }}
        ></button>
      </div>
    </div>
  )
}

export default withTask(Task)