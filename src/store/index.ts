import { useDispatch } from 'react-redux';

import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { actionApplicationReducer } from './applications';

export const reducer = {
  application: actionApplicationReducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export const createStore = (preloadedState?: Partial<RootState>) =>
  configureStore({ reducer, preloadedState });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
