import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderComponent } from './components';
import { DescriptionMovie } from '../DescriptionMovie';
import { IMovieList } from '../../models';
import { DEFAULT_SRC } from '../../constants';

interface IHeaderProps {
  activeMovieDescription: IMovieList;
}
export const Header = (props: IHeaderProps) => {
  const { activeMovieDescription } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [srcImg, setSrcImg] = useState(
    activeMovieDescription.poster_path ? activeMovieDescription.poster_path : DEFAULT_SRC,
  );

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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderComponent
            isOpenModal={isOpenModal}
            isSuccessModal={isSuccessModal}
            setSuccessModal={setSuccessModal}
            setIsOpenModal={setIsOpenModal}
            addMovieHandle={addMovieHandle}
          />
        }
      />
      <Route
        path="movie:id"
        element={
          <DescriptionMovie
            poster={srcImg}
            activeMovieDescription={activeMovieDescription}
            handleErrorImage={handleErrorImage}
          />
        }
      />
    </Routes>
  );
};
