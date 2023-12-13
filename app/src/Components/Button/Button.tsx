import React, { FC } from 'react';

interface IButtonProps {
  className: string
  text?: string
  onClick?: () => void
  disabled?: boolean
}


const Button: FC<IButtonProps> = ({ className, text, onClick, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >{text}</button>
  )
}

export default Button