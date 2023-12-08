import React, { FC } from 'react';
import cn from './task.module.scss';
import withTask from './withTask';

interface ITaskProps {
  text: string
}

const Task: FC<ITaskProps> = ({ text }) => {
  return (
    <div className={cn.task}>
      <label className={cn.label}>
        <input type="checkbox" className={cn.checkbox} />
        <span className={cn.fake}></span>
      </label>
      <p className={cn.text}>{text}</p>
      <div className={cn.btn_container}>
        <button className={cn.edit}></button>
        <button className={cn.delete}></button>
      </div>
    </div>
  )
}

export default withTask(Task)