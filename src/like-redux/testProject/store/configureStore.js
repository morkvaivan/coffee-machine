import createStore from '../../src/createStore';
import applyMiddleware from '../../src/applyMiddleware';
import reducer from '../reducers/index';

import createLogger from 'redux-logger';

export const configureStore = () => createStore(reducer, applyMiddleware(createLogger()));
