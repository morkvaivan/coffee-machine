import combineReducers from '../../src/combineReducers';
import counter from './counter';
import staticValue from './staticValue';

export default combineReducers({
  count: counter,
  staticValue,
});
