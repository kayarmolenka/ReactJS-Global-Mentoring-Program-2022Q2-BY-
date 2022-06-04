import { Divider, CountMovie, MovieList } from '../index';
import { MovieResultSearch } from '../../feature/containers/MovieResultSearch';

export const Main = () => {
  return (
    <main>
      <Divider />
      <MovieResultSearch />
      <CountMovie countMovie={10} />
      <MovieList />
    </main>
  );
};
