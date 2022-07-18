import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getActiveGenreSelector,
  getActiveSortingTypeSelector,
  IFetchMovieListResponse,
  RootState,
} from './index';
import {
  FETCH_MOVIE_LIST,
  ADD_MOVIE,
  API_URL,
  DELETE_MOVIE,
  CHANGE_GENRE,
  CHANGE_FILTER,
  EDIT_MOVIE,
} from './constants';
import { useFetch } from '../hooks/useFetch';
import { IdMovie, IMovieParams, ValueFilter } from '../models';

export const setGenre = createAction(CHANGE_GENRE, (action) => ({
  payload: action,
}));

export const changeFilter = createAction(CHANGE_FILTER, (action) => ({
  payload: action,
}));

export const fetchMovieList = createAsyncThunk<IFetchMovieListResponse, void, { state: RootState }>(
  FETCH_MOVIE_LIST,
  async (_, thunkApi) => {
    try {
      const genre = getActiveGenreSelector(thunkApi.getState());
      const sortBy = getActiveSortingTypeSelector(thunkApi.getState());

      if (genre === ValueFilter.ALL) {
        return await useFetch(`${API_URL}movies?sortBy=${sortBy}&sortOrder=desc&offset=1&limit=12`);
      }

      return await useFetch(
        `${API_URL}movies?sortBy=${sortBy}&sortOrder=desc&filter=${genre}&offset=1&limit=12`,
      );
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const addMovie = createAsyncThunk<IFetchMovieListResponse, IMovieParams>(
  ADD_MOVIE,
  async (params, thunkApi) => {
    try {
      return await useFetch(`${API_URL}movies`, {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 'content-type': 'application/json' },
      });
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const deleteMovie = createAsyncThunk<void, IdMovie>(
  DELETE_MOVIE,
  async (idMovie, thunkApi) => {
    try {
      await useFetch(`${API_URL}movies/${idMovie}`, {
        method: 'delete',
      });
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const editMovie = createAsyncThunk<void, IMovieParams>(
  EDIT_MOVIE,
  async (params, thunkApi) => {
    try {
      await useFetch(`${API_URL}movies`, {
        method: 'put',
        body: JSON.stringify(params),
        headers: { 'content-type': 'application/json' },
      });
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);
