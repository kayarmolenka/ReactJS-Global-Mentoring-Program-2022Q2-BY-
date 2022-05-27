import styles from './CountMovie.module.scss';

interface countMovieProps {
  countMovie: number;
}

export const CountMovie = (props: countMovieProps) => {
  const { countMovie } = props;
  return <div className={styles.movieCount}>{`${countMovie} movies found`}</div>;
};
