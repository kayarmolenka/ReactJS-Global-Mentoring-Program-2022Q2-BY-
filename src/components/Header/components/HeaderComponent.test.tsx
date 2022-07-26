import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { HeaderComponent } from './HeaderComponent';
import { ADD_MOVIE_TEXT } from '../../../constants';
import { useFetch } from '../../../hooks/useFetch';
import { TestWrapper } from '../../../utils/TestWrapper';

const setSuccessModal = jest.fn();
const setIsOpenModal = jest.fn();
const addMovieHandle = jest.fn();

jest.mock('../../../hooks/useFetch', () => ({
  useFetch: jest.fn(),
}));

describe('HeaderComponent', () => {
  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue(Promise.resolve([]));
  });

  afterEach(() => {
    (useFetch as jest.Mock).mockRestore();
  });

  it('should render "Find your movie" header', () => {
    render(
      <TestWrapper
        Component={
          <HeaderComponent
            isOpenModal={false}
            isSuccessModal={false}
            setSuccessModal={setSuccessModal}
            setIsOpenModal={setIsOpenModal}
            addMovieHandle={addMovieHandle}
          />
        }
      />,
    );

    expect(screen.getByText('Find your movie')).toBeInTheDocument();
  });

  it('should render success modal when isSuccessModal equal true', () => {
    render(
      <TestWrapper
        Component={
          <HeaderComponent
            isOpenModal={false}
            isSuccessModal={true}
            setSuccessModal={setSuccessModal}
            setIsOpenModal={setIsOpenModal}
            addMovieHandle={addMovieHandle}
          />
        }
      />,
    );

    expect(
      screen.getByText('The movie has been added to database successfully'),
    ).toBeInTheDocument();
  });

  it('should call addMovieHandle after click addMovie button', () => {
    render(
      <TestWrapper
        Component={
          <HeaderComponent
            isOpenModal={false}
            isSuccessModal={true}
            setSuccessModal={setSuccessModal}
            setIsOpenModal={setIsOpenModal}
            addMovieHandle={addMovieHandle}
          />
        }
      />,
    );

    act(() => {
      fireEvent.click(screen.getByText(ADD_MOVIE_TEXT));
    });

    expect(addMovieHandle).toHaveBeenCalled();
  });

  it('should fill all form and submit form', async () => {
    render(
      <TestWrapper
        Component={
          <HeaderComponent
            isOpenModal={true}
            isSuccessModal={false}
            setSuccessModal={setSuccessModal}
            setIsOpenModal={setIsOpenModal}
            addMovieHandle={addMovieHandle}
          />
        }
      />,
    );

    fireEvent.click(screen.getByText(ADD_MOVIE_TEXT));

    expect(screen.getByText('Add Movie')).toBeInTheDocument();
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Movie title'), {
        target: { value: 'Marvel' },
      });

      fireEvent.change(screen.getByPlaceholderText('Select Date'), {
        target: { value: '06/09/2022' },
      });

      fireEvent.change(screen.getByPlaceholderText('htpps://'), {
        target: {
          value:
            'https://bipbap.ru/kartinki-dlya-srisovki/malenkie-kartinki-dlya-srisovki-39-foto.html',
        },
      });

      fireEvent.change(screen.getByPlaceholderText('7.8'), {
        target: { value: '9.9' },
      });

      fireEvent.change(screen.getByPlaceholderText('minutes'), {
        target: { value: '120' },
      });

      fireEvent.change(screen.getByPlaceholderText('Movie description'), {
        target: {
          value:
            'The franchise has been commercially successful and has generally received positive reviews. It has inspired other film and television studios to attempt to create',
        },
      });
    });

    fireEvent.click(screen.getByText('Select Genre'));

    fireEvent.click(screen.getByText('Comedy'));

    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(useFetch as jest.Mock).toHaveBeenNthCalledWith(1, 'http://localhost:4000/movies', {
        body: '{"title":"Marvel","release_date":"06/09/2022","genres":["Comedy"],"runtime":120,"overview":"The franchise has been commercially successful and has generally received positive reviews. It has inspired other film and television studios to attempt to create","poster_path":"https://bipbap.ru/kartinki-dlya-srisovki/malenkie-kartinki-dlya-srisovki-39-foto.html","vote_average":9.9}',
        headers: { 'content-type': 'application/json' },
        method: 'post',
      });
    });
  });
});
