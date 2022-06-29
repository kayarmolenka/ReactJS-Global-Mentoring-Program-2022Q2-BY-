import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers';
import { useSelector } from 'react-redux';
import { movieListSelector } from '../../store/selectors';
import { fetchMovieList } from '../../store/applications';
import { valueSortMovie } from '../../constants';
import { mapSortsName } from '../../utils';

interface IMainProps {
  handleMovieCard: (id: number) => void;
}

export const Main = (props: IMainProps) => {
  const { handleMovieCard } = props;
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const dispatch = useAppDispatch();
  const movies = useSelector(movieListSelector);

  useEffect(() => {
    dispatch(fetchMovieList({ sortBy: mapSortsName(valueSortMovie[0]) }));
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
