import { valueSortMovie } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './MovieSort.module.scss';

export const MovieSort = () => {
  return (
    <div className={styles.movieSort}>
      <ul>
        <li className={styles.movieSortBy}>{'Sort by'}</li>
        <li className={styles.movieSortRealiseDate}>
          <select className={styles.movieSortSelect}>
            {valueSortMovie.map((typeSort) => (
              <option key={typeSort} value={typeSort}>
                {typeSort}
              </option>
            ))}
          </select>
          <FontAwesomeIcon icon={faCaretDown} className={styles.movieSortIconCaret} />
        </li>
      </ul>
    </div>
  );
};
