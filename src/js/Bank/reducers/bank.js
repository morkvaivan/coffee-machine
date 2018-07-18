import {
  handleActions,
} from 'redux-actions';

import {
  REMOVE_CASH_CHANGE,
  ENTER_TOTAL,
  APPLY_TRANSACTION,
  RATE,
} from '../constants/bank.js';

export const defaultState = {
  total: 0,
  cashChange: 0,
  coins: {
    ['25']: {
      maxCount: 100,
      count: 25,
    },
    ['50']: {
      maxCount: 100,
      count: 25,
    },
    ['75']: {
      maxCount: 100,
      count: 25,
    },
  },
};

export default handleActions({
  [REMOVE_CASH_CHANGE]: (state, action) => ({
    ...state, cashChange: 0
  }),
  
  [ENTER_TOTAL]: (state, { payload }) => ({
    ...state, total: state.total + (payload / RATE)
  }),

  [APPLY_TRANSACTION]: (state, { payload }) => ({
    ...state,
    ...calculateCashChangeAndCoins(state, payload),
    total: 0,
  }),

}, defaultState);

const calculateCashChangeAndCoins = (state, price) => {
  const {
    coins,
    total,
  } = state;

  const expectedCashChange = total - price;

  let cashChange = 0;

  let newCoins = Object.assign({}, coins);

  Object.keys(newCoins).forEach((name) => {
    if (cashChange >= expectedCashChange) return;

    const oneCoin = Number(name) / RATE;
    const coin = Object.assign({}, newCoins[name]);

    while (coin.count !== 0) {
      cashChange += oneCoin;
      --coin.count;

      if (cashChange >= expectedCashChange) break;
    }

    newCoins[name] = coin;
  });

  return {
    coins: newCoins,
    cashChange,
  }
};

export const isEnoughMoney = (state, price) => {
  const {
    total,
  } = state.bank || state;

  let isEnoughMoney = false;

  const expectedCashChange = total - price;

  if (expectedCashChange >= 0) {
    isEnoughMoney = true;
  }

  return isEnoughMoney;
};
