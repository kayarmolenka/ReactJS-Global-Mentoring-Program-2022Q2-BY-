import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from './MovieCard.module.scss';

export interface MovieCardProps {
  title: string;
  poster: string;
  realiseDate: number;
  genre: string;
}

export const MovieCard = (props: MovieCardProps) => {
  const { genre, poster, title, realiseDate } = props;

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCardImage}>
        <img src={poster} alt={title} className={styles.movieCardPoster} />
        <div className={styles.movieCardCircle}>
          <FontAwesomeIcon icon={faEllipsisVertical} className={styles.movieCardThreeDots} />
        </div>
      </div>
      <div className={styles.movieCardDescription}>
        <div className={styles.movieCardTitle}>{title}</div>
        <div className={styles.movieCardRealiseDate}>{realiseDate}</div>
      </div>
      <p className={styles.movieCardGenre}>{genre}</p>
    </div>
  );
};
