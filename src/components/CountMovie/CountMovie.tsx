import styles from './CountMovie.module.scss';

export const CountMovie = ({ countMovie }: { countMovie: number }) => {
  return <div className={styles.movieCount}>{`${countMovie} movies found`}</div>;
};
