import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { store } from './store';

import './components/App/App.module.scss';

const rootElementNode = document.getElementById('root');
console.log(window);
if (rootElementNode) {
  const root = createRoot(rootElementNode);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
