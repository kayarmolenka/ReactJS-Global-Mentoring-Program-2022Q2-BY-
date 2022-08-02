import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MovieResultSearch } from './MovieResultSearch';
import { createStore } from '../../../store';
import { useFetch } from '../../../hooks/useFetch';
import { valueFilter, valueSortMovie } from '../../../constants';
import { mapSortsName } from '../../../utils';

jest.mock('../../../hooks/useFetch', () => ({
  useFetch: jest.fn(),
}));

describe('MovieResultSearch', () => {
  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue(Promise.resolve([]));
  });

  afterEach(() => {
    (useFetch as jest.Mock).mockRestore();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={createStore()}>
          <MovieResultSearch
            activeGenre={valueFilter[0]}
            chosenTypeSorting={valueSortMovie[0]}
            offset={12}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call useFetch with filter equal Documentary after click on Documentary button', async () => {
    render(
      <MemoryRouter>
        <Provider store={createStore()}>
          <MovieResultSearch
            activeGenre={valueFilter[1]}
            chosenTypeSorting={mapSortsName(valueSortMovie[0])}
            offset={12}
          />
        </Provider>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText('Documentary'));

    await waitFor(() => {
      expect(useFetch as jest.Mock).toHaveBeenCalledWith(
        'http://localhost:4000/movies?sortBy=release_date&sortOrder=desc&offset=1&limit=12',
      );
    });
  });
});
