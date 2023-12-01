import React, { FC } from 'react';
import cn from './modal.module.scss';
import Button from 'Components/Button';

interface IModalProps {
  isModalOpen: boolean
  onModalToggle: () => void
}

const Modal: FC<IModalProps> = ({ isModalOpen, onModalToggle }) => {
  return (
    <div className={`${isModalOpen ? cn.modal_active : cn.modal}`}>
      <h2 className={cn.title}>NEW NOTE</h2>
      <input
        type="text"
        className={cn.input}
        placeholder='Input your note...'
      />
      <div className={cn.container}>
        <Button
          className={cn.reset}
          text='CANCEL'
          onClick={onModalToggle} />
        <Button className={cn.apply} text='APPLY' />
      </div>
    </div>
  )
}

export default Modal