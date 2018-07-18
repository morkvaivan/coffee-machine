import applyMiddleware from '../src/applyMiddleware';
import counter from '../testProject/reducers';

describe('applyMiddleware', () => {
  let createStoreSpy;
  let dispatchWrapperSpy;
  let secondDispatchWrapperSpy;

  const middlewareTest = (store) => (next) => (action) => {
    dispatchWrapperSpy();
    return next(action);
  };

  const secondMiddlewareTest = (store) => (next) => (action) => {
    secondDispatchWrapperSpy();
    return next(action);
  };

  const createStoreTest = (reducer, initialState) => {
    createStoreSpy();

    let state = initialState;

    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action);
    };

    dispatch({});

    return {
      getState,
      dispatch,
    };
  };

  beforeEach(() => {
    createStoreSpy = sinon.spy();
    dispatchWrapperSpy = sinon.spy();
    secondDispatchWrapperSpy = sinon.spy();

    const store = applyMiddleware(middlewareTest, secondMiddlewareTest)(createStoreTest)(counter);
    store.dispatch({});
  });

  it('should be function', () => {
    expect(applyMiddleware).to.be.instanceof(Function);
  });

  it('should calls createStore for creating store', () => {
    expect(createStoreSpy.calledOnce).to.equal(true);
  });

  it('should wraps store`s dispatch method by middleware', () => {
    expect(dispatchWrapperSpy.calledOnce).to.equal(true);
  });

  it('should wraps store`s dispatch method in middleware chain from left to right middleware params', () => {
    expect(secondDispatchWrapperSpy.calledAfter(dispatchWrapperSpy)).to.equal(true);
  });
});

