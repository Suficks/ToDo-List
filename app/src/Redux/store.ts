import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import tasksReducer from './tasks';

export const store = createStore(
  tasksReducer,
  composeWithDevTools()
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
