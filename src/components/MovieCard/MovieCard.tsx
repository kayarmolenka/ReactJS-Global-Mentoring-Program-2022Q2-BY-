import { SyntheticEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PopupMovieCard, DeleteMovie, Modal } from '../index';

import styles from './MovieCard.module.scss';

export interface MovieCardProps {
  title: string;
  poster: string;
  releaseDate: number;
  genre: string;
  isShowEditModal: boolean;
  setIsShowEditModal: (param: boolean) => void;
  idMovie: number;
  setActivePopup: (id: number) => void;
  activePopupId: number;
  runtime?: string;
  overview?: string;
  rating?: string;
  movieUrl?: string;
  handleMovieCard: (id: number) => void;
}

export const MovieCard = (props: MovieCardProps) => {
  const {
    genre,
    poster,
    title,
    releaseDate,
    isShowEditModal,
    setIsShowEditModal,
    idMovie,
    setActivePopup,
    activePopupId,
    overview,
    movieUrl,
    runtime,
    rating,
    handleMovieCard,
  } = props;

  const handleEditMenu = (e: SyntheticEvent) => {
    e.stopPropagation();
    setActivePopup(idMovie);
    setIsShowEditModal(true);
  };

  const [isOpenEditMode, setOpenEditMode] = useState(false);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);

  const completeEditMovie = () => {
    console.log('Completed edit movie');
  };

  const descriptionMovie = {
    title,
    releaseDate,
    movieUrl,
    rating,
    genre: [genre],
    runtime,
    overview,
  };

  const showDescription = () => {
    handleMovieCard(idMovie);
  };

  return (
    <div className={styles.movieCard} onClick={showDescription} id={title}>
      <div className={styles.movieCardImage}>
        <img src={poster} alt={title} className={styles.movieCardPoster} />
        <div className={styles.movieCardCircle} onClick={handleEditMenu} data-name={idMovie}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={styles.movieCardThreeDots}
            data-name={idMovie}
          />
        </div>
        {isShowEditModal && activePopupId === idMovie && (
          <PopupMovieCard
            isOpenModal={isShowEditModal}
            setIsOpenModal={setIsShowEditModal}
            setOpenEditMode={setOpenEditMode}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        )}
        {isOpenDeleteModal && (
          <DeleteMovie
            isDeleteMovieModal={isOpenDeleteModal}
            setIsDeleteMovie={setOpenDeleteModal}
          />
        )}
        {isOpenEditMode && (
          <Modal
            textHeader="Edit Movie"
            isOpenModal={isOpenEditMode}
            setIsOpenModal={setOpenEditMode}
            setSuccessModal={completeEditMovie}
            initialState={descriptionMovie}
          />
        )}
      </div>
      <div className={styles.movieCardDescription}>
        <div className={styles.movieCardTitle}>{title}</div>
        <div className={styles.movieCardRealiseDate}>{releaseDate}</div>
      </div>
      <p className={styles.movieCardGenre}>{genre}</p>
    </div>
  );
};
