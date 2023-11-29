import React from 'react';
import styles from './app.module.scss';
import { ReactComponent as Search } from './Assets/search-icon.svg';
import Button from './Components/Button/Button';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO LIST</h1>
      <div className={styles.container}>
        <div className={styles.input_wrap}>
          <input type="text" className={styles.input} placeholder='Search note...' />
          <Search className={styles.search} />
        </div>
        {/* <Select /> */}
        <Button />
      </div>
    </div>
  );
}

export default App;
