import { render, screen } from '@testing-library/react';
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

const handleErrorImage = jest.fn();

describe('DescriptionMovie', () => {
  afterEach(() => {
    handleErrorImage.mockRestore();
  });
  it('should return "123 min" runtime', () => {
    render(
      <DescriptionMovie
        poster="Poster"
        activeMovieDescription={description}
        handleErrorImage={handleErrorImage}
      />,
    );

    expect(screen.getByText('123 min')).toBeInTheDocument();
  });

  it('should return "No Data" runtime because runtime equal 0', () => {
    description.runtime = 0;
    render(
      <DescriptionMovie
        poster="Poster"
        activeMovieDescription={description}
        handleErrorImage={handleErrorImage}
      />,
    );

    expect(screen.getByText('123 min')).toBeInTheDocument();
    description.runtime = 123;
  });
});
