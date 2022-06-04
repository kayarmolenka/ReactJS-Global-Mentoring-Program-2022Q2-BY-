import { MovieFilter, MovieSort } from '../../../components';
import { IMovieSortProps } from '../../../models';

import styles from './MovieResultSearch.module.scss';

export const MovieResultSearch = (props: IMovieSortProps) => {
  const { activeSortType, handleSort } = props;

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter />
      <MovieSort activeSortType={activeSortType} handleSort={handleSort} />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
