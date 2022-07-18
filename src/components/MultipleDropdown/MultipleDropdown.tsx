import { ChangeEvent, useEffect } from 'react';
import { FieldArrayRenderProps } from 'formik';
import { FormikErrors, FormikTouched } from 'formik/dist/types';
import { faCaretDown, faCaretUp, faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickOutside } from '../../hooks';
import { IMovieList } from '../../models';

import styles from './MultipleDropdown.module.scss';

interface IDropdownProps {
  title: string;
  isDropdownOpen: boolean;
  setDropdownOpen: (params: boolean) => void;
  handleValue: (e: ChangeEvent<HTMLInputElement>, clickedGenre: string) => void;
  choseGenres: string[];
  genresValue: string[];
  fieldProps: FieldArrayRenderProps;
  errors: FormikErrors<IMovieList>;
  touched: FormikTouched<IMovieList>;
}

export const MultipleDropdown = (props: IDropdownProps) => {
  const {
    title,
    isDropdownOpen,
    setDropdownOpen,
    choseGenres,
    handleValue,
    genresValue,
    errors,
    touched,
    fieldProps,
  } = props;
  const { form } = fieldProps;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const changeValue = (e: ChangeEvent<HTMLInputElement>, clickedGenre: string) => {
    handleValue(e, clickedGenre);
  };

  useEffect(() => {
    form.setFieldValue('genres', choseGenres);
  }, [choseGenres]);

  return (
    <>
      <label className={styles.modalLabel}>Genre</label>
      <div ref={domNode}>
        <button type="button" className={styles.title} onClick={toggleDropdown}>
          {!choseGenres.length ? (
            title
          ) : (
            <div className={styles.wrapperListTags}>
              <ul className={styles.listTags}>{choseGenres.join()}</ul>
            </div>
          )}
        </button>
        <div className={styles.arrowIcon}>
          {isDropdownOpen ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </div>
        {errors.genres && touched.genres ? (
          <div className={styles.genreValidationWarning}>{errors.genres}</div>
        ) : null}
        {isDropdownOpen ? (
          <div>
            <div className={styles.multipleDropdownModal}>
              {genresValue.map((genre) => (
                <div key={genre} className={styles.row}>
                  <input
                    name={`${genre}`}
                    type="checkbox"
                    id={genre}
                    className={styles.input}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e, genre)}
                    checked={choseGenres.includes(genre)}
                  />
                  <label htmlFor={`${genre}`} className={styles.option}>
                    {choseGenres.includes(genre) && (
                      <div className={styles.wrapperIcons}>
                        <FontAwesomeIcon icon={faSquare} className={styles.faSquare} />
                        <FontAwesomeIcon icon={faSquareCheck} className={styles.checkboxIcon} />
                      </div>
                    )}
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
