import { createSlice } from '@reduxjs/toolkit';
import {
  changeFilter,
  fetchMovieById,
  fetchMovieList,
  fetchMovieListWithParams,
  setCurrentOffset,
  setGenre,
} from './thunks';
import { initialState } from './constants';

export const applicationSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setGenre, (state, action) => {
      state.activeGenre = action.payload;
    });

    builder.addCase(changeFilter, (state, action) => {
      state.sortingType = action.payload;
    });

    builder.addCase(setCurrentOffset, (state, action) => {
      state.currentOffset = state.currentOffset + action.payload;
    });

    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload.data;
    });

    builder.addCase(fetchMovieListWithParams.fulfilled, (state, action) => {
      state.movieList = [...state.movieList, ...action.payload.data];
    });

    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.activeDescriptionMovie = action.payload;
    });
  },
});

export const actionApplicationReducer = applicationSlice.reducer;
