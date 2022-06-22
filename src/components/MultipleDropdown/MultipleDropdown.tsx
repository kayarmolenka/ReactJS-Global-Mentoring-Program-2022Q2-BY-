import { ChangeEvent } from 'react';
import { faCaretDown, faCaretUp, faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { valueFilter } from '../../constants';
import { useClickOutside } from '../../hooks';

import styles from './MultipleDropdown.module.scss';

interface IDropdownProps {
  title: string;
  isDropdownOpen: boolean;
  setDropdownOpen: (params: boolean) => void;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  choseGenres: string[];
  isShowValidationError: boolean;
  setIsShowValidationError: (params: boolean) => void;
}

export const MultipleDropdown = (props: IDropdownProps) => {
  const {
    title,
    isDropdownOpen,
    setDropdownOpen,
    choseGenres,
    handleValue,
    isShowValidationError,
    setIsShowValidationError,
  } = props;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setIsShowValidationError(false);
  };

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      <label className={styles.modalLabel}>Genre</label>
      <div ref={domNode}>
        <button className={styles.title} onClick={toggleDropdown}>
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
        {isShowValidationError && (
          <span className={styles.genreValidationWarning}>
            Select at least one genre to proceed
          </span>
        )}
        {isDropdownOpen ? (
          <div className={styles.multipleDropdownModal}>
            {valueFilter
              .filter((genre) => genre !== 'All')
              .map((genre) => (
                <div key={genre} className={styles.row}>
                  <input
                    type="checkbox"
                    name={genre}
                    id={genre}
                    className={styles.input}
                    checked={choseGenres.includes(genre)}
                    onChange={handleValue}
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
        ) : null}
      </div>
    </>
  );
};
