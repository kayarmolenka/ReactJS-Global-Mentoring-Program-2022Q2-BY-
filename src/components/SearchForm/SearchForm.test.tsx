import { render } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
  });
});
