import { render, screen } from '@testing-library/react';
import { App } from './App';
import React from 'react';

describe('App', () => {
  it('should render Hello React', () => {
    render(<App />);
    expect(screen.getByText('Hello React!!!!')).toBeInTheDocument();
  });
});
