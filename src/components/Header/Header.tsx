import { SearchForm, NetflixRoulette, Button } from '../index';
import { ButtonType } from '../../models';
import { ADD_MOVIE_TEXT } from '../../constants';

import styles from './Header.module.scss';

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
