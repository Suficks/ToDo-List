import React from 'react';
import cn from './task.module.scss';

const Task = () => {
  return (
    <div className={cn.task}>
      <label className={cn.label}>
        <input type="checkbox" className={cn.checkbox} />
        <span className={cn.fake}></span>
      </label>
      <p className={cn.text}>Lorem input</p>
      <div className={cn.btn_container}>
        <button className={cn.edit}></button>
        <button className={cn.delete}></button>
      </div>
    </div>
  )
}

export default Task