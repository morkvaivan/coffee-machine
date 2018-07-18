import {
  selectGood,
} from '../Goods/actions/goods';

import {
  applyTransaction,
} from '../Bank/actions/bank.js';

import {
  isEnoughMoney,
} from '../Bank/reducers/bank';

export const selectCoffee = (good) => (dispatch, getState) => {
  const price = good.price;

  if (!isEnoughMoney(getState(), price)) return;

  dispatch(selectGood(good));
  dispatch(applyTransaction(price));
};
