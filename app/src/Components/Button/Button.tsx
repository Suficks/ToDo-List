import React, { FC } from 'react';

interface IButtonProps {
  className: string
  text?: string
  onClick?: () => void
}


const Button: FC<IButtonProps> = ({ className, text, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >{text}</button>
  )
}

export default Button