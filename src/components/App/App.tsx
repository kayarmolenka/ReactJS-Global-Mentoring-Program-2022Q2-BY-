import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate, useParams } from 'react-router-dom';
import { Header, Footer, ErrorBoundary, Main, NotFound } from '../index';
import { fetchMovieById, movieListSelector, useAppDispatch } from '../../store';
import { convertIdFromStringToNumber } from '../../utils';

import styles from './App.module.scss';

const App = () => {
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
        <div className={styles.app}>
          <Header />
          <Main handleMovieCard={handleMovieCard} />
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
