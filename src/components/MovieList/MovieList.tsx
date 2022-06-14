import { MouseEvent, useState } from 'react';
import { MockData } from '../../mockDate/date';
import { MovieCard } from '../index';

import styles from './MovieList.module.scss';

interface IMovieListProps {
  movies: MockData[];
  isShowEditModal: boolean;
  setIsShowEditModal: (param: boolean) => void;
  handleMovieCard: (e: MouseEvent<HTMLDivElement>) => void;
}

export const MovieList = (props: IMovieListProps) => {
  const { movies, isShowEditModal, setIsShowEditModal, handleMovieCard } = props;

  const [activePopupId, setActivePopupById] = useState(0);

  const setActivePopup = (id: number) => {
    setActivePopupById(id);
    setIsShowEditModal(true);
  };

  return (
    <div className={styles.movieList}>
      {movies.map(
        ({ id, title, poster, releaseDate, genre, movieUrl, runtime, rating, overview }) => (
          <MovieCard
            title={title}
            poster={poster}
            releaseDate={releaseDate}
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
            handleMovieCard={handleMovieCard}
          />
        ),
      )}
    </div>
  );
};
