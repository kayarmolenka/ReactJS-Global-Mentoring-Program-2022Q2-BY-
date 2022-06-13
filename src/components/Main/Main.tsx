import { useState } from 'react';
import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers/MovieResultSearch';
import { date } from '../../mockDate/date';

export const Main = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  return (
    <main>
      <Divider />
      <MovieResultSearch />
      <CountMovie countMovie={date.length} />
      <MovieList
        movies={date}
        isShowEditModal={isShowEditModal}
        setIsShowEditModal={setIsShowEditModal}
      />
    </main>
  );
};
