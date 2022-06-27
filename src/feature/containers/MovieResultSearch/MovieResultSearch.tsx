import { MouseEvent, useEffect, useState } from 'react';
import { MovieFilter, MovieSort } from '../../../components';
import {
  fetchFilteredMovieList,
  fetchMovieList,
  fetchSortedMovieList,
} from '../../../store/applications';
import { useAppDispatch } from '../../../store';
import { mapSortsName } from '../../../utils';
import { valueFilter } from '../../../constants';

import styles from './MovieResultSearch.module.scss';

export const MovieResultSearch = () => {
  const [chosenTypeSorting, setChosenTypeSorting] = useState('');
  const [activeGenre, setActiveGenre] = useState(valueFilter[0]);

  const dispatch = useAppDispatch();

  const onHandleGenre = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveGenre(e.currentTarget.innerHTML);

    if (e.currentTarget.innerHTML !== 'All') {
      dispatch(fetchFilteredMovieList(e.currentTarget.innerHTML));
      return;
    }
    dispatch(fetchMovieList());
  };

  useEffect(() => {
    if (chosenTypeSorting) {
      dispatch(fetchSortedMovieList(mapSortsName(chosenTypeSorting)));
    }
  }, [chosenTypeSorting, dispatch]);

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter activeGenre={activeGenre} onHandleGenre={onHandleGenre} />
      <MovieSort
        chosenTypeSorting={chosenTypeSorting}
        setChosenTypeSorting={setChosenTypeSorting}
      />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
