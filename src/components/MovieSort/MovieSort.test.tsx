import { render, screen } from '@testing-library/react';
import { MovieSort } from './MovieSort';
import { valueSortMovie } from '../../constants';
import { TestWrapper } from '../../utils/TestWrapper';

const onHandleSortType = jest.fn();

describe('MovieSort', () => {
  it('should render "SortBy" component', () => {
    render(
      <TestWrapper
        Component={
          <MovieSort chosenTypeSorting={valueSortMovie[0]} onHandleSortType={onHandleSortType} />
        }
      />,
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
