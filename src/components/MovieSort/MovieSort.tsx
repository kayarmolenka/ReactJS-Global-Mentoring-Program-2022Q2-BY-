import { valueSortMovie } from '../../constants';
import { IMovieSortProps } from '../../models';

import styles from './MovieSort.module.scss';

export const MovieSort = (props: IMovieSortProps) => {
  const { activeSortType, handleSort } = props;

  return (
    <div className={styles.movieSort}>
      <ul>
        <li className={styles.movieSortBy}>{'Sort by'}</li>
        <li className={styles.movieSortRealiseDate}>
          <select className={styles.movieSortSelect} value={activeSortType} onChange={handleSort}>
            {valueSortMovie.map((typeSort) => (
              <option key={typeSort} value={typeSort}>
                {typeSort}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};
