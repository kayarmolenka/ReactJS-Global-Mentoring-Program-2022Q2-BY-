import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers/MovieResultSearch';
import { ChangeEvent, useState } from 'react';
import { valueSortMovie } from '../../constants';
import { sortMovies } from '../../utils/sort';

export const Main = () => {
  const [activeSortType, setActiveSortType] = useState(valueSortMovie[0]);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveSortType(e.target.value);
    sortMovies(activeSortType);
  };

  return (
    <main>
      <Divider />
      <MovieResultSearch activeSortType={activeSortType} handleSort={handleSort} />
      <CountMovie countMovie={10} />
      <MovieList />
    </main>
  );
};
