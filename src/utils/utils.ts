import { ValueSortMovie } from '../models';

export const mapSortsName = (typeSort: string) => {
  if (typeSort === ValueSortMovie.RELEASE_DATE) {
    return 'release_date';
  }
  if (typeSort === ValueSortMovie.GENRE) {
    return 'genres';
  }

  return 'vote_average';
};
