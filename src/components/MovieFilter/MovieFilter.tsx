import { MouseEvent } from 'react';
import classNames from 'classnames';
import { valueFilter } from '../../constants';

import styles from './MovieFilter.module.scss';

interface IMovieFilterProps {
  activeGenre: string;
  onHandleGenre: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const MovieFilter = (props: IMovieFilterProps) => {
  const { activeGenre, onHandleGenre } = props;

  return (
    <div className={styles.movieFilter}>
      {valueFilter.map((genre) => (
        <button
          key={genre}
          className={classNames(`${styles.movieFilterBtn}`, {
            [styles.movieFilterBtnChosen]: genre === activeGenre,
          })}
          onClick={onHandleGenre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
