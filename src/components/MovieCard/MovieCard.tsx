import classnames from 'classnames';
import { useState } from 'react';

import styles from './MovieCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export interface MovieCardProps {
  title: string;
  poster: string;
  realiseDate: number;
  genre: string;
}

export const MovieCard = (props: MovieCardProps) => {
  const { genre, poster, title, realiseDate } = props;
  const [isMovieCardWithHover, setIsMovieCardWithHover] = useState(false);

  const iconClass = classnames(
    `${styles.movieCardCircle}`,
    !isMovieCardWithHover ? `${styles.movieCardCircleHidden}` : '',
  );

  return (
    <div
      className={styles.movieCard}
      onMouseEnter={() => setIsMovieCardWithHover(true)}
      onMouseLeave={() => setIsMovieCardWithHover(false)}
    >
      <div className={styles.movieCardImage}>
        <img src={poster} alt={title} className={styles.movieCardPoster} />
        <div className={iconClass}>
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
