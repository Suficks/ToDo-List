import React, { useState } from 'react';
import cn from './select.module.scss';
import { ReactComponent as Arrow } from '../../Assets/arrow-icon.svg';

const selectOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Complete',
    value: 'complete',
  },
  {
    label: 'Incomplete',
    value: 'incomplete',
  }
]

const Select = () => {
  const [expand, setExpand] = useState(false);
  const classNameExpand = expand ? cn.item_show : '';

  return (
    <div className={cn.select} onClick={() => setExpand(!expand)}>
      <p className={cn.selected}>ALL</p>
      <ul className={`${cn.options} ${expand ? cn.options_show : ''}`}>
        {selectOptions.map(({ label, value }) => {
          return (
            <li className={`${cn.item} ${classNameExpand}`}
              key={value}
            >
              {label}
            </li>
          )
        })}
      </ul>
      <Arrow className={`${cn.arrow} ${expand ? cn.rotate : ''}`} />
    </div>
  )
}

export default Select