import { MovieFilter, MovieSort } from '../../../components';

import styles from './MovieResultSearch.module.scss';

export const MovieResultSearch = () => {
  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter />
      <MovieSort />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
