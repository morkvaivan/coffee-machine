import {
  combineReducers,
} from 'redux';

import bank from '../Bank/reducers/bank';
import goods from '../Goods/reducers/goods';
import connection from '../Connection/reducers/connection';

export default combineReducers({
  bank,
  goods,
  connection,
});
