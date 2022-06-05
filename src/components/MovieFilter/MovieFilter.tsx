import { MouseEvent } from 'react';
import classNames from 'classnames';
import { valueFilter } from '../../constants';

import styles from './MovieFilter.module.scss';

interface IMovieFilterProps {
  activeGenre: string;
  handleGenre: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const MovieFilter = (props: IMovieFilterProps) => {
  const { activeGenre, handleGenre } = props;

  const onHandleGenre = (e: MouseEvent<HTMLButtonElement>) => {
    handleGenre(e);
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
          onClick={onHandleGenre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
