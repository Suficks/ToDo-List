import React, { FC, useState } from 'react';
import cn from './task.module.scss';

import withTask from './withTask';
import { TEditableComment } from 'Components/Modal/Modal';

export type TCurrentTaskProgress = {
  id: string,
  progress: 'complete' | 'incomplete'
}

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
}

const Task: FC<ITaskProps> = ({ text, deleteTask, id, onModalToggle, setEditableComment, changeTaskProgress }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleTaskEdit = () => {
    setEditableComment({ id, text })
    onModalToggle()
  }

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
    if (isChecked) changeTaskProgress({ id, progress: 'incomplete' })
    else changeTaskProgress({ id, progress: 'complete' })
  }

  return (
    <div className={cn.task}>
      <label className={cn.label}>
        <input
          type="checkbox"
          className={cn.checkbox}
          onChange={handleCheckbox}
        />
        <span className={cn.fake}></span>
      </label>
      <p
        className={isChecked ? cn.text_checked : cn.text}>{text}</p>
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