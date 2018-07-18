import createStore from '../src/createStore';
import createLogger from 'redux-logger';
import counter from '../testProject/reducers';
import increment from '../testProject/actions';

describe('createStore', () => {
  let store;
  let reducerSpy;
  let listenerSpy;
  let enhancerSpy;

  const loggerTest = createLogger();

  const initialStateTest = {
    staticValue: 1,
    count: 1,
  };

  const incrementedStateTest = {
    staticValue: 1,
    count: 2,
  };

  const actionTest = { type: 'actionTest' };

  const enhancerTest = (...middlewares) => (createStore) => (reducer, initialState) => {
    const store = createStore(reducer, initialState);

    let dispatch = store.dispatch;

    middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)));

    enhancerSpy();

    return {
      ...store,
      dispatch,
    };
  };

  beforeEach(() => {
    reducerSpy = sinon.spy();
    listenerSpy = sinon.spy();
    enhancerSpy = sinon.spy();

    store = createStore(counter);
  });

  it('should be function', () => {
    expect(createStore).to.be.instanceof(Function);
  });

  it('should returns object within dispatch, getState subscribe and unsubscribe methods after calling with reducer param', () => {
    expect(store).to.be.instanceof(Object);
    expect(store.dispatch).to.be.instanceof(Function);
    expect(store.getState).to.be.instanceof(Function);
    expect(store.subscribe).to.be.instanceof(Function);
    expect(store.unsubscribe).to.be.instanceof(Function);
  });

  it('should returns object within dispatch, getState, subscribe and unsubscribe methods after calling with reducer and initState params', () => {
    store = createStore(counter, initialStateTest);
    expect(store).to.be.instanceof(Object);
    expect(store.dispatch).to.be.instanceof(Function);
    expect(store.getState).to.be.instanceof(Function);
    expect(store.subscribe).to.be.instanceof(Function);
    expect(store.unsubscribe).to.be.instanceof(Function);
  });

  it('should returns object within dispatch, getState, subscribe and unsubscribe methods after calling with reducer, initState and any other params', () => {
    store = createStore(counter, initialStateTest, 'test', 'test');
    expect(store).to.be.instanceof(Object);
    expect(store.dispatch).to.be.instanceof(Function);
    expect(store.getState).to.be.instanceof(Function);
    expect(store.subscribe).to.be.instanceof(Function);
    expect(store.unsubscribe).to.be.instanceof(Function);
  });

  it('should returns object within dispatch, getState, subscribe and unsubscribe methods after calling with reducer, initState and enhancerTest with middleware', () => {
    store = createStore(counter, initialStateTest, enhancerTest(loggerTest));
    expect(store).to.be.instanceof(Object);
    expect(store.dispatch).to.be.instanceof(Function);
    expect(store.getState).to.be.instanceof(Function);
    expect(store.subscribe).to.be.instanceof(Function);
    expect(store.unsubscribe).to.be.instanceof(Function);
  });

  it('should calls enhancer when its third param', () => {
    store = createStore(counter, initialStateTest, enhancerTest(loggerTest));
    expect(enhancerSpy.calledOnce).to.equal(true);
  });

  it('should calls enhancer when its second param', () => {
    store = createStore(counter, enhancerTest(loggerTest));
    expect(enhancerSpy.calledOnce).to.equal(true);
  });

  it('getState should returns correctly init state value', () => {
    store = createStore((state, action) => state, initialStateTest);
    const state = store.getState();

    expect(state).to.deep.equal(initialStateTest);
  });

  it('getState should returns correctly reducer init state value', () => {
    const state = store.getState();
    expect(state).to.deep.equal(initialStateTest);
  });

  it('subscribe should correct pushes function in listeners', () => {
    store.subscribe(listenerSpy);
    store.dispatch({});

    expect(listenerSpy.calledOnce).to.equal(true);
  });

  it('unsubscribe should correct remove listener', () => {
    store.subscribe(listenerSpy);
    store.dispatch({});
    store.unsubscribe(listenerSpy);
    store.dispatch({});

    expect(listenerSpy.calledOnce).to.equal(true);
  });

  it('dispatch should be called one time when createStore was called', () => {
    store = createStore(reducerSpy);
    expect(reducerSpy.calledOnce).to.equal(true);
  });

  it('dispatch should calls reducer with correctly action ', () => {
    store = createStore(reducerSpy);
    store.dispatch(actionTest);

    expect(reducerSpy.calledWithExactly(store.getState(), actionTest)).to.equal(true);
  });

  it('dispatch should correctly calls reducer after dispatching action', () => {
    store.dispatch(increment());
    expect(store.getState()).to.deep.equal(incrementedStateTest);
  });

  it('dispatch should calls listeners after calling reducer', () => {
    store = createStore(reducerSpy);
    store.subscribe(listenerSpy);
    store.dispatch({});

    expect(listenerSpy.calledAfter(reducerSpy)).to.equal(true);
  });
});
