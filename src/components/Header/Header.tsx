import styles from './Header.module.scss';

import { SearchForm } from '../SearchForm';
import { NetflixRoulette } from '../NetflixRoulette';
import { Button } from '../Button';

export const Header = () => {
  const addMovieHandle = () => {
    console.log('addMovieHandle');
  };

  const ADD_MOVIE_TEXT = '+ add movie';

  return (
    <header className={styles.header}>
      <div className={styles.headerBot}>
        <NetflixRoulette />
        <Button
          text={ADD_MOVIE_TEXT}
          onClick={addMovieHandle}
          type="submit"
          className={styles.headerAddMovieBtn}
        />
      </div>
      <SearchForm />
    </header>
  );
};
