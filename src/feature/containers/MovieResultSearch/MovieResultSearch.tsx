import { useEffect, useState } from 'react';
import { MovieFilter, MovieSort } from '../../../components';
import { fetchSortedMovieList } from '../../../store/applications';
import { useAppDispatch } from '../../../store';

import styles from './MovieResultSearch.module.scss';

const mapSortsName = (typeSort: string) => {
  if (typeSort === 'Release date') {
    return 'release_date';
  }
  if (typeSort === 'Genre') {
    return 'genres';
  }

  return 'vote_average';
};

export const MovieResultSearch = () => {
  const [chosenTypeSorting, setChosenTypeSorting] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chosenTypeSorting) {
      dispatch(fetchSortedMovieList(mapSortsName(chosenTypeSorting)));
    }
  }, [chosenTypeSorting, dispatch]);

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter />
      <MovieSort
        chosenTypeSorting={chosenTypeSorting}
        setChosenTypeSorting={setChosenTypeSorting}
      />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
