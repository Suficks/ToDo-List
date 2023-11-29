import React from 'react';
import cn from './button.module.scss';

const Button = ({ className }) => {
  return (
    <button className={`${className} ${cn.button}`}></button>
  )
}

export default Button