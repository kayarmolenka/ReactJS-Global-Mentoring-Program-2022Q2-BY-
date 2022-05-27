import styles from './SearchForm.module.scss';
import { Button } from '../Button';

export const SearchForm = () => {
  const searchHandle = () => {
    console.log('searchHandle');
  };

  return (
    <>
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
          type="submit"
          className={styles.searchFormBtn}
        />
      </div>
    </>
  );
};
