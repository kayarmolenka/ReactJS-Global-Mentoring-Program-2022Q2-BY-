import { useCallback, useEffect, useState } from 'react';
import { HeaderComponent } from './components';
import { DescriptionMovie } from '../DescriptionMovie';
import { date, MockData } from '../../mockDate/date';

interface IHeaderProps {
  activeMovieDescriptionId: string;
  isShowDescriptionMovie: boolean;
  setIsShowDescriptionMovie: (param: boolean) => void;
}
export const Header = (props: IHeaderProps) => {
  const { activeMovieDescriptionId, isShowDescriptionMovie, setIsShowDescriptionMovie } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const initState = {
    id: 0,
    genre: '',
    poster: '',
    movieUrl: '',
    rating: '',
    title: '',
    releaseDate: 0,
    overview: '',
    runtime: '',
  };
  const [movieForDescription, setMovieForDescription] = useState<MockData>(initState);
  const { genre, poster, title, releaseDate, rating, runtime, overview } = movieForDescription;

  const handleSearchIcon = useCallback(() => {
    setIsShowDescriptionMovie(false);
  }, [isShowDescriptionMovie, setIsShowDescriptionMovie]);

  const addMovieHandle = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const getDescriptionMovieData = useCallback(() => {
    const [active] = date.filter((movie) => movie.title === activeMovieDescriptionId);
    setMovieForDescription(active);
  }, [activeMovieDescriptionId]);

  useEffect(() => {
    if (isShowDescriptionMovie) {
      getDescriptionMovieData();
    }
  }, [setMovieForDescription, activeMovieDescriptionId, isShowDescriptionMovie]);

  return isShowDescriptionMovie ? (
    <DescriptionMovie
      title={title}
      rating={rating}
      overview={overview}
      genre={genre}
      runtime={runtime}
      poster={poster}
      realiseDate={releaseDate}
      handleSearchIcon={handleSearchIcon}
    />
  ) : (
    <HeaderComponent
      isOpenModal={isOpenModal}
      isSuccessModal={isSuccessModal}
      setSuccessModal={setSuccessModal}
      setIsOpenModal={setIsOpenModal}
      addMovieHandle={addMovieHandle}
    />
  );
};
