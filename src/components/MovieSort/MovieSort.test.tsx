import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  it('should call onHandleSortType after chose other genre from dropdown', async () => {
    render(
      <TestWrapper
        Component={
          <MovieSort chosenTypeSorting={valueSortMovie[0]} onHandleSortType={onHandleSortType} />
        }
      />,
    );

    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'Rating' },
    });
    expect(screen.getByText('Rating'));

    await waitFor(() => {
      expect((screen.getByText('Rating') as HTMLOptionElement).selected).toBeTruthy();

      expect(onHandleSortType).toHaveBeenCalled();
    });
  });
});
