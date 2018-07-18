import {
  buildStore,
} from '../../src/js/store/mockStore';

import {
  selectCoffee,
} from '../../src/js/actions/coffeeMachine';

import * as bankConstants from '../../src/js/Bank/constants/bank';
import * as goodsConstants from '../../src/js/Goods/constants/goods';

describe('coffee machine actions', () => {

  const testCoffee = {
    name: 'Americano',
    price: 1,
  };

  const testTransaction = {
    cashChange: 1,
    coins: {
      ['25']: {
        maxCount: 100,
        count: 21,
      },
      ['50']: {
        maxCount: 100,
        count: 25,
      },
      ['75']: {
        maxCount: 100,
        count: 25
      },
    },
  };

  const initialState = {
    bank: {
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
          count: 25
        },
      },
    },
    goods: {
      goods: [],
      selectedGood: null,
    },
  };

  it('should have selectCoffee action', () => {
    expect(selectCoffee).to.be.defined;
  });

  it(`should don't create actions when selectCoffee was fired with not enough money`, () => {
    const expectedActions = [];

    const store = buildStore(initialState);
    store.dispatch(selectCoffee(testCoffee));

    const actions = store.getActions();

    expect(actions).to.be.eql(expectedActions);
  });

  it(`should create ${goodsConstants.SELECT_GOOD}, ${bankConstants.APPLY_TRANSACTION}, actions when selectCoffee was fired`, () => {

    const expectedActions = [
      {
        type: `${goodsConstants.SELECT_GOOD}`,
        payload: testCoffee,
      },
      {
        type: `${bankConstants.APPLY_TRANSACTION}`,
        payload: testCoffee.price,
      },
    ];

    const state = {
      ...initialState,
      bank: {
        ...initialState.bank,
        total: 2,
      },
    };

    const store = buildStore(state);

    store.dispatch(selectCoffee(testCoffee));

    const actions = store.getActions();
 
    expect(actions).to.be.eql(expectedActions);
  });
});