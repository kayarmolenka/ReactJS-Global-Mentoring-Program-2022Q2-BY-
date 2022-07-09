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
  const [srcImg, setSrcImg] = useState(
    activeMovieDescription.poster_path ? activeMovieDescription.poster_path : DEFAULT_SRC,
  );

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
      setSrcImg(activeMovieDescription.poster_path);
    }
  }, [activeMovieDescription, activeMovieDescription.poster_path]);

  return !!activeMovieDescription.id ? (
    <DescriptionMovie
      poster={srcImg}
      activeMovieDescription={activeMovieDescription}
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
