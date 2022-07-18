import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  fetchMovieListWithParams,
  getActiveGenreSelector,
  getActiveSortingTypeSelector,
  useAppDispatch,
} from '../../store';
import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers';
import { movieListSelector } from '../../store/selectors';
import { useSearchParams } from 'react-router-dom';

interface IMainProps {
  handleMovieCard: (id: number) => void;
}

export const Main = (props: IMainProps) => {
  const { handleMovieCard } = props;
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const dispatch = useAppDispatch();
  const movies = useSelector(movieListSelector);
  const activeGenre = useSelector(getActiveGenreSelector);
  const chosenTypeSorting = useSelector(getActiveSortingTypeSelector);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchMovieListWithParams({
        sortBy: searchParams.get('sortBy') || chosenTypeSorting,
        filter: searchParams.get('filter') || activeGenre,
      }),
    );
  }, [dispatch]);

  return (
    <main>
      <Divider />
      <MovieResultSearch />
      <CountMovie countMovie={movies.length} />
      <MovieList
        movies={movies}
        isShowEditModal={isShowEditModal}
        setIsShowEditModal={setIsShowEditModal}
        handleMovieCard={handleMovieCard}
      />
    </main>
  );
};
