import reducer from '../../src/js/Connection/reducers/connection';

describe('connection reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      offline: true,
    };
  });

  it('should return default state', () => {
    const newState = reducer(initialState, { type: 'INCORRECT' });

    expect(newState).to.eql(initialState);
  });

  it('should trigger connecting when TRIGGER_CONNECTION action was fired', () => {
    const expectedState = {
      offline: false,
    };
    const newState = reducer(initialState, { type: 'TRIGGER_CONNECTION', payload: {} });

    expect(newState).to.eql(expectedState);
  });
});