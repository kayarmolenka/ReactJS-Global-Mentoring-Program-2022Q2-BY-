import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import { reducer, store } from './index';
import { IMovieList } from '../models';

export type RootState = StateFromReducersMapObject<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export interface IApplicationState {
  movieList: IMovieList[];
  sortingType: string;
  activeGenre: string;
}

export interface IFetchMovieListResponse {
  limit: number;
  offset: number;
  totalAmount: number;
  data: IMovieList[];
}
