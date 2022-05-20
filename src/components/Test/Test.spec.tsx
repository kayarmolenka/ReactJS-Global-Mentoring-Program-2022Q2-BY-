import { render } from '@testing-library/react';
import React from 'react';
import { Test } from './Test';

describe('Test', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Test />);

    expect(asFragment()).toMatchSnapshot();
  });
});
