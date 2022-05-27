import styles from './MovieSort.module.scss';

const valueSortMovie = ['Release Date', 'Rating', 'Runtime'];

export const MovieSort = () => {
  return (
    <div className={styles.movieSort}>
      <ul>
        <li className={styles.movieSortBy}>{'Sort by'}</li>
        <li className={styles.movieSortRealiseDate}>
          <select className={styles.movieSortSelect}>
            {valueSortMovie.map((typeSort) => (
              <option key={typeSort} value={typeSort} defaultValue="Release Date">
                {typeSort}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};
