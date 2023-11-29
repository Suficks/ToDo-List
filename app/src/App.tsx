import React, { FC } from 'react';
import cn from './app.module.scss';

import { ReactComponent as Search } from './Assets/search-icon.svg';
import Button from './Components/Button';
import Select from './Components/Select';

const App: FC = () => {
  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>TODO LIST</h1>
      <div className={cn.container}>
        <div className={cn.input_wrap}>
          <input type="text" className={cn.input} placeholder='Search note...' />
          <Search className={cn.search} />
        </div>
        <Select />
        <Button className={cn.square} />
      </div>
      <Button className={cn.circle} />
    </div>
  );
}

export default App;
