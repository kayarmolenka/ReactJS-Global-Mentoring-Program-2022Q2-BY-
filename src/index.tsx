import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';

import './App.module.scss';

const rootElementNode = document.getElementById('root');

if (rootElementNode) {
  const root = createRoot(rootElementNode);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
