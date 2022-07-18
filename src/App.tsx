import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header, Footer, ErrorBoundary, Main } from './components';
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

  const handleMovieDescription = () => {
    setActiveMovieDescription(INIT_STATE);
  };

  useEffect(() => {
    if (activeMovieId) {
      handleMovieCard(activeMovieId);
    }
  }, [movies]);

  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <Header
          activeMovieDescription={activeMovieDescription || {}}
          handleMovieDescription={handleMovieDescription}
        />
        <Main handleMovieCard={handleMovieCard} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
