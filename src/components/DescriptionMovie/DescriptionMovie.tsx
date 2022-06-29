import { NetflixRoulette } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './DescriptionMovie.module.scss';

interface IDescriptionMovieProps {
  title: string;
  poster: string;
  realiseDate: string;
  genres: string[];
  rating?: number;
  runtime?: number;
  overview?: string;
  handleSearchIcon: () => void;
  handleErrorImage: () => void;
}

export const DescriptionMovie = (props: IDescriptionMovieProps) => {
  const {
    realiseDate,
    title,
    poster,
    genres,
    rating,
    runtime,
    overview,
    handleSearchIcon,
    handleErrorImage,
  } = props;

  const runtimeDescription = !runtime ? 'No Data' : `${runtime} min`;
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
          <img
            src={poster}
            alt={title}
            className={styles.descriptionImg}
            onError={handleErrorImage}
          />
        </div>
        <div>
          <div className={styles.wrapperTitleRating}>
            <h2 className={styles.descriptionTitle}>{title}</h2>
            <span className={styles.descriptionRating}>{rating}</span>
          </div>
          <div>
            <span className={styles.descriptionGenre}>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </span>
          </div>
          <div className={styles.wrapperReleaseDataRuntime}>
            <span>{realiseDate}</span>
            <span>{runtimeDescription}</span>
          </div>
          <p className={styles.descriptionOverview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};
