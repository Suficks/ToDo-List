import React, { FC, useEffect, useRef, useState } from 'react';
import cn from './select.module.scss';

import { ReactComponent as Arrow } from '../../Assets/arrow-icon.svg';
import withSelect from './withSelect';
import { TFilterType } from 'Redux/tasks/reducer';
import { selectOptions } from './data';

interface ISelectProps {
  /** Записать значение селекта с типом фильтрации*/
  setFilterType: (value: TFilterType) => void
  /** Выбранный тип фильтрации*/
  selectedType: TFilterType
}

const Select: FC<ISelectProps> = ({ setFilterType, selectedType }) => {
  const [expand, setExpand] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelectClose = (e: MouseEvent) => {
    if (!selectRef.current?.contains(e.target as Node)) {
      setExpand(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleSelectClose)

    return () => {
      document.removeEventListener('click', handleSelectClose)
    }
  }, [])

  return (
    <div
      className={cn.select}
      onClick={() => setExpand(!expand)}
      ref={selectRef}>
      <p className={cn.selected}>{selectedType}</p>
      <ul className={expand ? cn.options_show : cn.options}>
        {selectOptions.map(({ label, value }) => {
          return (
            <li className={expand ? cn.item_show : cn.item}
              key={value}
              onClick={() => setFilterType(value)}
            >
              {label}
            </li>
          )
        })}
      </ul>
      <Arrow className={expand ? cn.rotate : cn.arrow} />
    </div>
  )
}

export default withSelect(Select)