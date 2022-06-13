import { Button } from '../Button';
import { ButtonType } from '../../models';

import styles from './SearchForm.module.scss';

export const SearchForm = () => {
  const searchHandle = () => {
    console.log('searchHandle');
  };

  return (
    <div className={styles.searchFormWrapper}>
      <h1>Find your movie</h1>
      <div className={styles.searchForm}>
        <input
          placeholder="What do you want to watch?"
          className={styles.searchFormInput}
          type="text"
        />
        <Button
          text="Search"
          onClick={searchHandle}
          type={ButtonType.SUBMIT}
          className={styles.searchFormBtn}
        />
      </div>
    </div>
  );
};
