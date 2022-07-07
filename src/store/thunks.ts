import { createAsyncThunk } from '@reduxjs/toolkit';
import { EDIT_MOVIE, IFetchMovieListResponse, ISortingParams } from './index';
import {
  FETCH_FILTERED_MOVIE_LIST,
  FETCH_MOVIE_LIST,
  FETCH_SORTED_MOVIE_LIST,
  ADD_MOVIE,
  API_URL,
  DELETE_MOVIE,
} from './constants';
import { useFetch } from '../hooks/useFetch';
import { IdMovieForDelete, IMovieParams } from '../models';
import { mapSortsName } from '../utils';
import { valueSortMovie } from '../constants';

export const fetchMovieList = createAsyncThunk<IFetchMovieListResponse, ISortingParams>(
  FETCH_MOVIE_LIST,
  async ({ sortBy }, thunkApi) => {
    try {
      return await useFetch(`${API_URL}movies?sortBy=${sortBy}&sortOrder=desc&offset=1&limit=12`);
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const fetchSortedMovieList = createAsyncThunk<IFetchMovieListResponse, ISortingParams>(
  FETCH_SORTED_MOVIE_LIST,
  async ({ sortBy, activeGenre }, thunkApi) => {
    try {
      return await useFetch(
        `${API_URL}movies?sortBy=${sortBy}&sortOrder=asc&filter=${activeGenre}&offset=1&limit=12`,
      );
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const fetchFilteredMovieList = createAsyncThunk<IFetchMovieListResponse, ISortingParams>(
  FETCH_FILTERED_MOVIE_LIST,
  async ({ sortBy, activeGenre }, thunkApi) => {
    try {
      return await useFetch(
        `${API_URL}movies?sortBy=${sortBy}&sortOrder=asc&filter=${activeGenre}&offset=1&limit=12`,
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
      const response = await useFetch(`${API_URL}movies`, {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 'content-type': 'application/json' },
      });

      thunkApi.dispatch(fetchMovieList({ sortBy: mapSortsName(valueSortMovie[0]) }));

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const deleteMovie = createAsyncThunk<void, IdMovieForDelete>(
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

      thunkApi.dispatch(fetchMovieList({ sortBy: mapSortsName(valueSortMovie[0]) }));
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);
