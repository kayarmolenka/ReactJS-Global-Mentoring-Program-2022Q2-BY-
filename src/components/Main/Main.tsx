import { useState } from 'react';
import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers';
import { date } from '../../mockDate/date';

interface IMainProps {
  handleMovieCard: (id: number) => void;
}

export const Main = (props: IMainProps) => {
  const { handleMovieCard } = props;

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
