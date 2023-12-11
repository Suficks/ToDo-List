import React, { FC, useState } from 'react';
import cn from './task.module.scss';

import withTask from './withTask';
import { TEditableComment } from 'Components/Modal/Modal';

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
}

const Task: FC<ITaskProps> = ({ text, deleteTask, id, onModalToggle, setEditableComment }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleTaskEdit = () => {
    setEditableComment({ id, text })
    onModalToggle()
  }

  return (
    <div className={cn.task}>
      <label className={cn.label}>
        <input
          type="checkbox"
          className={cn.checkbox}
          onChange={() => { setIsChecked(!isChecked) }}
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