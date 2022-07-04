import { RootState } from './index';

export const movieListSelector = (state: RootState) => state.application.movieList;
