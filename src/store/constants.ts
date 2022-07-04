import { IApplicationState } from './types';

export const initialState: IApplicationState = {
  movieList: [],
};

export const FETCH_MOVIE_LIST = 'movies/fetchMovieList';
export const FETCH_SORTED_MOVIE_LIST = 'movies/fetchSortedMovieList';
export const FETCH_FILTERED_MOVIE_LIST = 'movies/fetchFilteredMovieList';
export const API_URL = 'http://localhost:4000/';
