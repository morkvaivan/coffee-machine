import combineReducers from '../src/combineReducers';

describe('combineReducers', () => {
  let state;
  let rootReducer;

  let firstReducerSpy;
  let secondReducerSpy;
  let reducersTestSpies;

  const reducersTest = {
    firstReducer: (state, action) => state,
    secondReducer: (state, action) => state,
  };

  const actionTest = {};

  const oldStateTest = {};

  const stateTest = {
    firstReducer: undefined,
    secondReducer: undefined,
  };

  beforeEach(() => {
    firstReducerSpy = sinon.spy();
    secondReducerSpy = sinon.spy();

    reducersTestSpies = {
      firstReducerSpy,
      secondReducerSpy,
    };

    rootReducer = combineReducers(reducersTest);
    state = combineReducers(reducersTest)(undefined, actionTest);
  });

  it('should be function', () => {
    expect(combineReducers).to.be.instanceof(Function);
  });

  it('should return rootReducer function', () => {
    expect(rootReducer).to.be.instanceof(Function);
  });

  it('rootReducer should return state object when reducers param is object within reducers', () => {
    expect(state).to.be.instanceof(Object);
  });

  it('rootReducer should return state object when action param is object', () => {
    expect(state).to.be.instanceof(Object);
  });

  it('rootReducer should return state object when oldState param is undefined', () => {
    expect(state).to.be.instanceof(Object);
  });

  it('rootReducer should return state object when oldState param is state - object', () => {
    state = combineReducers(reducersTest)(oldStateTest, actionTest);
    expect(state).to.be.instanceof(Object);
  });

  it('rootReducer should return state object equal to combined reducers keys', () => {
    state = combineReducers(reducersTest)(oldStateTest, actionTest);
    expect(state).to.deep.equal(stateTest);
  });

  it('rootReducer should throw error if reducers param is not object', () => {
    const incorrectReducers = 'not object';
    const incorrectReducersType = typeof incorrectReducers;
    const errText = `reducers type is ${incorrectReducersType}. Its should be an object type`;
    const callCombineReducers = () => { combineReducers(incorrectReducers)(oldStateTest, actionTest); };

    expect(callCombineReducers).to.throw(errText);
  });

  it('rootReducer should throw error if action param is not object', () => {
    const incorrectAction = 'not object';
    const incorrectActionType = typeof incorrectAction;
    const errText = `action type is ${incorrectActionType}. Its should be an object type`;
    const callCombineReducers = () => { combineReducers(reducersTest)(oldStateTest, incorrectAction); };

    expect(callCombineReducers).to.throw(errText);
  });

  it('rootReducer should calls each reducer one time for creating new state', () => {
    state = combineReducers(reducersTestSpies)(undefined, actionTest);

    expect(firstReducerSpy.calledOnce).to.equal(true);
    expect(secondReducerSpy.calledOnce).to.equal(true);
  });

  it('rootReducer should calls each reducer with reducer`s oldState and action', () => {
    state = combineReducers(reducersTestSpies)(oldStateTest, actionTest);

    expect(firstReducerSpy.calledWithExactly(oldStateTest[firstReducerSpy], actionTest)).to.equal(true);
    expect(secondReducerSpy.calledWithExactly(oldStateTest[secondReducerSpy], actionTest)).to.equal(true);
  });
});
