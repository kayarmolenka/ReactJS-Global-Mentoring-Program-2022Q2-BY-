import React from 'react';

interface TestComponentProps {
  listItems: string[];
}

export const TestComponent = (props: TestComponentProps) => {
  const { listItems } = props;

  return (
    <>
      <div className="test-component">Test Component</div>
      <ul>
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
