import { MockData } from '../../mockDate/date';
import { MovieCard } from '../index';
import { useState } from 'react';

import styles from './MovieList.module.scss';

interface IMovieListProps {
  movies: MockData[];
  isShowEditModal: boolean;
  setIsShowEditModal: (param: boolean) => void;
}

export const MovieList = (props: IMovieListProps) => {
  const { movies, isShowEditModal, setIsShowEditModal } = props;

  const [activePopupId, setActivePopupById] = useState(0);

  const setActivePopup = (id: number) => {
    setActivePopupById(id);
    setIsShowEditModal(true);
  };

  return (
    <div className={styles.movieList}>
      {movies.map(
        ({ id, title, poster, realiseDate, genre, movieUrl, runtime, rating, overview }) => (
          <MovieCard
            title={title}
            poster={poster}
            realiseDate={realiseDate}
            genre={genre}
            key={id}
            isShowEditModal={isShowEditModal}
            setIsShowEditModal={setIsShowEditModal}
            idMovie={id}
            setActivePopup={setActivePopup}
            activePopupId={activePopupId}
            movieUrl={movieUrl}
            overview={overview}
            rating={rating}
            runtime={runtime}
          />
        ),
      )}
    </div>
  );
};
