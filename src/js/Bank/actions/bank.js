import {
  createAction,
} from 'redux-actions';

import {
  REMOVE_CASH_CHANGE,
  ENTER_TOTAL,
  APPLY_TRANSACTION,
} from '../constants/bank.js';

export const removeCashChange = createAction(REMOVE_CASH_CHANGE);
export const enterTotal = createAction(ENTER_TOTAL);
export const applyTransaction = createAction(APPLY_TRANSACTION);
