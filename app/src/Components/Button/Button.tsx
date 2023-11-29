import React, { FC } from 'react';
import cn from './button.module.scss';

interface IButtonProps {
  className: string
}

const Button: FC<IButtonProps> = ({ className }) => {
  return (
    <button className={`${className} ${cn.button}`}></button>
  )
}

export default Button