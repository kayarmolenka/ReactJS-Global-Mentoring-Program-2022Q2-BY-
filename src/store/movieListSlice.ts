import { createSlice } from '@reduxjs/toolkit';
import { fetchFilteredMovieList, fetchMovieList, fetchSortedMovieList } from './thunks';
import { initialState } from './constants';

export const applicationSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload.data;
    });

    builder.addCase(fetchSortedMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload.data;
    });

    builder.addCase(fetchFilteredMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload.data;
    });
  },
});

export const actionApplicationReducer = applicationSlice.reducer;
