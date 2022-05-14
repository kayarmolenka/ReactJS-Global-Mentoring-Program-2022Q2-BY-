import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './style.scss';

const rootElementNode = document.getElementById('root');

if (rootElementNode) {
  const root = createRoot(rootElementNode);
  root.render(<App />);
}
