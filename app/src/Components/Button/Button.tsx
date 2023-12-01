import React, { FC } from 'react';

interface IButtonProps {
  className: string
  text?: string
  onClick?: () => void
}


const Button: FC<IButtonProps> = ({ className, text }) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default Button