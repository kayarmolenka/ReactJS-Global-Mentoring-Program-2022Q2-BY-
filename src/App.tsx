import React from 'react';
import { Header, Footer, ErrorBoundary, Main } from './components';

import styles from './App.module.scss';

export const App = () => {
  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
