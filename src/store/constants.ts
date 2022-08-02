import { IApplicationState } from './types';
import { valueFilter, valueSortMovie } from '../constants';

export const initialState: IApplicationState = {
  movieList: [],
  activeGenre: valueFilter[0],
  sortingType: valueSortMovie[0],
  currentOffset: 1,
};

export const FETCH_MOVIE_LIST = 'movies/fetchMovieList';
export const FETCH_MOVIE_LIST_WITH_PARAMS = 'movies/fetchMovieListWithParams';
export const FETCH_MOVIE_BY_ID = 'movies/fetchMovieById';
export const ADD_MOVIE = 'movies/addMovie';
export const DELETE_MOVIE = 'movies/deleteMovie';
export const EDIT_MOVIE = 'movies/editMovie';
export const CHANGE_GENRE = 'movies/changeGenre';
export const CHANGE_OFFSET = 'movies/changeOffset';
export const CHANGE_FILTER = 'movies/changeFilter';
export const API_URL = 'http://localhost:4000/';
