import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './index';
import { actionApplicationReducer } from './movieListSlice';

export const reducer = {
  application: actionApplicationReducer,
};

export const createStore = (preloadedState?: Partial<RootState>) =>
  configureStore({ reducer, preloadedState });

export const store = createStore();

export const useAppDispatch = () => useDispatch<AppDispatch>();
