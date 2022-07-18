import { MouseEvent, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { MovieFilter, MovieSort } from '../../../components';
import { changeFilter, fetchMovieList, setGenre } from '../../../store/thunks';
import {
  getActiveGenreSelector,
  getActiveSortingTypeSelector,
  useAppDispatch,
} from '../../../store';
import { mapSortsName } from '../../../utils';

import styles from './MovieResultSearch.module.scss';

export const MovieResultSearch = () => {
  const dispatch = useAppDispatch();
  const activeGenre = useSelector(getActiveGenreSelector);
  const chosenTypeSorting = useSelector(getActiveSortingTypeSelector);

  const handleSortType = async (e: SyntheticEvent<HTMLSelectElement>) => {
    dispatch(changeFilter(mapSortsName(e.currentTarget.value)));
    await dispatch(fetchMovieList());
  };

  const handleGenre = async (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(setGenre(e.currentTarget.innerHTML));
    await dispatch(fetchMovieList());
  };

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter activeGenre={activeGenre} onHandleGenre={handleGenre} />
      <MovieSort chosenTypeSorting={chosenTypeSorting} onHandleSortType={handleSortType} />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
