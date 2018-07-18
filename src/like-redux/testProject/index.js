import React from 'react';
import { render } from 'react-dom';

import Provider from '../src/Provider';

import App from './containers/App';

import { configureStore } from './store/configureStore';

const store = configureStore();
const rootDOMNode = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDOMNode
);
