import { date } from '../../mockDate/date';
import { MovieCard } from '../MovieCard';

import styles from './MovieList.module.scss';

export const MovieList = () => {
  return (
    <div className={styles.movieList}>
      {date.map(({ id, title, poster, realiseDate, genre }) => (
        <MovieCard title={title} poster={poster} realiseDate={realiseDate} genre={genre} key={id} />
      ))}
    </div>
  );
};
