import React, { FC } from 'react';
import cn from './task.module.scss';
import withTask from './withTask';
import EmptyImg from '../../Assets/empty-icon-light.svg';

interface ITaskProps {
  inputValue: string
}

const Task: FC<ITaskProps> = ({ inputValue }) => {
  return (
    <div className={cn.task}>
      {
        inputValue ? (
          <>
            <label className={cn.label}>
              <input type="checkbox" className={cn.checkbox} />
              <span className={cn.fake}></span>
            </label>
            <p className={cn.text}>{inputValue}</p>
            <div className={cn.btn_container}>
              <button className={cn.edit}></button>
              <button className={cn.delete}></button>
            </div>
          </>
        ) : (
          <div className={cn.empty_wrap}>
            <img className={cn.emptyImg} src={EmptyImg} alt="" />
            <p className={cn.empty}>Empty...</p>
          </div>
        )}
    </div>
  )
}

export default withTask(Task)