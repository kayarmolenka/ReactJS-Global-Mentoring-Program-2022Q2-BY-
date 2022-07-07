import { IApplicationState } from './types';

export const initialState: IApplicationState = {
  movieList: [],
};

export const FETCH_MOVIE_LIST = 'movies/fetchMovieList';
export const FETCH_SORTED_MOVIE_LIST = 'movies/fetchSortedMovieList';
export const FETCH_FILTERED_MOVIE_LIST = 'movies/fetchFilteredMovieList';
export const ADD_MOVIE = 'movies/addMovie';
export const DELETE_MOVIE = 'movies/deleteMovie';
export const EDIT_MOVIE = 'movies/editMovie';
export const API_URL = 'http://localhost:4000/';
