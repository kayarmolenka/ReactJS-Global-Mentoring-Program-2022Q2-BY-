import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate, useParams } from 'react-router-dom';
import { Header, Footer, ErrorBoundary, Main, NotFound } from './components';
import { fetchMovieById, movieListSelector, useAppDispatch } from './store';
import { convertIdFromStringToNumber } from './utils';

import styles from './App.module.scss';

export const App = () => {
  const [activeMovieId, setActiveMovieId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const movies = useSelector(movieListSelector);
  const { '*': idMovie } = useParams();

  const handleMovieCard = (id: number) => {
    dispatch(fetchMovieById(id));
    setActiveMovieId(id);
  };

  useEffect(() => {
    if (activeMovieId) {
      handleMovieCard(activeMovieId);
    }
  }, [movies]);

  useEffect(() => {
    if (idMovie) {
      handleMovieCard(convertIdFromStringToNumber(idMovie));
    }
  }, [idMovie]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route
            path="search/*"
            element={
              <Fragment>
                <div className={styles.app}>
                  <Header />
                  <Main handleMovieCard={handleMovieCard} />
                  <Footer />
                </div>
              </Fragment>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
