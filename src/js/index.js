import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Provider,
} from 'react-redux';

import CoffeeMachine from './components/CoffeeMachine';

import buildStore from './store/index';
import {
  getGoods,
} from './Goods/actions/goods';

const store = buildStore();
store.dispatch(getGoods());

const rootDOMNode = document.getElementById('app');

render(
  <Provider store={store}>
    <CoffeeMachine />
  </Provider>,
  rootDOMNode
);
