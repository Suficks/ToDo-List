import { ADD_TASK, SET_SEARCH_VALUE } from "./action-types";

export const addTask = (note: string) => {
  return {
    type: ADD_TASK,
    payload: note
  }
}

export const setSearchValue = (value: string) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: value
  }
}
