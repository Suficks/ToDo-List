import React, { FC, useState } from 'react';
import cn from './app.module.scss';

import { ReactComponent as Search } from './Assets/search-icon.svg';
import Button from './Components/Button';
import Select from './Components/Select';
import Task from 'Components/Task';
import Modal from 'Components/Modal';
import withApp from 'withApp';

interface IAppProps {
  /** Значение строки поиска */
  searchValue: string
  /** Записать значение поиска */
  setSearchValue: (value: string) => void
}

const App: FC<IAppProps> = ({ searchValue, setSearchValue }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>TODO LIST</h1>
      <div className={cn.container}>
        <div className={cn.input_wrap}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className={cn.input}
            placeholder='Search note...'
          />
          <Search className={cn.search} />
        </div>
        <Select />
        <Button className={cn.square} />
      </div>
      <Task />
      <Button
        className={cn.circle}
        onClick={onModalToggle} />
      <Modal isModalOpen={isModalOpen} onModalToggle={onModalToggle} />
      <div
        className={isModalOpen ? cn.active : cn.overlay}
        onClick={onModalToggle}></div>
    </div>
  );
}

export default withApp(App);
