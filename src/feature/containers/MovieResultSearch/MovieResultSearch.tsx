import { MovieFilter } from '../../../components/MovieFilter';
import { MovieSort } from '../../../components/MovieSort';
import React from 'react';

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
