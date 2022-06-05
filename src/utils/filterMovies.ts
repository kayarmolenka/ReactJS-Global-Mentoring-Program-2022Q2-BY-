import { date, MockData } from '../mockDate/date';

export const filterMovies = (
  activeGenre: string,
  setListActiveMovies: (param: MockData[]) => void,
) => {
  if (activeGenre === 'All') {
    setListActiveMovies(date);
  } else {
    const newActiveMoviesList = date.filter((movie) => movie.genre === activeGenre);
    setListActiveMovies(newActiveMoviesList);
  }
};
