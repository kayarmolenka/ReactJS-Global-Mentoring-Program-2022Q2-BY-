import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestComponent } from './TestComponent';

describe('TestComponent', () => {
  it('should render item1', () => {
    const { asFragment } = render(<TestComponent listItems={['item1', 'item2']} />);

    expect(screen.getByText('item1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
