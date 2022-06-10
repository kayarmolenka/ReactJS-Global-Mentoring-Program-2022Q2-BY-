import { ChangeEvent, useCallback, useState } from 'react';
import { Button, MultipleDropdown } from '../index';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonType } from '../../models';

import styles from './Modal.module.scss';

interface IInitialStateMovieDescription {
  title: string;
  releaseDate: number;
  genre: string[];
  runtime?: string;
  overview?: string;
  rating?: string;
  movieUrl?: string;
}

interface IModalProps {
  textHeader: string;
  isOpenModal: boolean;
  setIsOpenModal: (data: boolean) => void;
  setSuccessModal: (data: boolean) => void;
  initialState?: IInitialStateMovieDescription;
}

export const Modal = (props: IModalProps) => {
  const { textHeader, isOpenModal, setIsOpenModal, setSuccessModal, initialState } = props;
  const [genreIsOpen, setGenreIsOpen] = useState(false);
  const initState = initialState || {
    title: '',
    releaseDate: '',
    movieUrl: '',
    rating: '',
    genre: [],
    runtime: '',
    overview: '',
  };

  const [stateForm, setStateForm] = useState(initState);

  const closeModalWindow = useCallback(() => {
    setIsOpenModal(false);
    document.body.style.overflow = 'auto';
  }, [setIsOpenModal]);

  const stopClosed = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onHandleFormItems = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setStateForm((state) => ({
      ...state,
      [`${e.target.name}`]: e.target.value,
    }));
  };

  const handleValueDropDown = (param: string[]) => {
    // @ts-ignore
    setStateForm((state) => ({
      ...state,
      genre: [...state.genre, ...param],
    }));
  };

  const completeAddMovie = () => {
    document.body.style.overflow = 'auto';
    setIsOpenModal(false);
    setSuccessModal(true);
    console.log(stateForm);
    setStateForm(initState);
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
              <label htmlFor="title" className={styles.modalContentLabel}>
                Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="Movie title"
                value={stateForm.title}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalReleaseDate}>
              <label htmlFor="release-date" className={styles.modalContentLabel}>
                Release date
              </label>
              <input
                name="releaseDate"
                type="text"
                placeholder="Select Date"
                value={stateForm.releaseDate}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalMovieUrl}>
              <label htmlFor="movie-url" className={styles.modalContentLabel}>
                Movie url
              </label>
              <input
                name="movieUrl"
                type="text"
                placeholder="htpps://"
                value={stateForm.movieUrl}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalRating}>
              <label htmlFor="rating" className={styles.modalContentLabel}>
                Rating
              </label>
              <input
                name="rating"
                type="text"
                placeholder="7.8"
                value={stateForm.rating}
                onChange={onHandleFormItems}
              />
            </div>
            <div className={styles.modalGenre}>
              <MultipleDropdown
                title="Select Genre"
                isDropdownOpen={genreIsOpen}
                setDropdownOpen={setGenreIsOpen}
                initialValue={stateForm.genre}
                handleValue={handleValueDropDown}
              />
            </div>
            <div className={styles.modalRuntime}>
              <label htmlFor="runtime" className={styles.modalContentLabel}>
                Runtime
              </label>
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
            <label htmlFor="overview" className={styles.modalContentLabel}>
              Overview
            </label>
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
