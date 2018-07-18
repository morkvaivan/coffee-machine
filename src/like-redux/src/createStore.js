const createStore = (reducer, initialState, enhancer) => {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, initialState);
  }

  if (typeof enhancer === 'undefined' && typeof initialState === 'function') {
    const enhancer = initialState;
    return enhancer(createStore)(reducer, undefined);
  }

  let state = initialState;

  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const unsubscribe = (listener) => {
    listeners = listeners.filter((l) => l !== listener);
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe,
  };
};

export default createStore;
