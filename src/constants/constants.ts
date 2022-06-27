import { IMovieList } from '../models';

export const ADD_MOVIE_TEXT = '+ add movie';
export const valueFilter = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
export const valueSortMovie = ['Select', 'Release date', 'Genre', 'Rating'];

export const INIT_STATE: IMovieList = {
  budget: 0,
  genres: [],
  id: 0,
  overview: '',
  poster_path: '',
  release_date: '',
  revenue: 0,
  runtime: 0,
  tagline: '',
  title: '',
  vote_average: 0,
  vote_count: 0,
};

export const DEFAULT_SRC = require('../assets/images/default_poster.png');
