import { useCallback, useState } from 'react';
import { HeaderComponent } from './components';
import { DescriptionMovie } from '../DescriptionMovie';
import { MockData } from '../../mockDate/date';

interface IHeaderProps {
  activeMovieDescription: MockData;
  handleMovieDescription: () => void;
}
export const Header = (props: IHeaderProps) => {
  const { activeMovieDescription, handleMovieDescription } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const { genre, poster, title, releaseDate, rating, runtime, overview } = activeMovieDescription;

  const handleSearchIcon = useCallback(() => {
    handleMovieDescription();
  }, [activeMovieDescription]);

  const addMovieHandle = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  return !!activeMovieDescription.id ? (
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
