import { ChangeEvent, useState } from 'react';
import { faCaretDown, faCaretUp, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { valueFilter } from '../../constants';

import styles from './MultipleDropdown.module.scss';

interface IDropdownProps {
  title: string;
  isDropdownOpen: boolean;
  setDropdownOpen: (params: boolean) => void;
  initialValue: string[];
  handleValue: (params: string[]) => void;
}

export const MultipleDropdown = (props: IDropdownProps) => {
  const { title, isDropdownOpen, setDropdownOpen, initialValue, handleValue } = props;
  const [choseGenre, setChoseGenre] = useState<string[]>(initialValue);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const clickedGenre = e.target.name;

    if (choseGenre.includes(clickedGenre)) {
      setChoseGenre([...choseGenre.filter((genre) => genre !== clickedGenre)]);
      handleValue(choseGenre);
    } else {
      setChoseGenre([...choseGenre, clickedGenre]);
      handleValue(choseGenre);
    }
  };

  return (
    <>
      <label className={styles.modalLabel}>Genre</label>
      <button className={styles.title} onClick={toggleDropdown}>
        {title}
      </button>
      <div className={styles.arrowIcon}>
        {isDropdownOpen ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      {isDropdownOpen ? (
        <div className={styles.multipleDropdownModal}>
          {valueFilter
            .filter((genre) => genre !== 'All')
            .map((genre) => (
              <div key={genre}>
                <input
                  type="checkbox"
                  name={genre}
                  id={genre}
                  className={styles.input}
                  checked={choseGenre.includes(genre)}
                  onChange={handleCheckbox}
                />
                <label htmlFor={genre} className={styles.option}>
                  {choseGenre.includes(genre) && (
                    <FontAwesomeIcon icon={faSquareCheck} className={styles.checkboxIcon} />
                  )}
                  {genre}
                </label>
              </div>
            ))}
        </div>
      ) : null}
    </>
  );
};
