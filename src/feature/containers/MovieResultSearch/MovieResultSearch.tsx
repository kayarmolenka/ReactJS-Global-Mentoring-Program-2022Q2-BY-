import { MouseEvent, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { MovieFilter, MovieSort } from '../../../components';
import {
  changeFilter,
  fetchMovieList,
  fetchMovieListWithParams,
  setGenre,
} from '../../../store/thunks';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortType = async (e: SyntheticEvent<HTMLSelectElement>) => {
    setSearchParams({ sortBy: mapSortsName(e.currentTarget.value) });
    dispatch(changeFilter(mapSortsName(e.currentTarget.value)));

    await dispatch(
      fetchMovieListWithParams({
        sortBy: searchParams.get('sortBy') || chosenTypeSorting,
        filter: activeGenre,
      }),
    );
  };

  const handleGenre = async (e: MouseEvent<HTMLButtonElement>) => {
    setSearchParams({ filter: e.currentTarget.innerHTML });
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
