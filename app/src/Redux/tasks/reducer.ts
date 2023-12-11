import {
  ADD_TASK,
  DELETE_TASK,
  CHANGE_TASK,
  SET_SEARCH_VALUE,
  SET_INPUT_VALUE,
  SET_FILTER_TYPE,
  CHANGE_TASK_PROGRESS
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
  tasks: TTask[]
}

export type TTask = {
  /** Идентификатор задачи */
  id: string
  /** Текст задачи */
  text: string
  /** Прогресс по  задачи: выполнена или нет */
  progress: 'complete' | 'incomplete'
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
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(item => item.id !== action.payload) }
    case CHANGE_TASK:
      {
        const { id, text } = action.payload
        return {
          ...state,
          tasks: state.tasks.map((item) => {
            if (item.id === id) {
              return {
                ...item, text,
              }
            }
            return item
          })
        }
      }
    case CHANGE_TASK_PROGRESS:
      {
        const { id, progress } = action.payload
        return {
          ...state,
          tasks: state.tasks.map((item) => {
            if (item.id === id) {
              return {
                ...item, progress,
              }
            }
            return item
          })
        }
      }
    default: return state
  }
}

export default tasks