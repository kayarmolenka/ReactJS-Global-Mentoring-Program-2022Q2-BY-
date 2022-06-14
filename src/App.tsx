import { MouseEvent, useState } from 'react';
import { Header, Footer, ErrorBoundary, Main } from './components';

import styles from './App.module.scss';

export const App = () => {
  const [activeMovieDescriptionId, setActiveMovieDescriptionId] = useState('');
  const [isShowDescriptionMovie, setIsShowDescriptionMovie] = useState(false);

  const handleMovieCard = (e: MouseEvent<HTMLDivElement>) => {
    setActiveMovieDescriptionId(e.currentTarget.id);
    setIsShowDescriptionMovie(true);
  };

  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <Header
          activeMovieDescriptionId={activeMovieDescriptionId}
          isShowDescriptionMovie={isShowDescriptionMovie}
          setIsShowDescriptionMovie={setIsShowDescriptionMovie}
        />
        <Main handleMovieCard={handleMovieCard} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
