import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  fetchMovieListWithParams,
  getActiveGenreSelector,
  getActiveSortingTypeSelector,
  useAppDispatch,
  movieListSelector,
  getCurrentOffsetSelector,
  setCurrentOffset,
} from '../../store';
import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers';

interface IMainProps {
  handleMovieCard: (id: number) => void;
}

export const Main = (props: IMainProps) => {
  const { handleMovieCard } = props;
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [fetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();
  const movies = useSelector(movieListSelector);
  const activeGenre = useSelector(getActiveGenreSelector);
  const chosenTypeSorting = useSelector(getActiveSortingTypeSelector);
  const offset = useSelector(getCurrentOffsetSelector);
  const [searchParams] = useSearchParams();

  const scrollHandler = (e: Event) => {
    const event = e.target as Document;
    if (
      event.documentElement.scrollHeight - (event.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
      dispatch(setCurrentOffset(offset + 12));
    }
  };

  useEffect(() => {
    if (fetching) {
      dispatch(
        fetchMovieListWithParams({
          sortBy: searchParams.get('sortBy') || chosenTypeSorting,
          filter: searchParams.get('filter') || activeGenre,
          page: offset + 12,
        }),
      );
      setFetching(false);
    }
  }, [dispatch, fetching, offset]);

  useEffect(() => {
    addEventListener('scroll', scrollHandler);

    return function () {
      removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <main>
      <Divider />
      <MovieResultSearch
        activeGenre={activeGenre}
        chosenTypeSorting={chosenTypeSorting}
        offset={offset}
      />
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
