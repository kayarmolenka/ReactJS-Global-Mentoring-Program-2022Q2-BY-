import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { IMovieList } from '../models';
import { createStore } from '../store';

const movieList: IMovieList[] = [
  {
    budget: 23000,
    genres: ['Drama', 'Comedy'],
    id: 123456789,
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 123333,
    runtime: 126,
    tagline: '',
    title: '',
    vote_average: 8.7,
    vote_count: 1900,
  },
];

const store = {
  application: {
    movieList: movieList,
    sortingType: 'Rating',
    activeGenre: 'All',
    activeDescriptionMovie: movieList[0],
    currentOffset: 1,
  },
};

interface ITestWrapper {
  Component: JSX.Element;
}

export const TestWrapper = (props: ITestWrapper) => {
  const { Component } = props;

  return (
    <Provider store={createStore(store)}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="*" element={Component} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};
