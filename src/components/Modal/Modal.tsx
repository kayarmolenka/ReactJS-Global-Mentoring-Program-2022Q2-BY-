import { valueFilter } from '../../constants';
import { Button } from '../index';
import { faCaretDown, faCaretUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useCallback, useState } from 'react';
import { ButtonType } from '../../models';
import { date } from '../../mockDate/date';

import styles from './Modal.module.scss';

interface IModalProps {
  textHeader: string;
  isOpenModal: boolean;
  setIsOpenModal: (data: boolean) => void;
  setSuccessModal: (data: boolean) => void;
}

export const Modal = (props: IModalProps) => {
  const { textHeader, isOpenModal, setIsOpenModal, setSuccessModal } = props;

  const [genreIsOpen, setGenreIsOpen] = useState(false);

  const revertArrow = () => {
    setGenreIsOpen(!genreIsOpen);
  };

  const switchToDateType = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.type = 'date';
  };

  const closeModalWindow = useCallback(() => {
    setIsOpenModal(false);
    document.body.style.overflow = 'auto';
  }, [setIsOpenModal]);

  const stopClosed = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const [stateForm, setStateForm] = useState({
    title: '',
    releaseDate: '',
    movieUrl: '',
    rating: '',
    genre: '',
    runtime: '',
    overview: '',
  });

  const onHandleFormItems = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setStateForm((state) => ({
      ...state,
      [`${e.target.name}`]: e.target.value,
    }));
  };

  const completeAddMovie = () => {
    setIsOpenModal(false);
    setSuccessModal(true);
  };

  return isOpenModal ? (
    <div className={styles.modalShadow} onClick={closeModalWindow}>
      <div className={styles.modal} onClick={stopClosed}>
        <header className={styles.modalHeader}>
          {textHeader}
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.modalCloseIcon}
            onClick={closeModalWindow}
          />
        </header>
        <div className={styles.modalContent}>
          <div className={styles.modalInputsFields}>
            <div className={styles.modalTitle}>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                type="text"
                placeholder="Movie title"
                value={stateForm.title}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalReleaseDate}>
              <label htmlFor="release-date">Release date</label>
              <input
                name="releaseDate"
                type="text"
                placeholder="Select Date"
                onFocus={switchToDateType}
                value={stateForm.releaseDate}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalMovieUrl}>
              <label htmlFor="movie-url">Movie url</label>
              <input
                name="movieUrl"
                type="text"
                placeholder="htpps://"
                value={stateForm.movieUrl}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalRating}>
              <label htmlFor="rating">Rating</label>
              <input
                name="rating"
                type="text"
                placeholder="7.8"
                value={stateForm.rating}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalGenre}>
              <label htmlFor="genre">Genre</label>
              <select
                className={styles.modalGenreSelect}
                name="genre"
                onClick={revertArrow}
                value={stateForm.genre}
                onChange={onHandleFormItems}
              >
                <option value="" disabled selected>
                  Select Genre
                </option>
                {valueFilter.map((typeSort) => (
                  <option key={typeSort} value={typeSort}>
                    {typeSort}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={genreIsOpen ? faCaretUp : faCaretDown}
                className={styles.modalGenreIcon}
              />
            </div>
            <div className={styles.modalRuntime}>
              <label htmlFor="runtime">Runtime</label>
              <input
                name="runtime"
                type="text"
                placeholder="minutes"
                value={stateForm.runtime}
                onChange={onHandleFormItems}
              />
            </div>
          </div>
          <div className={styles.modalOverview}>
            <label htmlFor="overview">Overview</label>
            <textarea
              name="overview"
              placeholder="Movie description"
              value={stateForm.overview}
              onChange={onHandleFormItems}
            />
          </div>
          <div className={styles.modalBtn}>
            <Button
              className={styles.modalBtnReset}
              text="Reset"
              onClick={closeModalWindow}
              type={ButtonType.SUBMIT}
            />
            <Button
              className={styles.modalBtnSubmit}
              text="Submit"
              onClick={completeAddMovie}
              type={ButtonType.SUBMIT}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
