import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from './Main';
import { Provider } from 'react-redux';
import { createStore } from '../../store';

describe('Main', () => {
  const handleMovieCard = jest.fn();

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <Main handleMovieCard={handleMovieCard} />
        </MemoryRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
