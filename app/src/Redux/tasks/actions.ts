import {
  ADD_TASK,
  DELETE_TASK,
  CHANGE_TASK,
  SET_SEARCH_VALUE,
  SET_INPUT_VALUE,
  SET_FILTER_TYPE,
  CHANGE_TASK_PROGRESS,
} from "./action-types";

import { TEditableComment } from "Components/Modal/Modal";
import { TFilterType, TTask } from "./reducer";
import { TCurrentTaskProgress } from "Components/Task/Task";

export const addTask = (payload: TTask) => ({
  type: ADD_TASK,
  payload
} as const)

export const deleteTask = (id: string) => ({
  type: DELETE_TASK,
  payload: id
} as const)

export const changeTask = (editableComment: TEditableComment) => ({
  type: CHANGE_TASK,
  payload: editableComment
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

export const changeTaskProgress = (progress: TCurrentTaskProgress) => ({
  type: CHANGE_TASK_PROGRESS,
  payload: progress
} as const)