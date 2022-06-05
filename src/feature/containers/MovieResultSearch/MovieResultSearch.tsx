import { MovieFilter, MovieSort } from '../../../components';
import { IMovieResulSearchProps } from '../../../models';

import styles from './MovieResultSearch.module.scss';

export const MovieResultSearch = (props: IMovieResulSearchProps) => {
  const { activeSortType, handleSort, activeGenre, handleGenre } = props;

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter activeGenre={activeGenre} handleGenre={handleGenre} />
      <MovieSort activeSortType={activeSortType} handleSort={handleSort} />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
