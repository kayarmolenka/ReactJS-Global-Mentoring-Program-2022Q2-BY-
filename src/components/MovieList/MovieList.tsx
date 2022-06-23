import { useState } from 'react';
import { MockData } from '../../mockDate/date';
import { MovieCard } from '../index';

import styles from './MovieList.module.scss';

interface IMovieListProps {
  movies: MockData[];
  isShowEditModal: boolean;
  setIsShowEditModal: (param: boolean) => void;
  handleMovieCard: (id: number) => void;
}

export const MovieList = (props: IMovieListProps) => {
  const { movies, isShowEditModal, setIsShowEditModal, handleMovieCard } = props;

  const [activePopupId, setActivePopupById] = useState(0);

  const setActivePopup = (id: number) => {
    setActivePopupById(id);
    setIsShowEditModal(true);
  };

  const openDescriptionCard = (id: number) => {
    handleMovieCard(id);
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
            handleMovieCard={openDescriptionCard}
          />
        ),
      )}
    </div>
  );
};
