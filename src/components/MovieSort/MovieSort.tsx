import { SyntheticEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { valueSortMovie } from '../../constants';

import styles from './MovieSort.module.scss';

interface IMovieSortProps {
  chosenTypeSorting: string;
  setChosenTypeSorting: (param: string) => void;
}

export const MovieSort = (props: IMovieSortProps) => {
  const { chosenTypeSorting, setChosenTypeSorting } = props;

  const handleSortType = (e: SyntheticEvent<HTMLSelectElement>) => {
    setChosenTypeSorting(e.currentTarget.value);
  };

  return (
    <div className={styles.movieSort}>
      <ul>
        <li className={styles.movieSortBy}>{'Sort by'}</li>
        <li className={styles.movieSortRealiseDate}>
          <select
            className={styles.movieSortSelect}
            value={chosenTypeSorting}
            onChange={handleSortType}
          >
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
