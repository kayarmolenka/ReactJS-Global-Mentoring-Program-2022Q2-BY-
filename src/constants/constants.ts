import { MockData } from '../mockDate/date';

export const ADD_MOVIE_TEXT = '+ add movie';
export const valueFilter = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
export const valueSortMovie = [
  'Release Date (A-Z)',
  'Release Date (Z-A)',
  'Title (A-Z)',
  'Title (Z-A)',
];

export const INIT_STATE: MockData = {
  id: 0,
  genre: '',
  poster: '',
  movieUrl: '',
  rating: '',
  title: '',
  releaseDate: 0,
  overview: '',
  runtime: '',
};
