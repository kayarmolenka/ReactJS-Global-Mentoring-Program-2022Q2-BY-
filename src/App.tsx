import React from 'react';
import { TestComponent } from './components/TestComponent';

import styles from './style.module.scss';

export const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello React!!!!</h1>
      <TestComponent listItems={['item1', 'item2']} />
    </div>
  );
};
