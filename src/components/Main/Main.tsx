import { MouseEvent, useState } from 'react';
import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers';
import { date } from '../../mockDate/date';

export const Main = ({
  handleMovieCard,
}: {
  handleMovieCard: (e: MouseEvent<HTMLDivElement>) => void;
}) => {
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
        handleMovieCard={handleMovieCard}
      />
    </main>
  );
};
