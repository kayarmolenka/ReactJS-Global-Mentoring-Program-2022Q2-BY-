import { SyntheticEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PopupMovieCard, DeleteMovie, Modal } from '../index';
import { MovieCardProps } from '../../models';
import { DEFAULT_SRC } from '../../constants';

import styles from './MovieCard.module.scss';

export const MovieCard = (props: MovieCardProps) => {
  const {
    genres,
    poster_path,
    title,
    release_date,
    isShowEditModal,
    setIsShowEditModal,
    id,
    setActivePopup,
    activePopupId,
    overview,
    runtime,
    vote_average,
    handleMovieCard,
  } = props;

  const handleEditMenu = (e: SyntheticEvent) => {
    e.stopPropagation();
    setActivePopup(id);
    setIsShowEditModal(true);
  };

  const [isOpenEditMode, setOpenEditMode] = useState(false);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [srcImg, setSrcImg] = useState(poster_path ? poster_path : DEFAULT_SRC);

  const completeEditMovie = () => {
    console.log('Completed edit movie');
  };

  const descriptionMovie = {
    title,
    releaseDate: release_date,
    genre: genres,
    runtime,
    overview,
    rating: vote_average,
    movieUrl: poster_path,
  };

  const showDescription = () => {
    handleMovieCard(id);
  };

  const handleErrorImage = () => {
    setSrcImg(DEFAULT_SRC);
  };

  return (
    <div className={styles.movieCard} id={title}>
      <div className={styles.movieCardImage}>
        <img
          src={srcImg}
          alt={title}
          className={styles.movieCardPoster}
          onClick={showDescription}
          onError={handleErrorImage}
        />
        <div className={styles.movieCardCircle} onClick={handleEditMenu} data-name={id}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={styles.movieCardThreeDots}
            data-name={id}
          />
        </div>
        {isShowEditModal && activePopupId === id && (
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
        <div className={styles.movieCardRealiseDate}>{release_date}</div>
      </div>
      <p className={styles.movieCardGenre}>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </p>
    </div>
  );
};
