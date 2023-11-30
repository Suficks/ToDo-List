import { SET_SEARCH_VALUE } from "./action-types"

type TTasksState = {
  /** Значение строки поиска */
  searchValue: string
  /** Текст новой или редактируемой задачи */
  inputValue: string
  /** Выбранный тип фильтрации */
  selectedType: 'all' | 'complete' | 'incomplete'
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

const tasks = (state = initialState, action): TTasksState => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload }
    default: return state
  }
}

export default tasks