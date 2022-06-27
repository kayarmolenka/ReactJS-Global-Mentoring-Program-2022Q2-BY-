import { useCallback, useEffect, useState } from 'react';
import { HeaderComponent } from './components';
import { DescriptionMovie } from '../DescriptionMovie';
import { IMovieList } from '../../models';
import { DEFAULT_SRC } from '../../constants';

interface IHeaderProps {
  activeMovieDescription: IMovieList;
  handleMovieDescription: () => void;
}
export const Header = (props: IHeaderProps) => {
  const { activeMovieDescription, handleMovieDescription } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const { genres, poster_path, title, release_date, vote_average, runtime, overview } =
    activeMovieDescription;
  const [srcImg, setSrcImg] = useState(poster_path ? poster_path : DEFAULT_SRC);

  const handleSearchIcon = useCallback(() => {
    handleMovieDescription();
  }, [activeMovieDescription]);

  const addMovieHandle = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleErrorImage = () => {
    setSrcImg(DEFAULT_SRC);
  };

  useEffect(() => {
    if (activeMovieDescription.id) {
      setSrcImg(poster_path);
    }
  }, [activeMovieDescription, poster_path]);

  return !!activeMovieDescription.id ? (
    <DescriptionMovie
      title={title}
      rating={vote_average}
      overview={overview}
      genres={genres}
      runtime={runtime}
      poster={srcImg}
      realiseDate={release_date}
      handleSearchIcon={handleSearchIcon}
      handleErrorImage={handleErrorImage}
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
