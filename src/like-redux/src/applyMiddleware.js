const applyMiddleware = (...middlewares) => (createStore) => (reducer, initialState) => {
  const store = createStore(reducer, initialState);

  let dispatch = store.dispatch;

  middlewares.reverse();
  middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)));

  return {
    ...store,
    dispatch,
  };
};

export default applyMiddleware;
