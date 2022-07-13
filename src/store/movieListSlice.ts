import { createSlice } from '@reduxjs/toolkit';
import { changeFilter, fetchMovieList, fetchMovieListWithParams, setGenre } from './thunks';
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

    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload.data;
    });

    builder.addCase(fetchMovieListWithParams.fulfilled, (state, action) => {
      state.movieList = action.payload.data;
    });
  },
});

export const actionApplicationReducer = applicationSlice.reducer;
