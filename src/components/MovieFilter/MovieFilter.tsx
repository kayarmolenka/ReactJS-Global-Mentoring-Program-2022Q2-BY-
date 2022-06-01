import { useState } from 'react';
import classNames from 'classnames';

import styles from './MovieFilter.module.scss';
import { valueFilter } from '../../constants';

export const MovieFilter = () => {
  const [activeGenre, setActiveGenre] = useState(valueFilter[0]);

  const onHandleGenre = (genre: string) => {
    setActiveGenre(genre);
  };

  return (
    <div className={styles.movieFilter}>
      {valueFilter.map((genre) => (
        <button
          key={genre}
          className={classNames(
            `${styles.movieFilterBtn}`,
            genre === activeGenre ? `${styles.movieFilterBtnChosen}` : '',
          )}
          onClick={() => onHandleGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
