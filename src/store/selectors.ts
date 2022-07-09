import { RootState } from './index';

export const movieListSelector = (state: RootState) => state.application.movieList;
export const getActiveGenreSelector = (state: RootState) => state.application.activeGenre;
export const getActiveSortingTypeSelector = (state: RootState) => state.application.sortingType;
