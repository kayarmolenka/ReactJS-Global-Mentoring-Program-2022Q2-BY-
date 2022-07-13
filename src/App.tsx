import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header, Footer, ErrorBoundary, Main, NotFound } from './components';
import { INIT_STATE } from './constants';
import { movieListSelector } from './store';

import styles from './App.module.scss';

export const App = () => {
  const [activeMovieDescription, setActiveMovieDescription] = useState(INIT_STATE);
  const [activeMovieId, setActiveMovieId] = useState<number | null>(null);

  const movies = useSelector(movieListSelector);

  const handleMovieCard = (id: number) => {
    setActiveMovieId(id);
    const [description] = movies.filter((movie) => movie.id === id) || INIT_STATE;
    setActiveMovieDescription(description);
  };

  useEffect(() => {
    if (activeMovieId) {
      handleMovieCard(activeMovieId);
    }
  }, [movies]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route
            path="/search/*"
            element={
              <Fragment>
                <div className={styles.app}>
                  <Header activeMovieDescription={activeMovieDescription || {}} />
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
