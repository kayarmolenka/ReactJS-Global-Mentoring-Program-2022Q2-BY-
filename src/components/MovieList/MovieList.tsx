import { MockData } from '../../mockDate/date';
import { MovieCard } from '../MovieCard';

import styles from './MovieList.module.scss';

export const MovieList = ({ movies }: { movies: MockData[] }) => {
  return (
    <div className={styles.movieList}>
      {movies.map(({ id, title, poster, realiseDate, genre }) => (
        <MovieCard title={title} poster={poster} realiseDate={realiseDate} genre={genre} key={id} />
      ))}
    </div>
  );
};
