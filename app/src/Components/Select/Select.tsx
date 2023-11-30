import React, { useState } from 'react';
import cn from './select.module.scss';
import { ReactComponent as Arrow } from '../../Assets/arrow-icon.svg';

const Select = () => {
  const [selected, SetSelected] = useState(false);

  return (
    <div className={cn.select} onClick={() => SetSelected(!selected)}>
      <p className={cn.selected}>ALL</p>
      <ul className={`${cn.options} ${selected ? cn.options_show : ''}`}>
        <li className={`${cn.item} ${selected ? cn.item_show : ''}`}>All</li>
        <li className={`${cn.item} ${selected ? cn.item_show : ''}`}>Complete</li>
        <li className={`${cn.item} ${selected ? cn.item_show : ''}`}>Incomplete</li>
      </ul>
      <Arrow className={`${cn.arrow} ${selected ? cn.rotate : ''}`} />
    </div>
  )
}

export default Select