import React from 'react';

import styles from './TestComponent.module.scss';

export const TestComponent = ({ listItems }: { listItems: string[] }) => {
  return (
    <>
      <div className={styles['test-try']}>Test Component</div>
      <ul>
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
