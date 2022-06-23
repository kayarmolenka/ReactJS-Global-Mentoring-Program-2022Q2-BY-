import { NetflixRoulette } from '../NetflixRoulette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './DescriptionMovie.module.scss';

interface IDescriptionMovieProps {
  title: string;
  poster: string;
  realiseDate: number;
  genre: string;
  rating?: string;
  runtime?: string;
  overview?: string;
  handleSearchIcon: () => void;
}

export const DescriptionMovie = (props: IDescriptionMovieProps) => {
  const { realiseDate, title, poster, genre, rating, runtime, overview, handleSearchIcon } = props;
  return (
    <div className={styles.descriptionWrapper}>
      <div className={styles.descriptionHeader}>
        <div onClick={handleSearchIcon}>
          <NetflixRoulette />
        </div>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={handleSearchIcon} />
      </div>
      <div className={styles.descriptionContent}>
        <div>
          <img src={poster} alt={title} className={styles.descriptionImg} />
        </div>
        <div>
          <div className={styles.wrapperTitleRating}>
            <h2 className={styles.descriptionTitle}>{title}</h2>
            <span className={styles.descriptionRating}>{rating}</span>
          </div>
          <div>
            <span className={styles.descriptionGenre}>{genre}</span>
          </div>
          <div className={styles.wrapperReleaseDataRuntime}>
            <span>{realiseDate}</span>
            <span>{runtime}</span>
          </div>
          <p className={styles.descriptionOverview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};
