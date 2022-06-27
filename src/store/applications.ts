import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
import { applicationService } from './applicationService';
import { IMovieList } from '../models';

type ISortingType = string;

interface IApplicationState {
  movieList: IMovieList[];
}

export interface IFetchMovieListResponse {
  limit: number;
  offset: number;
  totalAmount: number;
  data: IMovieList[];
}

const initialState: IApplicationState = {
  movieList: [],
};

const FETCH_MOVIE_LIST = 'application/fetchMovieList';
const FETCH_SORTED_MOVIE_LIST = 'application/fetchSortedMovieList';
const FETCH_FILTERED_MOVIE_LIST = 'application/fetchFilteredMovieList';
const API_URL = 'http://localhost:4000/';

export const fetchMovieList = createAsyncThunk<
  IFetchMovieListResponse | undefined,
  void,
  { state: RootState; rejectedValue: string }
>(FETCH_MOVIE_LIST, async (_, thunkApi) => {
  try {
    return await applicationService(`${API_URL}movies?offset=1&limit=12`);
  } catch (error) {
    thunkApi.rejectWithValue((error as Error).message);
  }
});

export const fetchSortedMovieList = createAsyncThunk<
  IFetchMovieListResponse | undefined,
  ISortingType,
  { state: RootState; rejectedValue: string }
>(FETCH_SORTED_MOVIE_LIST, async (payload, thunkApi) => {
  try {
    return await applicationService(
      `${API_URL}movies?sortBy=${payload}&sortOrder=asc&offset=1&limit=12`,
    );
  } catch (error) {
    thunkApi.rejectWithValue((error as Error).message);
  }
});

export const fetchFilteredMovieList = createAsyncThunk<
  IFetchMovieListResponse | undefined,
  ISortingType,
  { state: RootState; rejectedValue: string }
>(FETCH_FILTERED_MOVIE_LIST, async (filterName, thunkApi) => {
  try {
    return await applicationService(`${API_URL}movies?filter=${filterName}&offset=1&limit=12`);
  } catch (error) {
    thunkApi.rejectWithValue((error as Error).message);
  }
});

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload?.data || [];
    });

    builder.addCase(fetchSortedMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload?.data || [];
    });

    builder.addCase(fetchFilteredMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload?.data || [];
    });
  },
});

export const actionApplicationReducer = applicationSlice.reducer;
