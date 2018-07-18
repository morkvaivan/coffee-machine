import {
  handleActions,
} from 'redux-actions';

import {
  SELECT_GOOD,
  DESELECT_GOOD,
  SET_GOODS
} from '../constants/goods.js';

export const defaultState = {
  list: [],
  selectedGood: null,
};

export default handleActions({
  [SELECT_GOOD]: (state, { payload }) => ({
    ...state,
    selectedGood: payload,
  }),

  [DESELECT_GOOD]: (state, action ) => ({
    ...state,
    selectedGood: null,
  }),

  [`${SET_GOODS}_FULFILLED`]: (state, { payload }) => ({
    ...state,
    list: payload,
  }),
  
}, defaultState);
