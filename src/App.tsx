import { useState } from 'react';
import { Header, Footer, ErrorBoundary, Main } from './components';
import { INIT_STATE } from './constants';
import { date } from './mockDate/date';

import styles from './App.module.scss';

export const App = () => {
  const [activeMovieDescription, setActiveMovieDescription] = useState(INIT_STATE);

  const handleMovieCard = (id: number) => {
    const [description] = date.filter((movie) => movie.id === id) || INIT_STATE;
    console.log(description);
    setActiveMovieDescription(description);
  };

  const handleMovieDescription = () => {
    setActiveMovieDescription(INIT_STATE);
  };

  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <Header
          activeMovieDescription={activeMovieDescription}
          handleMovieDescription={handleMovieDescription}
        />
        <Main handleMovieCard={handleMovieCard} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
