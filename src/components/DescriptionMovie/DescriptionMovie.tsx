import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NetflixRoulette } from '../index';
import { IMovieList } from '../../models';

import styles from './DescriptionMovie.module.scss';

interface IDescriptionMovieProps {
  poster: string;
  activeMovieDescription: IMovieList;
  handleSearchIcon: () => void;
  handleErrorImage: () => void;
}

export const DescriptionMovie = (props: IDescriptionMovieProps) => {
  const { activeMovieDescription, handleSearchIcon, handleErrorImage, poster } = props;
  const { genres, title, release_date, vote_average, runtime, overview } = activeMovieDescription;

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
            <span className={styles.descriptionRating}>{vote_average}</span>
          </div>
          <div>
            <span className={styles.descriptionGenre}>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </span>
          </div>
          <div className={styles.wrapperReleaseDataRuntime}>
            <span>{release_date}</span>
            <span>{runtimeDescription}</span>
          </div>
          <p className={styles.descriptionOverview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};
