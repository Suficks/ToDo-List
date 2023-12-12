import React, { FC, useState } from 'react';
import cn from './select.module.scss';
import { ReactComponent as Arrow } from '../../Assets/arrow-icon.svg';
import withSelect from './withSelect';
import { TFilterType } from 'Redux/tasks/reducer';

type TObjectValues = {
  /** Обозначение типа фильтрации */
  label: string
  /** Значение типа фильтрации */
  value: TFilterType
}

interface ISelectProps {
  /** Записать значение селекта с типом фильтрации*/
  setFilterType: (value: TFilterType) => void
  /** Выбранный тип фильтрации*/
  selectedType: TFilterType
}

const selectOptions: TObjectValues[] = [
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

const Select: FC<ISelectProps> = ({ setFilterType, selectedType }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={cn.select} onClick={() => setExpand(!expand)}>
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