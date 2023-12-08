import {
  SET_SEARCH_VALUE,
  SET_INPUT_VALUE,
  SET_FILTER_TYPE
}
  from "./action-types"
import * as actions from './actions'

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TFilterType = 'all' | 'complete' | 'incomplete'

type TTasksState = {
  /** Значение строки поиска */
  searchValue: string
  /** Текст новой или редактируемой задачи */
  inputValue: string
  /** Выбранный тип фильтрации */
  selectedType: TFilterType
  /** Цветовая тема приложения */
  theme: 'light' | 'dark'
  /** Массив задач */
  tasks: TTasks[]
}

type TTasks = {
  /** Идентификатор задачи */
  id: string
  /** Текст задачи */
  text: string
  /** Тип задачи: выполнена или нет */
  type: 'complete' | 'incomplete'
}

const initialState: TTasksState = {
  searchValue: '',
  inputValue: '',
  selectedType: 'all',
  theme: 'light',
  tasks: []
}

const tasks = (state = initialState, action: ActionTypes): TTasksState => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload }
    case SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload }
    case SET_FILTER_TYPE:
      return { ...state, selectedType: action.payload }
    default: return state
  }
}

export default tasks