import { MouseEvent, SyntheticEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieFilter, MovieSort } from '../../../components';
import { changeFilter, fetchMovieListWithParams, setGenre } from '../../../store/thunks';
import { useAppDispatch } from '../../../store';
import { mapSortsName } from '../../../utils';

import styles from './MovieResultSearch.module.scss';

interface IMovieResultSearchProps {
  activeGenre: string;
  chosenTypeSorting: string;
}
export const MovieResultSearch = (props: IMovieResultSearchProps) => {
  const { chosenTypeSorting, activeGenre } = props;
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortType = async (e: SyntheticEvent<HTMLSelectElement>) => {
    setSearchParams({ sortBy: mapSortsName(e.currentTarget.value) });
    dispatch(changeFilter(mapSortsName(e.currentTarget.value)));
  };

  const handleGenre = async (e: MouseEvent<HTMLButtonElement>) => {
    setSearchParams({ filter: e.currentTarget.innerHTML });
    dispatch(setGenre(e.currentTarget.innerHTML));
  };

  useEffect(() => {
    dispatch(
      fetchMovieListWithParams({
        sortBy: searchParams.get('sortBy') || chosenTypeSorting,
        filter: searchParams.get('filter') || activeGenre,
      }),
    );
  }, [activeGenre, chosenTypeSorting]);

  return (
    <div className={styles.movieResultSearch}>
      <MovieFilter activeGenre={activeGenre} onHandleGenre={handleGenre} />
      <MovieSort chosenTypeSorting={chosenTypeSorting} onHandleSortType={handleSortType} />
      <div className={styles.movieResultSearchBorderLine} />
    </div>
  );
};
