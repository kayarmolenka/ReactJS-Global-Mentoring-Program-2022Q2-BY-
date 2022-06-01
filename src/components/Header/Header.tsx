import { SearchForm } from '../SearchForm';
import { NetflixRoulette } from '../NetflixRoulette';
import { Button } from '../Button';
import { ButtonType } from '../../models';

import styles from './Header.module.scss';
import { ADD_MOVIE_TEXT } from '../../constants';

export const Header = () => {
  const addMovieHandle = () => {
    console.log('addMovieHandle');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerBot}>
        <NetflixRoulette />
        <Button
          text={ADD_MOVIE_TEXT}
          onClick={addMovieHandle}
          type={ButtonType.SUBMIT}
          className={styles.headerAddMovieBtn}
        />
      </div>
      <SearchForm />
    </header>
  );
};
