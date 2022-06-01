import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Main } from './components/Main';

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
