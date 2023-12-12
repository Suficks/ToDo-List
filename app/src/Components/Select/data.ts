import { TFilterType } from "Redux/tasks/reducer"

type TSelectOptions = {
  /** Обозначение типа фильтрации */
  label: string
  /** Значение типа фильтрации */
  value: TFilterType
}

export const selectOptions: TSelectOptions[] = [
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