import React, { FC, useState } from 'react';
import cn from './modal.module.scss';

import Button from '../Button';
import Input from '../Input';

import withModal from './withModal';
import { TTask } from 'Redux/tasks/reducer';
import { v4 as uuidv4 } from 'uuid';
import { TEditableComment } from "../../Redux/tasks/actions";


interface IModalProps {
  /** Открыто ли модальное окно */
  isModalOpen: boolean
  /** Значение инпута с новой/изменяемой задачей */
  inputValue: string
  /** Данные о редактируемой задаче */
  editableComment: TEditableComment
  /** Запись данных о редактируемой задаче */
  setEditableComment: (editableComment: TEditableComment) => void
  /** Открытие/закрытие модального окна */
  onModalToggle: () => void
  /** Записать значение инпута с новой задачей */
  setInputValue: (value: string) => void
  /** Добавить задачу в массив всех задач*/
  addTask: (value: TTask) => void
  /** Изменение существующей задачи */
  changeTask: (editableComment: TEditableComment) => void
}

const Modal: FC<IModalProps> = ({ isModalOpen, onModalToggle, setInputValue, inputValue, addTask, changeTask, editableComment, setEditableComment }) => {
  const [isEmptyField, setIsEmptyField] = useState(false)
  const { id } = editableComment;

  const modalClose = () => {
    setInputValue('')
    setEditableComment({ id: '', text: '' })
    onModalToggle()
  }

  const handleApply = () => {
    const task: TTask = {
      id: uuidv4(),
      text: inputValue,
      progress: 'incomplete'
    }

    if (id && inputValue) {
      changeTask({ id, text: inputValue });
      modalClose()
    }
    else if (inputValue) {
      addTask(task);
      modalClose()
    }
    else { setIsEmptyField(true) }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (inputValue) setIsEmptyField(false)
  }

  return (
    <div className={cn.modal_wrap}>
      <div className={`${isModalOpen ? cn.active : cn.modal}`}>
        <h2 className={cn.title}>{id ? 'CHANGE' : 'NEW'} NOTE</h2>
        <Input
          value={inputValue}
          onChange={onInputChange}
          placeholder='Input your note...'
        />
        <div
          className={isEmptyField ? cn.error_active : cn.error}
          id="inputCheck"
          role="tooltip">
          Please fill the field
        </div>
        <div className={cn.container}>
          <Button
            className={cn.reset}
            text='CANCEL'
            onClick={modalClose} />
          <Button
            className={cn.apply}
            text='APPLY'
            onClick={handleApply} />
        </div>
      </div>
      <div
        className={isModalOpen ? cn.overlay_active : cn.overlay}
        onClick={modalClose}>
      </div>
    </div>
  )
}

export default withModal(Modal)