import React, { FC } from 'react';
import cn from './modal.module.scss';
import Button from '../Button';
import Input from '../Input';
import withModal from './withModal';
import { TTask } from 'Redux/tasks/reducer';
import { v4 as uuidv4 } from 'uuid';

interface IModalProps {
  /** Открыто ли модальное окно */
  isModalOpen: boolean
  /** Открытие/ закрытие модального окна */
  onModalToggle: () => void
  /** Записать значение инпута с новой задачей */
  setInputValue: (value: string) => void
  /** Добавить задачу в массив всех задач*/
  addTask: (value: TTask) => void
  /** Значение инпута с новой задачей */
  inputValue: string
}

const Modal: FC<IModalProps> = ({ isModalOpen, onModalToggle, setInputValue, inputValue, addTask }) => {
  const modalClose = () => {
    setInputValue('')
    onModalToggle()
  }

  const onCreateTask = () => {
    const task: TTask = {
      id: uuidv4(),
      text: inputValue,
      progress: 'incomplete'
    }
    addTask(task)
    modalClose()
  }

  return (
    <div className={`${isModalOpen ? cn.active : cn.modal}`}>
      <h2 className={cn.title}>NEW NOTE</h2>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Input your note...'
      />
      <div className={cn.container}>
        <Button
          className={cn.reset}
          text='CANCEL'
          onClick={modalClose} />
        <Button
          className={cn.apply}
          text='APPLY'
          onClick={onCreateTask} />
      </div>
    </div>
  )
}

export default withModal(Modal)