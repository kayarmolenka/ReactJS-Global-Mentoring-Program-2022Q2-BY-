import { useState } from 'react';
import { IMovieList } from '../../models';
import { MovieCard } from '../index';

import styles from './MovieList.module.scss';

interface IMovieListProps {
  movies: IMovieList[];
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
      {movies.map((movie) => (
        <MovieCard
          movieData={movie}
          key={movie.id}
          setActivePopup={setActivePopup}
          activePopupId={activePopupId}
          handleMovieCard={openDescriptionCard}
          isShowEditModal={isShowEditModal}
          setIsShowEditModal={setIsShowEditModal}
        />
      ))}
    </div>
  );
};
