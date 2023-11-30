import React, { FC } from 'react';

interface IButtonProps {
  className: string
}

const Button: FC<IButtonProps> = ({ className }) => {
  return (
    <button className={className}></button>
  )
}

export default Button