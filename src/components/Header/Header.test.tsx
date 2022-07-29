import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { TestWrapper } from '../../utils/TestWrapper';

describe('Header', () => {
  it('should return HeaderComponent after moved to "/" path', () => {
    render(<TestWrapper Component={<Header />} />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
