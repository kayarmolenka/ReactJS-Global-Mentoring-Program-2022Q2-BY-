import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, IFetchMovieListResponse, ISortingParams } from './index';
import { FETCH_FILTERED_MOVIE_LIST, FETCH_MOVIE_LIST, FETCH_SORTED_MOVIE_LIST } from './constants';
import { useFetch } from '../hooks/useFetch';

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
