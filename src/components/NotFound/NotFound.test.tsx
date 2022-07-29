import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('should return NotFound text', () => {
    render(<NotFound />);

    expect(screen.getByText('NotFound')).toBeInTheDocument();
  });
});
