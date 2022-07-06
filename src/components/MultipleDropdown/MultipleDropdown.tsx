import { ChangeEvent } from 'react';
import { faCaretDown, faCaretUp, faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickOutside } from '../../hooks';

import styles from './MultipleDropdown.module.scss';
import { FieldProps } from 'formik/dist/Field';
import { FormikErrors, FormikTouched } from 'formik/dist/types';
import { IMovieList } from '../../models';

interface IDropdownProps {
  title: string;
  isDropdownOpen: boolean;
  setDropdownOpen: (params: boolean) => void;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  choseGenres: string[];
  genresValue: string[];
  fieldProps: FieldProps;
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

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const { form } = fieldProps;

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const genre = e.target.name;
    const chosenGenres = genresValue.includes(genre)
      ? genresValue.filter((g) => g !== genre)
      : [...genresValue, genre];
    form.setFieldValue('genres', chosenGenres);
    handleValue(e);
  };

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
                    type="checkbox"
                    name={genre}
                    id={genre}
                    className={styles.input}
                    checked={choseGenres.includes(genre)}
                    onChange={changeValue}
                  />
                  <label htmlFor={genre} className={styles.option}>
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
