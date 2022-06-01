import { Divider } from '../Divider';
import { MovieResultSearch } from '../../feature/containers/MovieResultSearch';
import { CountMovie } from '../CountMovie';
import { MovieList } from '../MovieList';

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
