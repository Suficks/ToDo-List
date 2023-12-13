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
      <div className={cn.text_wrap}>
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
          className={isTaskComplete ? cn.text_checked : cn.text}>
          {text}</p>
      </div>
      <div className={cn.btn_container}>
        <button
          className={cn.edit}
          onClick={handleTaskEdit}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="var( --edit-icon-color)" viewBox="0 0 48 48" width="20px" height="20px">
            <path d="M 36 5.0097656 C 34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812 L 8.9160156 29.183594 C 8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219 L 5.0585938 41.087891 A 1.50015 1.50015 0 0 0 6.9121094 42.941406 L 17.302734 39.974609 A 1.50015 1.50015 0 0 0 17.304688 39.972656 C 17.874212 39.808939 18.39521 39.50518 18.816406 39.083984 L 40.949219 16.949219 C 43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812 C 39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875 C 37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 A 1.50015 1.50015 0 0 0 38.828125 9.171875 C 40.403 10.74675 40.403 13.25325 38.828125 14.828125 L 36.888672 16.767578 L 31.232422 11.111328 L 33.171875 9.171875 C 33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 29.111328 13.232422 L 34.767578 18.888672 L 16.693359 36.962891 C 16.634729 37.021121 16.560472 37.065723 16.476562 37.089844 L 8.6835938 39.316406 L 10.910156 31.521484 A 1.50015 1.50015 0 0 0 10.910156 31.519531 C 10.933086 31.438901 10.975086 31.366709 11.037109 31.304688 L 29.111328 13.232422 z" />
          </svg>
        </button>
        <button
          className={cn.delete}
          onClick={() => { deleteTask(id) }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="var( --edit-icon-color)" viewBox="0 0 32 32" width="20px" height="20px">
            <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z" />
          </svg>
        </button>
      </div>
    </div >
  )
}

export default withTask(Task)