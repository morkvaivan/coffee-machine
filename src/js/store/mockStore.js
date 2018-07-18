import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [thunk, promiseMiddleware()];

export const buildStore = configureStore(middlewares);
