import { MouseEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
import { MovieFilter, MovieSort } from '../../../components';
import { changeFilter, fetchMovieList, setGenre } from '../../../store/thunks';
import { useAppDispatch } from '../../../store';
import { mapSortsName } from '../../../utils';

import styles from './MovieResultSearch.module.scss';

interface IMovieResultSearchProps {
  activeGenre: string;
  chosenTypeSorting: string;
  offset: number;
}
export const MovieResultSearch = (props: IMovieResultSearchProps) => {
  const { chosenTypeSorting, activeGenre } = props;
  const dispatch = useAppDispatch();
  const [, setSearchParams] = useSearchParams();

  const handleSortType = async (e: SelectChangeEvent) => {
    setSearchParams({ sortBy: mapSortsName(e.target.value) });
    dispatch(changeFilter(mapSortsName(e.target.value)));
  };

  const handleGenre = async (e: MouseEvent<HTMLButtonElement>) => {
    setSearchParams({ filter: e.currentTarget.innerHTML });
    dispatch(setGenre(e.currentTarget.innerHTML));
  };

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [activeGenre, chosenTypeSorting]);

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter activeGenre={activeGenre} onHandleGenre={handleGenre} />
      <MovieSort chosenTypeSorting={chosenTypeSorting} onHandleSortType={handleSortType} />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
