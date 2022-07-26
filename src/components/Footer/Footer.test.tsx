import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
