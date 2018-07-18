import reducer from '../../src/js/Bank/reducers/bank';

describe('bank reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      total: 0,
      cashChange: 1,
      coins: {
        ['25']: {
          maxCount: 100,
          count: 25,
        },
      },
    };
  });

  it('should return default state', () => {
    const newState = reducer(initialState, { type: 'INCORRECT' });

    expect(newState).to.eql(initialState);
  });

  it('should apply transaction when APPLY_TRANSACTION action was fired', () => {
    const priceTest = 2;

    const state = {
      ...initialState,
      total: 4,
      cashChange: 0,
    };

    const expectedState = {
      cashChange: 2,
        coins: {
          ['25']: {
            maxCount: 100,
            count: 17,
          },
        },
      total: 0,
    };

    const newState = reducer(state, { type: 'APPLY_TRANSACTION', payload: priceTest });

    expect(newState).to.eql(expectedState);
  });

  it('should remove cash change when REMOVE_CASH_CHANGE action was fired', () => {
    const expectedState = {
      ...initialState,
      cashChange: 0,
    };
    const newState = reducer(initialState, { type: 'REMOVE_CASH_CHANGE', payload: {} });

    expect(newState).to.eql(expectedState);
  });

  it('should enter total when ENTER_TOTAL action was fired', () => {
    const testValue = 50;
    const expectedState = {
      ...initialState,
      total: 0.5,
    };

    const newState = reducer(initialState, { type: 'ENTER_TOTAL', payload: testValue });

    expect(newState).to.eql(expectedState);
  });
});