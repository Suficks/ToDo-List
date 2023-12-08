import {
  ADD_TASK,
  SET_SEARCH_VALUE,
  SET_INPUT_VALUE,
  SET_FILTER_TYPE
} from "./action-types";

import { TFilterType } from "./reducer";

export const addTask = (note: string) => ({
  type: ADD_TASK,
  payload: note
} as const)

export const setSearchValue = (value: string) => ({
  type: SET_SEARCH_VALUE,
  payload: value
} as const)

export const setInputValue = (value: string) => ({
  type: SET_INPUT_VALUE,
  payload: value
} as const)

export const setFilterType = (selectedType: TFilterType) => ({
  type: SET_FILTER_TYPE,
  payload: selectedType
} as const)
