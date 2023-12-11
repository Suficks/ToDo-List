import React, { FC, useState } from 'react';
import cn from './app.module.scss';

import { ReactComponent as Search } from './Assets/search-icon.svg';
import Button from './Components/Button';
import Select from './Components/Select';
import Task from 'Components/Task';
import Modal from 'Components/Modal';
import Input from 'Components/Input';
import withApp from 'withApp';
import { TTask } from 'Redux/tasks/reducer';
import EmptyImg from './Assets/empty-icon-light.svg';

interface IAppProps {
  /** Значение строки поиска */
  searchValue: string
  /** Значение инпута с новой задачей */
  inputValue: string
  /** Записать значение поиска */
  setSearchValue: (value: string) => void
  /** Записать значение инпута с новой задачей */
  setInputValue: (value: string) => void
  /** Массив с задачами */
  tasks: TTask[]
}

const App: FC<IAppProps> = ({ searchValue, setSearchValue, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableComment, setEditableComment] = useState({ id: '', text: '' });
  console.log(editableComment);
  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>TODO LIST</h1>
      <div className={cn.container}>
        <div className={cn.input_wrap}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search note...'
          />
          <Search className={cn.search} />
        </div>
        <Select />
        <Button className={cn.square} />
      </div>
      {tasks.length === 0 ? (
        <div className={cn.empty_wrap}>
          <img className={cn.emptyImg} src={EmptyImg} alt="" />
          <p className={cn.empty}>Empty...</p>
        </div>
      ) : (
        tasks.map((item: TTask) => (
          <Task
            text={item.text}
            key={item.id}
            id={item.id}
            onModalToggle={onModalToggle}
            setEditableComment={setEditableComment}
          />
        )))}
      < Button
        className={cn.circle}
        onClick={onModalToggle} />
      <Modal
        isModalOpen={isModalOpen}
        onModalToggle={onModalToggle}
        editableComment={editableComment}
        setEditableComment={setEditableComment}
      />
      <div
        className={isModalOpen ? cn.active : cn.overlay}
        onClick={() => {
          onModalToggle();
          setEditableComment({ id: '', text: '' })
        }}>
      </div>
    </div>
  );
}

export default withApp(App);
