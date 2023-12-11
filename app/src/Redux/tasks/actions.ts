import {
  ADD_TASK,
  DELETE_TASK,
  SET_SEARCH_VALUE,
  SET_INPUT_VALUE,
  SET_FILTER_TYPE,
} from "./action-types";

import { TFilterType, TTask } from "./reducer";

export const addTask = (payload: TTask) => ({
  type: ADD_TASK,
  payload
} as const)

export const deleteTask = (id: string) => ({
  type: DELETE_TASK,
  payload: id
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
