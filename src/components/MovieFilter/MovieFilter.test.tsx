import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { createStore } from '../../store';
import { valueFilter } from '../../constants';
import { MovieFilter } from './MovieFilter';

const onHandleGenreType = jest.fn();

describe('MovieFilter', () => {
  it('should render MovieFilter component with filters', () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <MovieFilter activeGenre={valueFilter[0]} onHandleGenre={onHandleGenreType} />
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Documentary')).toBeInTheDocument();
    expect(screen.getByText('Comedy')).toBeInTheDocument();
    expect(screen.getByText('Horror')).toBeInTheDocument();
    expect(screen.getByText('Crime')).toBeInTheDocument();
  });

  it('should call onHandleGenreType after click Comedy button', () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <MovieFilter activeGenre={valueFilter[0]} onHandleGenre={onHandleGenreType} />
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByText('Comedy'));
    expect(onHandleGenreType).toBeCalled();
  });
});
