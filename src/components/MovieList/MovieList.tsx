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
      {movies.map(
        ({
          id,
          title,
          poster_path,
          release_date,
          genres,
          runtime,
          revenue,
          tagline,
          vote_count,
          budget,
          vote_average,
          overview,
        }) => (
          <MovieCard
            title={title}
            poster_path={poster_path}
            release_date={release_date}
            genres={genres}
            key={id}
            isShowEditModal={isShowEditModal}
            setIsShowEditModal={setIsShowEditModal}
            id={id}
            setActivePopup={setActivePopup}
            activePopupId={activePopupId}
            overview={overview}
            vote_average={vote_average}
            runtime={runtime}
            handleMovieCard={openDescriptionCard}
            revenue={revenue}
            tagline={tagline}
            vote_count={vote_count}
            budget={budget}
          />
        ),
      )}
    </div>
  );
};
