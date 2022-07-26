import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DescriptionMovie } from './DescriptionMovie';
import { IMovieList } from '../../models';

const description: IMovieList = {
  budget: 230000000,
  genres: ['Drama'],
  id: 1,
  overview: 'It is very interesting movie',
  poster_path: 'www.picture.com',
  release_date: '2022-07-08',
  revenue: 23000,
  runtime: 123,
  tagline: 'Movie',
  title: 'Terminal',
  vote_average: 9.8,
  vote_count: 25,
};

describe('DescriptionMovie', () => {
  const handleErrorImage = jest.fn();

  it('should return "123 min" runtime', () => {
    render(
      <MemoryRouter>
        <DescriptionMovie
          poster="Poster"
          activeMovieDescription={description}
          handleErrorImage={handleErrorImage}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('123 min')).toBeInTheDocument();
  });

  it('should return "No Data" runtime because runtime equal 0', () => {
    description.runtime = 0;
    render(
      <MemoryRouter>
        <DescriptionMovie
          poster="Poster"
          activeMovieDescription={description}
          handleErrorImage={handleErrorImage}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('No Data')).toBeInTheDocument();
    description.runtime = 123;
  });
});
