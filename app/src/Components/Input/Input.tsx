import React, { FC } from 'react';
import cn from './input.module.scss';

interface IInputProps {
  /** Значение инпута */
  value: string
  /** Placeholder */
  placeholder: string
  /** Записать значение инпута */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className={cn.input}
      placeholder={placeholder}
    />
  )
}

export default Input