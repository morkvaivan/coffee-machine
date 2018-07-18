import reducer from '../../src/js/Goods/reducers/goods';

describe('goods reducer', () => {
  let initialState;

  const goodsTest = [
    {
      name: 'Espresso',
      price: 1.5,
    },
    {
      name: 'Americano',
      price: 1,
    },
    {
      name: 'Cappuccino',
      price: 3.5,
    },
  ];

  beforeEach(() => {
    initialState = {
      list: [],
      selectedGood: null,
    };
  });

  it('should return default state', () => {
    const newState = reducer(initialState, { type: 'INCORRECT' });

    expect(newState).to.eql(initialState);
  });

  it('should select good when SELECT_GOOD action was fired', () => {
    const goodTest =  {
      name: 'Espresso',
      price: 1.5,
    };
    const expectedState = {
      ...initialState,
      selectedGood: goodTest,
    };
    const newState = reducer(initialState, { type: 'SELECT_GOOD', payload: goodTest });

    expect(newState).to.eql(expectedState);
  });

  it('should deselect good when DESELECT_GOOD action was fired', () => {
    const state = {
      ...initialState,
      selectedGood: {
        name: 'Espresso',
        price: 1.5,
      },
    };
    const expectedState = {
      ...initialState,
      selectedGood: null,
    };
    const newState = reducer(state, { type: 'DESELECT_GOOD', payload: {} });

    expect(newState).to.eql(expectedState);
  });

  it('should set list when SET_GOODS_FULFILLED action was fired', () => {
    const expectedState = {
      ...initialState,
      list: goodsTest,
    };

    const newState = reducer(initialState, { type: 'SET_GOODS_FULFILLED', payload: goodsTest });

    expect(newState).to.eql(expectedState);
  });
});