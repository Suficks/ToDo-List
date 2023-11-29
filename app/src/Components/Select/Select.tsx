import React from 'react';
import cn from './select.module.scss';
import { ReactComponent as Arrow } from '../../Assets/arrow-icon.svg';

const Select = () => {
  return (
    <div className={cn.select}>
      <div className={cn.options}>
        <p className={cn.item}>ALL</p>
        <p className={cn.item}>DONE</p>
        <p className={cn.item}>ACTIVE</p>
      </div>
      <Arrow className={cn.arrow} />
    </div>
  )
}

export default Select