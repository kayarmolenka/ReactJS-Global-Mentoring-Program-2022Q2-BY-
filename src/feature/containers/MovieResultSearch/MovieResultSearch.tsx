import { MouseEvent, useEffect, useState } from 'react';
import { MovieFilter, MovieSort } from '../../../components';
import {
  fetchFilteredMovieList,
  fetchMovieList,
  fetchSortedMovieList,
} from '../../../store/applications';
import { useAppDispatch } from '../../../store';
import { mapSortsName } from '../../../utils';
import { valueFilter, valueSortMovie } from '../../../constants';

import styles from './MovieResultSearch.module.scss';

export const MovieResultSearch = () => {
  const [chosenTypeSorting, setChosenTypeSorting] = useState(valueSortMovie[0]);
  const [activeGenre, setActiveGenre] = useState(valueFilter[0]);

  const dispatch = useAppDispatch();

  const onHandleGenre = async (e: MouseEvent<HTMLButtonElement>) => {
    setActiveGenre(e.currentTarget.innerHTML);

    if (e.currentTarget.innerHTML !== 'All') {
      await dispatch(
        fetchFilteredMovieList({
          activeGenre: e.currentTarget.innerHTML,
          sortBy: mapSortsName(chosenTypeSorting),
        }),
      );
      return;
    }
    await dispatch(fetchMovieList({ sortBy: mapSortsName(chosenTypeSorting) }));
  };

  useEffect(() => {
    if (chosenTypeSorting && activeGenre !== valueSortMovie[0]) {
      dispatch(
        fetchSortedMovieList({ sortBy: mapSortsName(chosenTypeSorting), activeGenre: activeGenre }),
      );
    }
    if (chosenTypeSorting) {
      dispatch(fetchMovieList({ sortBy: mapSortsName(chosenTypeSorting) }));
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
