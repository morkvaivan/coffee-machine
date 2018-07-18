import fetch from 'isomorphic-fetch';

import {
  createAction,
} from 'redux-actions';

import {
  SELECT_GOOD,
  DESELECT_GOOD,
  SET_GOODS,
  goods,
} from '../constants/goods.js';

const getGoodsOnline = createAction(SET_GOODS, () => fetch('http://example.com/goods').then((res) => res.json));
const getGoodsDefault = createAction(SET_GOODS, () => Promise.resolve(goods));

export const getGoods = () => (dispatch, getState) => {
  if (getState().connection.offline) {
    return dispatch(getGoodsDefault());
  }

  return dispatch(getGoodsOnline());
};

export const selectGood = createAction(SELECT_GOOD);
export const deselectGood = createAction(DESELECT_GOOD);
