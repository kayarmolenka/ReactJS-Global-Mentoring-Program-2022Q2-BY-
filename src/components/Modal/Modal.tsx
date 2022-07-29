import { ChangeEvent, useCallback, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { FieldProps } from 'formik/dist/Field';
import { faXmark, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FormField, MultipleDropdown } from '../index';
import { ButtonType, ValueFilter } from '../../models';
import { valueFilter } from '../../constants';
import { addMovie, editMovie, fetchMovieList, useAppDispatch } from '../../store';
import { validationSchema } from '../../utils';

import styles from './Modal.module.scss';

interface IInitialStateMovieDescription {
  title: string;
  release_date: string;
  genres: string[];
  runtime: number | string;
  overview: string;
  rating?: number | string;
  movieUrl?: string;
  id?: number;
  poster_path: string;
  vote_average: number | string;
}

interface IModalProps {
  textHeader: string;
  isOpenModal: boolean;
  setIsOpenModal: (data: boolean) => void;
  setSuccessModal: (data: boolean) => void;
  initialState?: IInitialStateMovieDescription;
  editMode?: boolean;
}

export const Modal = (props: IModalProps) => {
  const { textHeader, isOpenModal, setIsOpenModal, setSuccessModal, initialState, editMode } =
    props;
  const [genreIsOpen, setGenreIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const initState: IInitialStateMovieDescription = initialState || {
    title: '',
    release_date: '',
    genres: [],
    runtime: '',
    overview: '',
    poster_path: '',
    vote_average: '',
  };

  const [stateForm, setStateForm] = useState(initState);
  const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);

  const genresValue = [
    ...new Set([
      ...valueFilter
        .filter((genre) => genre !== ValueFilter.ALL)
        .concat(initialState?.genres || [])
        .sort(),
    ]),
  ];

  const closeModalWindow = useCallback(() => {
    setIsOpenModal(false);
    setGenreIsOpen(false);
    setStateForm(initState);
    document.body.style.overflow = 'auto';
  }, [setIsOpenModal]);

  const stopClosed = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>, clickedGenre: string) => {
    if (stateForm.genres.includes(clickedGenre)) {
      setStateForm((state) => ({
        ...state,
        genres: [...state.genres.filter((genre) => genre !== clickedGenre)],
      }));
    } else {
      setStateForm((state) => ({
        ...state,
        genres: [...state.genres, clickedGenre],
      }));
    }
  };

  const switchToDateType = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.type = 'date';
    setIsVisibleCalendar(true);
  };

  const switchToTextType = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.type = 'text';
    stateForm.release_date ? (e.target.value = String(stateForm.release_date)) : '';
    setIsVisibleCalendar(false);
  };

  const completeAddMovie = async (values: IInitialStateMovieDescription) => {
    editMode
      ? await dispatch(
          editMovie({
            ...values,
            runtime: Number(values.runtime),
            vote_average: Number(values.vote_average),
          }),
        )
      : await dispatch(
          addMovie({
            ...values,
            runtime: Number(values.runtime),
            vote_average: Number(values.vote_average),
          }),
        );
    setIsOpenModal(false);
    setGenreIsOpen(false);
    document.body.style.overflow = 'auto';
    setSuccessModal(true);
    await dispatch(fetchMovieList());
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
        <Formik
          initialValues={stateForm}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            resetForm();
            setSubmitting(false);
            completeAddMovie(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styles.modalContent}>
                <div className={styles.modalInputsFields}>
                  <FormField
                    className={styles.modalTitle}
                    nameField="title"
                    placeholder="Movie title"
                    errors={errors}
                    touched={touched}
                    labelText="Title"
                  />
                  <div>
                    <FormField
                      className={styles.modalReleaseDate}
                      nameField="release_date"
                      placeholder="Select Date"
                      errors={errors}
                      touched={touched}
                      labelText="Release date"
                      onBlur={switchToTextType}
                      onFocus={switchToDateType}
                      typeField="text"
                    />
                    {isVisibleCalendar && (
                      <div className={styles.modalReleaseDateIconWrapper}>
                        <FontAwesomeIcon icon={faCalendarDays} className={styles.iconCalendar} />
                      </div>
                    )}
                  </div>

                  <FormField
                    className={styles.modalMovieUrl}
                    nameField="poster_path"
                    placeholder="htpps://"
                    errors={errors}
                    touched={touched}
                    labelText="Movie url"
                  />
                  <FormField
                    className={styles.modalRating}
                    nameField="vote_average"
                    placeholder="7.8"
                    errors={errors}
                    touched={touched}
                    labelText="Rating"
                  />
                  <div className={styles.modalGenre}>
                    <FieldArray name="genres">
                      {(fieldProps) => (
                        <MultipleDropdown
                          title="Select Genre"
                          isDropdownOpen={genreIsOpen}
                          setDropdownOpen={setGenreIsOpen}
                          handleValue={handleCheckbox}
                          choseGenres={stateForm.genres}
                          genresValue={genresValue}
                          fieldProps={fieldProps}
                          errors={errors}
                          touched={touched}
                        />
                      )}
                    </FieldArray>
                  </div>
                  <FormField
                    className={styles.modalRuntime}
                    nameField="runtime"
                    placeholder="minutes"
                    errors={errors}
                    touched={touched}
                    labelText="Runtime"
                  />
                </div>
                <Field name="overview">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <div className={styles.modalOverview}>
                      <label htmlFor="overview" className={styles.modalContentLabel}>
                        Overview
                      </label>
                      <textarea {...field} name="overview" placeholder="Movie description" />
                      {touched[field.name] && errors[field.name] && (
                        <div className={styles.textareaErrorWarning}>{errors[field.name]}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className={styles.modalBtn}>
                <Button
                  className={styles.modalBtnReset}
                  text="Reset"
                  onClick={closeModalWindow}
                  type={ButtonType.SUBMIT}
                />
                <Button className={styles.modalBtnSubmit} text="Submit" type={ButtonType.SUBMIT} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  ) : null;
};
