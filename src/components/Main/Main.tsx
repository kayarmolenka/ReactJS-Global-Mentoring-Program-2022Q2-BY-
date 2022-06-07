import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers/MovieResultSearch';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { valueFilter, valueSortMovie } from '../../constants';
import { sortMovies, filterMovies } from '../../utils';
import { date } from '../../mockDate/date';

export const Main = () => {
  const [activeSortType, setActiveSortType] = useState(valueSortMovie[0]);
  const [activeGenre, setActiveGenre] = useState(valueFilter[0]);
  const [listActiveMovies, setListActiveMovies] = useState(date);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveSortType(e.target.value);
    sortMovies(activeSortType, listActiveMovies);
  };

  const handleGenre = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveGenre(e.currentTarget.innerHTML);
    filterMovies(e.currentTarget.innerHTML, setListActiveMovies);
  };

  return (
    <main>
      <Divider />
      <MovieResultSearch
        activeSortType={activeSortType}
        handleSort={handleSort}
        activeGenre={activeGenre}
        handleGenre={handleGenre}
      />
      <CountMovie countMovie={listActiveMovies.length} />
      <MovieList
        movies={listActiveMovies}
        isShowEditModal={isShowEditModal}
        setIsShowEditModal={setIsShowEditModal}
      />
    </main>
  );
};
