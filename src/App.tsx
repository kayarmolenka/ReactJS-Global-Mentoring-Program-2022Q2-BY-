import React from 'react';
import { TestComponent } from './components/TestComponent';

export const App = () => {
  return (
    <div className="container">
      <h1>Hello React!!!!</h1>
      <TestComponent listItems={['item1', 'item2']} />
    </div>
  );
};
