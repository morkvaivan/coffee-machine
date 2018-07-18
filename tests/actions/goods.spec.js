import {
  buildStore,
} from '../../src/js/store/mockStore';
import * as actions from '../../src/js/Goods/actions/goods';
import * as actionTypes from '../../src/js/Goods/constants/goods';

describe('goods actions', () => {
  const testValue = {
    name: 'Americano',
    price: 1,
  };

  it(`selectGood should return value of correct type and ${actionTypes.SELECT_GOOD} action type`, () => {
    const expectedActionType = actionTypes.SELECT_GOOD;
    const returnedValue = actions.selectGood(testValue);
    const actualActionType = returnedValue.type;
    const actualValue = returnedValue.payload;
    expect(expectedActionType).to.be.equal(actualActionType);
    expect(actualValue).to.be.a('object');
  });

  it(`deselectGood should return ${actionTypes.DESELECT_GOOD} action type`, () => {
    const expectedActionType = actionTypes.DESELECT_GOOD;
    const returnedValue = actions.deselectGood();
    const actualActionType = returnedValue.type;
    expect(expectedActionType).to.be.equal(actualActionType);
  });

  it(`should create ${actionTypes.SET_GOODS}_FULFILLED action when machine is offline and getGoods was successful`, () => {
    const expectedActions = [
      {
        type: `${actionTypes.SET_GOODS}_PENDING`,
      },
      {
        type: `${actionTypes.SET_GOODS}_FULFILLED`,
        payload: actionTypes.goods,
      },
    ];

    const state = {
      connection: {
        offline: true,
      },
    };

    const store = buildStore(state);

    store.dispatch(actions.getGoods()).then(() => {
      expect(store.getActions()).to.be.eql(expectedActions);
    });
  });
});
