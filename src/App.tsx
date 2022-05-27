import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';

import { Footer } from './components/Footer';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Main } from './components/Main';

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
